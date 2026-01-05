"use client";

import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  timestamp: string;
}

export default function TestMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  // Poll for messages every 2 seconds
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/test-messages");
        const data = await res.json();
        setMessages(data.messages || []);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      await fetch("/api/test-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newMessage }),
      });
      setNewMessage("");
      // Immediately fetch to show new message
      const res = await fetch("/api/test-messages");
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test Message Inbox</h1>
      <p className="text-muted mb-6">
        Messages are stored in memory and will reset when the server restarts.
        This page polls every 2 seconds.
      </p>

      {/* Send form */}
      <form onSubmit={handleSend} className="mb-8 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-border rounded bg-surface text-foreground"
        />
        <button
          type="submit"
          disabled={sending || !newMessage.trim()}
          className="px-4 py-2 bg-accent text-white rounded disabled:opacity-50"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Message list */}
      <div className="border border-border rounded bg-surface">
        {messages.length === 0 ? (
          <p className="p-4 text-muted">No messages yet. Send one from your phone!</p>
        ) : (
          <ul className="divide-y divide-border">
            {messages.map((msg) => (
              <li key={msg.id} className="p-4">
                <p className="text-foreground">{msg.text}</p>
                <p className="text-xs text-muted mt-1">
                  {new Date(msg.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Instructions for mobile testing */}
      <div className="mt-8 p-4 bg-surface border border-border rounded text-sm">
        <h2 className="font-semibold mb-2">Mobile Testing Instructions</h2>
        <ol className="list-decimal list-inside space-y-1 text-muted">
          <li>Find your Mac&apos;s IP address: run <code className="bg-background px-1 rounded">ipconfig getifaddr en0</code> in Terminal</li>
          <li>Make sure your phone is on the same WiFi network</li>
          <li>On your phone browser, go to <code className="bg-background px-1 rounded">http://YOUR_MAC_IP:3000/test-messages</code></li>
          <li>Send a message from your phone - it will appear here!</li>
        </ol>
      </div>
    </main>
  );
}

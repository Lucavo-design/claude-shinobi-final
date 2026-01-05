import { NextRequest, NextResponse } from "next/server";

// In-memory message store (resets on server restart)
interface Message {
  id: number;
  text: string;
  timestamp: string;
}

// Use globalThis to persist across hot reloads in dev mode
const globalStore = globalThis as typeof globalThis & {
  _testMessages?: Message[];
  _testMessageNextId?: number;
};

if (!globalStore._testMessages) {
  globalStore._testMessages = [];
}
if (!globalStore._testMessageNextId) {
  globalStore._testMessageNextId = 1;
}

const messages = globalStore._testMessages;
const getNextId = () => globalStore._testMessageNextId!++;

// GET - retrieve all messages
export async function GET() {
  return NextResponse.json({ messages });
}

// POST - add a new message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text' field" },
        { status: 400 }
      );
    }

    const message: Message = {
      id: getNextId(),
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    messages.push(message);

    return NextResponse.json({ success: true, message });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

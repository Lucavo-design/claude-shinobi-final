import { NextRequest, NextResponse } from "next/server";

// In-memory message store (resets on server restart)
interface Message {
  id: number;
  text: string;
  timestamp: string;
}

const messages: Message[] = [];
let nextId = 1;

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
      id: nextId++,
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

"use client";

import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to avoid hydration issues with the chat interface
const ChatInterface = dynamic(() => import('./ChatInterface'), {
  ssr: false,
});

export default function ChatInterfaceWrapper() {
  return <ChatInterface />;
}

"use client";

import { useState, useRef, useEffect } from "react";

// Define types for messages
type MessageRole = "user" | "assistant" | "system";

interface Message {
  role: MessageRole;
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Array<Message>>([
    { role: "assistant", content: "Welcome to ForgeAI. How can I assist with your startup today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Set a fixed height for the chat container and enable scrolling
  const chatContainerStyle = {
    height: "350px",
    overflowY: "auto" as const,
    display: "flex",
    flexDirection: "column" as const,
  };

  // This function is no longer used since we're using the simplified API
  // Keeping the type definition for future reference

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Make the API call to our simplified backend
      const response = await fetch('/api/chat-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error response from our API
        const errorMessage = data.details || data.error || 'Network response was not ok';
        console.error('API Error:', errorMessage);
        setMessages((prev) => [...prev, {
          role: "assistant" as MessageRole,
          content: `Sorry, I encountered an error: ${errorMessage}. Please check that your Google API key is correctly configured in Vercel.`
        }]);
      } else if (data.fallback) {
        // Handle fallback response (when API key is missing or invalid)
        console.log('Fallback mode activated, debug info:', data.debug);
        let content = data.message;

        // Add debugging information if available
        if (data.debug) {
          content += '\n\n---\n**Debug Info:**\n';
          if (data.debug.apiKeyExists) {
            content += `- API key exists (${data.debug.apiKeyLength} characters) but initialization failed\n`;
          } else {
            content += '- API key is missing or empty\n';
          }
          content += `- Environment variables: ${data.debug.envVars}\n`;
        }

        setMessages((prev) => [...prev, { role: 'assistant' as MessageRole, content }]);
      } else if (data.type === 'processing') {
        // Handle processing response (for function calls)
        setMessages((prev) => [...prev, { role: 'assistant' as MessageRole, content: data.message }]);
      } else {
        // Handle regular text response
        setMessages((prev) => [...prev, { role: 'assistant' as MessageRole, content: data.message }]);

        // If the response includes updated history, we could use it here
        // This is optional as we're already updating the local state
        // if (data.history) {
        //   const newMessages = data.history.map(item => ({
        //     role: item.role === 'user' ? 'user' : 'assistant',
        //     content: item.parts[0].text
        //   }));
        //   setMessages(newMessages);
        // }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, {
        role: "assistant" as MessageRole,
        content: "Sorry, I encountered an error processing your request. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black/30 rounded-xl backdrop-blur-lg border border-purple-400/20 overflow-hidden">
      {/* Chat header */}
      <div className="p-4 border-b border-purple-400/20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <h3 className="text-sm font-semibold">ForgeAI Neural Interface</h3>
        </div>
        <div className="text-xs text-purple-300">Quantum-Enhanced</div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 space-y-4 neon-grid" style={chatContainerStyle}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900/30 border border-purple-400/20"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-purple-900/30 border border-purple-400/20">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-purple-400/20">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask ForgeAI anything..."
            className="flex-1 bg-purple-900/20 text-white placeholder-purple-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="ml-2 p-3 bg-purple-600 rounded-lg hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || input.trim() === ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

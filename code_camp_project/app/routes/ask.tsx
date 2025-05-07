import type { Route } from "./+types/home";
import { useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Mock data for sidebar items
const sidebarItems = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Marketing campaign for Q3",
    image: "https://source.unsplash.com/random/300x300/?business"
  },
  {
    id: 2,
    title: "User Research",
    description: "Findings from Q2 surveys",
    image: "https://source.unsplash.com/random/300x300/?research"
  },
  {
    id: 3,
    title: "Product Roadmap",
    description: "2024 feature planning",
    image: "https://source.unsplash.com/random/300x300/?roadmap"
  },
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    // Handle sending the prompt to your API
    console.log("Sending prompt:", prompt);
    setPrompt("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen bg-[#9FB3DF]">
      {/* Sidebar */}
      <div className="w-64 bg-[#8993dc] border-r border-[#8993dc] p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-[#ffD1DC]">Projects</h2>
        
        <div className="space-y-3">
          {sidebarItems.map((item) => (
            <Card
              key={item.id}
              className="bg-[#9EC6F3] border-[#9EC6F3] hover:border-[#aa90ed] border-2 transition-colors"
            >
              <CardContent className="p-0 flex" onClick={() => { /* api request here */ }}>
                {/* Square Image - Left Side */}
                <div className="w-1/3 flex-shrink-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Text Content - Right Side */}
                <div className="p-3 flex-1">
                  <span className="font-bold text-[#ffD1DC] block mb-1">
                    {item.title}
                  </span>
                  <span className="text-sm text-[#FFF1D5]">
                    {item.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Chat Area - Would display messages here */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Messages would go here */}
          <div className="text-center text-gray-500 mt-10">
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            {/* Circular Profile Image */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#9EC6F3]">
              <img
                src="https://source.unsplash.com/random/300x300/?portrait"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name */}
            <h2 className="text-2xl font-bold text-[#9EC6F3]">AI Assistant</h2>
            
            {/* Description */}
            <p className="text-[#ffD1DC] bg-[#9EC6F3]/20 px-4 py-2 rounded-lg max-w-md">
              How can I help you today? Ask me anything about your projects or tasks.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#ffD1DC] opacity-60"
                />
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-[#BDDDE4] bg-[#BDDDE4]">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your prompt here..."
              className="flex-1"
            />
            <Button onClick={handleSend} className="bg-[#9EC6F3] hover:bg-[#8ab5e0]">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useEffect, useRef, KeyboardEvent } from "react";
import { useChat } from "@ai-sdk/react";

const Home = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  const { messages, isLoading, input, setInput, handleSubmit } = useChat();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(new Event("submit") as any);
      setInput("");
    } else if (e.key.length === 1) {
      setInput(input + e.key);
    } else if (e.key === "Backspace") {
      setInput(input.slice(0, -1));
    }
  };

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.focus();
    }
    const currentScreenRef = screenRef.current;
    if (currentScreenRef) {
      currentScreenRef.addEventListener("keydown", handleKeyDown as any);
    }
    return () => {
      if (currentScreenRef) {
        currentScreenRef.removeEventListener("keydown", handleKeyDown as any);
      }
    };
  }, [input]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-screen h-screen cursor-default flex justify-center items-center bg-black">
      <div 
        ref={screenRef}
        tabIndex={0}
        className="relative w-full h-full p-6 bg-black text-[#2EBD2E] font-pixel text-2xl overflow-hidden rounded-lg shadow-[0_0_100px_rgba(0,255,0,0.4),inset_0_0_50px_rgba(0,255,0,0.2),0_0_10px_rgba(0,255,0,0.1)] outline-none"
      >
        <div className="h-full relative z-10 flex flex-col overflow-hidden">
          <div ref={messagesRef} className="h-full overflow-y-auto py-6 px-4 flex flex-col gap-2.5 scrollbar-hide">
            {messages.map((m, index) => (
              <p key={m.id} className="whitespace-pre-wrap relative text-xl leading-5 pb-2">
                {m.role === "user" ? "User: " : "Agent: "}
                {m.content}
                {isLoading && index === messages.length - 1 && m.role === "assistant" && <Caret />}
              </p>
            ))}
            <p className="whitespace-pre-wrap relative text-xl leading-5 pb-2">
              {`>`}
              {input}
              {!isLoading && <Caret />}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,0,0.1),rgba(0,0,0,1))] z-0"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_3px)] z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/30 to-transparent opacity-10 animate-scanline z-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent),linear-gradient(90deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:4px_4px] z-40 pointer-events-none animate-noise"></div>
      </div>
    </div>
  );
};

const Caret = () => {
  return <span className="inline-block bg-[#33ff00] w-2.5 h-6 align-text-bottom animate-blink"></span>;
};

export default Home;
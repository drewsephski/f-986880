"use client";

import { Mic } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from '@/lib/utils';

interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  onTranscript?: (transcript: string) => void;
  onFinalTranscript?: (transcript: string) => void;
  visualizerBars?: number;
  demoMode?: boolean;
  demoInterval?: number;
  className?: string;
}

export function AIVoiceInput({
  onStart,
  onStop,
  onTranscript,
  onFinalTranscript,
  visualizerBars = 48,
  demoMode = false,
  demoInterval = 3000,
  className
}: AIVoiceInputProps) {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isDemo, setIsDemo] = useState(demoMode);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        const recognition = recognitionRef.current;

        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
          let currentInterim = "";
          let currentFinal = "";

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const transcriptPart = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              currentFinal += transcriptPart;
            } else {
              currentInterim += transcriptPart;
            }
          }
          setTranscript(currentFinal || currentInterim);
          if (currentFinal) {
            onTranscript?.(currentFinal);
            onFinalTranscript?.(currentFinal);
          }
        };

        recognition.onend = () => {
          setSubmitted(false);
          setTranscript("");
        };

        recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setSubmitted(false);
          setTranscript("");
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [isClient, onTranscript, onFinalTranscript]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (submitted) {
      onStart?.();
      recognitionRef.current?.start();
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      onStop?.(time);
      recognitionRef.current?.stop();
      setTime(0);
      setTranscript(""); // Clear transcript when recording stops
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [submitted, onStart, onStop, time]);

  useEffect(() => {
    if (isDemo) {
      const demoTranscripts = [
        "Hello, this is a demo of the AI voice input.",
        "You can speak into the microphone and see your words transcribed here.",
        "This feature is great for quick notes and hands-free input.",
      ];
      let demoIndex = 0;
      let demoTimeout: NodeJS.Timeout;

      const startDemo = () => {
        setTranscript(demoTranscripts[demoIndex]);
        onTranscript?.(demoTranscripts[demoIndex]);
        onFinalTranscript?.(demoTranscripts[demoIndex]);
        demoIndex = (demoIndex + 1) % demoTranscripts.length;
        demoTimeout = setTimeout(startDemo, demoInterval);
      };

      if (submitted) {
        startDemo();
      } else {
        clearTimeout(demoTimeout);
        setTranscript("");
      }

      return () => {
        clearTimeout(demoTimeout);
      };
    }
  }, [isDemo, submitted, demoInterval, onTranscript, onFinalTranscript]);

  const toggleListening = () => {
    if (submitted) {
      recognitionRef.current?.stop();
      setSubmitted(false);
    } else {
      setTranscript("");
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (isClient) {
      const visualizer = document.getElementById("visualizer");
      if (!visualizer) return;

      const bars = Array.from({ length: visualizerBars }, (_, i) => {
        const bar = document.createElement("div");
        bar.className = "w-1 h-full bg-blue-500 rounded-full";
        bar.style.opacity = "0";
        bar.style.transform = "scaleY(0.1)";
        bar.style.transition = "all 0.1s ease-in-out";
        visualizer.appendChild(bar);
        return bar;
      });

      const animateBars = () => {
        if (submitted) {
          bars.forEach((bar) => {
            const scale = Math.random() * 0.9 + 0.1;
            const opacity = Math.random() * 0.5 + 0.5;
            bar.style.transform = `scaleY(${scale})`;
            bar.style.opacity = `${opacity}`;
          });
        } else {
          bars.forEach((bar) => {
            bar.style.transform = "scaleY(0.1)";
            bar.style.opacity = "0";
          });
        }
        requestAnimationFrame(animateBars);
      };

      animateBars();
    }
  }, [submitted, isClient, visualizerBars]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center transition-colors",
            submitted
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          )}
          type="button"
          onClick={toggleListening}
        >
          {submitted ? (
            <div
              className="w-6 h-6 rounded-sm animate-spin bg-blue-900 dark:bg-white cursor-pointer pointer-events-auto"
              style={{ animationDuration: "3s" }}
            />
          ) : (
            <Mic className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>

        <span
          className={cn(
            "font-mono text-sm transition-opacity duration-300",
            submitted
              ? "text-black/70 dark:text-white/70"
              : "text-black/30 dark:text-white/30"
          )}
        >
          {formatTime(time)}
        </span>

        <div className="h-4 w-64 flex items-center justify-center gap-0.5">
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-300",
                submitted
                  ? "bg-blue-500/50 dark:bg-blue-500/90 animate-pulse"
                  : "bg-blue-700/10 dark:bg-blue-500/50 h-1"
              )}
              style={
                submitted && isClient
                  ? {
                      height: `${20 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.05}s`,
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <p className="h-4 text-xs text-black/70 dark:text-white/70">
          {submitted ? (transcript ? transcript : "Listening...") : "Click to speak"}
        </p>
      </div>
    </div>
  );
}
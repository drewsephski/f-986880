import { AIVoiceInput } from "../components/ui/ai-voice-input"; // Corrected path
import { useState } from "react";

export function AIVoiceInputDemo() {
  const [recordings, setRecordings] = useState<{ duration: number; timestamp: Date }[]>([]);
  const [transcribedText, setTranscribedText] = useState<string>("");

  const handleStop = (duration: number) => {
    setRecordings(prev => [...prev.slice(-4), { duration, timestamp: new Date() }]);
  };

  const handleTranscript = (transcript: string) => {
    setTranscribedText(transcript);
  };

  return (
    <div className="space-y-8">
        <div className="space-y-4">
          <AIVoiceInput
            onStart={() => console.log('Recording started')}
            onStop={handleStop}
            onTranscript={handleTranscript}
          />
          {transcribedText && (
            <div className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
              <h3 className="font-semibold mb-2">Transcribed Text:</h3>
              <p className="text-gray-700 dark:text-gray-300">{transcribedText}</p>
            </div>
          )}
      </div>
    </div>
  );
}
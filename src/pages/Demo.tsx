import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIPipelineDemo from '@/components/AIPipelineDemo';
import { AIVoiceInputDemo } from '@/components/AIVoiceInputDemo';
import { Separator } from '@/components/ui/separator';

const Demo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="my-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-blue-500">AI Pipeline Demo</h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-10 max-w-3xl mx-auto">
            Experience the power of our AI pipeline, designed for seamless data processing and intelligent insights.
          </p>
          <AIPipelineDemo />
        </section>

        <Separator className="my-16 bg-gray-700" />

        <section className="mt-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 text-blue-500">AI Voice Input Demo</h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-10 max-w-3xl mx-auto">
            Interact with our AI using natural voice commands, showcasing advanced speech recognition capabilities.
          </p>
          <AIVoiceInputDemo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
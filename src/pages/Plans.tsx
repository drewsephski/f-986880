// src/pages/Plans.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

const Plans: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
        <title>HyperShift AI - Plans & Pricing</title>
      <Header />
      <main className="flex-grow">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Plans;

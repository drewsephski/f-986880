
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small teams exploring AI automation",
      features: [
        "No-code interface",
        "Basic workflow templates",
        "Community support",
        "Limited AI model access",
        "Up to 5 AI applications"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses needing robust AI capabilities",
      features: [
        "No-code & Code SDK access",
        "Advanced workflow automation",
        "Priority email support",
        "Expanded AI model access",
        "Up to 50 AI applications",
        "Custom deployment options",
        "Data integration connectors"
      ],
      buttonText: "Start 14-day Trial",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations requiring tailored, secure AI solutions",
      features: [
        "Unlimited AI applications",
        "Dedicated infrastructure",
        "On-premise deployment",
        "24/7 premium support",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security & compliance"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground">
            Flexible plans for every AI journey
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Choose the plan that best fits your needs, from individual creators to large enterprises
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-3xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground text-lg mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "w-full border-border text-foreground hover:bg-muted"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground text-lg md:text-xl">
          Have questions? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

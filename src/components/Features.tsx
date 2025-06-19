import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";
const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const features = [{
    title: "No-code & Code Flexibility",
    description: "Build applications using drag-and-drop components or switch to coding with seamless IDE integration.",
    expandedDescription: "HyperShift AI offers a user-friendly no-code interface alongside a robust code SDK, allowing both non-technical and technical users to create AI-powered solutions. Build applications using drag-and-drop components or switch to coding with seamless IDE integration.",
    icon: <Layers size={24} className="text-cosmic-accent" />
  }, {
    title: "Workflow Automation",
    description: "Automate back-office processes, marketing copy generation, personalized emails, report generation, and more.",
    expandedDescription: "Automate back-office processes, marketing copy generation, personalized emails, report generation, and more. Streamline repetitive tasks and free up your team to focus on strategic initiatives.",
    icon: <Grid3x3 size={24} className="text-cosmic-accent" />
  }, {
    title: "Data Integration",
    description: "Connect and leverage data from various sources (websites, documents, CSVs, databases).",
    expandedDescription: "Integrate with your existing data sources effortlessly. Connect and leverage data from various sources including websites, documents, CSVs, and databases to power your AI applications.",
    icon: <LayoutDashboard size={24} className="text-cosmic-accent" />
  }, {
    title: "Pre-built Templates & Marketplace",
    description: "Start with ready-made templates for common use cases or explore pre-built solutions in the marketplace.",
    expandedDescription: "Accelerate your development with a rich library of pre-built templates for common AI use cases. Explore and leverage solutions from our marketplace to quickly deploy powerful AI applications.",
    icon: <ListCheck size={24} className="text-cosmic-accent" />
  }, {
    title: "Custom Deployment",
    description: "Instantly export chatbots or generate API endpoints, and customize the look and feel of your applications.",
    expandedDescription: "Deploy your AI applications with flexibility. Instantly export chatbots for web or mobile, generate API endpoints for seamless integration, and customize the look and feel to match your brand.",
    icon: <Star size={24} className="text-cosmic-accent" />
  }, {
    title: "Integrations",
    description: "Automate actions across popular tools like Google Drive, Salesforce, Notion, Airtable, and more.",
    expandedDescription: "Extend the power of your AI applications by integrating with popular tools. Automate actions across Google Drive, Salesforce, Notion, Airtable, and many more to create comprehensive workflows.",
    icon: <BookOpen size={24} className="text-cosmic-accent" />
  }, {
    title: "AI Model Access",
    description: "Integrate with leading AI models such as OpenAI, Anthropic, HuggingFace, Google, LLAMA, AWS, and Mistral AI.",
    expandedDescription: "Gain access to a wide range of leading AI models. Integrate with OpenAI, Anthropic, HuggingFace, Google, LLAMA, AWS, Mistral AI, and more to leverage the best models for your specific needs.",
    icon: <BookOpen size={24} className="text-cosmic-accent" />
  }, {
    title: "Enterprise Solutions",
    description: "Build and deploy secure, high-ROI AI solutions tailored for organizations.",
    expandedDescription: "Designed for the demands of large organizations, HyperShift AI enables you to build and deploy secure, high-ROI AI solutions tailored to your specific enterprise needs, ensuring scalability and compliance.",
    icon: <BookOpen size={24} className="text-cosmic-accent" />
  }];
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  return <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Unlock the power of AI automation
          </h2>
          <p className="text-cosmic-muted text-lg">
            Build, deploy, and manage AI applications and workflows quickly and efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <Collapsible key={index} open={openFeature === index} onOpenChange={() => toggleFeature(index)} className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}>
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown className="bg-blue-300 rounded-full" />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>)}
        </div>
      </div>
    </section>;
};
export default Features;
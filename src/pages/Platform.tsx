import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Platform: React.FC = () => {
  const platformFeatures = [
    {
      value: "no-code-code",
      title: "No-code and Code Flexibility",
      description: "Build applications using drag-and-drop components or switch to coding with seamless IDE integration.",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-background border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-foreground">No-Code Interface</CardTitle>
              <CardDescription className="text-muted-foreground">Visually design and deploy AI applications with intuitive drag-and-drop tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Empower non-technical users to create powerful AI solutions without writing a single line of code. Our no-code interface simplifies complex AI workflows.</p>
            </CardContent>
          </Card>
          <Card className="bg-background border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-foreground">Code SDK & IDE Integration</CardTitle>
              <CardDescription className="text-muted-foreground">For developers, leverage a robust code SDK with seamless integration into your favorite IDEs.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Technical users can dive deep into customization, extend functionalities, and integrate with existing codebases using our comprehensive SDK.</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      value: "custom-deployment",
      title: "Custom Deployment",
      description: "Instantly export chatbots or generate API endpoints, and customize the look and feel of your applications.",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-background border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-foreground">Flexible Export Options</CardTitle>
              <CardDescription className="text-muted-foreground">Deploy your AI applications as standalone chatbots or integrate them via custom API endpoints.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">HyperShift AI provides versatile deployment options, allowing you to choose the best fit for your infrastructure and user access needs.</p>
            </CardContent>
          </Card>
          <Card className="bg-background border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-foreground">Branding & Customization</CardTitle>
              <CardDescription className="text-muted-foreground">Maintain your brand identity with extensive customization options for the look and feel of your deployed applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tailor the user experience to match your brand guidelines, ensuring a consistent and professional appearance for all your AI-powered solutions.</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      value: "ai-model-access",
      title: "AI Model Access",
      description: "Integrate with leading AI models such as OpenAI, Anthropic, HuggingFace, Google, LLAMA, AWS, and Mistral AI.",
      content: (
        <div className="grid md:grid-cols-1 gap-6">
          <Card className="bg-background border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-foreground">Broad Model Compatibility</CardTitle>
              <CardDescription className="text-muted-foreground">Access and integrate with a wide array of state-of-the-art AI models from various providers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">HyperShift AI supports leading models like OpenAI, Anthropic, HuggingFace, Google, LLAMA, AWS, and Mistral AI, giving you the flexibility to choose the best model for your specific task.</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="w-full py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
                The Power of <span className="text-primary">HyperShift AI Platform</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Explore the core capabilities that make HyperShift AI the ultimate end-to-end AI automation platform for every user.
              </p>
            </div>

            <Tabs defaultValue="no-code-code" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 mb-8 bg-card border border-border rounded-lg p-2 h-auto md:h-12 items-center justify-center">
                {platformFeatures.map((feature) => (
                  <TabsTrigger key={feature.value} value={feature.value} className="text-base py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm data-[state=active]:font-medium transition-all duration-200 flex-grow">
                    {feature.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {platformFeatures.map((feature) => (
                <TabsContent key={feature.value} value={feature.value} className="p-6 bg-card rounded-lg border border-border shadow-lg">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground mb-4">{feature.title}</h2>
                  <p className="text-muted-foreground text-lg md:text-xl mb-6">{feature.description}</p>
                  {feature.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 px-6 md:px-12 bg-card">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">Ready to Build Your AI Future?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Dive into the HyperShift AI platform and start creating intelligent solutions today.
            </p>
            <div className="pt-6">
              <a href="/demo" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300 h-12">
                See a Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
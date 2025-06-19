import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Solutions: React.FC = () => {
  const solutionCategories = [
    {
      title: "Workflow Automation",
      description: "Automate back-office processes, marketing copy generation, personalized emails, report generation, and more.",
      details: [
        {
          question: "How does HyperShift AI automate workflows?",
          answer: "HyperShift AI allows you to design and deploy automated workflows for repetitive tasks, freeing up your team to focus on strategic initiatives. From generating marketing copy to sending personalized emails, our platform handles it all."
        },
        {
          question: "Can I integrate existing tools into my workflows?",
          answer: "Yes, HyperShift AI offers seamless integrations with popular tools like Google Drive, Salesforce, Notion, and Airtable, ensuring your automated workflows connect with your current ecosystem."
        }
      ]
    },
    {
      title: "Data Integration",
      description: "Connect and leverage data from various sources (websites, documents, CSVs, databases).",
      details: [
        {
          question: "What data sources can HyperShift AI connect to?",
          answer: "Our platform supports integration with a wide range of data sources, including websites, documents, CSVs, and various databases, enabling you to centralize and leverage all your critical information."
        },
        {
          question: "How does data integration enhance AI applications?",
          answer: "By integrating diverse data sources, HyperShift AI can provide more accurate insights, power more intelligent applications, and ensure your AI solutions are always working with the most current and comprehensive data."
        }
      ]
    },
    {
      title: "Pre-built Templates and Marketplace",
      description: "Start with ready-made templates for common use cases or explore pre-built solutions in the marketplace.",
      details: [
        {
          question: "How do templates speed up development?",
          answer: "HyperShift AI's pre-built templates provide a quick start for common use cases, allowing you to deploy AI solutions rapidly without starting from scratch. Customize them to fit your specific needs."
        },
        {
          question: "What kind of solutions are available in the marketplace?",
          answer: "The marketplace offers a variety of pre-built AI solutions developed by our community and partners, covering diverse industries and functionalities. Find ready-to-use applications or contribute your own."
        }
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Build and deploy secure, high-ROI AI solutions tailored for organizations.",
      details: [
        {
          question: "What makes HyperShift AI suitable for enterprises?",
          answer: "HyperShift AI is designed with enterprise-grade security, scalability, and compliance in mind. We provide robust tools and support to help organizations build and deploy high-ROI AI solutions tailored to their unique requirements."
        },
        {
          question: "Can HyperShift AI integrate with existing enterprise systems?",
          answer: "Absolutely. Our platform is built for seamless integration with your existing enterprise infrastructure, ensuring a smooth transition and maximizing the value of your current investments."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="w-full py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground">
                Empower Your Business with <span className="text-primary">HyperShift AI Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Discover how HyperShift AI's cutting-edge solutions can revolutionize your operations, drive innovation, and unlock new possibilities for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionCategories.map((category, index) => (
                <Card key={index} className="flex flex-col h-full rounded-xl border border-border bg-card shadow-lg hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-medium tracking-tighter text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Accordion type="single" collapsible className="w-full">
                      {category.details.map((detail, idx) => (
                        <AccordionItem value={`item-${index}-${idx}`} key={idx} className="border-b border-border">
                          <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary">
                            {detail.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {detail.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 px-6 md:px-12 bg-card">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Explore our comprehensive solutions and see how HyperShift AI can help you achieve your goals.
            </p>
            <div className="pt-6">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300 h-12">
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
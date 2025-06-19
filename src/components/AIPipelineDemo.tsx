import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DatabaseZap, BrainCircuit, Target, BarChartBig } from 'lucide-react';

interface PipelineStage {
  id: string;
  name: string;
  description: string;
  details: string;
  icon: React.ElementType;
}

const pipelineStages: PipelineStage[] = [
  {
    id: 'data-ingestion',
    name: 'Data Ingestion',
    description: 'Collecting and preparing raw data from various sources.',
    details: 'This stage involves gathering data from databases, APIs, files, and other systems. It includes data cleaning, transformation, and loading into a suitable format for further processing. Key technologies often include ETL tools, data lakes, and streaming platforms.',
    icon: DatabaseZap,
  },
  {
    id: 'model-training',
    name: 'Model Training',
    description: 'Training AI models using prepared datasets.',
    details: 'In this phase, machine learning models are trained on the ingested and preprocessed data. This involves selecting appropriate algorithms, hyperparameter tuning, and iterative training to optimize model performance. Frameworks like TensorFlow, PyTorch, and scikit-learn are commonly used.',
    icon: BrainCircuit,
  },
  {
    id: 'prediction',
    name: 'Prediction & Inference',
    description: 'Using the trained model to make predictions or decisions.',
    details: 'Once trained, the model is deployed to make predictions on new, unseen data. This can be done in real-time (online inference) or in batches (offline inference). Efficient deployment strategies and scalable infrastructure are crucial for this stage.',
    icon: Target,
  },
  {
    id: 'output-analysis',
    name: 'Output & Analysis',
    description: 'Presenting and analyzing the results of the AI pipeline.',
    details: 'The final stage involves presenting the model\'s outputs in a user-friendly format, often through dashboards or reports. It also includes continuous monitoring of model performance, feedback loops for retraining, and in-depth analysis of the results to derive actionable insights.',
    icon: BarChartBig,
  },
];

const AIPipelineDemo: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage | null>(null);

  return (
    <div className="container mx-auto py-6 px-6">
      <div className="relative flex flex-col items-center justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-4">
        {pipelineStages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            <Dialog onOpenChange={(open) => !open && setSelectedStage(null)}>
              <DialogTrigger asChild>
                <Card
                  className="w-full md:w-64 p-2 cursor-pointer border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-primary"
                  onClick={() => setSelectedStage(stage)}
                >
                  <CardHeader className="pb-4 flex flex-row items-center space-x-3">
                    <stage.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl font-bold text-foreground mb-0">{stage.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left text-base text-muted-foreground min-h-[80px] w-full">
                    <p>{stage.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              {selectedStage && selectedStage.id === stage.id && (
                <DialogContent className="sm:max-w-[500px] cosmic-glass p-4 text-foreground">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-3xl font-bold text-foreground">{selectedStage.name}</DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground mt-2">
                      {selectedStage.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 text-base leading-relaxed">
                    <p>{selectedStage.details}</p>
                  </div>
                  <DialogClose asChild>
                    <Button className="mt-4 w-full">Close</Button>
                  </DialogClose>
                </DialogContent>
              )}
            </Dialog>
            {index < pipelineStages.length - 1 && (
              <div className="hidden md:block">
                <ArrowRight className="h-10 w-10 text-primary-foreground" />
              </div>
            )}
            {index < pipelineStages.length - 1 && (
              <div className="block md:hidden">
                <ArrowRight className="h-10 w-10 text-primary-foreground rotate-90" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AIPipelineDemo;
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MultiStepFormProps {
  steps: {
    title: string;
    content: ReactNode;
  }[];
  onSubmit: (data: any) => void;
  formData: any;
  setFormData: (data: any) => void;
}

export function MultiStepForm({
  steps,
  onSubmit,
  formData,
  setFormData,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Title */}
      <h2 className="text-2xl font-bold mb-6">{steps[currentStep].title}</h2>

      {/* Step Content */}
      <div className="mb-8">{steps[currentStep].content}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {currentStep === steps.length - 1 ? (
          <Button onClick={handleSubmit} className="flex items-center">
            Submit Request
          </Button>
        ) : (
          <Button onClick={nextStep} className="flex items-center">
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

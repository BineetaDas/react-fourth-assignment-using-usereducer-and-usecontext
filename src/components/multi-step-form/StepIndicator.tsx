import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = ["Personal Info", "Address", "Review"];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;

        return (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                  isCompleted
                    ? "bg-[#7040A0] text-white"
                    : isActive
                      ? "border-2 border-[#7040A0] bg-[#f2eaf7] text-[#7040A0]"
                      : "border border-[#e5dce9] bg-white text-slate-400"
                }`}
              >
                {isCompleted ? <Check size={19} /> : stepNumber}
              </div>

              <span
                className={`whitespace-nowrap text-xs font-semibold sm:text-sm ${
                  isActive || isCompleted ? "text-[#42205F]" : "text-slate-400"
                }`}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`mx-2 mb-6 h-0.5 flex-1 sm:mx-4 ${
                  isCompleted ? "bg-[#7040A0]" : "bg-[#e5dce9]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;


import { CheckCircle2, RotateCcw } from "lucide-react";

import useFormWizard from "../../hooks/useFormWizard";

import StepIndicator from "../../components/multi-step-form/StepIndicator";
import PersonalInfoStep from "../../components/multi-step-form/PersonalInfoStep";
import AddressStep from "../../components/multi-step-form/AddressStep";
import ReviewStep from "../../components/multi-step-form/ReviewStep";

const MultiStepForm = () => {
  const {
    currentStep,
    isSubmitted,
    resetForm,
  } = useFormWizard();

  if (isSubmitted) {
    return (
      <main className="min-h-[70vh] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-xl rounded-3xl border border-[#eee7f2] bg-white px-6 py-14 text-center shadow-sm sm:px-10">
          <CheckCircle2
            size={60}
            className="mx-auto text-[#7040A0]"
          />

          <h1 className="mt-6 text-2xl font-extrabold text-[#42205F]">
            Form Submitted Successfully!
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Thank you for providing your information.
            Your details have been collected successfully.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42205F]"
          >
            <RotateCcw size={16} />
            Start Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF9B85]">
            Complete Your Details
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#42205F] sm:text-4xl">
            Multi-Step Form
            <span className="text-[#FF9B85]">.</span>
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Follow the steps below to complete your information.
          </p>
        </div>

        <div className="rounded-3xl border border-[#eee7f2] bg-white p-5 shadow-sm sm:p-9">
          <StepIndicator currentStep={currentStep} />

          {currentStep === 1 && <PersonalInfoStep />}
          {currentStep === 2 && <AddressStep />}
          {currentStep === 3 && <ReviewStep />}
        </div>
      </div>
    </main>
  );
};

export default MultiStepForm;

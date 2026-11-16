
import { ArrowRight } from "lucide-react";

import useFormWizard from "../../hooks/useFormWizard";

const PersonalInfoStep = () => {
  const { formData, updateField, nextStep } = useFormWizard();

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#e8dfed] bg-white px-4 py-3 text-sm text-[#42205F] outline-none transition placeholder:text-slate-400 focus:border-[#7040A0] focus:ring-2 focus:ring-[#7040A0]/10";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-extrabold text-[#42205F]">
        Personal Information
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Let's start with your basic details.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          First Name <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Last Name <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Email Address <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Phone Number <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="tel"
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter a valid 10 digit phone number"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            required
          />
        </label>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42205F]"
        >
          Next Step
          <ArrowRight size={17} />
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoStep;

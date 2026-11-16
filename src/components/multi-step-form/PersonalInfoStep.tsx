
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import useFormWizard from "../../hooks/useFormWizard";

const PersonalInfoStep = () => {
  const {
    formData,
    updateField,
    nextStep,
  } = useFormWizard();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    nextStep();
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#e8dfed] bg-white px-4 py-3 text-sm text-[#42205F] outline-none transition placeholder:text-slate-400 focus:border-[#7040A0] focus:ring-2 focus:ring-[#7040A0]/10";

  return (
    <div>
      <h2 className="text-xl font-extrabold text-[#42205F]">
        Personal Information
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Let's start with your basic details.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          First Name
          <input
            className={inputClass}
            type="text"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) =>
              updateField("firstName", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Last Name
          <input
            className={inputClass}
            type="text"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) =>
              updateField("lastName", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Email Address
          <input
            className={inputClass}
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Phone Number
          <input
            className={inputClass}
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-500">
          {error}
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42205F]"
        >
          Next Step
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoStep;

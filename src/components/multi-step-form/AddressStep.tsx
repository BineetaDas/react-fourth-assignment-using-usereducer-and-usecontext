
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import useFormWizard from "../../hooks/useFormWizard";

const AddressStep = () => {
  const {
    formData,
    updateField,
    nextStep,
    previousStep,
  } = useFormWizard();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (
      !formData.street.trim() ||
      !formData.city.trim() ||
      !formData.state.trim() ||
      !formData.postalCode.trim() ||
      !formData.country.trim()
    ) {
      setError("Please fill in all the address fields.");
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
        Address Details
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Where can we reach you?
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Street Address
          <input
            className={inputClass}
            type="text"
            placeholder="Enter street address"
            value={formData.street}
            onChange={(e) =>
              updateField("street", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          City
          <input
            className={inputClass}
            type="text"
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) =>
              updateField("city", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          State
          <input
            className={inputClass}
            type="text"
            placeholder="Enter state"
            value={formData.state}
            onChange={(e) =>
              updateField("state", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Postal Code
          <input
            className={inputClass}
            type="text"
            placeholder="Enter postal code"
            value={formData.postalCode}
            onChange={(e) =>
              updateField("postalCode", e.target.value)
            }
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Country
          <input
            className={inputClass}
            type="text"
            placeholder="Enter country"
            value={formData.country}
            onChange={(e) =>
              updateField("country", e.target.value)
            }
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-500">
          {error}
        </p>
      )}

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center gap-2 rounded-xl border border-[#e8dfed] bg-white px-5 py-3 text-sm font-bold text-[#7040A0] transition hover:bg-[#f8f3fb]"
        >
          <ArrowLeft size={17} />
          Previous
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42205F]"
        >
          Review Details
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default AddressStep;

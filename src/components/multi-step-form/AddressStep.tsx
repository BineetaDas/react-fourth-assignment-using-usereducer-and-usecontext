import { ArrowLeft, ArrowRight } from "lucide-react";

import useFormWizard from "../../hooks/useFormWizard";

const AddressStep = () => {
  const { formData, updateField, nextStep, previousStep } = useFormWizard();

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#e8dfed] bg-white px-4 py-3 text-sm text-[#42205F] outline-none transition placeholder:text-slate-400 focus:border-[#7040A0] focus:ring-2 focus:ring-[#7040A0]/10";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-extrabold text-[#42205F]">Address Details</h2>

      <p className="mt-1 text-sm text-slate-500">Where can we reach you?</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
          Street Address <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter street address"
            value={formData.street}
            onChange={(e) => updateField("street", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          City <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          State <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter state"
            value={formData.state}
            onChange={(e) => updateField("state", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Postal Code <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            maxLength={6}
            pattern="[0-9]{6}"
            title="Please enter a valid 6 digit postal code"
            placeholder="Enter postal code"
            value={formData.postalCode}
            onChange={(e) => updateField("postalCode", e.target.value)}
            required
          />
        </label>

        <label className="text-sm font-semibold text-slate-700">
          Country <span className="text-red-500">*</span>
          <input
            className={inputClass}
            type="text"
            placeholder="Enter country"
            value={formData.country}
            onChange={(e) => updateField("country", e.target.value)}
            required
          />
        </label>
      </div>

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
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42205F]"
        >
          Review Details
          <ArrowRight size={17} />
        </button>
      </div>
    </form>
  );
};

export default AddressStep;

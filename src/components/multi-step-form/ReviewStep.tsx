
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import useFormWizard from "../../hooks/useFormWizard";

const ReviewStep = () => {
  const {
    formData,
    previousStep,
    submitForm,
  } = useFormWizard();

  const handleSubmit = () => {
    console.log("Submitted Form Data:", formData);
    submitForm();
  };

  const detailClass =
    "rounded-xl bg-[#f8f5fa] p-4";

  return (
    <div>
      <h2 className="text-xl font-extrabold text-[#42205F]">
        Review Your Details
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Please check your information before submitting.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <section className="rounded-2xl border border-[#eee7f2] p-5">
          <h3 className="mb-4 font-bold text-[#7040A0]">
            Personal Information
          </h3>

          <div className="space-y-3 text-sm">
            <div className={detailClass}>
              <p className="text-xs text-slate-400">Full Name</p>
              <p className="mt-1 font-semibold text-[#42205F]">
                {formData.firstName} {formData.lastName}
              </p>
            </div>

            <div className={detailClass}>
              <p className="text-xs text-slate-400">Email</p>
              <p className="mt-1 break-all font-semibold text-[#42205F]">
                {formData.email}
              </p>
            </div>

            <div className={detailClass}>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="mt-1 font-semibold text-[#42205F]">
                {formData.phone}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#eee7f2] p-5">
          <h3 className="mb-4 font-bold text-[#7040A0]">
            Address Information
          </h3>

          <div className="space-y-3 text-sm">
            <div className={detailClass}>
              <p className="text-xs text-slate-400">Street</p>
              <p className="mt-1 font-semibold text-[#42205F]">
                {formData.street}
              </p>
            </div>

            <div className={detailClass}>
              <p className="text-xs text-slate-400">City & State</p>
              <p className="mt-1 font-semibold text-[#42205F]">
                {formData.city}, {formData.state}
              </p>
            </div>

            <div className={detailClass}>
              <p className="text-xs text-slate-400">Postal Code</p>
              <p className="mt-1 font-semibold text-[#42205F]">
                {formData.postalCode}
              </p>
            </div>

            <div className={detailClass}>
              <p className="text-xs text-slate-400">Country</p>
              <p className="mt-1 font-semibold text-[#42205F]">
                {formData.country}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8dfed] bg-white px-5 py-3 text-sm font-bold text-[#7040A0] transition hover:bg-[#f8f3fb]"
        >
          <ArrowLeft size={17} />
          Edit Details
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42205F]"
        >
          <CheckCircle2 size={17} />
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;

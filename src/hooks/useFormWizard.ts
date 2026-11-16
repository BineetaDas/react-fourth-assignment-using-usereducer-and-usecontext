
import { useContext } from "react";

import { FormContext } from "../context/form/FormContext";

const useFormWizard = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormWizard must be used inside FormProvider",
    );
  }

  return context;
};

export default useFormWizard;

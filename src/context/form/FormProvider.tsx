import { useReducer } from "react";
import type { ReactNode } from "react";

import { FormContext } from "./FormContext";

import { formInitialState, formReducer } from "../../reducer/form/form.reducer";

import type { FormData } from "../../types/interface/form.interface";

interface FormProviderProps {
  children: ReactNode;
}

const FormProvider = ({ children }: FormProviderProps) => {
  const [formState, dispatch] = useReducer(formReducer, formInitialState);

  const updateField = (field: keyof FormData, value: string) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field, value },
    });
  };

  const nextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const previousStep = () => {
    dispatch({ type: "PREVIOUS_STEP" });
  };

  const submitForm = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <FormContext.Provider
      value={{
        ...formState,
        updateField,
        nextStep,
        previousStep,
        submitForm,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

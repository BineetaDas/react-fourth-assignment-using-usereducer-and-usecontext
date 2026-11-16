
import type { FormState } from "../../types/interface/form.interface";
import type { FormAction } from "../../types/type/form.type";

export const formInitialState: FormState = {
  currentStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  isSubmitted: false,
};

export const formReducer = (
  state: FormState = formInitialState,
  action: FormAction,
): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep:
          state.currentStep < 3
            ? state.currentStep + 1
            : state.currentStep,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep:
          state.currentStep > 1
            ? state.currentStep - 1
            : state.currentStep,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return formInitialState;

    default:
      return state;
  }
};

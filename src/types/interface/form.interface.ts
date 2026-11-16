export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface FormState {
  currentStep: number;
  formData: FormData;
  isSubmitted: boolean;
}

export interface FormContextType extends FormState {
  updateField: (field: keyof FormData, value: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  submitForm: () => void;
  resetForm: () => void;
}

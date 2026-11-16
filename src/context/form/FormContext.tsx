import { createContext } from "react";

import type { FormContextType } from "../../types/interface/form.interface";

export const FormContext = createContext<FormContextType | undefined>(
  undefined,
);

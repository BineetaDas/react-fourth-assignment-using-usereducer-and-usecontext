
import axios from "axios";

import api from "../api";

import type { ProductResponse } from "../../types/interface/cart.interface";

export const getProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await api.get<ProductResponse>("/products");

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Unable to load products",
        { cause: error }
      );
    }

    throw error;
  }
};


import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { ProductContext } from "./ProductContext";

import { getProducts } from "../../api/api-functions/cart-function";

import type {
  ProductState,
} from "../../types/interface/product.interface";

const ProductInitialState: ProductState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  isLoading: true,
  isError: null,
};

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider = ({
  children,
}: ProductProviderProps) => {
  const [productState, setProductState] =
    useState<ProductState>(ProductInitialState);

  const fetchProducts = async () => {
    try {
      setProductState((prevState) => ({
        ...prevState,
        isLoading: true,
        isError: null,
      }));

      const response = await getProducts();

      console.log("Product API Response:", response);

      setProductState({
        products: response.products,
        total: response.total,
        skip: response.skip,
        limit: response.limit,
        isLoading: false,
        isError: null,
      });
    } catch (error) {
      console.log("Product Fetch Error:", error);

      setProductState((prevState) => ({
        ...prevState,
        isLoading: false,
        isError:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      }));
    }
  };

  useEffect(() => {
    let ignore = false;

    const loadProducts = async () => {
      try {
        const response = await getProducts();

        console.log("Product API Response:", response);

        if (!ignore) {
          setProductState({
            products: response.products,
            total: response.total,
            skip: response.skip,
            limit: response.limit,
            isLoading: false,
            isError: null,
          });
        }
      } catch (error) {
        console.log("Product Fetch Error:", error);

        if (!ignore) {
          setProductState((prevState) => ({
            ...prevState,
            isLoading: false,
            isError:
              error instanceof Error
                ? error.message
                : "Something went wrong",
          }));
        }
      }
    };

    void loadProducts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...productState,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

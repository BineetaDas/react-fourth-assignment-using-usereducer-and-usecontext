
import { Package, RefreshCw } from "lucide-react";

import { useCart } from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const {
    products,
    isLoading,
    isError,
    fetchProducts,
  } = useProduct();

  const { addItem } = useCart();

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-3">
        <RefreshCw
          size={32}
          className="animate-spin text-[#7040A0]"
        />

        <p className="text-sm font-medium text-slate-500">
          Loading products...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-center">
        <Package size={42} className="text-red-400" />

        <div>
          <h2 className="text-lg font-bold text-[#42205F]">
            Unable to load products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {isError}
          </p>
        </div>

        <button
          onClick={fetchProducts}
          className="inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#42205F]"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF9B85]">
            Our Collection
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-[#42205F] sm:text-3xl">
            Explore Products
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Find your favourite products at great prices.
          </p>
        </div>

        <p className="text-sm font-medium text-slate-500">
          {products.length} Products Available
        </p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-[#eee7f2] bg-white py-16 text-center">
          <Package
            size={42}
            className="mx-auto text-slate-300"
          />

          <p className="mt-3 font-semibold text-[#42205F]">
            No products found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

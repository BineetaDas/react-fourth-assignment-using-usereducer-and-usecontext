
import { ShoppingCart, Star } from "lucide-react";

import type { Product } from "../../types/interface/cart.interface";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard = ({
  product,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#eee7f2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-52 items-center justify-center bg-[#f7f3fa] p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-[#7040A0] shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={15} fill="currentColor" />
            <span className="text-xs font-semibold text-slate-600">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-slate-400">
            Stock: {product.stock}
          </span>
        </div>

        <h3 className="line-clamp-1 text-base font-bold text-[#42205F]">
          {product.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xl font-extrabold text-[#42205F]">
            ${product.price}
          </p>

          <button
            onClick={onAddToCart}
            disabled={product.stock <= 0}
            className="inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#42205F] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            <ShoppingCart size={16} />
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

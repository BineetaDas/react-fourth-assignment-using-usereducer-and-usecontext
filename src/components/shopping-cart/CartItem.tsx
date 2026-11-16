import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "../../hooks/useCart";

import type { CartItem as CartItemType } from "../../types/interface/cart.interface";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#F2DFD8] bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">
      {/* Product Image */}
      <div className="flex h-24 w-full items-center justify-center rounded-xl bg-[#FFF0E9] p-2 sm:w-24">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Information */}
      <div className="flex-1">
        <h3 className="font-bold text-[#42205F]">{item.title}</h3>

        <p className="mt-1 text-sm text-gray-500">
          ${item.price.toFixed(2)} × {item.quantity}
        </p>

        <p className="mt-2 font-bold text-[#7040A0]">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-3 rounded-xl bg-[#FFF0E9] p-1">
          <button
            type="button"
            onClick={() => decreaseQty(item.id)}
            aria-label="Decrease quantity"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#42205F] transition hover:bg-white"
          >
            <Minus size={17} />
          </button>

          <span className="min-w-5 text-center font-bold text-[#42205F]">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => increaseQty(item.id)}
            disabled={item.quantity >= item.stock}
            aria-label="Increase quantity"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#42205F] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus size={17} />
          </button>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="flex h-10 items-center gap-2 rounded-xl bg-red-50 px-3 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

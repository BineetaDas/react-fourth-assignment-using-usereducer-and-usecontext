import { ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "../../hooks/useCart";

const CartSummary: React.FC = () => {
  const { cartItems, cartCount, totalPrice, clearCart } = useCart();

  return (
    <div className="rounded-2xl border border-[#F2DFD8] bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-[#42205F]">Order Summary</h2>

      {/* Total Items */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">Total Items</span>

        <span className="font-semibold text-[#42205F]">{cartCount}</span>
      </div>

      {/* Subtotal */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">Subtotal</span>

        <span className="font-semibold text-[#42205F]">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      {/* Shipping */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">Shipping</span>

        <span className="font-semibold text-green-600">Free</span>
      </div>

      <div className="my-5 border-t border-dashed border-[#EAD9E3]" />

      {/* Total */}
      <div className="mb-6 flex items-center justify-between">
        <span className="font-bold text-[#42205F]">Total Amount</span>

        <span className="text-2xl font-extrabold text-[#7040A0]">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      {/* Clear Cart */}
      <button
        type="button"
        onClick={clearCart}
        disabled={cartItems.length === 0}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Trash2 size={17} />
        Clear Cart
      </button>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
        <ShoppingBag size={15} />
        Your shopping summary
      </div>
    </div>
  );
};

export default CartSummary;

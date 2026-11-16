import { ShoppingCart } from "lucide-react";

import { useCart } from "../../hooks/useCart";

import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#F2DFD8] bg-white px-5 py-16 text-center shadow-sm">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0E9]">
          <ShoppingCart size={36} className="text-[#7040A0]" />
        </div>

        <h2 className="text-xl font-bold text-[#42205F]">Your Cart is Empty</h2>

        <p className="mt-2 text-sm text-gray-500">
          Add your favourite products to the cart.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Cart Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#42205F]">Cart Items</h2>

        <span className="rounded-full bg-[#FFF0E9] px-4 py-2 text-sm font-bold text-[#7040A0]">
          {cartItems.length} Products
        </span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

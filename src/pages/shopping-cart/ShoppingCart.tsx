
import React from "react";
import Cart from "../../components/shopping-cart/Cart";
import CartSummary from "../../components/shopping-cart/CartSummary";

const ShoppingCart: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFF9F6] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-[#42205F]">
          My Shopping Cart
        </h1>

        <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Cart />
          </div>

          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ShoppingCart;

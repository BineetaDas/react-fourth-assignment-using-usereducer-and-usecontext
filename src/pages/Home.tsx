import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, ShoppingBag } from "lucide-react";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#fbf9fc] px-4 py-12">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-[#42205F] sm:text-4xl">
            Welcome to ShopCart
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Choose an assignment to get started.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Product Card */}
          <Link
            to="/products"
            className="group rounded-2xl border border-[#eee7f2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2eaf7] text-[#7040A0]">
              <ShoppingBag size={28} />
            </div>

            <h2 className="text-xl font-bold text-[#42205F]">Product Card</h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore products, add items to your cart and manage quantities.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#7040A0]">
              Explore Products
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

          {/* Multi-Step Form Card */}
          <Link
            to="/multi-step-form"
            className="group rounded-2xl border border-[#eee7f2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0e9] text-[#e77d66]">
              <ClipboardList size={28} />
            </div>

            <h2 className="text-xl font-bold text-[#42205F]">
              Multi-Step Form
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Complete your personal information, address and review your
              details.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#7040A0]">
              Start Form
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

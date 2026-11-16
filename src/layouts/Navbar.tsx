
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../hooks/useCart";

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
      isActive
        ? "bg-[#f2eaf7] text-[#7040A0]"
        : "text-slate-600 hover:bg-[#faf6fc] hover:text-[#7040A0]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee7f2] bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7040A0] text-white">
            <ShoppingBag size={20} />
          </span>

          <span className="text-xl font-extrabold text-[#42205F]">
            Shop<span className="text-[#FF9B85]">Cart.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/shopping-cart" className={navLinkClass}>
            Shopping Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF9B85] px-1 text-xs text-white">
              {cartCount}
            </span>
          </NavLink>

          <NavLink to="/multi-step-form" className={navLinkClass}>
            Multi-Step Form
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#eee7f2] text-[#42205F] md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#eee7f2] bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <NavLink onClick={closeMenu} to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink
              onClick={closeMenu}
              to="/products"
              className={navLinkClass}
            >
              Products
            </NavLink>

            <NavLink
              onClick={closeMenu}
              to="/shopping-cart"
              className={navLinkClass}
            >
              Shopping Cart
              <span className="rounded-full bg-[#FF9B85] px-2 py-0.5 text-xs text-white">
                {cartCount}
              </span>
            </NavLink>

            <NavLink
              onClick={closeMenu}
              to="/multi-step-form"
              className={navLinkClass}
            >
              Multi-Step Form
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

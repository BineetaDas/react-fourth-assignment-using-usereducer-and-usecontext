
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#eee7f2] bg-white px-4 py-4 text-center">
      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-[#7040A0]">ShopCart.</span>{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

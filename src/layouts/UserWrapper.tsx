
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserWrapper: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbf9fc]">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserWrapper;

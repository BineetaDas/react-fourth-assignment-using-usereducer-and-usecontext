
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound= () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#FFF9F6] px-5 py-16">

      <div className="text-center">

        <h1 className="text-8xl font-extrabold text-[#7040A0] sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-[#42205F]">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#7040A0] px-6 py-3 font-semibold text-white transition hover:bg-[#42205F]"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

      </div>

    </main>
  );
};

export default NotFound;
import { Link } from "react-router";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-stone-100 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Left */}

          <div>
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
            >
              Talky
              <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Fy
              </span>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-zinc-600 dark:text-zinc-400">
              A modern messaging platform built for real-time conversations,
              secure communication and crystal-clear video calls.
            </p>

          <div className="mt-8 flex gap-4">

            {[
                {
                icon: <FaGithub size={22} />,
                href: "https://github.com/notsomohit",
                },
                {
                icon: <Mail size={21} strokeWidth={2.2} />,
                href: "mailto:yourmail@example.com",
                },
                {
                icon: <FaLinkedin size={22} />,
                href: "#",
                },
            ].map((item, index) => (
                <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 hover:shadow-blue-500/30 hover:shadow-xl dark:bg-zinc-800 dark:hover:bg-blue-500"
                >
                {item.icon}
                </a>
            ))}

            </div>
          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-10">

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Navigation
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                <li><a href="#features" className="hover:text-blue-600">Features</a></li>
                <li><a href="#about" className="hover:text-blue-600">About</a></li>
                <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
                <li><Link to="/signup" className="hover:text-blue-600">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Legal
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800 sm:flex-row">

          <p>
            © {new Date().getFullYear() } TalkyFy. All rights reserved.
          </p>

          <p>
            Designed & Developed by <span className="font-medium text-zinc-700 dark:text-zinc-300">Mohit Singh</span>
          </p>

        </div>

      </div>
    </footer>
  );
}
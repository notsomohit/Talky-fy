import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navLinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "GitHub",
      href: "https://github.com/notsomohit",
    },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-white/60 bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-none"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Talky
          <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Fy
          </span>
        </Link>

        {/* Desktop Links */}

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === "GitHub" ? "_blank" : "_self"}
              rel="noreferrer"
              className="group relative text-sm font-medium text-zinc-500 transition-colors duration-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side */}

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-zinc-200
              bg-white/80
              text-zinc-700
              shadow-sm
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-zinc-100
              hover:shadow-md

              dark:border-zinc-700
              dark:bg-zinc-900/80
              dark:text-zinc-200
              dark:hover:bg-zinc-800
            "
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/login"
            className="
              rounded-full
              bg-zinc-900
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-black
              hover:shadow-xl

              dark:bg-white
              dark:text-zinc-900
              dark:hover:bg-zinc-100
            "
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "GitHub" ? "_blank" : "_self"}
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              )}
            </button>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-zinc-900 py-3 text-center font-semibold text-white transition hover:bg-black dark:bg-white dark:text-zinc-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
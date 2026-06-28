import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

        <div className="relative px-8 py-20 text-center sm:px-12">

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

          {/* Content */}
          <div className="relative z-10">

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              Join thousands already chatting
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Ready to experience
              <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                TalkyFy?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Fast messaging, crystal-clear video calls, and a beautiful
              interface—all in one place.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/signup"
                className="flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/30 hover:shadow-xl dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                Create Free Account
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="rounded-full border border-zinc-300 bg-white px-8 py-4 font-semibold text-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                Login
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import hero from "../assests/hero.png";

export default function Hero() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

        {/* Background Hero Image */}
        <img
         src={hero}
        alt="TalkyFy Hero"
        className="
            absolute
            inset-x-0
            -bottom-8
            h-160
            w-full
            object-cover
            object-[center_18%]
        "
        />

        {/* Fade so image blends into white */}
        <div className="absolute inset-x-0 top-10 z-20 h-150 bg-linear-to-b from-white via-white via-white/100 to-transparent dark:from-zinc-900 dark:via-zinc-900 dark:via-32% dark:to-transparent" />  
        {/* Fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent to-stone-100/70 dark:to-zinc-950/70" />
        {/* Blue glow */}
        <div className="absolute bottom-36 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />

        {/* Hero Content */}
        <div className="relative z-20 px-6 pt-12 pb-64 text-center sm:px-10 lg:px-20 lg:pt-16 lg:pb-72">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Real-time Messaging • HD Video Calls
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Conversations,
            <br />
            made <span className="text-blue-600">effortless.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Chat instantly, hop into crystal-clear video calls,
            and stay connected with the people who matter—all
            from one beautifully designed app.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black"
            >
              Start Chatting
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://github.com/notsomohit"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              View on GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

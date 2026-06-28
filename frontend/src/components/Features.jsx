import {
  MessageSquare,
  Video,
  ShieldCheck,
  Users,
  Bell,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Real-Time Messaging",
    desc: "Instant message delivery powered by Socket.io with typing indicators and read receipts.",
    className: "lg:col-span-2",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    desc: "Crystal-clear video meetings built with WebRTC.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Login",
    desc: "JWT authentication keeps your conversations protected.",
  },
  {
    icon: Users,
    title: "Group Chats",
    desc: "Create rooms, invite friends and chat together.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    desc: "Never miss a new message or incoming call.",
  },
];

export default function Features() {
  return (
    <section
        id="features"
        className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 pb-12 pt-32 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Features
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Everything you need to stay connected.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          TalkyFy combines messaging, voice and video into one seamless
          experience.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`group rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 ${
                feature.className || ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/40">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
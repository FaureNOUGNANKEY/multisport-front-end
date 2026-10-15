import type { Stat } from "@/lib/types";

export default function HomeStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-9 py-9">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white text-black text-center flex flex-col justify-center items-center py-6 rounded-lg text-xl transition duration-300 hover:translate-y-2 hover:shadow-lg"
        >
          <h1>{stat.value}</h1>
          <h4>{stat.label}</h4>
        </div>
      ))}
    </div>
  );
}
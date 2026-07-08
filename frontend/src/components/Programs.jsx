import {
  Sprout,
  Leaf,
  Flower2,
  Gem,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    title: "Buds",
    age: "Ages 3–4",
    description: "Introducing Qur'an, Arabic and Islamic character.",
    icon: Sprout,
  },
  {
    title: "Blooms",
    age: "Ages 5–7",
    description: "Building love for learning through engaging lessons.",
    icon: Leaf,
  },
  {
    title: "Blossoms",
    age: "Ages 8–10",
    description: "Strengthening Qur'an, Arabic and Islamic understanding.",
    icon: Flower2,
  },
  {
    title: "Brilliants",
    age: "Ages 11–12",
    description: "Developing confident young Muslims with strong values.",
    icon: Gem,
  },
  {
    title: "Beacons",
    age: "Ages 13–15 (Girls)",
    description: "Preparing future leaders with knowledge and character.",
    icon: Lightbulb,
  },
];

export default function Programs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Our Learning Journey
        </h2>

        <p className="mt-3 text-center text-lg text-gray-500">
          Every child grows through carefully designed stages.
        </p>

        {/* Timeline
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-[2px] bg-[#E8D8B6]" />
        </div> */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-2 hover:border-[#D4A037] hover:shadow-xl"
              >
                {/* Icon */}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4DD] transition group-hover:scale-110">
                  <Icon
                    size={30}
                    className="text-[#D4A037]"
                  />
                </div>

                <h3 className="mt-4 text-center font-bold">
                  {program.title}
                </h3>

                <div className="mt-3 flex justify-center">
                  <span className="rounded-full bg-[#FFF4DD] px-4 py-1 text-sm font-semibold text-[#C58B13]">
                    {program.age}
                  </span>
                </div>

                <p className="mt-4 mb-3 text-center text-gray-600 leading-7">
                  {program.description}
                </p>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A037] py-3 font-semibold text-white transition hover:bg-[#BF8B28]">
                  Explore Program
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
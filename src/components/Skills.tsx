import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Icons } from "@/components/Icons";

// 1. Vibrant Color Themes for the "Neon Prism" look
const PRISM_THEMES = [
    { gradient: "from-pink-500 via-rose-500 to-yellow-500", glow: "shadow-pink-500/50" },
    { gradient: "from-cyan-400 via-blue-500 to-indigo-500", glow: "shadow-cyan-500/50" },
    { gradient: "from-violet-500 via-purple-500 to-fuchsia-500", glow: "shadow-violet-500/50" },
    { gradient: "from-emerald-400 via-green-500 to-teal-500", glow: "shadow-emerald-500/50" },
    { gradient: "from-orange-500 via-amber-500 to-yellow-500", glow: "shadow-orange-500/50" },
    { gradient: "from-blue-400 via-sky-500 to-cyan-500", glow: "shadow-blue-500/50" },
    { gradient: "from-lime-400 via-green-400 to-emerald-500", glow: "shadow-lime-500/50" },
];

function PrismCard({ category, index }: { category: typeof skills[0], index: number }) {
    const theme = PRISM_THEMES[index % PRISM_THEMES.length];

    // Safe Icon Retrieval
    const iconKey = category.icon.trim();
    let Icon = Icons[iconKey as keyof typeof Icons];
    if (!Icon) Icon = Icons.code;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative h-[180px] w-full"
        >
            {/* 2. The Colorful Gradient Border (p-[1px] wrapper) */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md`} />

            <div className={`relative h-full rounded-2xl p-[1px] bg-gradient-to-br ${theme.gradient}`}>
                {/* 3. Dark Inner Content Container */}
                <div className="relative h-full bg-zinc-950/90 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-3 overflow-hidden">

                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${theme.gradient} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className={`text-base font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                            {category.title}
                        </h3>
                    </div>

                    {/* Skills Pills - Compact & Scrollable */}
                    <div className="flex flex-wrap gap-1.5 overflow-y-auto overflow-x-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-track]:bg-transparent">
                        {category.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase text-zinc-400 bg-white/5 border border-white/5 rounded-md group-hover:text-white group-hover:border-white/20 transition-colors shrink-0"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Gloss Reflection */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />
                </div>
            </div>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Simple Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-block mb-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">Expertise</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        SKILL <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">MATRIX</span>
                    </h2>
                </motion.div>

                {/* Compact Grid: 4 columns, tight gap */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {skills.map((category, idx) => (
                        <PrismCard key={idx} category={category} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

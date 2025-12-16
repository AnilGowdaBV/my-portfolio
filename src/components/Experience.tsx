import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Icons } from "@/components/Icons";

export function Experience() {
    return (
        <section id="experience" className="py-24 w-full container px-4 md:px-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 inline-block">
                    Work Experience
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full" />
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-[15px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-violet-500 via-indigo-500/50 to-transparent hidden md:block" />

                <div className="space-y-8">
                    {experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[4px] top-6 w-6 h-6 rounded-full border-[3px] border-zinc-950 bg-violet-500 z-10 hidden md:block shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-transform duration-300 group-hover:scale-125" />

                            <motion.div
                                whileHover={{ y: -3, scale: 1.005 }}
                                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-violet-500/30 transition-all duration-300 shadow-xl relative overflow-hidden"
                            >
                                {/* Active State Background Gradient */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                                                {job.role}
                                            </h3>
                                            <div className="text-lg text-violet-200/90 font-medium">
                                                {job.company}
                                            </div>

                                            {/* Location Link */}
                                            {job.locationUrl && (
                                                <a
                                                    href={job.locationUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-violet-400 mt-1 transition-colors w-fit py-1 px-2 -ml-2 rounded-lg hover:bg-white/5"
                                                >
                                                    <Icons.mapPin className="w-3.5 h-3.5" />
                                                    <span>{job.location}</span>
                                                </a>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2 self-start mt-2 md:mt-0">
                                            <span className="px-3 py-1 rounded-full bg-zinc-800/50 border border-white/5 text-xs font-mono text-zinc-300 whitespace-nowrap group-hover:border-violet-500/30 transition-colors">
                                                {job.period}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 leading-relaxed mb-6 border-l-2 border-violet-500/20 pl-4">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-violet-500/5 text-violet-300 border border-violet-500/10 font-medium group-hover:bg-violet-500/10 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

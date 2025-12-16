import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Icons } from "@/components/Icons";

export function Certifications() {
    return (
        <section id="certifications" className="py-24 w-full container px-4 md:px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 inline-block">
                    Achievements & Certifications
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full mb-4" />
                <p className="text-zinc-400 max-w-lg mx-auto text-sm">
                    Professional validations and competitive milestones from my journey.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {certifications.map((item, idx) => {
                    const isAchievement = item.type === "Achievement";

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            <div className={`
                                h-full p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden glass-card
                                ${isAchievement
                                    ? "border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                                    : "border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                                }
                            `}>
                                {/* Background Gradient Hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${isAchievement ? "from-amber-500/10" : "from-violet-500/10"} to-transparent`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header: Icon & Badge */}
                                    <div className="flex justify-between items-start mb-4">
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`
                                                    p-3 rounded-xl border flex items-center justify-center transition-transform hover:scale-110 cursor-pointer relative z-20
                                                    ${isAchievement
                                                        ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                                                        : "bg-violet-500/10 border-violet-500/20 text-violet-400"
                                                    }
                                                `}
                                            >
                                                {isAchievement ? <Icons.award className="w-6 h-6" /> : <Icons.shield className="w-6 h-6" />}
                                            </a>
                                        ) : (
                                            <div className={`
                                                p-3 rounded-xl border flex items-center justify-center
                                                ${isAchievement
                                                    ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                                                    : "bg-violet-500/10 border-violet-500/20 text-violet-400"
                                                }
                                            `}>
                                                {isAchievement ? <Icons.award className="w-6 h-6" /> : <Icons.shield className="w-6 h-6" />}
                                            </div>
                                        )}
                                        <span className={`
                                            text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full border
                                            ${isAchievement
                                                ? "bg-amber-950/30 border-amber-500/20 text-amber-300"
                                                : "bg-violet-950/30 border-violet-500/20 text-violet-300"
                                            }
                                        `}>
                                            {item.type}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="text-sm font-medium mb-3 flex items-center gap-2">
                                        <span className={isAchievement ? "text-amber-200/80" : "text-violet-200/80"}>
                                            {item.issuer}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                                        <span className="text-zinc-500">{item.date}</span>
                                    </div>

                                    <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-grow">
                                        {item.description}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className={`h-1 w-12 rounded-full ${isAchievement ? "bg-amber-500/30" : "bg-violet-500/30"} group-hover:w-full transition-all duration-500`} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

import { motion } from "framer-motion";
import { Icons } from "@/components/Icons";

export function About() {
    return (
        <section id="about" className="py-20 w-full container px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    About <span className="text-violet-500">Me</span>
                </h2>
                <div className="max-w-3xl text-muted-foreground text-lg leading-relaxed space-y-4">
                    <p>
                        I’m a <span className="text-foreground font-medium">software engineer</span> who enjoys crafting well-structured applications using <span className="text-violet-500">React, NestJS, and Python</span>, with a strong focus on clarity, performance, and real-world usability.
                    </p>
                    <p>
                        I follow clean engineering practices and use <span className="text-violet-500">AI-assisted workflows</span> and prompt engineering to think faster, debug smarter, and deliver refined solutions without compromising fundamentals.
                    </p>
                    <p>
                        Curious by nature and driven by problem-solving, I enjoy working on <span className="text-foreground font-medium">automation, intelligent systems</span>, and scalable ideas that turn complexity into simplicity.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: Icons.terminal,
                        title: "Clean Engineering",
                        description: "Crafting well-structured, performant applications with a focus on clarity and fundamentals.",
                        color: "from-cyan-400 to-blue-500",
                        shadow: "shadow-cyan-500/20",
                        border: "group-hover:border-cyan-500/50"
                    },
                    {
                        icon: Icons.brain,
                        title: "AI & Automation",
                        description: "Leveraging AI-assisted workflows and prompt engineering to debug smarter and think faster.",
                        color: "from-violet-400 to-fuchsia-500",
                        shadow: "shadow-violet-500/20",
                        border: "group-hover:border-violet-500/50"
                    },
                    {
                        icon: Icons.code,
                        title: "Modern Tech Stack",
                        description: "Building scalable solutions using React, NestJS, and Python for real-world usability.",
                        color: "from-pink-400 to-rose-500",
                        shadow: "shadow-pink-500/20",
                        border: "group-hover:border-pink-500/50"
                    },
                    {
                        icon: Icons.cpu,
                        title: "Intelligent Systems",
                        description: "Turning complexity into simplicity through automation and refined problem-solving.",
                        color: "from-amber-400 to-orange-500",
                        shadow: "shadow-amber-500/20",
                        border: "group-hover:border-amber-500/50"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group relative p-8 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden ${feature.border} hover:shadow-2xl hover:-translate-y-2`}
                    >
                        {/* Hover Gradient Bloom */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-500`} />

                        {/* Top Accent Line */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                        <div className="relative z-10 flex flex-col items-center text-center h-full">
                            {/* Icon Container */}
                            <div className={`mb-6 p-4 rounded-2xl bg-zinc-950 border border-white/10 ${feature.shadow} shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
                                <div className={`absolute inset-0 opacity-20 bg-gradient-to-tr ${feature.color}`} />
                                <feature.icon className="w-8 h-8 text-white relative z-10" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

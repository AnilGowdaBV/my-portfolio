import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

export function Contact() {
    return (
        <section id="contact" className="py-20 w-full container px-4 md:px-6 mb-10 relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full mx-auto glass-card border-violet-500/20 px-6 py-8 md:px-12 md:py-10 rounded-[2rem] overflow-hidden relative shadow-2xl"
            >
                {/* Inner Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Left Side: Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                        <div className="flex items-center gap-3 mb-3 text-violet-300">
                            <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
                                <Icons.mail className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                            Let's Work Together
                        </h2>

                        <p className="text-base md:text-lg text-zinc-400 max-w-xl">
                            Open for internships and freelance collaborations. <br className="hidden md:block" />
                            Bringing creative technical solutions to your projects.
                        </p>
                    </div>

                    {/* Right Side: Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                        {/* Primary Mail Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <Button
                                size="lg"
                                className="relative h-12 px-8 rounded-full text-base bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                                asChild
                            >
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anilgowda3103@gmail.com" target="_blank" rel="noreferrer">
                                    <Icons.mail className="mr-2 h-4 w-4" />
                                    Say Hello
                                </a>
                            </Button>
                        </motion.div>

                        <div className="flex gap-3 w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-12 px-5 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/30 text-zinc-300 hover:text-white transition-all backdrop-blur-sm flex-1 sm:flex-none"
                                asChild
                            >
                                <a href="https://www.linkedin.com/in/anil-bv-2704a8351" target="_blank" rel="noreferrer">
                                    <Icons.linkedin className="w-4 h-4" />
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-12 px-5 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/30 text-zinc-300 hover:text-white transition-all backdrop-blur-sm flex-1 sm:flex-none"
                                asChild
                            >
                                <a href="https://github.com/AnilGowdaBV" target="_blank" rel="noreferrer">
                                    <Icons.github className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

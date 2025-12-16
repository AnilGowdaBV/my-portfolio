import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import avatar from "@/assets/profile.jpg";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container px-4 md:px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1 relative z-10"
                    >
                        {/* Subtle Grid Background for Texture */}
                        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-xl md:text-2xl font-light text-violet-300 tracking-wider"
                            >
                                Hi, I Am
                            </motion.div>

                            <div className="space-y-2">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                                    ANIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-violet-400 animate-gradient-x">B V</span>
                                </h1>
                                <p className="text-xl md:text-2xl font-medium text-violet-200/80">
                                    Full Stack Developer & AI Enthusiast
                                </p>
                                <p className="text-base text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    Crafting robust, scalable web applications and integrating intelligent AI solutions to solve real-world problems.
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack Arsenal */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Technical Arsenal</h3>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                                    <Icons.layout className="w-4 h-4 text-violet-400" />
                                    <span className="text-sm text-zinc-300">Frontend</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                                    <Icons.server className="w-4 h-4 text-indigo-400" />
                                    <span className="text-sm text-zinc-300">Backend</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                                    <Icons.database className="w-4 h-4 text-pink-400" />
                                    <span className="text-sm text-zinc-300">Database</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors">
                                    <Icons.brain className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm text-zinc-300">AI / ML</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Card - Full Width Horizontal */}
                        <div className="glass-card p-4 mx-auto lg:mx-0 w-full backdrop-blur-md border-white/5 bg-white/5 rounded-2xl relative group hover:border-violet-500/30 transition-colors">
                            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between text-sm">

                                {/* Address */}
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors min-w-0">
                                    <div className="p-2 shrink-0 rounded-lg bg-violet-500/10 text-violet-400">
                                        <Icons.mapPin className="w-4 h-4" />
                                    </div>
                                    <span className="truncate">Byagadihalli, Hassan - 573123</span>
                                </a>

                                {/* Email */}
                                <a href="mailto:anilgowda3103@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors min-w-0">
                                    <div className="p-2 shrink-0 rounded-lg bg-violet-500/10 text-violet-400">
                                        <Icons.mail className="w-4 h-4" />
                                    </div>
                                    <span className="truncate">anilgowda3103@gmail.com</span>
                                </a>

                                {/* Phone */}
                                <a href="tel:+916360634863" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors min-w-0">
                                    <div className="p-2 shrink-0 rounded-lg bg-violet-500/10 text-violet-400">
                                        <Icons.phone className="w-4 h-4" />
                                    </div>
                                    <span className="whitespace-nowrap">+91 6360634863</span>
                                </a>

                                {/* Socials */}
                                <div className="flex items-center gap-2 border-t lg:border-t-0 lg:border-l border-white/5 pt-2 lg:pt-0 lg:pl-4 mt-2 lg:mt-0">
                                    <a href="https://www.linkedin.com/in/anil-bv-2704a8351" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                                        <Icons.linkedin className="w-4 h-4" />
                                    </a>
                                    <a href="https://github.com/AnilGowdaBV" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                                        <Icons.github className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center lg:justify-start pt-2">
                            <Button asChild className="h-12 px-8 rounded-full bg-white text-black hover:bg-zinc-200 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95">
                                <a href="/resume.pdf" download="Anil_BV_Resume.pdf">
                                    Download Resume
                                    <Icons.download className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 text-white text-base hover:text-violet-300 transition-all">
                                <a href="#projects">
                                    View Projects
                                    <Icons.arrowLeft className="ml-2 w-4 h-4 rotate-180" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
                            {/* Rotating Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute inset-0 border border-violet-500/20 rounded-[3rem] rotate-6 scale-110"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="absolute inset-0 border border-indigo-500/20 rounded-[3rem] -rotate-3 scale-105"
                            />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass-card group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={avatar}
                                    alt="Anil B V"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>


                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

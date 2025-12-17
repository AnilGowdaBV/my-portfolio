import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isHovered, setIsHovered] = useState(false);
    const [hasLinkError, setHasLinkError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Security: Check for links in the message
        if (name === "message") {
            const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
            setHasLinkError(urlPattern.test(value));
        }
    };

    return (
        <section id="contact" className="py-24 w-full container px-4 relative mb-20">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Main Card Border/Glow Container */}
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-[2rem] opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-700" />

                {/* Main Card Content */}
                <div className="relative bg-[#0a0a0b] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    {/* Decorative Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Left Panel: The "Terminal" / Pitch */}
                    <div className="md:w-5/12 p-10 md:p-14 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
                        {/* Futuristic Header */}
                        <div className="flex items-center gap-2 text-xs font-mono text-violet-400/80 mb-10 tracking-widest uppercase">
                            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                            System.Link_Ready
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.9] mb-6 tracking-tighter">
                                LET'S <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">BUILD</span> THE <br />
                                IMPOSSIBLE
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-violet-500/30 pl-6 my-8">
                                I turn complex problems into elegant, scalable code.
                                Ready to deploy your next big idea?
                            </p>
                        </div>

                        {/* Connection Stats / Info */}
                        <div className="grid grid-cols-2 gap-4 mt-auto">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.anil3124@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/item"
                            >
                                <div className="mb-2 text-violet-400">
                                    <Icons.mail className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <div className="text-xs text-zinc-500 font-mono mb-1">EMAIL_LINK</div>
                                <div className="text-sm font-semibold text-zinc-200 truncate">contact.anil3124@...</div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/anil-bv-2704a8351"
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/item"
                            >
                                <div className="mb-2 text-indigo-400">
                                    <Icons.linkedin className="w-6 h-6 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <div className="text-xs text-zinc-500 font-mono mb-1">PROFILE_ID</div>
                                <div className="text-sm font-semibold text-zinc-200">Connect</div>
                            </a>
                        </div>
                    </div>

                    {/* Right Panel: The Form Interface */}
                    <div className="md:w-7/12 p-10 md:p-14 bg-white/[0.02] relative border-t md:border-t-0 md:border-l border-white/5">

                        {/* Corner Accents */}
                        <div className="absolute top-4 right-4 text-[10px] text-zinc-700 font-mono">ID: 8X-291</div>
                        <div className="absolute bottom-6 right-6 text-zinc-800 opacity-20">
                            <Icons.cpu className="w-24 h-24" />
                        </div>

                        <form
                            action="https://formsubmit.co/contact.anil3124@gmail.com"
                            method="POST"
                            target="_blank"
                            className="relative z-10 space-y-8"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="true" /> {/* Security: Enable CAPTCHA */}
                            <input type="text" name="_honey" style={{ display: 'none' }} /> {/* Security: Honeypot for bots */}
                            <input type="hidden" name="_next" value="https://my-portfolio-5kqq.vercel.app/" /> {/* Redirect after submission */}

                            <div className="group/input relative">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block group-focus-within/input:text-violet-400 transition-colors">
                                    // 01. Identification
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name_"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-violet-500 transition-all font-light"
                                />
                            </div>

                            <div className="group/input relative">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block group-focus-within/input:text-violet-400 transition-colors">
                                    // 02. Communication Channel
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com_"
                                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-violet-500 transition-all font-light"
                                />
                            </div>

                            <div className="group/input relative">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block group-focus-within/input:text-violet-400 transition-colors">
                                    // 03. Transmission Data
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Project details, requirements, or just saying hello..."
                                    className={`w-full bg-transparent border-b py-4 text-xl text-white placeholder:text-zinc-700 focus:outline-none transition-all font-light resize-none ${hasLinkError ? 'border-red-500' : 'border-white/10 focus:border-violet-500'}`}
                                />
                                {hasLinkError && (
                                    <div className="absolute bottom-[-24px] left-0 flex items-center gap-2 text-red-500 text-xs font-bold animate-pulse">
                                        <Icons.shield className="w-3 h-3" />
                                        SECURITY ALERT: Links are disabled for safety.
                                    </div>
                                )}
                            </div>

                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={hasLinkError}
                                    className={`relative overflow-hidden group/btn text-black rounded-none w-full h-16 text-lg font-bold tracking-wide transition-all ${hasLinkError ? 'bg-red-500/10 text-red-500 cursor-not-allowed border border-red-500/50' : 'bg-white hover:bg-zinc-200'}`}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {hasLinkError ? "TRANSMISSION_BLOCKED" : "INITIATE_TRANSMISSION"}
                                        <Icons.arrowLeft className={`w-5 h-5 rotate-180 transition-transform ${hasLinkError ? '' : 'group-hover/btn:translate-x-1'}`} />
                                    </span>
                                    {!hasLinkError && (
                                        <div className="absolute inset-0 bg-violet-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0 mix-blend-difference" />
                                    )}
                                </Button>
                            </div>

                        </form>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

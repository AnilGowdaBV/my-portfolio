import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Lock, Eye, FileText, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Legal() {
    const location = useLocation();
    const isPrivacy = location.pathname === "/privacy";
    const title = isPrivacy ? "Privacy Protocol" : "Terms of Service";

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl w-full bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
                {/* Header / Caution Bar */}
                <div className="bg-gradient-to-r from-red-900/40 via-purple-900/40 to-blue-900/40 p-1 border-b border-white/10">
                    <div className="bg-black/40 backdrop-blur-sm p-4 flex items-center gap-3">
                        <ShieldAlert className="w-6 h-6 text-red-400 animate-pulse" />
                        <span className="font-mono text-xs md:text-sm text-red-200 tracking-widest uppercase">
                            System Admin Alert: Non-Owner Access Detected
                        </span>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="flex flex-col gap-6">

                        {/* Title Section */}
                        <div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3 mb-2"
                            >
                                {isPrivacy ? <Lock className="w-8 h-8 text-blue-400" /> : <Terminal className="w-8 h-8 text-purple-400" />}
                                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                    {title}
                                </h1>
                            </motion.div>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>

                        {/* Caution Message */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 md:p-6 flex gap-4 items-start"
                        >
                            <Eye className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-yellow-200 font-semibold mb-1">Notice to Visitor</h3>
                                <p className="text-yellow-100/80 text-sm leading-relaxed">
                                    You have accessed the {isPrivacy ? "data protection" : "operational"} logs of Anil's digital workspace.
                                    While you are not the system administrator (Owner), you have been granted
                                    <span className="font-mono text-yellow-400 mx-1">READ_ONLY</span> privileges to view these documents.
                                    Please proceed with the understanding that this portfolio is a showcase of creativity and code.
                                </p>
                            </div>
                        </motion.div>

                        {/* Content Body */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6 text-neutral-300 font-light"
                        >
                            {isPrivacy ? (
                                <>
                                    <section>
                                        <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-blue-400" /> Data Collection
                                        </h2>
                                        <p>
                                            We strictly collect... absolutely nothing nefarious. No cookies are baked here (unfortunately).
                                            Any data you submit via contact forms is transmitted securely directly to the owner for the sole purpose
                                            of saying "Hello!" or discussing potential collaborations.
                                        </p>
                                    </section>
                                    <section>
                                        <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-blue-400" /> Third-Party Logic
                                        </h2>
                                        <p>
                                            This site may utilize standard web technologies which theoretically could track that you have excellent taste in portfolios.
                                            However, no personal data is sold, traded, or beamed to alien civilizations.
                                        </p>
                                    </section>
                                </>
                            ) : (
                                <>
                                    <section>
                                        <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-purple-400" /> Usage Rights
                                        </h2>
                                        <p>
                                            By navigating this portfolio, you agree that the designs and code showcased here are the intellectual property of Anil.
                                            Inspirations may be taken, but direct cloning is discouraged (and less fun for you).
                                        </p>
                                    </section>
                                    <section>
                                        <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-purple-400" /> Liability
                                        </h2>
                                        <p>
                                            The owner is not responsible for any mind-blowing experiences or sudden urges to hire the developer immediately
                                            upon viewing these projects. Proceed at your own professional risk.
                                        </p>
                                    </section>
                                </>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center"
                        >
                            <Link to="/" className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Return to Base
                            </Link>
                            <span className="text-xs text-neutral-600 font-mono">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}

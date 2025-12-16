
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
            >
                <nav
                    className={cn(
                        "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                        isScrolled
                            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg border border-black/5 w-full max-w-4xl"
                            : "bg-transparent w-full max-w-5xl"
                    )}
                >
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md group-hover:scale-110 transition-transform">
                            A
                        </div>
                        <span className={cn("font-bold text-lg tracking-tight transition-opacity",
                            isScrolled ? "opacity-100" : "opacity-0 md:opacity-100"
                        )}>
                            Anil B V
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            className="rounded-full hidden md:flex bg-foreground text-background hover:bg-foreground/90 font-medium px-6"
                            size="sm"
                            asChild
                        >
                            <a href="#contact">Let's Talk</a>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden rounded-full"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? (
                                <Icons.close className="h-5 w-5" />
                            ) : (
                                <Icons.menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-6 md:hidden"
                >
                    <nav className="flex flex-col space-y-6 text-center">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                href={link.href}
                                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button size="lg" className="w-full rounded-full mt-4" asChild>
                                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
                            </Button>
                        </motion.div>
                    </nav>
                </motion.div>
            )}
        </>
    );
}

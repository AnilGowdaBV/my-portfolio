
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { motion } from "framer-motion";

export function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
                <Button asChild>
                    <Link to="/">Back to Home</Link>
                </Button>
            </div>
        );
    }

    return (
        <section className="min-h-screen pt-24 pb-16 px-4 md:px-6 container max-w-5xl mx-auto">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all group" asChild>
                <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-white">
                    <Icons.arrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>
            </Button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">
                    {project.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="glass-card p-8 md:p-12 mb-12 border-violet-500/20">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                        {/* @ts-ignore - details property exists on some projects */}
                        {project.details || project.description}
                    </p>

                    {/* @ts-ignore - features property exists on some projects */}
                    {project.features && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4 text-violet-300">Key Highlights</h3>
                            <ul className="space-y-3">
                                {/* @ts-ignore */}
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* @ts-ignore */}
                    {!project.details && (
                        <p className="mt-4 text-zinc-400 italic">
                            Detailed case study coming soon...
                        </p>
                    )}
                </div>

                <div className="flex gap-4">
                    {project.github && (
                        <Button asChild variant="outline" className="gap-2 border-violet-500/20 hover:bg-violet-500/10 hover:text-white">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <Icons.github className="w-4 h-4" />
                                View Source
                            </a>
                        </Button>
                    )}
                    {project.link && (
                        <Button asChild className="gap-2 bg-violet-600 hover:bg-violet-700">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <Icons.externalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        </Button>
                    )}
                </div>
            </motion.div>
        </section>
    );
}

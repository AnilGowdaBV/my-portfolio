import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-full w-full rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 p-[1px] group"
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="relative h-full w-full rounded-xl bg-zinc-950/90 p-6 flex flex-col justify-between overflow-hidden"
            >
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(#a78bfa 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                />

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <Link to={`/project/${project.id}`} className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/20 text-violet-400 group-hover:text-violet-300 transition-colors cursor-pointer hover:bg-violet-500/20 z-50">
                            <Icons.folder className="w-5 h-5" />
                        </Link>
                        <div className="flex gap-2">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <Icons.github className="w-5 h-5" />
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <Icons.linkedin className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-violet-400 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="relative z-10 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 font-medium">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export function Projects() {
    return (
        <section id="projects" className="py-24 w-full text-zinc-100 overflow-hidden relative">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">
                        Featured <span className="text-white">Ware</span>
                    </h2>
                    <p className="text-zinc-400 max-w-lg mx-auto">
                        A selection of projects that push the boundaries of what's possible with modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

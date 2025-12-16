
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="py-8 w-full border-t border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Anil B V. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

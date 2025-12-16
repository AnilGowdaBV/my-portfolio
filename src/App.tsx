
import { Navbar } from "@/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { Home } from "@/components/Home";
import { ProjectDetails } from "@/components/ProjectDetails";
import { Legal } from "@/components/Legal";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent font-sans antialiased text-foreground relative overflow-hidden">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

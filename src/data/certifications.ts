
export interface Certification {
    title: string;
    issuer: string;
    date: string;
    type: "Achievement" | "Certification";
    description: string;
    link?: string;
    file?: string;
    subCertificates?: {
        title: string;
        date?: string;
        description?: string;
        image?: string;
        file?: string; // Path to the local file (e.g., /certificates/python.pdf)
    }[];
}

export const certifications: Certification[] = [
    {
        title: "AI DevCon India 2025 Delegate",
        issuer: "AI DevCon India",
        date: "March 26-27, 2025",
        type: "Achievement",
        description: "Engaged in a premier 2-day AI conference at NIMHANS, gaining cutting-edge insights into Generative AI and industry trends.",
        link: "https://www.linkedin.com/posts/anil-bv-2704a8351_aidevconindia2025-futureofai-techinnovation-activity-7311000746169184258-FQt_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfQ4XQB5Y5gx7VyKs8CLg7aAQ8EAWm8isQ"
    },
    {
        title: "2nd Place – IoT Workshop Competition",
        issuer: "IoT Workshop",
        date: "2024",
        type: "Achievement",
        description: "Secured 2nd runner-up in a competitive hands-on Internet of Things workshop.",
        file: "/certificates/Anil.B.V iot.pdf"
    },
    {
        title: "10-Hour Innovation Hackathon",
        issuer: "Sri Venkateshwara College of Engineering",
        date: "2025",
        type: "Achievement",
        description: "Participated in a rigorous 10-hour intra-college hackathon focused on rapid problem-solving and prototyping.",
    },
    {
        title: "Hackathon Participant",
        issuer: "SJB Institute of Technology",
        date: "11-april-2025 & 12-april-2025",
        type: "Achievement",
        description: "Active participant in a 24-hour coding hackathon solving real-world problems.",
        link: "https://www.linkedin.com/posts/anil-bv-2704a8351_hackathonvibes-sjbit-techpassion-activity-7317035762263252992-jtli?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfQ4XQB5Y5gx7VyKs8CLg7aAQ8EAWm8isQ"
    },
    {
        title: "Python Certification",
        issuer: "GeeksforGeeks",
        date: "2025",
        type: "Certification",
        description: "Comprehensive course covering Python fundamentals, data structures, and algorithms.",
        link: "https://www.linkedin.com/posts/anil-bv-2704a8351_python-learning-certification-activity-7300863592751366144-W80t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfQ4XQB5Y5gx7VyKs8CLg7aAQ8EAWm8isQ"
    },
    {
        title: "Data Visualization with Python",
        issuer: "IBM Cognitive Classes",
        date: "2023",
        type: "Certification",
        description: "Mastered data visualzation techniques uses Matplotlib, Seaborn, and Folium.",
        file: "/certificates/data visualization with python.pdf"
    },
    {
        title: "Cyber Security Analyst Simulation",
        issuer: "Tata Forage",
        date: "18-Feb-2025",
        type: "Certification",
        description: "Completed a job simulation involving threat analysis and security protocol implementation.",
        file: "/certificates/cybersecurity analyst.pdf"
    },
    {
        title: "TechSaksham Edunet Workshop",
        issuer: "TechSaksham",
        date: "2023",
        type: "Certification",
        description: "Intensive training on full-stack web technologies and cloud computing.",
        file: "/certificates/techsaksham.pdf"
    },
    {
        title: "Infosys Springboard Certifications",
        issuer: "Infosys",
        date: "2024",
        type: "Certification",
        description: "Series of certifications in software engineering best practices and digital skills.",
        subCertificates: [
            { title: "Python Programming", date: "2024", description: "Foundational Python concepts and application.", file: "/certificates/Introduction to Python.pdf" },
            { title: "Artificial Intelligence Foundation Certification", date: "2024", description: "Covered core AI fundamentals and machine learning basics", file: "/certificates/Artificial Intelligence Foundation Certification.pdf" },
            { title: "Introduction to Artificial Intelligence", date: "2024", description: "Fundamental introduction to artificial intelligence concepts.", file: "/certificates/Introduction to Artificial Intelligence.pdf" },
            { title: "Design Thinking", date: "2024", description: "Introduced to design thinking and user-centric problem solving.", file: "/certificates/Design Thinking.pdf" },
            { title: "Deep Learning", date: "2024", description: "Overview of natural language processing fundamentals.", file: "/certificates/Introduction to Deep Learning.pdf" },
            { title: "Introduction to Natural Language Processing", date: "2024", description: "Introduction to AI and Machine Learning concepts.", file: "/certificates/Introduction to Natural Language Processing.pdf" },
            { title: "Tech AWS Solution Architect Certification", date: "2024", description: "Introduced to AWS architecture principles and cloud solution design", file: "/certificates/Tech AWS Solution Architect Certification.pdf" }
        ]
    },
];

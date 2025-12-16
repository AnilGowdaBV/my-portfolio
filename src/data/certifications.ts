
export interface Certification {
    title: string;
    issuer: string;
    date: string;
    type: "Achievement" | "Certification";
    description: string;
    link?: string;
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
        link: "https://www.linkedin.com/posts/anil-bv-2704a8351_datavisualization-python-datascience-activity-7301820881192783872-At1l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfQ4XQB5Y5gx7VyKs8CLg7aAQ8EAWm8isQ"
    },
    {
        title: "Cyber Security Analyst Simulation",
        issuer: "Tata Forage",
        date: "18-Feb-2025",
        type: "Certification",
        description: "Completed a job simulation involving threat analysis and security protocol implementation.",
        link: "https://www.linkedin.com/posts/anil-bv-2704a8351_forage-certificate-activity-7297608453483642881-1ZMT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfQ4XQB5Y5gx7VyKs8CLg7aAQ8EAWm8isQ"
    },
    {
        title: "TechSaksham Edunet Workshop",
        issuer: "TechSaksham",
        date: "2023",
        type: "Certification",
        description: "Intensive training on full-stack web technologies and cloud computing.",
        link: "https://www.linkedin.com/posts/anil-bv-2704a8351_techsaksham-microsoft-sap-activity-7297659624046927873-B7jR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFfQ4XQB5Y5gx7VyKs8CLg7aAQ8EAWm8isQ"
    },
    {
        title: "Infosys Springboard Certifications",
        issuer: "Infosys",
        date: "2022 - 2025",
        type: "Certification",
        description: "Series of certifications in software engineering best practices and digital skills.",
    },
];

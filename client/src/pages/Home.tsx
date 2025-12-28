import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";

// Types
type Section = "information" | "projects";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

// Skill tags data
const skillTags = [
  "Machine Learning",
  "React.js",
  "Backend APIs",
  "Python",
  "Full-Stack",
  "Database Design"
];

// Contact Cluster Component
function ContactCluster() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jasdishsingh55@gmail.com");
      setCopied(true);
      setShowToast(true);
      
      // Clear previous timeout if exists
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      
      // Reset after 2 seconds
      toastTimeoutRef.current = setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="contact-cluster">
      {/* Status Badge */}
      <div className="status-badge">
        <div className="status-dot" />
        <span>Available for Summer 2026</span>
      </div>

      {/* Smart Copy Button */}
      <button
        onClick={handleCopyEmail}
        className="copy-button"
        title="Click to copy email"
      >
        {copied ? "Address Copied!" : "jasdishsingh55@gmail.com"}
      </button>

      {/* Scheduling Link */}
      <a
        href="https://app.cal.com/jasdish-singh-uozqng"
        target="_blank"
        rel="noopener noreferrer"
        className="scheduling-link"
      >
        Or book a 15-min intro chat →
      </a>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          ✓ Email copied to clipboard
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("information");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden relative">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Spotlight Background Effect */}
      <div className="spotlight-bg" />

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto scrollbar-hide z-10">
        <div className="container max-w-4xl mx-auto pt-12 pb-32 px-6 md:px-12 min-h-full">
          <AnimatePresence mode="wait">
            {activeSection === "information" && (
              <motion.div
                key="information"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={transition}
                className="space-y-16"
              >
                {/* Hero Section with Masked Text Reveal */}
                <header className="space-y-6">
                  <div className="text-reveal-container">
                    <h1 
                      className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-reveal cursor-pointer"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      JASDISH
                      <br />
                      SINGH
                    </h1>
                  </div>
                  <p 
                    className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-muted-foreground content-load-delay-1"
                  >
                    Software Developer specializing in Artificial Intelligence and Full-Stack Web Development.
                  </p>
                </header>

                {/* Contact Section with Staggered Load */}
                <div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border content-load-delay-2"
                >
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Contact</h3>
                    <ContactCluster />
                    <div className="flex flex-col gap-2 pt-4 border-t border-border">
                      <a 
                        href="https://github.com/Jasdish-Singh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link flex items-center gap-2 text-muted-foreground"
                      >
                        <Github className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">GitHub</span>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/jasdish" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link flex items-center gap-2 text-muted-foreground"
                      >
                        <Linkedin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">About</h3>
                    <p className="leading-relaxed text-sm">
                      A passionate and driven Software Developer specializing in Artificial Intelligence with a strong foundation in Full-Stack Development, Object-Oriented Programming, and database management.
                    </p>
                  </div>

                  {/* Focus Section with Glassmorphism Skill Tags */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillTags.map((skill, index) => (
                        <span 
                          key={index} 
                          className="skill-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div 
                  className="space-y-6 pt-8 border-t border-border content-load-delay-3"
                >
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Education</h3>
                    <div className="space-y-2">
                      <h4 className="text-lg md:text-xl font-bold">Software Engineering Technology (AI Major)</h4>
                      <p className="text-muted-foreground">Centennial College, Toronto, Canada</p>
                      <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                      <p className="text-sm leading-relaxed pt-2">
                        Focus areas include Artificial Intelligence, Machine Learning, Full-Stack Development, Databases, and Software Engineering principles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Work Experience Section */}
                <div 
                  className="space-y-6 pt-8 border-t border-border"
                >
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Work Experience</h3>
                    <div className="space-y-4">
                      <div className="group p-4 border border-border hover:border-primary hover:bg-muted/20 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <h4 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">Tycoon Freight Systems</h4>
                            <p className="text-muted-foreground text-sm">Frontend Developer</p>
                          </div>
                          <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">May 2025 — Dec 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div 
                  className="space-y-6 pt-8 border-t border-border"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Technical Skills</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold mb-2">Programming Languages</h4>
                      <p className="text-sm text-muted-foreground">Python, C#, Java, JavaScript, SQL</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">Web & Full-Stack</h4>
                      <p className="text-sm text-muted-foreground">React.js, Node.js, REST APIs, .NET</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">AI / Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">Scikit-learn, Supervised Learning, Model Evaluation, Feature Engineering, SMOTE</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">Databases</h4>
                      <p className="text-sm text-muted-foreground">Oracle SQL, MySQL, PL/SQL</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">Tools & Platforms</h4>
                      <p className="text-sm text-muted-foreground">Git, GitHub, AWS EC2, Linux/Unix, Visual Studio, Anaconda Navigator</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-2">Data Analysis</h4>
                      <p className="text-sm text-muted-foreground">Data preprocessing, EDA, visualization (Python libraries)</p>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div 
                  className="space-y-4 pt-8 border-t border-border"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Achievements</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Built multiple end-to-end software systems including flight booking and logistics platforms</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Developed ML classification models for real-world datasets (accident severity, diabetes prediction)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Successfully delivered enterprise-style logistics solutions during internship and work experience</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>Freelance experience in email marketing for small businesses</span>
                    </li>
                  </ul>
                </div>

                {/* Call to Action Section */}
                <div 
                  className="space-y-4 pt-8 border-t border-border pb-8"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Let's Work Together</h3>
                  <p className="text-sm leading-relaxed">
                    I'm open to co-op opportunities, internships, and collaborative projects in software engineering, data analytics, and AI-driven solutions. Feel free to reach out to discuss how we can build something impactful.
                  </p>
                  <a href="mailto:jasdishsingh55@gmail.com" className="inline-block mt-4 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-bold uppercase tracking-wider">
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div
                key="projects"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={transition}
                className="space-y-12"
              >
                <header>
                  <div className="text-reveal-container">
                    <h2 
                      className="text-6xl md:text-8xl font-black tracking-tighter mb-12 text-reveal"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      PROJECTS
                    </h2>
                  </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { 
                      title: "Trivia Quiz Application", 
                      tag: "React.js, JavaScript, CSS, HTML",
                      description: "An interactive web-based quiz game built to test user knowledge. It features dynamic question rendering, state management for user progress, and a responsive, intuitive user interface.",
                      link: "https://github.com/Jasdish-Singh/Trivia_App" 
                    },
                    { 
                      title: "Messenger Application", 
                      tag: "Java, SQL",
                      description: "A real-time chat application with a secure user authentication system. It allows users to manage contacts, create/join groups, and send messages efficiently.",
                      link: "https://github.com/angaga2011/messenger_backend" 
                    },
                    { 
                      title: "NLP Email Spam Detection", 
                      tag: "Python, Scikit-learn, Pandas, TF-IDF, Naive Bayes",
                      description: "Led a team to develop an email spam detection model that achieved 87.13% accuracy. Performed data preprocessing and evaluation, addressing dataset imbalance.",
                      link: "#" 
                    },
                    { 
                      title: "Credit Card Fraud Detection", 
                      tag: "Python, Scikit-learn, Pandas, PCA",
                      description: "A machine learning system built to identify potentially fraudulent credit card transactions within a large, imbalanced dataset by applying PCA and using AUPRC as the primary evaluation metric.",
                      link: "https://github.com/Jasdish-Singh/Credit_Card" 
                    },
                    { 
                      title: "FTP Server", 
                      tag: "Java",
                      description: "A collaborative project to build a functional File Transfer Protocol server with features like secure file transfers, concurrent user support, and user permission systems.",
                      link: "#" 
                    },
                    { 
                      title: "Scientific Calculator", 
                      tag: "Java, Swing",
                      description: "A desktop application with an adaptable Graphical User Interface (GUI) providing 12 different scientific calculator operations.",
                      link: "https://github.com/Jasdish-Singh/GUI-Calculator-" 
                    },
                  ].map((project, index) => (
                    <motion.a 
                      key={index} 
                      href={project.link}
                      target={project.link !== "#" ? "_blank" : undefined}
                      rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                      className="group block space-y-4 p-6 border border-border hover:border-primary transition-colors bg-card hover:bg-accent/5"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-mono text-muted-foreground">0{index + 1}</span>
                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold leading-none group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.tag}</p>
                      <p className="text-sm leading-relaxed pt-2">{project.description}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation with Magnetic Button Effect */}
      <nav className="fixed bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-background via-background to-transparent z-50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex justify-between items-center border-t-2 border-foreground pt-6">
            <div className="hidden md:block text-sm font-bold tracking-widest uppercase">
              © 2025
            </div>
            
            <div className="flex gap-2 md:gap-4 bg-background/80 backdrop-blur-sm p-1 rounded-full border border-border/50 shadow-lg">
              {(["information", "projects"] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`
                    relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 magnetic-button
                    ${activeSection === section 
                      ? "text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }
                  `}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{section}</span>
                </button>
              ))}
            </div>

            <div className="hidden md:block text-sm font-bold tracking-widest uppercase">
              Portfolio
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

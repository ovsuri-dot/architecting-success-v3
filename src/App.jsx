import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Brain, 
  BookOpen, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  Sparkles,
  UserCheck,
  Home,
  Layers,
  Video,
  Send,
  Play,
  FileText,
  Smile,
  Compass,
  GraduationCap,
  HeartHandshake,
  Code2,
  Users,
  Eye,
  Globe,
  Linkedin,
  Facebook
} from 'lucide-react';

// ==========================================
// CENTRALIZED SITE CONTENT CONFIGURATION
// ==========================================
const SITE_CONTENT = {
  profile: {
    name: "O V Suresh Babu",
    designation: "Deputy General Manager, BEML Limited",
    role: "Executive Coach, Behavioral Architect & NLP Master Trainer",
    experience: "30+ Years of Engineering Execution & Transformational Leadership",
    photoUrl: "https://drive.google.com/thumbnail?id=1dJM69iDS_czMjBSyOFxadJHj8qRiSW83&sz=w500",
    bioSummary: "A seasoned corporate leader and engineering execution veteran combining over 30 years of high-stakes industrial project leadership with executive coaching and Neuro-Linguistic Programming mastery. Dedicated to bridging rigorous technical engineering principles with human excellence, cognitive science, and educational equity.",
    email: "ovsuri@gmail.com",
    phone: "+91 9481311666",
    location: "BEML Nagar, Kolar Gold Fields, Karnataka, India",
    trust: "Founder Chairman, OKS Memorial Trust",
    facebookUrl: "https://www.facebook.com/share/1Gq1gJC3KD/",
    linkedinUrl: "https://www.linkedin.com/in/o-v-suresh-babu-4211842a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  credentials: [
    { title: "NLP Master Trainer", org: "Advanced Behavioral Science" },
    { title: "Certified Emotional Intelligence Coach", org: "EQ Practitioner Framework" },
    { title: "Certified Cognitive Behavioral Coach", org: "CBT Systems" },
    { title: "Certified Communication & Behavior Practitioner", org: "Non-Verbal & Micro-Expressions" },
    { title: "Certified Child Psychologist", org: "Virtued Academy International" },
    { title: "Certified Body Language Expert", org: "Behavioral Posture Analysis" },
    { title: "Relationship Coach Diploma", org: "Complementary Therapists Accredited Association" }
  ],
  videos: {
    serviceActivities: "https://drive.google.com/file/d/1MFT4paa71KRKDIB1y5_o5522mx3q0_xZ/preview",
    trainingPrograms: "https://drive.google.com/file/d/1IVU0FLtDixXbjybEI_bLDJZvzoLLsJG8/preview",
    recognitions: "https://drive.google.com/file/d/1zvrn_JH1sNQWkgJ9WjZppaIjnPGZ9x5y/preview"
  },
  softwareHub: [
    {
      title: "C Programming & Systems Fundamentals",
      subtitle: "Memory management, pointers, and foundational computational logic.",
      principles: "Procedural determinism, explicit memory management, and hardware-level efficiency.",
      teachingApproach: "Building from basic variables and loops up to pointer arithmetic, dynamic memory allocation (`malloc`/`free`), and data structures.",
      technique: "Visualizing stack vs. heap memory layouts and tracing pointer references line by line.",
      driveUrl: "https://drive.google.com/file/d/1dj63MBaSRjYH0OOhKexJZ6Q_5fAp8l9n/view?usp=drivesdk"
    },
    {
      title: "Java & Object-Oriented Architecture",
      subtitle: "Robust enterprise development, inheritance, polymorphism, and JVM mechanics.",
      principles: "Write Once, Run Anywhere (WORA), encapsulation, SOLID design principles, and strict type safety.",
      teachingApproach: "Deconstructing real-world entities into classes, interfaces, exception handling, and multithreading.",
      technique: "Applying design patterns (Factory, Singleton, Observer) to maintain loosely coupled, highly maintainable codebases.",
      driveUrl: "https://drive.google.com/file/d/19oSCgAuyIV2BeoQ3SWvBubig2fqkCyVN/view?usp=drivesdk"
    },
    {
      title: "JavaScript & Modern Web Dynamics",
      subtitle: "Asynchronous programming, event loops, DOM manipulation, and ES6+ features.",
      principles: "Non-blocking asynchronous execution, event-driven architecture, and functional reactivity.",
      teachingApproach: "Mastering closures, promises, `async/await`, and component-driven UI development.",
      technique: "Tracing the JavaScript Event Loop (Call Stack, Web APIs, Callback Queue) to prevent rendering bottlenecks.",
      driveUrl: "https://drive.google.com/file/d/18KxSquvA-nXtPw4nDK0nxj9DE5o5mfnv/view?usp=drivesdk"
    },
    {
      title: "HTML5, CSS & Semantic Web Layouts",
      subtitle: "Accessible structuring, responsive grid systems, and high-contrast aesthetics.",
      principles: "Semantic markup, mobile-first design, accessibility (WCAG), and clean visual hierarchy.",
      teachingApproach: "Teaching structural tags (header, main, section) paired with modern Flexbox and Grid styling systems.",
      technique: "Using glassmorphism principles and high-contrast color overlays for professional UI polish.",
      driveUrl: "https://drive.google.com/file/d/1pmxCXmnfE1BgnNy2V50Ew18PU1zVf50M/view?usp=drivesdk"
    },
    {
      title: "Python & Advanced Scripting Ecosystems",
      subtitle: "Clean syntax, rapid prototyping, data science, and backend automation.",
      principles: "Readability counts, explicit is better than implicit, and pythonic data manipulation.",
      teachingApproach: "Guiding learners through list comprehensions, object-oriented python, API integrations, and modular architecture.",
      technique: "Leveraging virtual environments (`venv`) and robust testing suites (`pytest`) for clean deployments.",
      driveUrl: "https://drive.google.com/file/d/1zGt6tZRvQgVpNc2EGcYmRyTA-Hp1Pz88/view?usp=drivesdk"
    },
    {
      title: "Latest Technologies & AI Integration",
      subtitle: "Full-stack PWAs, cloud deployments, and AI-assisted engineering workflows.",
      principles: "Scalability, serverless computing, real-time synchronization, and AI prompt engineering.",
      teachingApproach: "Transitioning traditional developers into modern full-stack builders utilizing React, Vercel, Git, and LLM APIs.",
      technique: "Packaging web applications into offline-ready Progressive Web Apps (PWAs) and native Android/iOS containers.",
      driveUrl: "https://drive.google.com/file/d/1WhJC3_WHrt8vH6dMRcSiOxay15iHnCf6/view?usp=drivesdk"
    }
  ],
  relationshipModules: [
    {
      title: "Emotional Attunement & Empathic Listening",
      subtitle: "Bridging the psychological gap between husband and wife.",
      psychology: "Attachment Theory & Gottman Emotional Bank Account. Couples thrive when partners attune to each other's vulnerable emotional bids rather than retreating into defensiveness.",
      technique: "The 'Mirror and Validate' Protocol",
      tips: "Before offering solutions, repeat back what your partner felt in your own words: 'It sounds like today was deeply exhausting for you.'",
      example: "A husband pausing work to look directly into his wife's eyes, validating her daily stress instead of instantly troubleshooting.",
      driveUrl: "https://drive.google.com/file/d/1W-b5x82MrWS2VwdkJmYhpjretFcc6_DS/view?usp=drivesdk"
    },
    {
      title: "De-escalating Conflict & Softened Startups",
      subtitle: "Transforming arguments from win-lose battles to collaborative resolutions.",
      psychology: "Physiological flooding (when heart rate exceeds 100 bpm) shuts down the prefrontal cortex, triggering fight-or-flight responses between spouses.",
      technique: "Softened Startup & The 20-Minute Time-Out",
      tips: "Start sensitive discussions with 'I feel...' and 'I need...' statements rather than 'You always...' accusations. Take a 20-minute physical pause if heart rates spike.",
      example: "Agreeing to pause a heated evening debate to cool down, returning later with calm, affectionate communication.",
      driveUrl: "https://drive.google.com/file/d/18x2ImDadl3jkKz7BKMP_7ouFRPgN6mr2/view?usp=drivesdk"
    },
    {
      title: "Love Languages & Behavioral Appreciation",
      subtitle: "Translating affection into actions your partner naturally registers.",
      psychology: "Dr. Gary Chapman’s Love Languages framework indicates that emotional disconnection often stems from partners giving love in *their own* preferred language rather than receiving it in their partner's.",
      technique: "Weekly Love Language Audit",
      tips: "Identify whether your spouse values Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, or Physical Touch, and intentionally practice one daily.",
      example: "A husband taking over household chores (Acts of Service) because his wife's primary tank fills through shared burden-sharing.",
      driveUrl: "https://drive.google.com/file/d/1iNKHD_O8DdA5wv9DMbFxaJMUBm7uzzbz/view?usp=drivesdk"
    },
    {
      title: "Rebuilding Intimacy & Mutual Vulnerability",
      subtitle: "Cultivating deep psychological safety and lifelong romance.",
      psychology: "Vulnerability is the cornerstone of lasting intimacy. Brené Brown’s research shows that shame and emotional armor destroy marital closeness, whereas shared ritualized connection builds unbreakable bonds.",
      technique: "The Daily Stress-Reducing Conversation & Rituals of Connection",
      tips: "Spend 15 minutes every evening discussing day-to-day life *outside* of household logistics or children, maintaining a zero-blame environment.",
      example: "Setting aside dedicated weekend tech-free walks to reconnect emotionally and intellectually as partners.",
      driveUrl: "https://drive.google.com/file/d/1BCEmXX7nbWbKsHqpSKZZBNoWMotxKP7y/view?usp=drivesdk"
    }
  ],
  behavioralModules: [
    {
      title: "Transactional Analysis (TA) & Behavioral Frameworks",
      subtitle: "Understanding ego states (Parent-Adult-Child) to transform communication.",
      intro: "Developed by Eric Berne, TA analyzes human interactions and behavioral transactions to diagnose psychological communication barriers.",
      technique: "Adult-to-Adult Dialogue Alignment",
      tips: "Recognize when a conversation slips into critical parent or defensive child mode, and consciously pivot back to objective Adult reasoning.",
      example: "Responding to an agitated client complaint with calm, objective data (Adult ego state) instead of defensiveness.",
      driveUrl: "https://drive.google.com/file/d/1JzQtAfwUG_5wnA24Nl6_EStOYq9dwkly/view?usp=drivesdk"
    },
    {
      title: "Cognitive Behavioral Therapy (CBT) Masterclass",
      subtitle: "Dismantling cognitive distortions and restructuring negative thought loops.",
      intro: "CBT focuses on identifying dysfunctional thoughts, beliefs, and emotional loops, replacing them with objective, constructive cognitive frameworks.",
      technique: "Thought Record & Cognitive Restructuring",
      tips: "Catch negative automatic thoughts (NATs), examine the evidence objectively, and reframe them into balanced perspectives.",
      example: "Transforming 'I always fail under exam pressure' into 'With systematic revision and timed practice, I can manage exam scenarios effectively.'",
      driveUrl: "https://drive.google.com/file/d/1NVdhtwPA9XmVynVsRHa_x6lieWsWYolW/view?usp=drivesdk"
    },
    {
      title: "Advanced Memorization & Neuro-Learning Protocols",
      subtitle: "Biological encoding, spaced repetition, and active recall for lifelong retention.",
      intro: "Memory is not just fixed; it is constructed through synaptic plasticity. Leveraging biological sleep cycles and spaced intervals locks information into long-term potentiation (LTP).",
      technique: "The Feynman Technique & Spaced Repetition",
      tips: "Teach concepts simply in your own words. Review study material at 1-day, 3-day, and 7-day intervals.",
      example: "Using mnemonic memory palaces to memorize complex scientific formulas effortlessly.",
      driveUrl: "https://drive.google.com/file/d/18d2UFS7JErKMH8zD4nU2rAzpzwH9NP15/view?usp=drivesdk"
    },
    {
      title: "Focus Priming & Attention Architecture",
      subtitle: "Circadian rhythms, dopamine management, and eliminating cognitive fatigue.",
      intro: "Focus is governed by neurochemistry (dopamine and norepinephrine). Aligning study blocks with ultradian rhythms (90-minute focus cycles) prevents burnout.",
      technique: "The 90-Minute Focus Protocol with Somatic Resets",
      tips: "Hydrate adequately, eliminate digital notifications, and take 5-minute physiological sigh breaks to reset nervous system arousal.",
      example: "Switching off all mobile distractions 30 minutes before deep study to preserve prefrontal cortex executive control.",
      driveUrl: "https://drive.google.com/file/d/1wNPhbst-yZ_YRuHMCt5E8KBeEyOOxbSo/view?usp=drivesdk"
    }
  ],
  educationPsychologyModules: [
    {
      title: "Student-Teacher Psychology & Pressure-Proofing",
      subtitle: "Growth mindset, emotional safety, and managing academic performance anxiety.",
      intro: "Anxiety spikes cortisol, which directly impairs hippocampal memory retrieval. Creating an environment of psychological safety allows students to transition from survival mode to learning mode.",
      technique: "Reframing Test Anxiety as Physiological Excitement",
      tips: "Teachers should praise effort rather than fixed intelligence; students should reframe racing heartbeats before exams as physical readiness.",
      example: "A teacher using positive reinforcement and Socratic questioning rather than punitive correction to boost student confidence.",
      driveUrl: "https://drive.google.com/file/d/1W-b5x82MrWS2VwdkJmYhpjretFcc6_DS/view?usp=drivesdk"
    },
    {
      title: "High-Scoring Exam Strategy & Biological Optimization",
      subtitle: "Nutrition, neuro-genesis, and strategic paper-attempting frameworks.",
      intro: "Cognitive output is directly tied to physiological health: blood glucose regulation, cardiovascular oxygenation, and REM sleep architecture dictate exam day success.",
      technique: "Strategic Time-Boxing & Pre-Exam Neurological Priming",
      tips: "Get 8 hours of sleep before exam day (sleep consolidates memory); scan the question paper fully before answering.",
      example: "Allocating the first 5 minutes to prioritize high-yield questions, maximizing score output with minimal cognitive fatigue.",
      driveUrl: "https://drive.google.com/file/d/15-fC0VayZEDwjvsbyCoMgHWJNfQVfQaU/view?usp=drivesdk"
    }
  ],
  knowledgeVault: [
    {
      category: "English Vocabulary Masterclass (Class 1 - Degree)",
      description: "Class-wise high-yield vocabulary with meanings, etymological root words, synonyms, antonyms, and 30 exhaustive exercise modules.",
      target: "Class 1 to Degree Standards",
      driveUrl: "https://drive.google.com/file/d/1Pip27qrsKLBhaepuShZH4eC7MIlCMVbE/view?usp=drivesdk"
    },
    {
      category: "K-12 STEM Master Formula Compendium",
      description: "Class-wise crucial formulas in Mathematics, Physics, and Chemistry from Class 1 to PUC / Class 12.",
      target: "Class 1 to 12 / CBSE & State",
      driveUrl: "https://drive.google.com/file/d/1Ms0axPF3U2W7Hkg0MZDVVyLTWZ6fMNef/view?usp=drivesdk"
    },
    {
      category: "Quantitative Aptitude & Logical Reasoning Master Guide",
      description: "Quantitative aptitude and reasoning shortcut formulas with solved examples up to degree level.",
      target: "High School, Degree & Aspirants",
      driveUrl: "https://drive.google.com/file/d/1uL3Tp-iLbkyqBOmqr8t93iwYRRFybU6C/view?usp=drivesdk"
    },
    {
      category: "Competitive Exams Masterclass & GK / Current Affairs",
      description: "High-priority topics, formulas, strategies, and monthly current affairs compilations for Bank PO, GRE, UPSC, and State exams.",
      target: "Competitive Aspirants",
      driveUrl: "https://drive.google.com/file/d/1zLRYv0_UTvk3bwhSrnIQtcac7Dt4L7PK/view?usp=drivesdk"
    },
    {
      category: "Current Affairs & GK Question Bank",
      description: "Curated general knowledge questions, answers, and monthly current affairs compilations.",
      target: "General & Exam Aspirants",
      driveUrl: "https://drive.google.com/file/d/11kHy_9SV9uFF2uUqZ9YLaRMeSZo3X4H8/view?usp=drivesdk"
    }
  ],
  books: [
    { 
      title: "Architecting Success through Neuro-Linguistic Programming", 
      category: "NLP & Mastery", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=1BelUlS4iDLinaCKsQcqY7kc6Pj8tV8oI" 
    },
    { 
      title: "Architecting Success through Emotional Intelligence", 
      category: "EQ Leadership", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=1tnSouZUINYnJ1d34q6p0fxvRxX1eMFXV" 
    },
    { 
      title: "The Architecture of Lasting Love", 
      category: "Relationship Dynamics", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=1giygkYWzKFMXrq6HWNMNqd9shrCU2YyK" 
    },
    { 
      title: "The Pressure-Proof Student", 
      category: "Child Psychology & Youth", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=1SQ8C_23mQGgl4I5jcy4G9Au88JqR4mrL" 
    }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Analytics states for live visitor & download counts
  const [visitorCount, setVisitorCount] = useState(14285);
  const [downloadCount, setDownloadCount] = useState(6840);

  useEffect(() => {
    setVisitorCount(prev => prev + 1);
  }, []);

  const handleDownloadClick = () => {
    setDownloadCount(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, message: '' });

    const formData = new FormData(e.target);
    formData.append("access_key", "99445c6e-1616-4dff-b6a1-7acf8f7f4b4d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ submitted: true, message: 'Thank you! Your feedback has been successfully sent to O V Suresh Babu.' });
        e.target.reset();
      } else {
        setFormStatus({ submitted: false, message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ submitted: false, message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0B132B] font-sans selection:bg-[#C5A059] selection:text-white pb-20 md:pb-0">
      
      {/* SUPER APP HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E2DED0]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C5A059] bg-[#0B132B] shadow-md shrink-0">
              <img 
                src={SITE_CONTENT.profile.photoUrl} 
                alt={SITE_CONTENT.profile.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-serif font-bold text-xl tracking-wide block">ArchitectingSuccess<span className="text-[#C5A059]">.in</span></span>
              <span className="text-xs text-gray-600 tracking-wider uppercase">Super App Hub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 text-xs xl:text-sm font-medium tracking-wide">
            <button onClick={() => setActiveTab('home')} className={`transition hover:text-[#C5A059] ${activeTab === 'home' ? 'text-[#C5A059] font-bold' : ''}`}>Dashboard</button>
            <button onClick={() => setActiveTab('tech')} className={`transition hover:text-[#C5A059] ${activeTab === 'tech' ? 'text-[#C5A059] font-bold' : ''}`}>Tech & Code</button>
            <button onClick={() => setActiveTab('relationship')} className={`transition hover:text-[#C5A059] ${activeTab === 'relationship' ? 'text-[#C5A059] font-bold' : ''}`}>Relationships</button>
            <button onClick={() => setActiveTab('education')} className={`transition hover:text-[#C5A059] ${activeTab === 'education' ? 'text-[#C5A059] font-bold' : ''}`}>Students</button>
            <button onClick={() => setActiveTab('behavior')} className={`transition hover:text-[#C5A059] ${activeTab === 'behavior' ? 'text-[#C5A059] font-bold' : ''}`}>Life Skills</button>
            <button onClick={() => setActiveTab('vault')} className={`transition hover:text-[#C5A059] ${activeTab === 'vault' ? 'text-[#C5A059] font-bold' : ''}`}>Vault</button>
            <button onClick={() => setActiveTab('library')} className={`transition hover:text-[#C5A059] ${activeTab === 'library' ? 'text-[#C5A059] font-bold' : ''}`}>Library</button>
            <button onClick={() => setActiveTab('competitions')} className={`transition hover:text-[#C5A059] ${activeTab === 'competitions' ? 'text-[#C5A059] font-bold' : ''}`}>Portals</button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#0B132B]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-[#E2DED0] px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Dashboard</button>
            <button onClick={() => { setActiveTab('tech'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Tech & Code Hub</button>
            <button onClick={() => { setActiveTab('relationship'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Relationship Guide</button>
            <button onClick={() => { setActiveTab('education'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Student & Teacher Hub</button>
            <button onClick={() => { setActiveTab('behavior'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Life Skills & CBT</button>
            <button onClick={() => { setActiveTab('vault'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Knowledge Vault</button>
            <button onClick={() => { setActiveTab('library'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">Digital Library</button>
            <button onClick={() => { setActiveTab('competitions'); setMobileMenuOpen(false); }} className="block text-lg font-medium w-full text-left">OKS Portals</button>
            <button onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} className="block text-lg font-medium text-[#C5A059] w-full text-left">Feedback & Inquire</button>
          </div>
        )}
      </header>

      {/* MAIN VIEW AREA */}
      <main>
        {activeTab === 'home' && (
          <div>
            {/* WEBSITE INTRODUCTION BANNER */}
            <section className="bg-[#0B132B] text-white py-12 border-b border-[#C5A059]/30">
              <div className="max-w-6xl mx-auto px-6 space-y-4 text-center">
                <span className="text-[#C5A059] text-xs font-semibold tracking-widest uppercase">About ArchitectingSuccess.in</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Empowering Human Excellence & Technical Mastery</h2>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                  <strong>ArchitectingSuccess.in</strong> is the premier professional hub created by <strong>O V Suresh Babu</strong> (Deputy General Manager at BEML Limited, NLP Master Trainer, Behavioral Architect, and Founder Chairman of OKS Memorial Trust). This platform integrates over 30 years of industrial engineering execution with advanced behavioral science, cognitive psychology, and educational mentorship to empower executives, students, couples, and technologists worldwide.
                </p>
              </div>
            </section>

            {/* HERO & INTRODUCTION */}
            <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#FAF9F6] to-[#F2EFE9]">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-semibold tracking-widest uppercase border border-[#C5A059]/20">
                    <Sparkles size={14} />
                    <span>{SITE_CONTENT.profile.role}</span>
                  </div>
                  
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0B132B]">
                    Mastering the Blueprint of <span className="text-[#C5A059] italic">Human & Technical Excellence</span>.
                  </h1>
                  
                  <p className="text-lg text-gray-700 leading-relaxed font-sans">
                    {SITE_CONTENT.profile.bioSummary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-white border border-[#E2DED0] shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">Engineering Leadership</span>
                      <span className="font-serif font-bold text-base text-[#0B132B]">{SITE_CONTENT.profile.designation}</span>
                    </div>
                    <div className="p-4 bg-white border border-[#E2DED0] shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">Social Impact</span>
                      <span className="font-serif font-bold text-base text-[#0B132B]">{SITE_CONTENT.profile.trust}</span>
                    </div>
                  </div>

                  {/* ANALYTICS STATS BAR */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-[#0B132B] text-white flex items-center space-x-4 border border-[#C5A059]/30">
                      <div className="p-3 bg-[#C5A059]/20 text-[#C5A059]">
                        <Eye size={24} />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider block">Total Visitors</span>
                        <span className="font-serif font-bold text-xl text-white">{visitorCount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-[#0B132B] text-white flex items-center space-x-4 border border-[#C5A059]/30">
                      <div className="p-3 bg-[#C5A059]/20 text-[#C5A059]">
                        <Download size={24} />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider block">Total Downloads</span>
                        <span className="font-serif font-bold text-xl text-white">{downloadCount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                    <button onClick={() => setActiveTab('tech')} className="inline-flex items-center justify-center px-8 py-4 bg-[#0B132B] text-white font-medium hover:bg-[#C5A059] hover:text-[#0B132B] transition">
                      Explore Tech & Code Hub <ArrowRight className="ml-2" size={18} />
                    </button>
                    <button onClick={() => setActiveTab('relationship')} className="inline-flex items-center justify-center px-8 py-4 border border-[#0B132B] text-[#0B132B] font-medium hover:bg-[#0B132B] hover:text-white transition">
                      Relationship Guide
                    </button>
                  </div>
                </div>

                {/* Portrait Card */}
                <div className="lg:col-span-5">
                  <div className="bg-[#0B132B] p-8 text-white shadow-2xl relative overflow-hidden border border-[#C5A059]/30">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="w-52 h-52 sm:w-56 sm:h-56 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-[#C5A059]/60 bg-[#16213E] shadow-lg">
                      <img 
                        src={SITE_CONTENT.profile.photoUrl} 
                        alt={SITE_CONTENT.profile.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center space-y-1">
                      <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">Executive Profile</span>
                      <h3 className="font-serif text-2xl font-bold">{SITE_CONTENT.profile.name}</h3>
                      <p className="text-sm text-gray-300">{SITE_CONTENT.profile.designation}</p>
                    </div>
                    <div className="border-t border-white/10 mt-6 pt-5 space-y-3 text-sm text-gray-300">
                      <div className="flex items-center space-x-3">
                        <UserCheck size={16} className="text-[#C5A059] shrink-0" />
                        <span>{SITE_CONTENT.profile.trust}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ShieldCheck size={16} className="text-[#C5A059] shrink-0" />
                        <span>{SITE_CONTENT.profile.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* VIDEOS SHOWCASE SECTION */}
            <section id="videos-section"

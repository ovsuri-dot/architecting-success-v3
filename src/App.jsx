import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Brain,
  BookOpen,
  Award,
  Menu,
  X,
  ArrowRight,
  Download,
  Sparkles,
  UserCheck,
  Home,
  FileText,
  GraduationCap,
  HeartHandshake,
  Code2,
  Eye,
  Globe,
  Linkedin,
  Facebook,
  Calculator,
  Mic,
  Trophy,
  Layers,
  ExternalLink
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
    bioSummary:
      "A seasoned corporate leader and engineering execution veteran combining over 30 years of high-stakes industrial project leadership with executive coaching and Neuro-Linguistic Programming mastery. Dedicated to bridging rigorous technical engineering principles with human excellence, cognitive science, and educational equity.",
    email: "ovsuri@gmail.com",
    phone: "+91 9481311666",
    location: "BEML Nagar, Kolar Gold Fields, Karnataka, India",
    trust: "Founder Chairman, OKS Memorial Trust",
    facebookUrl: "https://www.facebook.com/share/1Gq1gJC3KD/",
    linkedinUrl:
      "https://www.linkedin.com/in/o-v-suresh-babu-4211842a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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
  integratedApps: [
    {
      id: "word-power",
      title: "Word Power Made Easy (Norman Lewis)",
      badge: "Vocabulary & Etymology",
      route: "https://word-power-made-easy-oksmt-o-v-sure.vercel.app",
      summary: "Root words, Greek/Latin etymology, personality & specialist terms, and interactive vocabulary practice."
    },
    {
      id: "spelling-bee",
      title: "OKSMT Spelling Bee Championship",
      badge: "6 Categories × 20 Rounds",
      route: "https://oksmt-spelling-bee-championship-o-v-lovat.vercel.app",
      summary: "Multi-grade spelling rounds from phonics and silent letters to classical roots and championship finals."
    },
    {
      id: "quant-aptitude",
      title: "OKSMT Quantitative Aptitude Test Series",
      badge: "21 Chapters + 10 Grand Mocks",
      route: "https://oksmt-quantitative-aptitude-test-se.vercel.app",
      summary: "Arithmetic, algebra, geometry, mensuration, Vedic maths shortcuts, and full-length mock tests."
    },
    {
      id: "logical-reasoning",
      title: "OKSMT Logical Reasoning & Analytical Ability",
      badge: "20 Chapters + 10 Grand Mocks",
      route: "https://oksmt-logical-reasoning-analytical.vercel.app",
      summary: "Number/letter series, coding-decoding, syllogisms, blood relations, clocks, directions, and mock tests."
    },
    {
      id: "science-aptitude",
      title: "OKSMT General & Applied Science Test Series",
      badge: "20 Chapters + 10 Grand Mocks",
      route: "https://oksmt-general-applied-science-test.vercel.app",
      summary: "Physics, chemistry, and biology test series across school, campus, and competitive exam levels."
    },
    {
      id: "cbse-puc",
      title: "OKSMT CBSE & PUC Complete Mastery (Class 1–12 & 1st/2nd PUC)",
      badge: "Exercises + 5 Papers + Keys",
      route: "https://oksmt-cbse-puc-complete-academic-ma.vercel.app",
      summary: "Chapter concepts, textbook exercises, exam-focused questions, practice papers, and answer keys."
    },
    {
      id: "karnataka-state",
      title: "OKSMT Karnataka State Syllabus (Class 1–10 SSLC & 1st/2nd PUC)",
      badge: "English Medium & ಕನ್ನಡ ಮಾಧ್ಯಮ",
      route: "https://state-beige.vercel.app",
      summary: "Karnataka State SSLC and PUC learning & practice modules in English Medium and ಕನ್ನಡ ಮಾಧ್ಯಮ."
    }
  ],
  softwareHub: [
    {
      title: "C Programming & Systems Fundamentals",
      subtitle: "Memory management, pointers, and foundational computational logic.",
      principles: "Procedural determinism, explicit memory management, and hardware-level efficiency.",
      teachingApproach:
        "Building from basic variables and loops up to pointer arithmetic, dynamic memory allocation (`malloc`/`free`), and data structures.",
      technique: "Visualizing stack vs. heap memory layouts and tracing pointer references line by line.",
      driveUrl: "https://drive.google.com/file/d/1BCEmXX7nbWbKsHqpSKZZBNoWMotxKP7y/view?usp=drivesdk"
    },
    {
      title: "Java & Object-Oriented Architecture",
      subtitle: "Robust enterprise development, inheritance, polymorphism, and JVM mechanics.",
      principles: "Write Once, Run Anywhere (WORA), encapsulation, SOLID design principles, and strict type safety.",
      teachingApproach:
        "Deconstructing real-world entities into classes, interfaces, exception handling, and multithreading.",
      technique:
        "Applying design patterns (Factory, Singleton, Observer) to maintain loosely coupled, highly maintainable codebases.",
      driveUrl: "https://drive.google.com/file/d/1dj63MBaSRjYH0OOhKexJZ6Q_5fAp8l9n/view?usp=drivesdk"
    },
    {
      title: "JavaScript & Modern Web Dynamics",
      subtitle: "Asynchronous programming, event loops, DOM manipulation, and ES6+ features.",
      principles: "Non-blocking asynchronous execution, event-driven architecture, and functional reactivity.",
      teachingApproach: "Mastering closures, promises, `async/await`, and component-driven UI development.",
      technique: "Tracing the JavaScript Event Loop (Call Stack, Web APIs, Callback Queue) to prevent rendering bottlenecks.",
      driveUrl: "https://drive.google.com/file/d/19oSCgAuyIV2BeoQ3SWvBubig2fqkCyVN/view?usp=drivesdk"
    },
    {
      title: "HTML5, CSS & Semantic Web Layouts",
      subtitle: "Accessible structuring, responsive grid systems, and high-contrast aesthetics.",
      principles: "Semantic markup, mobile-first design, accessibility (WCAG), and clean visual hierarchy.",
      teachingApproach: "Teaching structural tags (header, main, section) paired with modern Flexbox and Grid styling systems.",
      technique: "Using glassmorphism principles and high-contrast color overlays for professional UI polish.",
      driveUrl: "https://drive.google.com/file/d/18KxSquvA-nXtPw4nDK0nxj9DE5o5mfnv/view?usp=drivesdk"
    },
    {
      title: "Python & Advanced Scripting Ecosystems",
      subtitle: "Clean syntax, rapid prototyping, data science, and backend automation.",
      principles: "Readability counts, explicit is better than implicit, and pythonic data manipulation.",
      teachingApproach:
        "Guiding learners through list comprehensions, object-oriented python, API integrations, and modular architecture.",
      technique: "Leveraging virtual environments (`venv`) and robust testing suites (`pytest`) for clean deployments.",
      driveUrl: "https://drive.google.com/file/d/1pmxCXmnfE1BgnNy2V50Ew18PU1zVf50M/view?usp=drivesdk"
    },
    {
      title: "Latest Technologies & AI Integration",
      subtitle: "Full-stack PWAs, cloud deployments, and AI-assisted engineering workflows.",
      principles: "Scalability, serverless computing, real-time synchronization, and AI prompt engineering.",
      teachingApproach:
        "Transitioning traditional developers into modern full-stack builders utilizing React, Vercel, Git, and LLM APIs.",
      technique:
        "Packaging web applications into offline-ready Progressive Web Apps (PWAs) and native Android/iOS containers.",
      driveUrl: "https://drive.google.com/file/d/1zGt6tZRvQgVpNc2EGcYmRyTA-Hp1Pz88/view?usp=drivesdk"
    }
  ],
  relationshipModules: [
    {
      title: "Emotional Attunement & Empathic Listening",
      subtitle: "Bridging the psychological gap between husband and wife.",
      psychology:
        "Attachment Theory & Gottman Emotional Bank Account. Couples thrive when partners attune to each other's vulnerable emotional bids rather than retreating into defensiveness.",
      technique: "The 'Mirror and Validate' Protocol",
      tips:
        "Before offering solutions, repeat back what your partner felt in your own words: 'It sounds like today was deeply exhausting for you.'",
      example:
        "A husband pausing work to look directly into his wife's eyes, validating her daily stress instead of instantly troubleshooting.",
      driveUrl: "https://drive.google.com/file/d/15-fC0VayZEDwjvsbyCoMgHWJNfQVfQaU/view?usp=drivesdk"
    },
    {
      title: "De-escalating Conflict & Softened Startups",
      subtitle: "Transforming arguments from win-lose battles to collaborative resolutions.",
      psychology:
        "Physiological flooding (when heart rate exceeds 100 bpm) shuts down the prefrontal cortex, triggering fight-or-flight responses between spouses.",
      technique: "Softened Startup & The 20-Minute Time-Out",
      tips:
        "Start sensitive discussions with 'I feel...' and 'I need...' statements rather than 'You always...' accusations. Take a 20-minute physical pause if heart rates spike.",
      example:
        "Agreeing to pause a heated evening debate to cool down, returning later with calm, affectionate communication.",
      driveUrl: "https://drive.google.com/file/d/1yupo8dqr441PC-0b-ys7f5_iPCkLl3st/view?usp=drivesdk"
    },
    {
      title: "Love Languages & Behavioral Appreciation",
      subtitle: "Translating affection into actions your partner naturally registers.",
      psychology:
        "Dr. Gary Chapman’s Love Languages framework indicates that emotional disconnection often stems from partners giving love in *their own* preferred language rather than receiving it in their partner's.",
      technique: "Weekly Love Language Audit",
      tips:
        "Identify whether your spouse values Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, or Physical Touch, and intentionally practice one daily.",
      example:
        "A husband taking over household chores (Acts of Service) because his wife's primary tank fills through shared burden-sharing.",
      driveUrl: "https://drive.google.com/file/d/18x2ImDadl3jkKz7BKMP_7ouFRPgN6mr2/view?usp=drivesdk"
    },
    {
      title: "Rebuilding Intimacy & Mutual Vulnerability",
      subtitle: "Cultivating deep psychological safety and lifelong romance.",
      psychology:
        "Vulnerability is the cornerstone of lasting intimacy. Brené Brown’s research shows that shame and emotional armor destroy marital closeness, whereas shared ritualized connection builds unbreakable bonds.",
      technique: "The Daily Stress-Reducing Conversation & Rituals of Connection",
      tips:
        "Spend 15 minutes every evening discussing day-to-day life *outside* of household logistics or children, maintaining a zero-blame environment.",
      example:
        "Setting aside dedicated weekend tech-free walks to reconnect emotionally and intellectually as partners.",
      driveUrl: "https://drive.google.com/file/d/1iNKHD_O8DdA5wv9DMbFxaJMUBm7uzzbz/view?usp=drivesdk"
    }
  ],
  behavioralModules: [
    {
      title: "Neuro-Linguistic Programming (NLP)",
      subtitle: "Rewiring mental patterns and cognitive anchors for peak performance.",
      intro:
        "NLP explores the fundamental dynamics between mind (neuro), language (linguistic), and behavioral patterns learned through experience (programming).",
      technique: "Anchoring & Reframing",
      tips: "Identify limiting self-talk and replace internal dialogue with empowering somatic anchors.",
      example: "Using the STEPPA model to reframe a stressful corporate deadline into an exciting strategic challenge.",
      driveUrl: "https://drive.google.com/file/d/18d2UFS7JErKMH8zD4nU2rAzpzwH9NP15/view?usp=drivesdk"
    },
    {
      title: "Emotional Intelligence (EQ)",
      subtitle: "Mastering self-awareness, emotional regulation, and empathetic leadership.",
      intro:
        "EQ is the capacity to recognize our own emotions and those of others, guiding thinking, behavior, and interpersonal bonding.",
      technique: "ABC-DE-EF Emotional Audit",
      tips: "Pause before reacting; separate the triggering event from your emotional interpretation.",
      example:
        "A leader diffusing a heated team conflict by acknowledging underlying frustrations rather than reacting defensively.",
      driveUrl: "https://drive.google.com/file/d/11kHy_9SV9uFF2uUqZ9YLaRMeSZo3X4H8/view?usp=drivesdk"
    },
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      subtitle: "Dismantling cognitive distortions and restructuring negative thought loops.",
      intro:
        "CBT focuses on identifying dysfunctional thoughts, beliefs, and emotional loops, replacing them with objective, constructive cognitive frameworks.",
      technique: "Thought Record & Cognitive Restructuring",
      tips:
        "Catch negative automatic thoughts (NATs), examine the evidence objectively, and reframe them into balanced perspectives.",
      example:
        "Transforming 'I always fail under exam pressure' into 'With systematic revision and timed practice, I can manage exam scenarios effectively.'",
      driveUrl: "https://drive.google.com/file/d/1JzQtAfwUG_5wnA24Nl6_EStOYq9dwkly/view?usp=drivesdk"
    },
    {
      title: "Non-Verbal Gestures & 'Zero-Vocals'",
      subtitle: "Executive presence through micro-expressions, posture, and spatial awareness.",
      intro:
        "Over 75% of human communication is non-verbal. Mastering body language projects authority, calmness, and profound trustworthiness.",
      technique: "Open Posture & Congruent Micro-Expressions",
      tips: "Maintain steady eye contact, keep hands open and relaxed, and eliminate nervous fidgeting.",
      example:
        "Entering a boardroom with a grounded posture and measured spatial presence to command immediate respect without raising your voice.",
      driveUrl: "https://drive.google.com/file/d/1F6iePehQvyeG7yVXKIv0ObsfkOxPhinS/view?usp=drivesdk"
    },
    {
      title: "Transactional Analysis (TA)",
      subtitle: "Understanding ego states (Parent-Adult-Child) to transform communication.",
      intro:
        "Developed by Eric Berne, TA analyzes human interactions and behavioral transactions to diagnose psychological communication barriers.",
      technique: "Adult-to-Adult Dialogue Alignment",
      tips:
        "Recognize when a conversation slips into critical parent or defensive child mode, and consciously pivot back to objective Adult reasoning.",
      example:
        "Responding to an agitated client complaint with calm, objective data (Adult ego state) instead of defensiveness.",
      driveUrl: "https://drive.google.com/file/d/11kHy_9SV9uFF2uUqZ9YLaRMeSZo3X4H8/view?usp=drivesdk"
    }
  ],
  educationPsychologyModules: [
    {
      title: "Advanced Memorization & Neuro-Learning",
      subtitle: "Biological encoding, spaced repetition, and active recall for lifelong retention.",
      intro:
        "Memory is not just fixed; it is constructed through synaptic plasticity. Leveraging biological sleep cycles and spaced intervals locks information into long-term potentiation (LTP).",
      technique: "The Feynman Technique & Spaced Repetition",
      tips: "Teach concepts simply in your own words. Review study material at 1-day, 3-day, and 7-day intervals.",
      example: "Using mnemonic memory palaces to memorize complex scientific formulas effortlessly.",
      driveUrl: "https://drive.google.com/file/d/1NVdhtwPA9XmVynVsRHa_x6lieWsWYolW/view?usp=drivesdk"
    },
    {
      title: "Focus, Attention Span & Physiological Priming",
      subtitle: "Circadian rhythms, dopamine management, and eliminating cognitive fatigue.",
      intro:
        "Focus is governed by neurochemistry (dopamine and norepinephrine). Aligning study blocks with ultradian rhythms (90-minute focus cycles) prevents burnout.",
      technique: "The 90-Minute Focus Protocol with Somatic Resets",
      tips:
        "Hydrate adequately, eliminate digital notifications, and take 5-minute physiological sigh breaks to reset nervous system arousal.",
      example:
        "Switching off all mobile distractions 30 minutes before deep study to preserve prefrontal cortex executive control.",
      driveUrl: "https://drive.google.com/file/d/18d2UFS7JErKMH8zD4nU2rAzpzwH9NP15/view?usp=drivesdk"
    },
    {
      title: "Student & Teacher Psychology Mastery",
      subtitle: "Growth mindset, emotional safety, and managing academic performance anxiety.",
      intro:
        "Anxiety spikes cortisol, which directly impairs hippocampal memory retrieval. Creating an environment of psychological safety allows students to transition from survival mode to learning mode.",
      technique: "Reframing Test Anxiety as Physiological Excitement",
      tips:
        "Teachers should praise effort rather than fixed intelligence; students should reframe racing heartbeats before exams as physical readiness.",
      example:
        "A teacher using positive reinforcement and Socratic questioning rather than punitive correction to boost student confidence.",
      driveUrl: "https://drive.google.com/file/d/1wNPhbst-yZ_YRuHMCt5E8KBeEyOOxbSo/view?usp=drivesdk"
    },
    {
      title: "High-Scoring Exam Strategies & Biological Optimization",
      subtitle: "Nutrition, neuro-genesis, and strategic paper-attempting frameworks.",
      intro:
        "Cognitive output is directly tied to physiological health: blood glucose regulation, cardiovascular oxygenation, and REM sleep architecture dictate exam day success.",
      technique: "Strategic Time-Boxing & Pre-Exam Neurological Priming",
      tips:
        "Get 8 hours of sleep before exam day (sleep consolidates memory); scan the question paper fully before answering.",
      example:
        "Allocating the first 5 minutes to prioritize high-yield questions, maximizing score output with minimal cognitive fatigue.",
      driveUrl: "https://drive.google.com/file/d/1W-b5x82MrWS2VwdkJmYhpjretFcc6_DS/view?usp=drivesdk"
    }
  ],
  knowledgeVault: [
    {
      category: "K-12 Math & Science Formulas",
      description: "Class-wise crucial formulas in Mathematics, Physics, and Chemistry from Class 1 to PUC.",
      target: "Class 1 to PUC / CBSE & State",
      driveUrl: "https://drive.google.com/file/d/1Ms0axPF3U2W7Hkg0MZDVVyLTWZ6fMNef/view?usp=drivesdk"
    },
    {
      category: "English Vocabulary & Exercises",
      description:
        "Class-wise high-yield vocabulary with synonyms, antonyms, fill-in-the-blanks, jumbles, and fun word activities.",
      target: "All Classes (Primary to High School)",
      driveUrl: "https://drive.google.com/file/d/1Pip27qrsKLBhaepuShZH4eC7MIlCMVbE/view?usp=drivesdk"
    },
    {
      category: "Aptitude & Logical Reasoning Formulas",
      description: "Quantitative aptitude and reasoning shortcut formulas with solved examples up to degree level.",
      target: "High School, Degree & Aspirants",
      driveUrl: "https://drive.google.com/file/d/1uL3Tp-iLbkyqBOmqr8t93iwYRRFybU6C/view?usp=drivesdk"
    },
    {
      category: "Competitive Exams Masterclass",
      description:
        "High-priority topics, formulas, and strategies for Bank PO, GRE, TOEFL, UPSC Civils, and State Group exams.",
      target: "Competitive Aspirants",
      driveUrl: "https://drive.google.com/file/d/1zLRYv0_UTvk3bwhSrnIQtcac7Dt4L7PK/view?usp=drivesdk"
    },
    {
      category: "Current Affairs & GK Question Bank",
      description: "Curated general knowledge questions, answers, and monthly current affairs compilations.",
      target: "General & Exam Aspirants",
      driveUrl: "https://drive.google.com/file/d/1WhJC3_WHrt8vH6dMRcSiOxay15iHnCf6/view?usp=drivesdk"
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
  const [suiteFilter, setSuiteFilter] = useState('all');

  // Analytics states for live visitor & download counts
  const [visitorCount, setVisitorCount] = useState(14285);
  const [downloadCount, setDownloadCount] = useState(6840);

  useEffect(() => {
    setVisitorCount((prev) => prev + 1);
  }, []);

  const handleDownloadClick = () => {
    setDownloadCount((prev) => prev + 1);
  };

  const filteredSuites = SITE_CONTENT.integratedApps.filter((item) => {
    if (suiteFilter === 'all') return true;
    if (suiteFilter === 'school') return ['cbse-puc', 'karnataka-state', 'spelling-bee'].includes(item.id);
    if (suiteFilter === 'aptitude') return ['quant-aptitude', 'logical-reasoning', 'science-aptitude'].includes(item.id);
    if (suiteFilter === 'language') return ['word-power', 'spelling-bee'].includes(item.id);
    return true;
  });

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
        setFormStatus({
          submitted: true,
          message: 'Thank you! Your feedback has been successfully sent to O V Suresh Babu.'
        });
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
              <span className="font-serif font-bold text-xl tracking-wide block">
                ArchitectingSuccess<span className="text-[#C5A059]">.in</span>
              </span>
              <span className="text-xs text-gray-600 tracking-wider uppercase">Super App Hub • OKSMT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 text-xs xl:text-sm font-medium tracking-wide">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'home' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('competitions')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'competitions' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Test Series &amp; Portals
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'tech' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Tech &amp; Code
            </button>
            <button
              onClick={() => setActiveTab('relationship')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'relationship' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Relationships
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'education' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('behavior')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'behavior' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Life Skills
            </button>
            <button
              onClick={() => setActiveTab('vault')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'vault' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Vault
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`transition hover:text-[#C5A059] ${activeTab === 'library' ? 'text-[#C5A059] font-bold' : ''}`}
            >
              Library
            </button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#0B132B]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-[#E2DED0] px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setActiveTab('competitions');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Test Series &amp; Portals (7 Suites)
            </button>
            <button
              onClick={() => {
                setActiveTab('tech');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Tech &amp; Code Hub
            </button>
            <button
              onClick={() => {
                setActiveTab('relationship');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Relationship Guide
            </button>
            <button
              onClick={() => {
                setActiveTab('education');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Student &amp; Teacher Hub
            </button>
            <button
              onClick={() => {
                setActiveTab('behavior');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Life Skills &amp; CBT
            </button>
            <button
              onClick={() => {
                setActiveTab('vault');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Knowledge Vault
            </button>
            <button
              onClick={() => {
                setActiveTab('library');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium w-full text-left"
            >
              Digital Library
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-[#C5A059] w-full text-left"
            >
              Feedback &amp; Inquire
            </button>
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
                <span className="text-[#C5A059] text-xs font-semibold tracking-widest uppercase">
                  About ArchitectingSuccess.in • OKSMT (OKS Memorial Trust)
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  Empowering Human Excellence &amp; Technical Mastery
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                  <strong>ArchitectingSuccess.in</strong> is the premier learning &amp; coaching hub created by{' '}
                  <strong>O V Suresh Babu</strong> (Deputy General Manager at BEML Limited, NLP Master Trainer, Behavioral
                  Architect, and Founder Chairman of OKS Memorial Trust). It unites 30+ years of engineering execution,
                  behavioral coaching, and 7 integrated academic &amp; test-series modules across English, Kannada, CBSE,
                  Karnataka State (SSLC &amp; PUC), Quantitative Aptitude, Logical Reasoning, Science, and Spelling Bee.
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
                    Mastering the Blueprint of{' '}
                    <span className="text-[#C5A059] italic">Human &amp; Technical Excellence</span>.
                  </h1>

                  <p className="text-lg text-gray-700 leading-relaxed font-sans">{SITE_CONTENT.profile.bioSummary}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-white border border-[#E2DED0] shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Engineering Leadership
                      </span>
                      <span className="font-serif font-bold text-base text-[#0B132B]">
                        {SITE_CONTENT.profile.designation}
                      </span>
                    </div>
                    <div className="p-4 bg-white border border-[#E2DED0] shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Social Impact
                      </span>
                      <span className="font-serif font-bold text-base text-[#0B132B]">
                        {SITE_CONTENT.profile.trust}
                      </span>
                    </div>
                  </div>

                  {/* GOVT SCHOOL SUPPORT PORTAL QUICK BANNER */}
                  <div className="p-6 bg-[#0B132B] text-white border-2 border-[#C5A059] shadow-xl relative overflow-hidden space-y-4">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-[#C5A059] text-[#0B132B] rounded">
                          <Globe size={24} />
                        </div>
                        <div>
                          <span className="text-xs text-[#C5A059] font-bold uppercase tracking-widest">
                            Featured Initiative
                          </span>
                          <h3 className="font-serif text-xl font-bold">Govt School Support Portal &amp; Test Suites</h3>
                        </div>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1 bg-[#C5A059]/20 text-[#C5A059] text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/40">
                        Live Portal
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Launch the OKSMT Govt School Support Portal or open any of our 7 integrated learning &amp; test
                      series suites (Word Power, Spelling Bee, Quant, Reasoning, Science, CBSE/PUC &amp; Karnataka State).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href="https://gs1-neon.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center py-3 px-4 bg-[#C5A059] text-[#0B132B] font-bold text-sm hover:bg-white transition"
                      >
                        Govt School Portal <ArrowRight className="ml-2" size={16} />
                      </a>
                      <button
                        onClick={() => setActiveTab('competitions')}
                        className="inline-flex items-center justify-center py-3 px-4 bg-white/10 text-white border border-[#C5A059]/50 font-bold text-sm hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                      >
                        <Layers className="mr-2" size={16} /> Open 7 Test Suites
                      </button>
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
                      <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                        Executive Profile
                      </span>
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

            {/* INTEGRATED LEARNING SUITES QUICK STRIP ON DASHBOARD */}
            <section className="py-16 bg-[#FAF9F6] border-t border-[#E2DED0]">
              <div className="max-w-7xl mx-auto px-6 space-y-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                      Integrated OKSMT &amp; ArchitectingSuccess.in Modules
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-[#0B132B]">
                      7 Complete Academic, Aptitude &amp; Competition Suites
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveTab('competitions')}
                    className="inline-flex items-center px-5 py-2.5 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                  >
                    View All Portals &amp; Suites <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SITE_CONTENT.integratedApps.map((app) => (
                    <div
                      key={app.id}
                      className="bg-white p-6 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#C5A059] transition"
                    >
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">{app.badge}</span>
                        <h3 className="font-serif text-xl font-bold text-[#0B132B]">{app.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{app.summary}</p>
                      </div>
                      <div className="pt-2">
                        <a
                          href={app.route}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 bg-[#0B132B] text-white text-xs font-bold hover:bg-[#C5A059] hover:text-[#0B132B] transition inline-flex items-center justify-center gap-1.5"
                        >
                          <span>Launch Application</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* VIDEOS SHOWCASE SECTION */}
            <section id="videos-section" className="py-20 bg-white border-y border-[#E2DED0]">
              <div className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">Visual Showcase</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold">
                    Training Programs, Service Activities &amp; Recognitions
                  </h2>
                  <p className="text-gray-600">
                    Watch our highlights and media updates directly as you open the platform.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-[#FAF9F6] p-6 border border-[#E2DED0] shadow-sm space-y-4">
                    <h3 className="font-serif font-bold text-xl text-[#0B132B]">Training Programs</h3>
                    <p className="text-xs text-gray-500">Executive coaching &amp; behavioral architecture sessions.</p>
                    <div className="aspect-video w-full bg-black/10 rounded overflow-hidden border border-[#E2DED0]">
                      <iframe
                        src={SITE_CONTENT.videos.trainingPrograms}
                        title="Training Programs"
                        className="w-full h-full"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  </div>
                  <div className="bg-[#FAF9F6] p-6 border border-[#E2DED0] shadow-sm space-y-4">
                    <h3 className="font-serif font-bold text-xl text-[#0B132B]">Service Activities</h3>
                    <p className="text-xs text-gray-500">OKS Memorial Trust community initiatives &amp; events.</p>
                    <div className="aspect-video w-full bg-black/10 rounded overflow-hidden border border-[#E2DED0]">
                      <iframe
                        src={SITE_CONTENT.videos.serviceActivities}
                        title="Service Activities"
                        className="w-full h-full"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  </div>
                  <div className="bg-[#FAF9F6] p-6 border border-[#E2DED0] shadow-sm space-y-4">
                    <h3 className="font-serif font-bold text-xl text-[#0B132B]">Recognitions &amp; Honors</h3>
                    <p className="text-xs text-gray-500">Awards, accolades, and milestone recognitions.</p>
                    <div className="aspect-video w-full bg-black/10 rounded overflow-hidden border border-[#E2DED0]">
                      <iframe
                        src={SITE_CONTENT.videos.recognitions}
                        title="Recognitions"
                        className="w-full h-full"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CREDENTIALS BADGES */}
            <section className="py-20 bg-[#FAF9F6]">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <h2 className="font-serif text-3xl font-bold">Accreditations &amp; Certifications</h2>
                  <p className="text-gray-600">Globally recognized credentials in cognitive frameworks and human psychology.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SITE_CONTENT.credentials.map((cred, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white border border-[#E2DED0] space-y-3 hover:border-[#C5A059] transition shadow-sm"
                    >
                      <Award className="text-[#C5A059]" size={28} />
                      <h3 className="font-serif font-bold text-lg">{cred.title}</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{cred.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SOFTWARE ENGINEERING & TECH HUB TAB */}
        {activeTab === 'tech' && (
          <section className="py-20 bg-[#FAF9F6] min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                  Engineering Execution &amp; Software Guidance
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Software Engineering &amp; Tech Hub</h2>
                <p className="text-gray-600">
                  Comprehensive guidance, core principles, teaching methodologies, and advanced techniques across C, Java,
                  JavaScript, HTML, Python, and Latest Technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SITE_CONTENT.softwareHub.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Code2 className="text-[#C5A059]" size={24} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        {tech.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#0B132B]">{tech.title}</h3>

                      <div className="space-y-3 text-sm text-gray-700 pt-2">
                        <p>
                          <strong className="text-[#0B132B]">Core Principles:</strong> {tech.principles}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Teaching Methodology:</strong> {tech.teachingApproach}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Advanced Technique:</strong> {tech.technique}
                        </p>
                      </div>
                    </div>

                    <a
                      href={tech.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <Download size={16} className="mr-2" /> Access Master Guide PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* RELATIONSHIP & COUPLE DYNAMICS HUB */}
        {activeTab === 'relationship' && (
          <section className="py-20 bg-[#FAF9F6] min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                  Certified Relationship &amp; Couple Dynamics
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Husband &amp; Wife Relationship Guide</h2>
                <p className="text-gray-600">
                  Rooted in attachment theory, emotional attunement, and professional relationship coaching frameworks—discover
                  psychological insights, proven conflict-deescalation techniques, and practical harmony tips.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SITE_CONTENT.relationshipModules.map((mod, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <HeartHandshake className="text-[#C5A059]" size={24} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        {mod.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#0B132B]">{mod.title}</h3>

                      <div className="space-y-3 text-sm text-gray-700 pt-2">
                        <p>
                          <strong className="text-[#0B132B]">Psychology Behind It:</strong> {mod.psychology}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Recommended Technique:</strong> {mod.technique}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Actionable Tip:</strong> {mod.tips}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Real-World Example:</strong> {mod.example}
                        </p>
                      </div>
                    </div>

                    <a
                      href={mod.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <Download size={16} className="mr-2" /> Access Relationship Guide PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* STUDENT & TEACHER PSYCHOLOGY HUB */}
        {activeTab === 'education' && (
          <section className="py-20 bg-[#FAF9F6] min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                  Pedagogical Excellence &amp; Neuro-Education
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Student &amp; Teacher Psychology Mastery Hub</h2>
                <p className="text-gray-600">
                  Grounded in psychology, physiology, and biological factors—discover elite methodologies for memorization,
                  focus, high exam scoring, teaching efficacy, and emotional resilience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SITE_CONTENT.educationPsychologyModules.map((mod, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <GraduationCap className="text-[#C5A059]" size={24} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        {mod.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#0B132B]">{mod.title}</h3>

                      <div className="space-y-3 text-sm text-gray-700 pt-2">
                        <p>
                          <strong className="text-[#0B132B]">Core Science &amp; Principles:</strong> {mod.intro}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Recommended Technique:</strong> {mod.technique}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Actionable Tip:</strong> {mod.tips}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Practical Application:</strong> {mod.example}
                        </p>
                      </div>
                    </div>

                    <a
                      href={mod.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <Download size={16} className="mr-2" /> Access Student Master Guide PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BEHAVIORAL & LIFE SKILLS TAB */}
        {activeTab === 'behavior' && (
          <section className="py-20 bg-[#FAF9F6] min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                  Core Psychological Architectures
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Behavioral &amp; Life Skills Hub</h2>
                <p className="text-gray-600">
                  Explore foundational frameworks, proven techniques, tactical tips, and real-world examples across
                  Neuro-Linguistic Programming, Emotional Intelligence, CBT, Non-Verbal Communication, and Transactional
                  Analysis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SITE_CONTENT.behavioralModules.map((mod, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Brain className="text-[#C5A059]" size={24} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        {mod.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#0B132B]">{mod.title}</h3>

                      <div className="space-y-3 text-sm text-gray-700 pt-2">
                        <p>
                          <strong className="text-[#0B132B]">Introduction:</strong> {mod.intro}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Core Technique:</strong> {mod.technique}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Actionable Tip:</strong> {mod.tips}
                        </p>
                        <p>
                          <strong className="text-[#0B132B]">Real-World Example:</strong> {mod.example}
                        </p>
                      </div>
                    </div>

                    <a
                      href={mod.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <Download size={16} className="mr-2" /> Access Life Skill Guide PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* KNOWLEDGE VAULT TAB */}
        {activeTab === 'vault' && (
          <section className="py-20 bg-[#FAF9F6] min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                  Academic &amp; Competitive Hub
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">The Knowledge &amp; Formula Vault</h2>
                <p className="text-gray-600">
                  Class-wise mathematics, physics, chemistry formulas, vocabulary practice exercises, quantitative
                  aptitude, competitive exam masterclasses, and current affairs—all available to view and download
                  instantly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SITE_CONTENT.knowledgeVault.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <FileText className="text-[#C5A059]" size={24} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        {item.target}
                      </span>
                      <h3 className="font-serif text-xl font-bold">{item.category}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    <a
                      href={item.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <Download size={16} className="mr-2" /> Access Vault PDF Guide
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'library' && (
          <section className="py-20 bg-[#0B132B] text-white min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">Published Wisdom</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">The Digital Book Library</h2>
                <p className="text-gray-300">Download and read comprehensive guidebooks authored by O V Suresh Babu.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SITE_CONTENT.books.map((book, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/5 border border-white/10 hover:border-[#C5A059] transition flex flex-col justify-between space-y-6 shadow-sm"
                  >
                    <div className="space-y-4">
                      <BookOpen className="text-[#C5A059]" size={32} />
                      <div className="space-y-2">
                        <span className="text-xs text-[#C5A059] uppercase tracking-wider">{book.category}</span>
                        <h3 className="font-serif font-bold text-lg leading-snug">{book.title}</h3>
                      </div>
                    </div>
                    <a
                      href={book.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#C5A059] text-[#0B132B] font-semibold text-sm hover:bg-white transition"
                    >
                      <Download size={16} className="mr-2" /> Download Book
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'competitions' && (
          <section className="py-20 bg-[#FAF9F6] min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">
                  OKS Memorial Trust &amp; ArchitectingSuccess.in Hub
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  7 Integrated Learning Suites &amp; Live Assessment Portals
                </h2>
                <p className="text-gray-600">
                  Launch our newly integrated test series, curriculum portals, and live OKS Memorial Trust competition
                  platforms—curated by <strong>O V Suresh Babu</strong>.
                </p>
              </div>

              {/* INTEGRATED 7 TEST & CURRICULUM SUITES */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DED0] pb-4">
                  <h3 className="font-serif font-bold text-2xl text-[#0B132B] flex items-center gap-2">
                    <Layers className="text-[#C5A059]" size={24} /> Integrated Curriculum &amp; Test Series Suites
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'all', label: 'All 7 Suites' },
                      { id: 'school', label: 'CBSE, PUC & Karnataka State' },
                      { id: 'aptitude', label: 'Quant, Reasoning & Science' },
                      { id: 'language', label: 'Word Power & Spelling Bee' }
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setSuiteFilter(f.id)}
                        className={`px-3 py-1.5 text-xs font-bold border transition ${
                          suiteFilter === f.id
                            ? 'bg-[#0B132B] text-[#C5A059] border-[#0B132B]'
                            : 'bg-white text-gray-700 border-[#E2DED0] hover:border-[#C5A059]'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSuites.map((suite) => (
                    <div
                      key={suite.id}
                      className="bg-white p-7 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-5 hover:border-[#C5A059] transition"
                    >
                      <div className="space-y-3">
                        <span className="inline-block px-2.5 py-1 bg-[#C5A059]/15 text-[#0B132B] text-xs font-bold uppercase tracking-wider">
                          {suite.badge}
                        </span>
                        <h4 className="font-serif text-xl font-bold text-[#0B132B]">{suite.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{suite.summary}</p>
                      </div>

                      <div className="pt-2">
                        <a
                          href={suite.route}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 bg-[#0B132B] text-white text-xs font-bold hover:bg-[#C5A059] hover:text-[#0B132B] transition flex items-center justify-center gap-1.5"
                        >
                          <span>Launch Application</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CATEGORY 1: VOICE VOCABULARY MASTERCLASSES */}
              <div className="space-y-6 pt-4">
                <div className="border-b border-[#E2DED0] pb-3 flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-[#0B132B] flex items-center gap-2">
                    <Mic className="text-[#C5A059]" size={22} /> Voice-Enabled Vocabulary Masterclass Portals
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 uppercase">Spoken AI Assessment</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Mic size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Speech Recognition Suite
                      </span>
                      <h3 className="font-serif text-xl font-bold">Voice Vocabulary Masterclass I</h3>
                      <p className="text-sm text-gray-600">
                        Interactive voice-powered spoken vocabulary assessment suite with real-time audio evaluation and
                        scorecards.
                      </p>
                    </div>
                    <a
                      href="https://voice3-theta.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Launch Voice App I
                    </a>
                  </div>

                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Mic size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Advanced Spoken Engine
                      </span>
                      <h3 className="font-serif text-xl font-bold">Voice Vocabulary Masterclass II</h3>
                      <p className="text-sm text-gray-600">
                        Advanced voice-enabled vocabulary championship featuring multi-category difficulty scaling and
                        WhatsApp dispatch.
                      </p>
                    </div>
                    <a
                      href="https://voice2-rose.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Launch Voice App II
                    </a>
                  </div>
                </div>
              </div>

              {/* CATEGORY 2: ACADEMIC & APTITUDE ASSESSMENTS */}
              <div className="space-y-6 pt-6">
                <div className="border-b border-[#E2DED0] pb-3 flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-[#0B132B] flex items-center gap-2">
                    <GraduationCap className="text-[#C5A059]" size={22} /> Academic, Math &amp; Aptitude Portals
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 uppercase">Competitive Exams</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Globe size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Community Education Suite
                      </span>
                      <h3 className="font-serif text-xl font-bold">Govt School Support Portal</h3>
                      <p className="text-sm text-gray-600">
                        Comprehensive educational support platform featuring curated quizzes, academic modules, and
                        learning resources for students.
                      </p>
                    </div>
                    <a
                      href="https://gs1-neon.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Launch Portal
                    </a>
                  </div>

                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Sparkles size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Interactive Flashcards
                      </span>
                      <h3 className="font-serif text-xl font-bold">English Vocabulary Flashcards</h3>
                      <p className="text-sm text-gray-600">
                        Category-wise interactive flashcards with revealable answers, touch swipe, and navigation for
                        vocabulary mastery.
                      </p>
                    </div>
                    <a
                      href="https://fc-sand.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Launch Flashcards
                    </a>
                  </div>

                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Calculator size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Quantitative Aptitude
                      </span>
                      <h3 className="font-serif text-xl font-bold">Quantitative Aptitude Test</h3>
                      <p className="text-sm text-gray-600">
                        Advanced quantitative aptitude and reasoning test platform designed for competitive exam
                        aspirants.
                      </p>
                    </div>
                    <a
                      href="https://qat1.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Launch Aptitude Test
                    </a>
                  </div>

                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Sparkles size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Multi-Subject Suite
                      </span>
                      <h3 className="font-serif text-xl font-bold">Math, Science &amp; English Suite</h3>
                      <p className="text-sm text-gray-600">
                        Multi-subject competition and assessment platform designed to foster academic excellence across
                        categories.
                      </p>
                    </div>
                    <a
                      href="https://mse-nine.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Attempt Test Portal
                    </a>
                  </div>

                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <BookOpen size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Grammar &amp; Comprehension
                      </span>
                      <h3 className="font-serif text-xl font-bold">English Competition Platform</h3>
                      <p className="text-sm text-gray-600">
                        Interactive 4-tier assessment tool covering advanced grammar, vocabulary, syntax, and reading
                        comprehension.
                      </p>
                    </div>
                    <a
                      href="https://test1-zeta-sand-18.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Attempt English Test
                    </a>
                  </div>
                </div>
              </div>

              {/* CATEGORY 3: TOURNAMENTS & STRATEGIC GAMES */}
              <div className="space-y-6 pt-6">
                <div className="border-b border-[#E2DED0] pb-3 flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-[#0B132B] flex items-center gap-2">
                    <Trophy className="text-[#C5A059]" size={22} /> Tournaments &amp; Strategic Portals
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 uppercase">Cognitive Sport</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                        <Award size={24} className="text-[#C5A059]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                        Strategic Tournament
                      </span>
                      <h3 className="font-serif text-xl font-bold">Chess Competition Portal</h3>
                      <p className="text-sm text-gray-600">
                        Strategic tournament and event platform organized to encourage youth tactical skills and competitive
                        sportsmanship.
                      </p>
                    </div>
                    <a
                      href="https://chess2-umber.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 bg-[#0B132B] text-white text-sm font-semibold hover:bg-[#C5A059] hover:text-[#0B132B] transition"
                    >
                      <ArrowRight size={16} className="mr-2" /> Join Chess Event
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="py-20 max-w-4xl mx-auto px-6 min-h-[80vh]">
            <div className="bg-white p-8 md:p-12 border border-[#E2DED0] shadow-sm space-y-8">
              <div className="text-center space-y-2">
                <h2 className="font-serif text-3xl font-bold">Feedback &amp; Inquiries</h2>
                <p className="text-gray-600 text-sm">
                  Share your viewer feedback or send an inquiry securely routed to O V Suresh Babu.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full p-4 bg-[#FAF9F6] border border-[#E2DED0] focus:outline-none focus:border-[#0B132B]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full p-4 bg-[#FAF9F6] border border-[#E2DED0] focus:outline-none focus:border-[#0B132B]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-2">
                    Your Feedback / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    className="w-full p-4 bg-[#FAF9F6] border border-[#E2DED0] focus:outline-none focus:border-[#0B132B]"
                    placeholder="Share your feedback on our training programs, service activities, or coaching requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0B132B] text-white font-medium hover:bg-[#C5A059] hover:text-[#0B132B] transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Feedback...' : 'Submit Feedback / Inquiry'}
                </button>
                {formStatus.message && (
                  <p
                    className={`text-sm font-medium text-center ${
                      formStatus.submitted ? 'text-green-700' : 'text-red-600'
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </section>
        )}
      </main>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0B132B] text-white border-t border-white/10 z-50 flex justify-around py-3">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center space-y-1 ${activeTab === 'home' ? 'text-[#C5A059]' : 'text-gray-400'}`}
        >
          <Home size={18} />
          <span className="text-[9px] tracking-wider uppercase font-medium">Home</span>
        </button>
        <button
          onClick={() => setActiveTab('competitions')}
          className={`flex flex-col items-center space-y-1 ${
            activeTab === 'competitions' ? 'text-[#C5A059]' : 'text-gray-400'
          }`}
        >
          <Layers size={18} />
          <span className="text-[9px] tracking-wider uppercase font-medium">Suites</span>
        </button>
        <button
          onClick={() => setActiveTab('tech')}
          className={`flex flex-col items-center space-y-1 ${activeTab === 'tech' ? 'text-[#C5A059]' : 'text-gray-400'}`}
        >
          <Code2 size={18} />
          <span className="text-[9px] tracking-wider uppercase font-medium">Tech</span>
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`flex flex-col items-center space-y-1 ${
            activeTab === 'education' ? 'text-[#C5A059]' : 'text-gray-400'
          }`}
        >
          <GraduationCap size={18} />
          <span className="text-[9px] tracking-wider uppercase font-medium">Students</span>
        </button>
        <button
          onClick={() => setActiveTab('behavior')}
          className={`flex flex-col items-center space-y-1 ${
            activeTab === 'behavior' ? 'text-[#C5A059]' : 'text-gray-400'
          }`}
        >
          <Brain size={18} />
          <span className="text-[9px] tracking-wider uppercase font-medium">Life Skills</span>
        </button>
      </nav>

      {/* FOOTER WITH SOCIAL LINKS & ANALYTICS SUMMARY */}
      <footer className="bg-[#0B132B] text-white py-16 border-t border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="space-y-2">
            <span className="font-serif font-bold text-xl tracking-wide block">
              ArchitectingSuccess<span className="text-[#C5A059]">.in</span>
            </span>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} O V Suresh Babu &amp; OKS Memorial Trust (OKSMT). All rights reserved.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={SITE_CONTENT.profile.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-[#C5A059] hover:text-[#0B132B] transition rounded-full border border-white/10 flex items-center space-x-2 px-5 text-sm"
            >
              <Facebook size={18} />
              <span>Facebook Profile</span>
            </a>
            <a
              href={SITE_CONTENT.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-[#C5A059] hover:text-[#0B132B] transition rounded-full border border-white/10 flex items-center space-x-2 px-5 text-sm"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div className="text-right space-y-1 text-sm text-gray-400">
            <p className="font-medium text-white">{SITE_CONTENT.profile.name}</p>
            <p>{SITE_CONTENT.profile.designation}</p>
            <div className="flex justify-end space-x-4 pt-2 text-xs text-[#C5A059]">
              <span>Visitors: {visitorCount.toLocaleString()}</span>
              <span>•</span>
              <span>Downloads: {downloadCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Code, Brain, Heart, Award, FileText, Download, 
  ExternalLink, Menu, X, Sparkles, Terminal, Cpu, Layout, 
  Layers, ChevronRight, CheckCircle2, Search, Star, Users, 
  Globe, ShieldCheck, Compass, ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Live Counters State simulation
  const [visitorCount, setVisitorCount] = useState(14285);
  const [downloadCount, setDownloadCount] = useState(48920);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      setDownloadCount(prev => prev + Math.floor(Math.random() * 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Resource Categories & Items including all generated Google Drive Master Guides
  const resources = [
    // Academics & STEM
    {
      id: 1,
      title: "English Vocabulary Masterclass (Class 1 - Degree)",
      category: "academics",
      badge: "Masterclass PDF",
      description: "Comprehensive class-wise vocabulary with meanings, etymological root words, synonyms, antonyms, and 30 exhaustive exercise modules.",
      link: "https://drive.google.com/file/d/1Pip27qrsKLBhaepuShZH4eC7MIlCMVbE/view?usp=drivesdk",
      icon: <BookOpen className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 2,
      title: "K-12 STEM Master Formula Compendium",
      category: "academics",
      badge: "Complete Formulas",
      description: "Every major formula, law, and principle across Mathematics, Physics, and Chemistry for Classes 1 through 12 with chapter-wise problem-solving techniques.",
      link: "https://drive.google.com/file/d/1Ms0axPF3U2W7Hkg0MZDVVyLTWZ6fMNef/view?usp=drivesdk",
      icon: <Cpu className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 3,
      title: "Quantitative Aptitude & Logical Reasoning Master Guide",
      category: "academics",
      badge: "Complete Details",
      description: "Class-wise and chapter-wise formulas, shortcuts, and step-by-step solved methodologies covering every aptitude and logical reasoning topic.",
      link: "https://drive.google.com/file/d/1uL3Tp-iLbkyqBOmqr8t93iwYRRFybU6C/view?usp=drivesdk",
      icon: <Layers className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 4,
      title: "Competitive Exams Masterclass & GK / Current Affairs",
      category: "academics",
      badge: "Exam Strategy",
      description: "High-scoring exam strategies, biological optimization, pre-exam neurological priming, strategic paper-attempting frameworks, and current affairs.",
      link: "https://drive.google.com/file/d/1zLRYv0_UTvk3bwhSrnIQtcac7Dt4L7PK/view?usp=drivesdk",
      icon: <Award className="w-6 h-6 text-[#C5A059]" />
    },

    // Behavioral Architecture & Psychology
    {
      id: 5,
      title: "Transactional Analysis (TA) & Behavioral Frameworks",
      category: "psychology",
      badge: "Behavioral Science",
      description: "Structural analysis, ego states, life positions, transactions, and psychological games for executive leadership and organizational dynamics.",
      link: "https://drive.google.com/file/d/1WhJC3_WHrt8vH6dMRcSiOxay15iHnCf6/view?usp=drivesdk",
      icon: <Brain className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 6,
      title: "Cognitive Behavioral Therapy (CBT) Masterclass",
      category: "psychology",
      badge: "Therapeutic Tools",
      description: "Cognitive restructuring, identifying cognitive distortions, behavioral experiments, and structured ABC-DE-EF models for mental mastery.",
      link: "https://drive.google.com/file/d/11kHy_9SV9uFF2uUqZ9YLaRMeSZo3X4H8/view?usp=drivesdk",
      icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 7,
      title: "Advanced Memorization & Neuro-Learning Protocols",
      category: "psychology",
      badge: "Neuro-Learning",
      description: "Memory palaces, spaced repetition systems, dual-coding theory, and cognitive load management for accelerated skill acquisition.",
      link: "https://drive.google.com/file/d/1JzQtAfwUG_5wnA24Nl6_EStOYq9dwkly/view?usp=drivesdk",
      icon: <Sparkles className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 8,
      title: "Focus Priming & Attention Architecture",
      category: "psychology",
      badge: "Deep Focus",
      description: "Dopamine regulation, environmental design, ultradian rhythm alignment, and distraction-shielding frameworks for peak productivity.",
      link: "https://drive.google.com/file/d/1NVdhtwPA9XmVynVsRHa_x6lieWsWYolW/view?usp=drivesdk",
      icon: <Compass className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 9,
      title: "Student-Teacher Psychology & Pressure-Proofing",
      category: "psychology",
      badge: "Child Psychology",
      description: "Pedagogical frameworks, emotional regulation in classrooms, student pressure-proofing, and positive reinforcement methodologies.",
      link: "https://drive.google.com/file/d/18d2UFS7JErKMH8zD4nU2rAzpzwH9NP15/view?usp=drivesdk",
      icon: <Users className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 10,
      title: "High-Scoring Exam Strategy & Biological Optimization",
      category: "psychology",
      badge: "Performance",
      description: "Sleep architecture, nutritional fueling, pre-exam state management, and cognitive endurance techniques for competitive examinations.",
      link: "https://drive.google.com/file/d/1wNPhbst-yZ_YRuHMCt5E8KBeEyOOxbSo/view?usp=drivesdk",
      icon: <Award className="w-6 h-6 text-[#C5A059]" />
    },

    // Relationship & Emotional Intelligence
    {
      id: 11,
      title: "Emotional Attunement & Empathic Listening",
      category: "relationships",
      badge: "EQ & Empathy",
      description: "Mirror-and-validate protocols, Gottman emotional bank account principles, non-verbal micro-expressions, and deep active listening.",
      link: "https://drive.google.com/file/d/1W-b5x82MrWS2VwdkJmYhpjretFcc6_DS/view?usp=drivesdk",
      icon: <Heart className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 12,
      title: "De-escalating Conflict & Softened Startups",
      category: "relationships",
      badge: "Conflict Resolution",
      description: "Physiological flooding management, Dr. John Gottman's softened startup framework, the 20-minute time-out protocol, and de-escalation.",
      link: "https://drive.google.com/file/d/15-fC0VayZEDwjvsbyCoMgHWJNfQVfQaU/view?usp=drivesdk",
      icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 13,
      title: "Love Languages & Behavioral Appreciation",
      category: "relationships",
      badge: "Connection",
      description: "Dr. Gary Chapman's five love languages, transitioning from verbal praise to behavioral appreciation, and relationship action plans.",
      link: "https://drive.google.com/file/d/1yupo8dqr441PC-0b-ys7f5_iPCkLl3st/view?usp=drivesdk",
      icon: <Heart className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 14,
      title: "Rebuilding Intimacy & Mutual Vulnerability",
      category: "relationships",
      badge: "Intimacy",
      description: "Brené Brown's research on shame and emotional armor, daily stress-reducing conversations, and structured vulnerability rituals.",
      link: "https://drive.google.com/file/d/18x2ImDadl3jkKz7BKMP_7ouFRPgN6mr2/view?usp=drivesdk",
      icon: <Sparkles className="w-6 h-6 text-[#C5A059]" />
    },

    // Tech & Engineering Stacks
    {
      id: 15,
      title: "C Programming & Systems Fundamentals",
      category: "tech",
      badge: "Systems",
      description: "Procedural determinism, memory management, pointer arithmetic, stack vs. heap allocation, and low-level debugging techniques.",
      link: "https://drive.google.com/file/d/1iNKHD_O8DdA5wv9DMbFxaJMUBm7uzzbz/view?usp=drivesdk",
      icon: <Terminal className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 16,
      title: "Java & Object-Oriented Architecture",
      category: "tech",
      badge: "OOP & Enterprise",
      description: "WORA principles, four pillars of OOP, SOLID design principles, multithreading mechanics, and enterprise software architecture.",
      link: "https://drive.google.com/file/d/1BCEmXX7nbWbKsHqpSKZZBNoWMotxKP7y/view?usp=drivesdk",
      icon: <Code className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 17,
      title: "JavaScript & Modern Web Dynamics",
      category: "tech",
      badge: "Web Frontend",
      description: "ES6+ features, asynchronous programming, promises, async/await, closures, the event loop, and DOM manipulation best practices.",
      link: "https://drive.google.com/file/d/1dj63MBaSRjYH0OOhKexJZ6Q_5fAp8l9n/view?usp=drivesdk",
      icon: <Layout className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 18,
      title: "HTML5, CSS & Semantic Web Layouts",
      category: "tech",
      badge: "UI & Layout",
      description: "Semantic markup, accessibility (WCAG), modern Flexbox and Grid layout systems, and high-contrast UI design principles.",
      link: "https://drive.google.com/file/d/19oSCgAuyIV2BeoQ3SWvBubig2fqkCyVN/view?usp=drivesdk",
      icon: <Globe className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 19,
      title: "Python & Advanced Scripting Ecosystems",
      category: "tech",
      badge: "Scripting & AI",
      description: "PEP 8 style guidelines, list comprehensions, decorators, generators, OOP in Python, and virtual environment orchestration.",
      link: "https://drive.google.com/file/d/18KxSquvA-nXtPw4nDK0nxj9DE5o5mfnv/view?usp=drivesdk",
      icon: <Terminal className="w-6 h-6 text-[#C5A059]" />
    },
    {
      id: 20,
      title: "Latest Technologies & AI Integration Masterclass",
      category: "tech",
      badge: "Artificial Intelligence",
      description: "Large Language Models (LLMs), Generative AI workflows, Retrieval-Augmented Generation (RAG), neural networks, and AI ethics.",
      link: "https://drive.google.com/file/d/1pmxCXmnfE1BgnNy2V50Ew18PU1zVf50M/view?usp=drivesdk",
      icon: <Cpu className="w-6 h-6 text-[#C5A059]" />
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesTab = activeTab === 'all' || res.category === activeTab;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0B132B] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* Top Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#0B132B] text-white border-b border-[#C5A059]/30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8E6F30] flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">ArchitectingSuccess<span className="text-[#C5A059]">.in</span></span>
              <span className="text-xs text-gray-300 tracking-wider uppercase font-medium">O V Suresh Babu Super App</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#C5A059] transition-colors">About Founder</a>
            <a href="#resources" className="hover:text-[#C5A059] transition-colors">Master Guides</a>
            <a href="#portals" className="hover:text-[#C5A059] transition-colors">Student Portals</a>
            <a href="#connect" className="hover:text-[#C5A059] transition-colors">Connect</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/o-v-suresh-babu-4211842a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#C5A059] text-white font-medium text-sm hover:bg-[#b08c47] transition-all shadow-md flex items-center space-x-2"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#C5A059] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B132B] border-b border-[#C5A059]/20 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-[#C5A059]"
            >
              About Founder
            </a>
            <a 
              href="#resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-[#C5A059]"
            >
              Master Guides
            </a>
            <a 
              href="#portals" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-[#C5A059]"
            >
              Student Portals
            </a>
            <a 
              href="#connect" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-[#C5A059]"
            >
              Connect
            </a>
            <div className="pt-2">
              <a 
                href="https://www.linkedin.com/in/o-v-suresh-babu-4211842a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#C5A059] text-white font-medium text-center flex items-center justify-center space-x-2"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Introduction Banner & Mission Statement */}
      <section className="bg-gradient-to-b from-[#0B132B] to-[#141f3d] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#C5A059]/20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excellence in Engineering, Behavioral Science & Education</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Empowering Minds, Architecting Success & <span className="text-[#C5A059]">Transforming Futures</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to the digital super app hub of <strong>O V Suresh Babu</strong>—Deputy General Manager at BEML, NLP Master Trainer, Executive Leadership Coach, and Founder Chairman of OKS Memorial Trust. Explore curated downloadable mastery guides spanning STEM education, behavioural architecture, emotional intelligence, and advanced programming stacks.
          </p>

          {/* Live Counters Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-bold text-[#C5A059]">{visitorCount.toLocaleString()}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Total Platform Visits</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-bold text-[#C5A059]">{downloadCount.toLocaleString()}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Guides Downloaded</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Resource Repository */}
      <main id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section Heading & Search / Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B132B]">Exhaustive Master Guides</h2>
            <p className="text-gray-600 text-sm mt-1">Select any guide below to instantly read or download high-resolution educational PDFs.</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Search guides or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-[#0B132B] text-white shadow' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            All Resources ({resources.length})
          </button>
          <button 
            onClick={() => setActiveTab('academics')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'academics' ? 'bg-[#0B132B] text-white shadow' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            Academics & STEM
          </button>
          <button 
            onClick={() => setActiveTab('psychology')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'psychology' ? 'bg-[#0B132B] text-white shadow' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            Behavioral Architecture & Mind
          </button>
          <button 
            onClick={() => setActiveTab('relationships')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'relationships' ? 'bg-[#0B132B] text-white shadow' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            Emotional & Relationship Intelligence
          </button>
          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'tech' ? 'bg-[#0B132B] text-white shadow' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            Tech & AI Stacks
          </button>
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700">No matching guides found</h3>
            <p className="text-gray-500 text-sm mt-1">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div 
                key={res.id} 
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#C5A059]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#FAF9F6] rounded-xl border border-gray-100 group-hover:scale-110 transition-transform">
                      {res.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20">
                      {res.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B132B] mb-2 group-hover:text-[#C5A059] transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">PDF Document</span>
                  <a 
                    href={res.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0B132B] text-white text-xs font-semibold hover:bg-[#C5A059] transition-colors shadow-sm"
                  >
                    <span>Access PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Student Portals Section */}
      <section id="portals" className="bg-white py-16 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">OKS Memorial Trust Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B132B] mt-2">Active Student Portals & Assessment Apps</h2>
            <p className="text-gray-600 text-sm mt-2">Explore our web-based educational assessment tools, online quiz portals, and student competition platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://mse-nine.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 hover:border-[#C5A059] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0B132B] text-white flex items-center justify-center mb-4 group-hover:bg-[#C5A059] transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">MSE Student Assessment Portal</h3>
                <p className="text-gray-600 text-sm mt-2">Interactive quiz application with real-time scoring and tab-detection security.</p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#C5A059] group-hover:translate-x-1 transition-transform">
                <span>Launch Portal</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            <a 
              href="https://test1-zeta-sand-18.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 hover:border-[#C5A059] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0B132B] text-white flex items-center justify-center mb-4 group-hover:bg-[#C5A059] transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">Academic Competition Hub</h3>
                <p className="text-gray-600 text-sm mt-2">Online English academic competitions and Olympiad portals for school and college students.</p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#C5A059] group-hover:translate-x-1 transition-transform">
                <span>Launch Portal</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            <a 
              href="https://chess2-umber.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 hover:border-[#C5A059] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0B132B] text-white flex items-center justify-center mb-4 group-hover:bg-[#C5A059] transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">Cognitive Strategy Chess Arena</h3>
                <p className="text-gray-600 text-sm mt-2">Strategic thinking and logical reasoning development portal for young learners.</p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#C5A059] group-hover:translate-x-1 transition-transform">
                <span>Launch Portal</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section id="about" className="py-16 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B132B] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Leadership Profile</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">O V Suresh Babu</h2>
                <p className="text-[#C5A059] font-medium text-sm sm:text-base">
                  Deputy General Manager (BEML) | NLP Master Trainer | Behavioral Architect | Founder Chairman (OKS Memorial Trust)
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
                  With over 30 years of high-stakes engineering execution experience combined with 15+ years in behavioral architecture, executive coaching, and NLP master training, O V Suresh Babu bridges technical rigor with emotional mastery. Through the OKS Memorial Trust, he spearheads educational enrichment, community welfare, and free digital empowerment for underprivileged students.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href="https://www.facebook.com/share/1Gq1gJC3KD/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold flex items-center space-x-2 transition-all"
                  >
                    <span>Facebook Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/o-v-suresh-babu-4211842a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#C5A059] hover:bg-[#b08c47] text-white text-xs font-semibold flex items-center space-x-2 transition-all shadow"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4">
                <h3 className="text-lg font-bold text-[#C5A059]">Core Frameworks</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span>STEPPA & RABT Behavioral Models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span>ABC-DE-EF Cognitive Frameworks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span>9-Pillar Wellness Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span>Zero-Vocals Executive Presence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="connect" className="bg-[#0B132B] text-gray-400 py-12 border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-white font-bold text-lg block">ArchitectingSuccess<span className="text-[#C5A059]">.in</span></span>
            <p className="text-xs text-gray-500 mt-1">© 2026 O V Suresh Babu & OKS Memorial Trust. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="https://www.facebook.com/share/1Gq1gJC3KD/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">Facebook</a>
            <a href="https://www.linkedin.com/in/o-v-suresh-babu-4211842a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
            <a href="#resources" className="hover:text-[#C5A059] transition-colors">Master Guides</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

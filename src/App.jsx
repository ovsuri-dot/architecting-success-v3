import React, { useState } from 'react';
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
  UserCheck
} from 'lucide-react';

// ==========================================
// CENTRALIZED SITE CONTENT CONFIGURATION
// ==========================================
const SITE_CONTENT = {
  profile: {
    name: "O V Suresh Babu",
    designation: "Deputy General Manager & Executive Coach",
    role: "Executive Coach, Behavioral Architect & NLP Master Trainer",
    experience: "15+ Years of Transformational Leadership",
    email: "ovsuri@gmail.com",
    phone: "+91 9481311666",
    location: "Kolar Gold Fields / Bangalore, Karnataka, India",
    trust: "Founder Chairman, OKS Memorial Trust"
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
  pillars: [
    {
      id: "executive",
      title: "Executive Coaching & Leadership",
      subtitle: "Architecting high-performance corporate cultures and elite professional behavior.",
      description: "Rooted in rigorous behavioral science and the STEPPA coaching framework, empowering leaders to navigate complex organizational dynamics with emotional poise and strategic clarity."
    },
    {
      id: "behavioral",
      title: "Behavioral Architecture & NLP",
      subtitle: "Rewiring cognitive patterns for unbreakable resilience and executive presence.",
      description: "Leveraging advanced Neuro-Linguistic Programming and Cognitive Behavioral principles to dismantle mental roadblocks, refine non-verbal micro-expressions, and elevate leadership influence."
    },
    {
      id: "trust",
      title: "OKS Memorial Trust Initiatives",
      subtitle: "Community empowerment, youth public speaking, and academic excellence.",
      description: "Championing educational equity, organizing multi-subject math, science, and English competitions, and sponsoring student growth across Karnataka."
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
    },
    { 
      title: "The Architecture of Inner Peace", 
      category: "CBT & Mental Clarity", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=1Qu1lWNRDnSaShmzDJcxmaOU2JoqmWmPh" 
    },
    { 
      title: "Architects of Influence", 
      category: "Body Language & Non-Verbal", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=1tXuUfxay7o9C-aFknNVAqHpzkZemlrBc" 
    },
    { 
      title: "The Harmony Equation", 
      category: "Behavioral Balance", 
      downloadUrl: "https://drive.google.com/uc?export=download&id=17qwzXfk_Usj_6dOsbHIlThF0qdGXKrJn" 
    },
    { 
      title: "The Mind's Blueprint", 
      category: "Cognitive Architecture", 
      downloadUrl: "#" 
    }
  ]
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, message: 'Thank you. Your inquiry has been securely routed to O V Suresh Babu.' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0B132B] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E2DED0]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#0B132B] text-[#C5A059] flex items-center justify-center font-serif font-bold text-lg">
              SB
            </div>
            <div>
              <span className="font-serif font-bold text-xl tracking-wide block">ArchitectingSuccess<span className="text-[#C5A059]">.in</span></span>
              <span className="text-xs text-gray-600 tracking-wider uppercase">{SITE_CONTENT.profile.name}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-[#C5A059] transition">About</a>
            <a href="#credentials" className="hover:text-[#C5A059] transition">Credentials</a>
            <a href="#pillars" className="hover:text-[#C5A059] transition">Expertise</a>
            <a href="#books" className="hover:text-[#C5A059] transition">Digital Library</a>
            <a href="#trust-downloads" className="hover:text-[#C5A059] transition">OKS Trust</a>
            <a href="#contact" className="px-5 py-2.5 bg-[#0B132B] text-white rounded-none hover:bg-[#C5A059] hover:text-[#0B132B] transition duration-300">
              Inquire
            </a>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#0B132B]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-[#E2DED0] px-6 py-6 space-y-4 shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">About</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Credentials</a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Expertise</a>
            <a href="#books" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Digital Library</a>
            <a href="#trust-downloads" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">OKS Trust</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-[#C5A059]">Inquire</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#FAF9F6] to-[#F2EFE9]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-semibold tracking-widest uppercase border border-[#C5A059]/20">
              <Sparkles size={14} />
              <span>{SITE_CONTENT.profile.role}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-[#0B132B]">
              Mastering the Blueprint of <span className="text-[#C5A059] italic">Human Excellence</span>.
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Bridging decades of executive leadership at BEML Limited with world-class behavioral architecture, Neuro-Linguistic Programming, and Emotional Intelligence mastery.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#0B132B] text-white font-medium hover:bg-[#C5A059] hover:text-[#0B132B] transition">
                Book Consultation <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#books" className="inline-flex items-center justify-center px-8 py-4 border border-[#0B132B] text-[#0B132B] font-medium hover:bg-[#0B132B] hover:text-white transition">
                Explore Guidebooks
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-[#0B132B] p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-2">
                <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">Leadership & Legacy</span>
                <h3 className="font-serif text-2xl font-bold">{SITE_CONTENT.profile.name}</h3>
                <p className="text-sm text-gray-300">{SITE_CONTENT.profile.designation}</p>
              </div>
              <div className="border-t border-white/10 pt-6 space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <UserCheck size={16} className="text-[#C5A059]" />
                  <span>{SITE_CONTENT.profile.trust}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                  <span>15+ Years Transformational Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BADGES */}
      <section id="credentials" className="py-20 bg-white border-y border-[#E2DED0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl font-bold">Accreditations & Certifications</h2>
            <p className="text-gray-600">Globally recognized credentials in cognitive frameworks and human psychology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONTENT.credentials.map((cred, index) => (
              <div key={index} className="p-6 bg-[#FAF9F6] border border-[#E2DED0] space-y-3 hover:border-[#C5A059] transition">
                <Award className="text-[#C5A059]" size={28} />
                <h3 className="font-serif font-bold text-lg">{cred.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{cred.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS / EXPERTISE */}
      <section id="pillars" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Core Pillars of Practice</h2>
          <p className="text-gray-600">Systematic methodologies designed to architect sustainable personal and professional success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONTENT.pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 border border-[#E2DED0] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                  <Brain size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold">{pillar.title}</h3>
                <p className="text-sm font-semibold text-[#C5A059]">{pillar.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL LIBRARY */}
      <section id="books" className="py-24 bg-[#0B132B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4 max-w-xl">
              <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">Published Wisdom</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">The Digital Book Library</h2>
              <p className="text-gray-300">Comprehensive guidebooks authored by O V Suresh Babu on behavioral architecture, emotional intelligence, and cognitive mastery.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONTENT.books.map((book, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 hover:border-[#C5A059] transition flex flex-col justify-between space-y-6">
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
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#C5A059] text-[#0B132B] font-semibold text-sm hover:bg-white transition"
                >
                  <Download size={16} className="mr-2" /> Download Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OKS MEMORIAL TRUST COMPETITIONS & ACTIVITIES CENTER */}
      <section id="trust-downloads" className="py-24 bg-[#FAF9F6] border-t border-[#E2DED0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#C5A059] text-xs tracking-widest uppercase font-semibold">OKS Memorial Trust Community Hub</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Live Competitions & Assessment Portals</h2>
            <p className="text-gray-600">Direct access to our live state-level assessment platforms for students and community members across KGF and Bangarpet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Math, Science & English Platform */}
            <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                  <Sparkles size={24} className="text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-xl font-bold">Math, Science & English Suite</h3>
                <p className="text-sm text-gray-600">Multi-subject competition and assessment platform designed to foster academic excellence across categories.</p>
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

            {/* English Competition Platform */}
            <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                  <BookOpen size={24} className="text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-xl font-bold">English Competition Platform</h3>
                <p className="text-sm text-gray-600">Interactive 4-tier assessment tool covering advanced grammar, vocabulary, syntax, and reading comprehension.</p>
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

            {/* Chess Competition Platform */}
            <div className="bg-white p-8 border border-[#E2DED0] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DED0] flex items-center justify-center text-[#0B132B]">
                  <Award size={24} className="text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-xl font-bold">Chess Competition Portal</h3>
                <p className="text-sm text-gray-600">Strategic tournament and event platform organized to encourage youth tactical skills and competitive sportsmanship.</p>
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
      </section>

      {/* CONTACT / INQUIRY SECTION */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Initiate Your Transformation</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you are an executive seeking advanced leadership coaching, an organization requiring behavioral architecture training, or an educational partner connecting with OKS Memorial Trust, reach out directly.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#C5A059]" size={20} />
                <span className="font-medium">{SITE_CONTENT.profile.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#C5A059]" size={20} />
                <span className="font-medium">{SITE_CONTENT.profile.phone}</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#C5A059]" size={20} />
                <span className="font-medium">{SITE_CONTENT.profile.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-[#E2DED0] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Full Name</label>
                <input required type="text" className="w-full p-4 bg-[#FAF9F6] border border-[#E2DED0] focus:outline-none focus:border-[#0B132B]" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Email Address</label>
                <input required type="email" className="w-full p-4 bg-[#FAF9F6] border border-[#E2DED0] focus:outline-none focus:border-[#0B132B]" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-2">Message or Inquiry</label>
                <textarea required rows={4} className="w-full p-4 bg-[#FAF9F6] border border-[#E2DED0] focus:outline-none focus:border-[#0B132B]" placeholder="Describe your coaching or program requirements"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-[#0B132B] text-white font-medium hover:bg-[#C5A059] hover:text-[#0B132B] transition">
                Submit Inquiry
              </button>
              {formStatus.submitted && (
                <p className="text-sm text-green-700 font-medium text-center">{formStatus.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B132B] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ArchitectingSuccess.in & OKS Memorial Trust. All rights reserved.</p>
          <p>{SITE_CONTENT.profile.name} | {SITE_CONTENT.profile.designation}</p>
        </div>
      </footer>

    </div>
  );
}

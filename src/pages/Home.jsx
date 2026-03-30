import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  TrendingUp,
  Activity,
  Zap,
  ShieldCheck
} from 'lucide-react';
import Lottie from 'lottie-react';
import logo from '../assets/logo.jpg';
import marketingAnimation from '../assets/Markting.json';

// Safe interop: handles both ESM default and CJS module formats
const LottiePlayer = Lottie.default || Lottie;

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#1d40a8] selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold text-slate-900 tracking-tight">Ashoka College</span>
          </div>
          
         

          <div className="flex items-center gap-6">
            <Link to="/login" className="hidden sm:block text-slate-600 hover:text-[#1d40a8] font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-px">
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-[#1d40a8] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-200 hover:bg-[#153285] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1d40a8]/30 active:translate-y-0 active:shadow-none"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section — Two Column */}
      <section className="pt-28 pb-16 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left — Text Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1d40a8] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-8 w-fit">
              <Zap size={13} /> Official Campus Portal
            </div>

            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6 uppercase"
              style={{ fontFamily: 'monospace, sans-serif' }}
            >
              EMPOWERING<br />
              STUDENT<br />
              <span className="text-[#1d40a8]">VOICE &amp;</span><br />
              <span className="text-[#1d40a8]">FEEDBACK</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              A streamlined digital platform for students of Ashoka College to report issues, 
              track resolutions, and collaborate with campus administration in real-time.
            </p>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap gap-5 mb-10 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#1d40a8]" />
                <span>Quick Resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-[#1d40a8]" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#1d40a8]" />
                <span>Secure Platform</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="bg-[#1d40a8] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#1d40a8]/20 transition-all duration-200 hover:bg-[#153285] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1d40a8]/30 active:translate-y-0 active:shadow-md"
              >
                Get Started <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/login"
                className="px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-700 border border-slate-200 text-center transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Right — Lottie Animation */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-xl">
              
              {/* Subtle blue glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-3xl transform scale-105 opacity-60" />
              
              {/* Floating stat — top right */}
              <div className="absolute top-4 right-0 z-10 bg-white shadow-xl px-4 py-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#1d40a8]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">500+ Students</div>
                  <div className="text-[10px] text-slate-400 font-medium">Active Users</div>
                </div>
              </div>

              {/* Floating stat — bottom left */}
              <div className="absolute bottom-4 left-0 z-10 bg-white shadow-xl px-4 py-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center">
                  <ShieldCheck size={18} className="text-green-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">98% Resolved</div>
                  <div className="text-[10px] text-slate-400 font-medium">Complaint Rate</div>
                </div>
              </div>

              {/* Lottie Animation */}
              <LottiePlayer
                animationData={marketingAnimation}
                loop={true}
                autoplay={true}
                className="relative z-0 w-full"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(29,64,168,0.12))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 tracking-tight text-center">
            Unlock the Power of Feedback
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<TrendingUp size={24} className="text-[#1d40a8]" />}
              iconBg="bg-blue-50"
              title="Instant Reports"
              desc="Submit your grievances digitally in seconds. Attach images and category details instantly."
            />
            <FeatureCard 
              icon={<Zap size={24} className="text-[#1d40a8]" />}
              iconBg="bg-blue-50"
              title="Track Progress"
              desc="Get real-time updates as administrators review and resolve your complaints."
            />
            <FeatureCard 
              icon={<Activity size={24} className="text-[#1d40a8]" />}
              iconBg="bg-blue-50"
              title="Official Updates"
              desc="Receive official comments and status update notices directly within your dashboard."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Ashoka College of Engineering. Official Portal.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, iconBg, title, desc }) => (
  <div className="bg-white p-10 rounded-2xl border border-slate-100 text-center group hover:shadow-lg hover:border-blue-100 transition-all duration-300">
    <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;

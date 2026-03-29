import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Laptop,
  CheckCircle2,
  Users
} from 'lucide-react';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      {/* 🧭 Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1d40a8] leading-tight">Ashoka College</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Student Portal</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-slate-600 hover:text-[#1d40a8] font-semibold text-sm transition-colors">
              Student Login
            </Link>
            <Link 
              to="/register" 
              className="bg-[#1d40a8] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#153285] transition-all shadow-md shadow-[#1d40a8]/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* 🚀 Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#1d40a8] text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Official Campus Portal
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Empowering Students <br />
              <span className="text-[#1d40a8]">Voice & Feedback</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              A streamlined digital platform for students of Ashoka College to report issues, 
              track resolutions, and collaborate with campus administration in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="bg-[#1d40a8] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#153285] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1d40a8]/20"
              >
                Create Account <ArrowRight size={20} />
              </Link>
              <Link 
                to="/login"
                className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-400">
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={18} className="text-green-500" />
                 <span className="text-sm font-medium">Quick Resolution</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={18} className="text-green-500" />
                 <span className="text-sm font-medium">24/7 Monitoring</span>
               </div>
            </div>
          </div>

          {/* Clean Illustration Area */}
          <div className="hidden lg:block relative animate-slide-up delay-200">
             <div className="bg-[#1d40a8] rounded-3xl p-12 aspect-[4/3] flex flex-col items-center justify-center text-white relative shadow-2xl overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:24px_24px]"></div>
                
                <Laptop size={180} className="mb-6 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="text-center">
                   <h3 className="text-2xl font-bold mb-2">Student Dashboard</h3>
                   <p className="text-blue-100/60 font-medium">Manage your requests efficiently</p>
                </div>

                {/* Floating Stats */}
                <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 animate-float">
                   <Users size={24} className="mb-1" />
                   <div className="text-xl font-bold">500+</div>
                   <div className="text-[10px] uppercase font-bold tracking-tighter opacity-60">Active Users</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🛡️ Core Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-amber-500" />}
              title="Instant Reports"
              desc="Submit your grievances digitally in seconds. Attach images and category details instantly."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-500" />}
              title="Track Progress"
              desc="Get real-time updates as administrators review and resolve your complaints."
            />
            <FeatureCard 
              icon={<MessageSquare className="text-teal-500" />}
              title="Official Feedback"
              desc="Receive official comments and status update notices directly within your student dashboard."
            />
          </div>
        </div>
      </section>

      {/* 🎓 Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <img src={logo} alt="Logo" className="w-6 h-6 grayscale opacity-40" />
             <p className="text-slate-400 text-sm font-medium">
               &copy; 2024 Ashoka College of Engineering. Official Portal.
             </p>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm font-semibold">
            <Link to="/login" className="hover:text-[#1d40a8] transition-colors">Login</Link>
            <Link to="/register" className="hover:text-[#1d40a8] transition-colors">Register</Link>
            <a href="#" className="hover:text-slate-900 transition-colors">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-2xl shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;

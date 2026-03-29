import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-[#1d40a8] hidden sm:block">Ashoka College</span>
          </div>
          
          <div className="flex items-center gap-6 animate-fade-in">
            <Link to="/login" className="text-slate-600 hover:text-[#1d40a8] font-medium transition-colors">
              Log In
            </Link>
            <Link 
              to="/register" 
              className="bg-[#1d40a8] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#153285] transition-all hover:shadow-lg hover:shadow-[#1d40a8]/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#1d40a8]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#1d40a8] font-medium text-sm mb-8 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d40a8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d40a8]"></span>
            </span>
            Modern Complaint Management System
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 animate-slide-up delay-100 leading-[1.1]">
            Your Voice Matters. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d40a8] to-teal-600">
              We Listen & Resolve.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 animate-slide-up delay-200 leading-relaxed">
            The fastest way to report campus issues and track resolutions in real-time. 
            Built specifically for students of Ashoka College of Engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link 
              to="/register" 
              className="group w-full sm:w-auto bg-[#1d40a8] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#153285] transition-all flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#1d40a8]/30"
            >
              Register Now 
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              Sign In
            </Link>
          </div>

          {/* Floating Elements Mockup */}
          <div className="mt-20 relative max-w-5xl mx-auto animate-fade-in delay-500">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-white border border-slate-200 rounded px-3 py-1 text-[10px] text-slate-400 font-mono">
                  dashboard.ashokacollege.in
                </div>
              </div>
              <div className="p-8 md:p-12 text-left">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse" />
                    <div className="h-4 w-1/2 bg-slate-100 rounded-full animate-pulse" />
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-20 bg-slate-50 rounded-xl animate-pulse" />
                      <div className="h-20 bg-slate-50 rounded-xl animate-pulse" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-video bg-gradient-to-br from-[#1d40a8] to-teal-500 rounded-2xl flex items-center justify-center animate-float shadow-xl shadow-[#1d40a8]/10">
                    <MessageSquare size={48} className="text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Icons */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#1d40a8] animate-float delay-200 hidden lg:flex">
              <ShieldCheck size={40} />
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#1d40a8] rounded-3xl shadow-2xl flex items-center justify-center text-white animate-float delay-500 hidden lg:flex">
              <Zap size={44} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why use our system?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We streamlined the entire process from submission to resolution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-amber-500" />}
              title="Lightning Fast"
              desc="Submit a complaint in under 30 seconds. No paperwork, no queues."
              delay="delay-100"
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-500" />}
              title="Full Transparency"
              desc="Track the status of your request from 'Pending' to 'Resolved' instantly."
              delay="delay-200"
            />
            <FeatureCard 
              icon={<MessageSquare className="text-teal-500" />}
              title="Direct Feedback"
              desc="Admins can comment directly on your posts for quick clarification."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1d40a8] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#1d40a8]/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 leading-tight">
              Ready to improve your <br /> campus experience?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-xl mx-auto relative z-10 opacity-90">
              Join hundreds of students and make your voice heard today.
            </p>
            
            <Link 
              to="/register" 
              className="inline-flex items-center gap-2 bg-white text-[#1d40a8] px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10"
            >
              Create Your Account <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-6 h-6 grayscale opacity-50" />
            <span>&copy; 2024 Ashoka College of Engineering. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
            <a href="#" className="hover:text-slate-900 transition-colors">College Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, delay }) => (
  <div className={`bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up ${delay}`}>
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Home;

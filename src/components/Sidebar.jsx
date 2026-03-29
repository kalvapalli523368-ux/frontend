import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, LogOut, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.jpg';

export default function Sidebar({ collapsed, setCollapsed }) {
  const { user, logout } = useContext(AuthContext);

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: user?.role === 'admin' ? '/admin' : '/dashboard' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className={`${collapsed ? 'w-[72px]' : 'w-64'} h-screen bg-[#0f172a] text-white flex flex-col fixed left-0 top-0 shadow-xl z-30 transition-all duration-300 ease-in-out overflow-hidden`}>
      
      {/* Logo */}
      <div className="p-4 flex items-center justify-between border-b border-white/5 min-h-[72px]">
        <div className="flex items-center gap-3 overflow-hidden">
          {!collapsed && <img src={logo} alt="CMS Logo" className="w-8 h-8 object-contain flex-shrink-0" />}
          {!collapsed && <h1 className="font-bold text-xl tracking-tight whitespace-nowrap">CMS</h1>}
        </div>
        <button
          onClick={() => setCollapsed(c => !c)}
          className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition ml-auto"
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
        {!collapsed && (
          <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Main Menu</p>
        )}
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === '/dashboard' || item.path === '/admin'}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              `flex items-center rounded-xl transition-all font-medium border border-transparent ${
                collapsed ? 'justify-center w-11 h-11 mx-auto' : 'gap-3 px-3 py-3'
              } ${
                isActive
                  ? 'bg-[#1d40a8] text-white shadow-md shadow-[#1d40a8]/20 border-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/8 hover:border-white/5'
              }`
            }
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!collapsed && <span className="whitespace-nowrap text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div className={`border-t border-white/5 bg-slate-800/20 ${collapsed ? 'p-3' : 'p-4'}`}>
        {!collapsed ? (
          <div className="flex items-center gap-3 px-3 py-3 mb-3 bg-slate-800/40 rounded-xl border border-white/5 text-sm shadow-inner">
            <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#1d40a8] flex items-center justify-center font-bold text-white text-sm">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="truncate font-bold text-white text-sm">{user?.name}</p>
              <p className="truncate text-xs text-slate-400 capitalize">{user?.role}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-3">
            <div className="w-9 h-9 rounded-full bg-[#1d40a8] flex items-center justify-center font-bold text-white text-sm" title={user?.name}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
        <button
          onClick={logout}
          title="Sign Out"
          className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-slate-300 hover:text-red-400 hover:bg-red-500/10 transition-all font-medium border border-transparent hover:border-red-500/20 text-sm ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut size={17} />
          {!collapsed && 'Sign Out'}
        </button>
      </div>
    </div>
  );
}

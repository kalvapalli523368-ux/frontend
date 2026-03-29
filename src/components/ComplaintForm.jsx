import { useState } from 'react';
import axios from 'axios';
import { X, Check, FileText, AlignLeft, CalendarDays } from 'lucide-react';
import toast from 'react-hot-toast';
import DatePicker from './DatePicker';

export default function ComplaintForm({ onClose, onSucceed }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/complaints', { title, description, incidentDate });
      toast.success('Complaint submitted successfully!');
      onSucceed();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit complaint');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#1d40a8] px-7 pt-8 pb-6 relative">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <FileText size={18} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">New Complaint</h2>
          </div>
          <p className="text-blue-200 text-sm ml-12">Fill in the details to log your grievance</p>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5 overflow-y-auto flex-1">
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1d40a8]/30 focus:border-[#1d40a8] focus:bg-white transition-all text-slate-800 placeholder-slate-400"
                placeholder="e.g. Computer not working"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Description <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <AlignLeft size={15} className="absolute left-3.5 top-3 text-slate-400" />
              <textarea
                required
                rows={5}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#1d40a8]/30 focus:border-[#1d40a8] focus:bg-white transition-all resize-none text-slate-800 placeholder-slate-400"
                placeholder="Describe the issue in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Incident Date
            </label>
            <DatePicker value={incidentDate} onChange={setIncidentDate} placeholder="Pick incident date" />
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-[#1d40a8] text-white font-bold text-sm hover:bg-[#153084] transition shadow-md shadow-[#1d40a8]/30 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Check size={16} /> {loading ? 'Submitting...' : 'Submit Complaint'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

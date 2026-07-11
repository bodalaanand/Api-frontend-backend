import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Upload, CheckCircle, Plus, Trash2, X,
  Users, Wallet, Shield, Rocket, ArrowRight, GraduationCap, Building2, Info
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Scanner from '../../assets/Screenshot 2025-05-05 164618.png';
import { useNavigate } from 'react-router-dom';
import { HACKATHON_REGISTER_URL } from '../Services/apiConfig';

const StackHackathonRegister = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paymentImage, setPaymentImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const domains = [
    "Education", "Finance & Health", "Automobile", "Embedded Systems", 
    "Virtual Reality", "Artificial Intelligence (AI)", "VLSI", "Agriculture"
  ];

  const slotdate = [
    "April 23, 2026",
    "April 24, 2026",
    "April 25, 2026"
  ];

  const slottiming = [
    "Morning (10 AM - 12 PM)",
    "Evening (16 PM - 18 PM)"
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    teamName: "",
    ideaDescription: "",
    preferredDomain: "",
    slotTiming: "Morning",
    registrationFee: 99,
    paymentDate: new Date().toISOString().split('T')[0],
    mediaConsent: false,
    availableDate: "2026-04-23",
    utrNumber: "",
    rulesAccepted: false,
    technicalSkills: "",
    members: [
      {
        fullName: "", mobileNumber: "", emailId: "",
        yearOfStudy: "", department: "", isLeader: true
      }
    ]
  });

  const validateUTR = (utr) => /^[A-Z0-9]{12}$/i.test(utr);

  const handleMemberChange = (index, field, value) => {
    const members = [...formData.members];
    members[index][field] = value;
    setFormData({ ...formData, members });
  };

  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData({
        ...formData,
        members: [...formData.members, {
          fullName: "", mobileNumber: "", emailId: "",
          yearOfStudy: "", department: "", isLeader: false
        }]
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB");
      return;
    }
    setPaymentImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.teamName) newErrors.teamName = true;
    if (!formData.ideaDescription) newErrors.ideaDescription = true;
    if (!formData.preferredDomain) newErrors.preferredDomain = true;
    if (!formData.rulesAccepted) newErrors.rules = true;
    if (!formData.mediaConsent) newErrors.media = true;
    if (!validateUTR(formData.utrNumber)) newErrors.utr = "Invalid UTR";
    if (!paymentImage) newErrors.image = "Upload required";

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all required fields and accept terms");
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Processing your registration...");

    try {
      const payload = {
        ...formData,
        technicalSkills: formData.technicalSkills.split(',').map(s => s.trim()).filter(Boolean)
      };

      const data = new FormData();
      data.append("request", new Blob([JSON.stringify(payload)], { type: "application/json" }));
      data.append("file", paymentImage);


      const response = await fetch(HACKATHON_REGISTER_URL, { 
        method: "POST", 
        body: data 
      });

      if (!response.ok) throw new Error("API failed");
      toast.success("Registration Successful!", { id: loadingToast });
      setSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 md:p-8">
        <div className="bg-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 text-center max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="text-green-500 w-16 h-16" />
            </div>
          </div>
          
          <h2 className="text-3xl font-black text-gray-900 mb-2">Registration Success!</h2>
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            Team <span className="text-blue-600 font-bold">{formData.teamName}</span> is locked in for Stack Hackathon 2026. 
            A confirmation email will be sent to <span className="font-bold">{formData.members[0].emailId}</span> shortly.
          </p>

          <button 
            onClick={() => navigate("/")} 
            className="w-full bg-[#0a0d14] text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group"
          >
            Go to Homepage
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 font-sans">
      <Toaster position="top-center" />
      
      <div className="bg-[#0a0d14] py-8 text-white px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ArrowLeft size={24} /></button>
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight uppercase">Stack Hackathon 2026</h1>
            <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold">Registration Portal</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 mt-8 space-y-6">
        
        {/* Project Details */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 text-blue-600"><Rocket size={20} /><h2 className="font-bold text-gray-900">Startup & Domain</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 ring-blue-500/10" placeholder="Team Name *" value={formData.teamName} onChange={e => setFormData({...formData, teamName: e.target.value})} />
            
            {/* DOMAIN SELECTION DROPDOWN */}
            <select 
              required 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 ring-blue-500/10 text-gray-600"
              value={formData.preferredDomain} 
              onChange={e => setFormData({...formData, preferredDomain: e.target.value})}
            >
              <option value="">Select Domain *</option>
              {domains.map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>

            <textarea required className="md:col-span-2 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl h-24 outline-none" placeholder="Briefly explain your startup idea... *" value={formData.ideaDescription} onChange={e => setFormData({...formData, ideaDescription: e.target.value})} />
          </div>
        </div>

        {/* Member Details */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3 text-blue-600"><Users size={20} /><h2 className="font-bold text-gray-900">Founding Team</h2></div>
            {formData.members.length < 3 && (
              <button type="button" onClick={addMember} className="text-xs font-bold bg-blue-50 text-blue-600 px-4 py-2 rounded-xl flex items-center gap-2"><Plus size={16}/> Add Partner</button>
            )}
          </div>
          <div className="space-y-6">
            <div>
              {formData.members.map((member, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 relative mb-4">
                  <div className="flex justify-between mb-4">
                    <span className="px-3 py-1 bg-white border rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-wider">{member.isLeader ? "Team Captain" : `Partner ${idx + 1}`}</span>
                    {!member.isLeader && <button type="button" onClick={() => setFormData({...formData, members: formData.members.filter((_, i) => i !== idx)})} className="text-red-400 p-1"><Trash2 size={18}/></button>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input required placeholder="Full Name *" className="p-3 text-sm border rounded-xl outline-none bg-white" value={member.fullName} onChange={e => handleMemberChange(idx, 'fullName', e.target.value)} />
                    <input required placeholder="Mobile Number *" className="p-3 text-sm border rounded-xl outline-none bg-white" value={member.mobileNumber} onChange={e => handleMemberChange(idx, 'mobileNumber', e.target.value)} />
                    <input required placeholder="Official Email *" className="p-3 text-sm border rounded-xl outline-none bg-white" value={member.emailId} onChange={e => handleMemberChange(idx, 'emailId', e.target.value)} />
                    <input required placeholder="Year of Study *" className="p-3 text-sm border rounded-xl bg-white" value={member.yearOfStudy} onChange={e => handleMemberChange(idx, 'yearOfStudy', e.target.value)} />
                    <input required placeholder="Department *" className="p-3 text-sm border rounded-xl bg-white lg:col-span-2" value={member.department} onChange={e => handleMemberChange(idx, 'department', e.target.value)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slot & Payment */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 text-blue-600"><Wallet size={20} /><h2 className="font-bold text-gray-900">Slot & Payment</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* <select className="p-3 bg-gray-50 border rounded-xl" value={formData.availableDate} onChange={e => setFormData({...formData, availableDate: e.target.value})}>
              <option value="2026-04-23">April 23, 2026</option>
              <option value="2026-04-24">April 24, 2026</option>
              <option value="2026-04-25">April 25, 2026</option>
            </select> */}
            <select 
              required 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 ring-blue-500/10 text-gray-600"
              value={formData.preferredslotdate} 
              onChange={e => setFormData({...formData, preferredslotdate: e.target.value})}
            >
              <option value="">Select Slot Date *</option>
              {slotdate.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
            {/* <select className="p-3 bg-gray-50 border rounded-xl" value={formData.slotTiming} onChange={e => setFormData({...formData, slotTiming: e.target.value})}>
              <option value="Morning">Morning (10 AM - 12 PM)</option>
              <option value="Evening">Evening (4 PM - 6 PM)</option>
            </select> */}
                        <select 
              required 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 ring-blue-500/10 text-gray-600"
              value={formData.preferredslottiming} 
              onChange={e => setFormData({...formData, preferredslottiming: e.target.value})}
            >
              <option value="">Select Slot Timing *</option>
              {slottiming.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start border-t pt-8">
            <div className="w-full md:w-48 bg-white p-3 border-2 border-dashed border-blue-100 rounded-2xl text-center">
              <img src={Scanner} alt="Payment Scanner" className="w-full h-auto rounded-lg mb-2" />
              <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Fee: ₹99</span>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <input required className="w-full p-3 bg-gray-50 border rounded-xl outline-none" placeholder="12-digit UTR / Transaction ID *" value={formData.utrNumber} onChange={e => setFormData({...formData, utrNumber: e.target.value})} />
              {!imagePreview ? (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-blue-400">
                  <Upload className="text-gray-400 mb-2"/><span className="text-xs text-gray-500">Upload Screenshot *</span>
                  <input type="file" className="hidden" accept="image/*" required onChange={handleImageChange} />
                </label>
              ) : (
                <div className="relative w-full h-40 rounded-xl overflow-hidden border">
                  <img src={imagePreview} className="w-full h-full object-contain bg-gray-900" alt="Proof" />
                  <button type="button" onClick={() => {setPaymentImage(null); setImagePreview(null);}} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"><X size={16}/></button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* GUIDELINES & CONSENT */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center gap-3 text-blue-600 mb-2"><Shield size={20} /><h2 className="font-bold text-gray-900">Final Confirmation</h2></div>
          
          {/* Detailed Guidelines Block */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-3 text-blue-700"><Info size={14}/><h3 className="text-[10px] font-black uppercase tracking-wider">Official Hackathon Rules</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {[
                "All participants must follow rules and instructions given by organizers.",
                "Participants must report on time and follow the assigned schedule.",
                "Discipline must be maintained throughout the hackathon.",
                "Be patient and respectful during reviews and evaluations.",
                "Misbehavior or disrespect toward judges/mentors is not allowed.",
                "Plagiarism or copying ideas leads to immediate disqualification.",
                "Use respectful language and maintain professional behavior.",
                "Harassment, discrimination, or offensive behavior is prohibited.",
                "Participants must take care of venue, equipment, and resources.",
                "The judges’ decision will be final and binding."
              ].map((rule, i) => (
                <div key={i} className="flex gap-2 text-[10px] leading-tight text-gray-500">
                  <span className="font-bold text-blue-500">{i+1}.</span> {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600" checked={formData.rulesAccepted} onChange={e => setFormData({...formData, rulesAccepted: e.target.checked})} />
              <span className="text-xs text-gray-600 leading-normal">I have read and agree to follow all the Hackathon Rules and instructions mentioned above.</span>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600" checked={formData.mediaConsent} onChange={e => setFormData({...formData, mediaConsent: e.target.checked})} />
              <span className="text-xs text-gray-600 leading-normal">I grant Media Consent for the use of my photographs and videos for promotional purposes on KAPI Technologies' social media platforms.</span>
            </label>
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-black text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
          {loading ? "VERIFYING..." : "COMPLETE REGISTRATION"} <ArrowRight size={22}/>
        </button>
      </form>
    </div>
  );
};

export default StackHackathonRegister;
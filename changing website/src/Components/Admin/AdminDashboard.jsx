import React, { useEffect, useState } from 'react';
import axiosInstance from '../Services/axiosInstance';
import { Eye, X, Download, Calendar, Clock, User, Mail, Briefcase, Filter, RefreshCcw, Image, Users, Phone,GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState('');

  // Filter States
  const [filterDate, setFilterDate] = useState('');
  const [filterSlot, setFilterSlot] = useState('');

  const dates = [
    { label: 'April 23, 2026', value: '2026-04-23' },
    { label: 'April 24, 2026', value: '2026-04-24' },
    { label: 'April 25, 2026', value: '2026-04-25' }
  ];

  // Fetch all teams (initial load)
  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/team/teams');
      setTeams(response.data);
    } catch (error) {
      toast.error("Failed to load registrations");
    } finally {
      setLoading(false);
    }
  };

  // API Filter Call
  const handleFilter = async () => {
    if (!filterDate || !filterSlot) {
      toast.error("Please select both Date and Slot");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.get(`/team/filter`, {
        params: {
          date: filterDate,
          slot: filterSlot
        }
      });
      setTeams(response.data);
      toast.success(`Found ${response.data.length} teams`);
    } catch (error) {
      toast.error("Filter failed or no records found");
      setTeams([]);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    setFilterDate('');
    setFilterSlot('');
    fetchTeams();
  };

  // Fetch single team details
  const viewTeamDetails = async (teamId) => {
    try {
      toast.loading("Fetching details...", { id: 'detail' });
      const response = await axiosInstance.get(`/team/teams/${teamId}`);
      setSelectedTeam(response.data);
      setShowModal(true);
      toast.success("Details loaded", { id: 'detail' });
    } catch (error) {
      toast.error("Error fetching team details", { id: 'detail' });
    }
  };

  // Show screenshot popup
  const viewScreenshot = (url) => {
    setScreenshotUrl(url);
    setShowScreenshotModal(true);
  };

  useEffect(() => { fetchTeams(); }, []);

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">HACKATHON REGISTRATIONS</h1>
          <p className="text-sm text-gray-500">Manage and review all participating teams</p>
        </div>
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-2xl w-fit">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-blue-700 text-sm font-bold">{teams.length} Teams Registered</span>
        </div>
      </div>

      {/* FILTER BAR - Responsive Grid */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Select Date</label>
          <select 
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 ring-blue-500/10"
          >
            <option value="">Choose Date</option>
            {dates.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Select Slot</label>
          <select 
            value={filterSlot}
            onChange={(e) => setFilterSlot(e.target.value)}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 ring-blue-500/10"
          >
            <option value="">Choose Slot</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={handleFilter}
            className="flex-1 bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-200"
          >
            <Filter size={16} /> Apply Filter
          </button>
          <button 
            onClick={resetFilters}
            className="p-2.5 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200 transition-all"
            title="Reset"
          >
            <RefreshCcw size={18} />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center text-gray-400 font-medium">Loading records...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Team Details</th>
                  <th className="hidden md:table-cell p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Domain</th>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Interview Slot</th>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {teams.map((team) => (
                  <tr key={team.teamId} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-gray-900 text-lg">{team.teamName}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <User size={10}/> {team.leaderName}
                      </div>
                    </td>
                    <td className="hidden md:table-cell p-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-100 rounded-full text-[11px] font-bold uppercase">
                        {team.preferredDomain}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-700">{team.availableDate}</span>
                        <span className="text-[11px] text-gray-400 font-medium">{team.slotTiming}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => viewScreenshot(team.paymentScreenshotUrl)}
                          className="p-2 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 shadow-sm rounded-xl hover:border-indigo-400 hover:text-indigo-600 transition-all text-indigo-600"
                          title="View Screenshot"
                        >
                          <Image size={16} />
                        </button>
                        <button 
                          onClick={() => viewTeamDetails(team.teamId)}
                          className="p-2 bg-white border border-gray-200 shadow-sm rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Team Details Modal */}
      {showModal && selectedTeam && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in duration-200" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto md:max-h-[90vh] animate-in slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{selectedTeam.teamName}</h2>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {selectedTeam.availableDate}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {selectedTeam.slotTiming}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-2xl transition-all"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {/* Domain & Payment Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                      <h3 className="font-bold text-blue-900 text-lg mb-2 flex items-center gap-2">
                        <Briefcase size={20} />
                        Domain: {selectedTeam.preferredDomain}
                      </h3>
                      <p className="text-sm text-blue-800 leading-relaxed">{selectedTeam.ideaDescription}</p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <h4 className="font-bold text-emerald-900 text-sm uppercase tracking-wide mb-3">Payment Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span>Registration Fee:</span><span className="font-bold text-emerald-700">₹{selectedTeam.registrationFee}</span></div>
                        <div className="flex justify-between"><span>Payment Date:</span><span>{selectedTeam.paymentDate}</span></div>
                        <div className="flex justify-between"><span>UTR Number:</span><span className="font-mono bg-white px-2 py-1 rounded text-xs">{selectedTeam.utrNumber}</span></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 mb-6">
                      <h4 className="font-bold text-indigo-900 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                        <Image size={18} />
                        Payment Screenshot
                      </h4>
                      <button 
                        onClick={() => viewScreenshot(selectedTeam.paymentScreenshotUrl)}
                        className="w-full bg-white border-2 border-dashed border-indigo-300 hover:border-indigo-400 p-6 rounded-2xl text-indigo-600 font-medium hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 shadow-sm"
                      >
                        <Image size={24} />
                        <span className="text-sm">View Payment Proof</span>
                      </button>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Status</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span>Rules Accepted:</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedTeam.rulesAccepted ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {selectedTeam.rulesAccepted ? '✓ Yes' : '✗ No'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span>Media Consent:</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedTeam.mediaConsent ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {selectedTeam.mediaConsent ? '✓ Yes' : '✗ No'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                {selectedTeam.technicalSkills?.length > 0 && (
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                    <h4 className="font-bold text-purple-900 text-lg mb-4 uppercase tracking-wide flex items-center gap-2">
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeam.technicalSkills.map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-2xl text-sm font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Members */}
                <div>
                  <h4 className="font-black text-xl text-gray-900 mb-6 flex items-center gap-3">
                    <Users size={28} className="text-blue-600" />
                    Team Members ({selectedTeam.members?.length || 0})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedTeam.members?.map((member, index) => (
                      <div key={index} className="group bg-white border border-gray-100 hover:border-blue-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm ${member.isLeader ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 border'}`}>
                            {member.isLeader ? 'L' : index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-gray-900 text-lg truncate">{member.fullName}</h5>
                            {member.isLeader && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mt-1">
                                <Users size={10} /> Team Leader
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Mail size={14} className="text-blue-500" />
                            <span className="truncate">{member.emailId}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-green-500" />
                            <span>{member.mobileNumber}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap size={14} className="text-purple-500" />
                            <span>{member.yearOfStudy} - {member.department}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Screenshot Modal */}
      {showScreenshotModal && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4" onClick={() => setShowScreenshotModal(false)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Payment Screenshot</h3>
                <button 
                  onClick={() => setShowScreenshotModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-2xl transition-all"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
              <div className="flex-1 p-4 md:p-8 bg-gray-50">
                <img 
                  src={screenshotUrl} 
                  alt="Payment Screenshot"
                  className="w-full h-full max-h-[70vh] object-contain rounded-2xl shadow-lg mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="hidden mt-8 p-8 text-center text-gray-500 bg-white rounded-2xl border-2 border-dashed border-gray-300">
                  <Image size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Screenshot not available</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

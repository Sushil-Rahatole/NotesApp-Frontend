import { useState } from "react";
import { ChevronDown, BookOpen, GraduationCap, MapPin, Clock } from "lucide-react";

interface SidebarProps {
  selectedUniversity: string;
  onUniversityChange: (university: string) => void;
}

interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  status: "active" | "coming-soon";
  color: string;
  students: string;
  description: string;
}

const universities: University[] = [
  {
    id: "SPPU",
    name: "Savitribai Phule Pune University",
    shortName: "SPPU",
    location: "Pune, Maharashtra",
    status: "active",
    color: "from-purple-600 to-blue-600",
    students: "500K+",
    description: "Leading technical education university"
  },
  {
    id: "MUMBAI",
    name: "University of Mumbai", 
    shortName: "MU",
    location: "Mumbai, Maharashtra",
    status: "coming-soon",
    color: "from-blue-600 to-teal-600",
    students: "800K+",
    description: "Premier metropolitan university"
  },
  {
    id: "PUNE",
    name: "Pune University",
    shortName: "PU", 
    location: "Pune, Maharashtra",
    status: "coming-soon",
    color: "from-teal-600 to-green-600",
    students: "300K+",
    description: "Renowned academic institution"
  }
];

export default function Sidebar({ selectedUniversity, onUniversityChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedUni = universities.find(uni => uni.id === selectedUniversity) || universities[0];

  return (
    <aside className="lg:w-80 space-y-6">
      {/* StudyHub Branding */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="mb-4">
            <GraduationCap className="h-12 w-12 mx-auto mb-2" />
          </div>
          <h2 className="text-2xl font-bold tracking-wider mb-2">StudyHub</h2>
          <p className="text-purple-100 text-sm">Quality Education Resources</p>
        </div>
      </div>

      {/* University Selector */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
        <div className="p-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
          <h3 className="font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Select University
          </h3>
        </div>
        
        <div className="p-4">
          {/* Selected University Display */}
          <div 
            className={`bg-gradient-to-r ${selectedUni.color} p-4 rounded-xl text-white cursor-pointer transition-all duration-300 hover:shadow-lg`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-lg">{selectedUni.shortName}</h4>
                  {selectedUni.status === "active" && (
                    <span className="bg-green-500 text-xs px-2 py-1 rounded-full">Active</span>
                  )}
                  {selectedUni.status === "coming-soon" && (
                    <span className="bg-yellow-500 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-90 mb-1">{selectedUni.name}</p>
                <div className="flex items-center gap-4 text-xs opacity-80">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {selectedUni.location}
                  </span>
                  <span>{selectedUni.students} students</span>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {/* University Options */}
          {isExpanded && (
            <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
              {universities.map((university) => (
                <div
                  key={university.id}
                  className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                    selectedUniversity === university.id
                      ? 'border-purple-300 bg-purple-50'
                      : 'border-gray-100 hover:border-purple-200 hover:bg-purple-25'
                  } ${university.status === 'coming-soon' ? 'opacity-60' : ''}`}
                  onClick={() => {
                    if (university.status === 'active') {
                      onUniversityChange(university.id);
                      setIsExpanded(false);
                    }
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-semibold text-gray-900">{university.shortName}</h5>
                        {university.status === "active" && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Active</span>
                        )}
                        {university.status === "coming-soon" && (
                          <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Clock className="h-2.5 w-2.5" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{university.name}</p>
                      <p className="text-xs text-gray-500">{university.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {university.location}
                        </span>
                        <span>{university.students} students</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import FilterSection from "@/components/filter-section";
import SubjectsList from "@/components/subjects-list";

export default function Home() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSem, setSelectedSem] = useState("");
  const [selectedPattern, setSelectedPattern] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("SPPU");

  return (
    <section id="home" className="bg-warm min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex flex-col xl:flex-row gap-8">
          <Sidebar 
            selectedUniversity={selectedUniversity}
            onUniversityChange={setSelectedUniversity}
          />

          <div className="flex-1 bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-purple-100">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-4">
                Welcome to StudyHub
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Quality Notes & Previous Year Question Papers
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your trusted companion for exam preparation. Access high-quality study materials, comprehensive notes, 
                and previous year question papers from top students. Currently serving SPPU students with plans to expand 
                to more universities.
              </p>

              <FilterSection
                selectedBranch={selectedBranch}
                selectedYear={selectedYear}
                selectedSem={selectedSem}
                selectedPattern={selectedPattern}
                onBranchChange={setSelectedBranch}
                onYearChange={setSelectedYear}
                onSemChange={setSelectedSem}
                onPatternChange={setSelectedPattern}
              />

              <SubjectsList 
                branch={selectedBranch}
                year={selectedYear}
                sem={selectedSem}
                pattern={selectedPattern}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

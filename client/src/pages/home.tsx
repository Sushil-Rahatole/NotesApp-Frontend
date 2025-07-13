import { useState } from "react";
import Sidebar from "@/components/sidebar";
import FilterSection from "@/components/filter-section";
import SubjectsList from "@/components/subjects-list";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSem, setSelectedSem] = useState("");

  return (
    <section id="home" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />

          <div className="flex-1 bg-white rounded-lg p-6 lg:p-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to SPPU Notes & PYQs Hub
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your one-stop destination for comprehensive study materials, previous year question papers, and academic resources. 
                Access notes from top students and prepare effectively for your SPPU examinations.
              </p>

              <FilterSection
                selectedYear={selectedYear}
                selectedSem={selectedSem}
                onYearChange={setSelectedYear}
                onSemChange={setSelectedSem}
              />

              <SubjectsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

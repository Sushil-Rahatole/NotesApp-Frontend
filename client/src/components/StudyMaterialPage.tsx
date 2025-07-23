// src/pages/StudyMaterialPage.tsx

import { useState } from "react";
import FilterSection, { branches } from "./filter-section"; 
import SubjectsList from "./subjects-list";

export default function StudyMaterialPage() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]?.name || "");
  const [selectedYear, setSelectedYear] = useState("FE");
  const [selectedSem, setSelectedSem] = useState("1");
  const [selectedPattern, setSelectedPattern] = useState("2019 Pattern");

  return (
    <div className="container mx-auto p-4">
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
  );
}

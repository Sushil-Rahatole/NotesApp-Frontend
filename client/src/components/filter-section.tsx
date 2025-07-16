import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


interface FilterSectionProps {
  selectedBranch: string;
  selectedYear: string;
  selectedSem: string;
  selectedPattern: string;
  onBranchChange: (branch: string) => void;
  onYearChange: (year: string) => void;
  onSemChange: (sem: string) => void;
  onPatternChange: (pattern: string) => void;
  // onFetchSubjects: () => void; // ✅ NEW
}

const branches = [
  { id: "COMP", name: "Computer Engineering", shortName: "COMP" },
  { id: "MECH", name: "Mechanical Engineering", shortName: "MECH" },
  { id: "CIVIL", name: "Civil Engineering", shortName: "CIVIL" },
  { id: "ELEC", name: "Electrical Engineering", shortName: "ELEC" },
  { id: "ELECTRONICS", name: "Electronics Engineering", shortName: "ELEC" },
  { id: "IT", name: "Information Technology", shortName: "IT" },
  { id: "EXTC", name: "Electronics & Telecommunication", shortName: "EXTC" },
  { id: "INSTRUMENTATION", name: "Instrumentation & Control", shortName: "INST" },
];

export default function FilterSection({
  selectedBranch,
  selectedYear,
  selectedSem,
  selectedPattern,
  onBranchChange,
  onYearChange,
  onSemChange,
  onPatternChange,
}: FilterSectionProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 rounded-lg mb-8 border border-orange-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Your Study Materials</h3>

      {/* Branch Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Engineering Branch</label>
        <Select value={selectedBranch} onValueChange={onBranchChange}>
          <SelectTrigger className="w-full border-orange-300 focus:border-purple-500">
            <SelectValue placeholder="Select Engineering Branch" />
          </SelectTrigger>
          <SelectContent>
            {branches.map((branch) => (
              <SelectItem key={branch.id} value={branch.name}> {/* ✅ use branch.name */}
                {branch.name} ({branch.shortName})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger className="w-full border-orange-300 focus:border-purple-500">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
          <Select value={selectedSem} onValueChange={onSemChange}>
            <SelectTrigger className="w-full border-orange-300 focus:border-purple-500">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Semester I</SelectItem>
              <SelectItem value="2">Semester II</SelectItem>
              <SelectItem value="6">Semester VI</SelectItem> {/* for your test */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pattern</label>
          <Select value={selectedPattern} onValueChange={onPatternChange}>
            <SelectTrigger className="w-full border-orange-300 focus:border-purple-500">
              <SelectValue placeholder="Select Pattern" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2019 Pattern">2019 Pattern</SelectItem>
              <SelectItem value="2024 Pattern">2024 Pattern</SelectItem>
              <SelectItem value="CBCS">CBCS</SelectItem> {/* for your test */}
            </SelectContent>
          </Select>
        </div>
      </div>

      
    </div>
  );
}

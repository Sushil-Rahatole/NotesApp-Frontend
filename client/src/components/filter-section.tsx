import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterSectionProps {
  selectedYear: string;
  selectedSem: string;
  onYearChange: (year: string) => void;
  onSemChange: (sem: string) => void;
}

export default function FilterSection({
  selectedYear,
  selectedSem,
  onYearChange,
  onSemChange,
}: FilterSectionProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Your Study Materials</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FE">First Year (FE)</SelectItem>
              <SelectItem value="SE">Second Year (SE)</SelectItem>
              <SelectItem value="TE">Third Year (TE)</SelectItem>
              <SelectItem value="BE">Final Year (BE)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
          <Select value={selectedSem} onValueChange={onSemChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Semester I</SelectItem>
              <SelectItem value="2">Semester II</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

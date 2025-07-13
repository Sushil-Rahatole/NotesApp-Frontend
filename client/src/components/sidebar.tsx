import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SidebarProps {
  selectedUniversity: string;
  onUniversityChange: (university: string) => void;
}

export default function Sidebar({ selectedUniversity, onUniversityChange }: SidebarProps) {
  return (
    <aside className="lg:w-64 primary-purple text-white p-6 rounded-lg lg:h-fit shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold tracking-wider mb-2">StudyHub</h2>
        <p className="text-sm opacity-90">Quality Education Resources</p>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2 opacity-90">Select University</label>
        <Select value={selectedUniversity} onValueChange={onUniversityChange}>
          <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Choose University" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SPPU">SPPU - Savitribai Phule Pune University</SelectItem>
            <SelectItem value="MUMBAI">Mumbai University (Coming Soon)</SelectItem>
            <SelectItem value="PUNE">Pune University (Coming Soon)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}

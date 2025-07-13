import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  id: string;
  name: string;
  description: string;
}

const subjects: Subject[] = [
  {
    id: "1",
    name: "Applied Mathematics",
    description: "Engineering Mathematics and Statistics",
  },
  {
    id: "2",
    name: "Applied Physics",
    description: "Fundamentals of Physics and Lab",
  },
  {
    id: "3",
    name: "Data Structures",
    description: "Algorithms and Data Organization",
  },
  {
    id: "4",
    name: "Database Management Systems",
    description: "SQL, NoSQL, and Database Design",
  },
  {
    id: "5",
    name: "Computer Networks",
    description: "Network Protocols and Security",
  },
];

export default function SubjectsList() {
  const { toast } = useToast();

  const handleViewSubject = (subject: Subject) => {
    toast({
      title: "Subject Selected",
      description: `Viewing ${subject.name}. Subject details would be implemented here.`,
    });
  };

  return (
    <div className="bg-white border border-purple-200 rounded-lg overflow-hidden shadow-lg">
      <div className="primary-orange text-white p-4">
        <h3 className="text-lg font-semibold">Available Subjects</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="p-4 flex justify-between items-center hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50 transition-all duration-200"
          >
            <div>
              <h4 className="font-medium text-gray-900">{subject.name}</h4>
              <p className="text-sm text-gray-500">{subject.description}</p>
            </div>
            <Button
              onClick={() => handleViewSubject(subject)}
              className="primary-purple text-white hover:bg-purple-700 transition-colors shadow-md"
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

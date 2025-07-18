import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Subject {
  Product_id: string;
  title: string;
  description: string;
  syllabus: {
    unit: string;
    content: string;
    id: string;
  }[];
}

interface Props {
  branch: string;
  year: string;
  sem: string;
  pattern: string;
}

export default function SubjectsList({ branch, year, sem, pattern }: Props) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (branch && year && sem && pattern) {
      fetchSubjects();
    }
  }, [branch, year, sem, pattern]);



  const fetchSubjects = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/get-subjects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          branch,
          year,
          sem,
          pattern,
        }),
      });

      const data = await response.json();

      if (data.message === "No records found") {
        setSubjects([]);
        return;
      }

      const mapped = data.map((item: any) => ({
        Product_id: item._id,
        title: item.title,
        description: item.discription,
        syllabus: item.syllabus.map((unit: any) => ({
          id: unit.unitid,
          unit: unit.unitno,
          content: "Click View to see details", // Placeholder text
        })),
      }));

      setSubjects(mapped);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const handleView = (unitId: string) => {
    navigate(`/unit/${unitId}`);
  };

  const toggleDropdown = (subjectId: string) => {
    setExpandedSubjectId((prev) => (prev === subjectId ? null : subjectId));
  };

  return (
    <div className="space-y-6">
      {subjects.length === 0 ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        subjects.map((subject) => (
          <Card
            key={subject.Product_id}
            className="p-4 border shadow-sm cursor-pointer hover:shadow-md"
            onClick={() => toggleDropdown(subject.Product_id)}
          >
            <div className="font-semibold text-lg">{subject.title}</div>
            <div className="text-sm text-gray-600">{subject.description}</div>

            {expandedSubjectId === subject.Product_id && (
              <div className="mt-4 space-y-3">
                {subject.syllabus.map((unit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border p-2 rounded-md bg-purple-50"
                  >
                    <div>
                      <div className="font-medium">{unit.unit}</div>
                      <div className="text-sm text-gray-500">{unit.content}</div>
                    </div>
                    <Button onClick={() => handleView(unit.id)} variant="outline">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const [loading, setLoading] = useState(false);
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (branch && year && sem && pattern) {
      fetchSubjects();
    }
  }, [branch, year, sem, pattern]);

  const fetchSubjects = async () => {
    try {
      setLoading(true);
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
          content: "Click View to see details",
        })),
      }));

      setSubjects(mapped);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    } finally {
      setLoading(false);
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
      {loading ? (
        // Show 3 fake skeleton cards while loading
        Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="p-4 border shadow-sm">
            <Skeleton height={24} width={`60%`} className="mb-2" />
            <Skeleton height={18} width={`80%`} />
            <div className="mt-4 space-y-3">
              {Array.from({ length: 2 }).map((__, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border p-2 rounded-md"
                >
                  <div>
                    <Skeleton height={16} width={80} />
                    <Skeleton height={12} width={150} />
                  </div>
                  <Skeleton height={32} width={70} />
                </div>
              ))}
            </div>
          </Card>
        ))
      ) : subjects.length === 0 ? (
        <p className="text-center text-gray-500">No subjects found.</p>
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

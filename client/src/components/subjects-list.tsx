// src/components/SubjectsList.tsx

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LoadingNotes from "./ui/LoadingNotes";

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
  branch?: string;
  year?: string;
  sem?: string;
  pattern?: string;
}

const titles = [
  "Scholar", "Captain", "Trailblazer", "Visionary", "Learner",
  "Achiever", "Explorer", "Champion", "Seeker", "Prodigy",
  "Thinker", "Creator", "Strategist", "Inventor", "Doer"
];

export default function SubjectsList({ branch, year, sem, pattern }: Props) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);

  const [userTitle] = useState(() => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (branch && year && sem && pattern) {
      fetchSubjects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch, year, sem, pattern]);

  const fetchSubjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/get-subjects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ branch, year, sem, pattern }),
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
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          <LoadingNotes userTitle={userTitle} />
        </div>
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

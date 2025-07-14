import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PYQ {
  id: string;
  subject: string;
  year: string;
  semester: string;
  examYear: string;
  type: "Question Paper" | "Answer Key" | "Solution";
}

const pyqs: PYQ[] = [
  {
    id: "1",
    subject: "Applied Mathematics",
    year: "FE",
    semester: "1",
    examYear: "2023",
    type: "Question Paper",
  },
  {
    id: "2",
    subject: "Applied Physics",
    year: "FE",
    semester: "1",
    examYear: "2023",
    type: "Question Paper",
  },
  {
    id: "3",
    subject: "Data Structures",
    year: "SE",
    semester: "1",
    examYear: "2023",
    type: "Question Paper",
  },
  {
    id: "4",
    subject: "Database Management Systems",
    year: "TE",
    semester: "1",
    examYear: "2023",
    type: "Question Paper",
  },
  {
    id: "5",
    subject: "Computer Networks",
    year: "TE",
    semester: "2",
    examYear: "2023",
    type: "Question Paper",
  },
];

export default function PYQs() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSem, setSelectedSem] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredPYQs = pyqs.filter((pyq) => {
    if (selectedYear && selectedYear !== "all" && pyq.year !== selectedYear) return false;
    if (selectedSem && selectedSem !== "all" && pyq.semester !== selectedSem) return false;
    return true;
  });

  const handleDownload = (pyq: PYQ) => {
    toast({
      title: "Download Started",
      description: `Downloading ${pyq.subject} ${pyq.type} for ${pyq.examYear}`,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-4">Previous Year Question Papers</h1>
            <p className="text-lg text-gray-600">
              Access and download authentic PYQs to enhance your exam preparation
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-white p-6 rounded-lg mb-8 shadow-lg border border-purple-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Filter PYQs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
                <Select value={selectedYear ?? "all"} onValueChange={(val) => setSelectedYear(val === "all" ? null : val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="FE">First Year (FE)</SelectItem>
                    <SelectItem value="SE">Second Year (SE)</SelectItem>
                    <SelectItem value="TE">Third Year (TE)</SelectItem>
                    <SelectItem value="BE">Final Year (BE)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
                <Select value={selectedSem ?? "all"} onValueChange={(val) => setSelectedSem(val === "all" ? null : val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Semesters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="1">Semester I</SelectItem>
                    <SelectItem value="2">Semester II</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* PYQs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPYQs.map((pyq) => (
              <Card key={pyq.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    {pyq.subject}
                  </CardTitle>
                  <CardDescription>
                    {pyq.year} - Semester {pyq.semester}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      Exam Year: {pyq.examYear}
                    </div>
                    <div className="text-sm font-medium text-blue-600">
                      {pyq.type}
                    </div>
                    <Button
                      onClick={() => handleDownload(pyq)}
                      className="w-full accent-teal text-white hover:bg-teal-600 transition-colors"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPYQs.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No PYQs Found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to find the question papers you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

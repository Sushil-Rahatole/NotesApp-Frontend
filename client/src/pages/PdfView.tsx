import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

interface UnitData {
  unitno: string;
  discription: string;
  url: string;
  question: string[];
  youtube: string[];
}

const PdfView = () => {
  const { unitId } = useParams<{ unitId: string }>();
  const [data, setData] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUnit = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/get-pdf/${unitId}`);
        setData(response.data[0]);
      } catch (error) {
        console.error("Failed to fetch unit data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (unitId) {
      fetchUnit();
    }
  }, [unitId]);

  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-[600px] w-full" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load unit data. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Left Content */}
      <div className="md:w-[70%] w-full">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{data.unitno}</h1>
            <p className="text-gray-600">{data.discription}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Open PDF
            </a>
            <a
              href={data.url}
              download
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Download
            </a>
          </div>
        </div>

        <div className="w-full h-[600px] rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg bg-gray-50 flex items-center justify-center">
          <iframe
            src={data.url}
            width="100%"
            height="100%"
            allow="autoplay"
            title="PDF Preview"
            className="rounded-lg"
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="md:w-[30%] w-full mt-6 md:mt-0 space-y-6">
        {/* Important Questions */}
        {data.question && data.question.length > 0 && (
          <Card className="shadow-lg border border-gray-200">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Important Questions</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.question.map((q, index) => (
                  <li key={index}>{q}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* YouTube Links */}
        {data.youtube && data.youtube.length > 0 && (
          <Card className="shadow-lg border border-gray-200">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">YouTube Links</h2>
              <ul className="list-disc list-inside text-sm text-blue-600 space-y-2">
                {data.youtube.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Watch Video {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PdfView;

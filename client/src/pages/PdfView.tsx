import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

interface UnitData {
  unitno: string;
  discription: string;
  url: string;
}

const PdfView = () => {
  const { unitId } = useParams<{ unitId: string }>();
  const [data, setData] = useState<UnitData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUnit = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/get-pdf/${unitId}`);
        setData(response.data);
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
        <h1 className="text-2xl font-bold mb-2">{data.unitno}</h1>
        <p className="text-gray-600 mb-4">{data.discription}</p>

        <div className="w-full h-[600px] rounded overflow-hidden border shadow">
          <iframe
            src={data.url}
            width="100%"
            height="100%"
            allow="autoplay"
            title="PDF Preview"
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="md:w-[30%] w-full mt-6 md:mt-0">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">More Coming Soon...</h2>
            <p className="text-sm text-gray-500">
              YouTube links and important questions will be added later.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PdfView;

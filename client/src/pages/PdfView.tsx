import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PdfData {
  title: string;
  discription: string;
  impquestions: string;
  youtube: Record<string, string>;
  url: string;
}

export default function PdfView() {
  const { unitId } = useParams();
  const [data, setData] = useState<PdfData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/get-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: unitId }),
      });

      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [unitId]);

  if (!data) return <p className="p-4">Loading PDF details...</p>;

  return (
    <div className="flex min-h-screen">
      <div className="w-[70%] p-4">
        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.discription}</p>
        <iframe
          src={data.url}
          width="100%"
          height="600px"
          className="rounded-lg border"
          title="PDF Preview"
        ></iframe>
      </div>

      <div className="w-[30%] p-4 border-l overflow-y-auto" style={{ maxHeight: "100vh" }}>
        <h2 className="text-xl font-semibold mb-4">YouTube Resources</h2>
        {Object.entries(data.youtube).map(([title, url]) => (
          <div key={title} className="mb-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline"
            >
              {title}
            </a>
          </div>
        ))}
        <h3 className="mt-6 font-bold text-gray-700">Important Questions</h3>
        <p className="text-sm mt-2">{data.impquestions}</p>
      </div>
    </div>
  );
}

import { Check } from "lucide-react";

export default function About() {
  const features = [
    "High-quality study materials across multiple universities",
    "Updated previous year question papers with solutions", 
    "Curated content from top-performing students",
    "Multiple pattern support (2019, 2024, etc.)",
    "Free access to all educational resources",
    "Mobile-friendly and easy-to-navigate interface"
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-orange-50 via-purple-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-6">About StudyHub</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  StudyHub is your comprehensive platform for quality educational resources. We specialize in providing 
                  top-tier study materials, previous year question papers, and academic content that helps students 
                  excel in their examinations across various universities.
                </p>
                <p>
                  Starting with SPPU (Savitribai Phule Pune University), we're expanding our reach to serve students 
                  from multiple universities. Our mission is to democratize access to quality educational content and 
                  create a supportive learning environment for every student.
                </p>
                <p>
                  Whether you're preparing for semester exams, need specific subject explanations, or looking for 
                  pattern-specific resources, our curated collection ensures you have the best materials at your fingertips.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose StudyHub?</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="success-green mr-3 h-5 w-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:text-right">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Students studying together in library"
                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

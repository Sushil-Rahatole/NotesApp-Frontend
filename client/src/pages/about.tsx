import { Check } from "lucide-react";

export default function About() {
  const features = [
    "Comprehensive study materials for all branches",
    "Updated previous year question papers",
    "Quality content from top students",
    "Free access to all resources",
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Platform</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We are dedicated to empowering SPPU students with comprehensive study materials and resources. 
                  Our platform brings together the best notes, previous year question papers, and study guides 
                  from successful students and experienced educators.
                </p>
                <p>
                  Whether you're preparing for semester exams, looking for specific topic explanations, or 
                  need practice questions, our curated collection ensures you have access to quality content 
                  that helps you excel in your academic journey.
                </p>
                <p>
                  Join thousands of students who trust our platform for their SPPU exam preparation. 
                  Experience efficient studying, better understanding, and improved academic performance.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="sppu-green mr-3 h-5 w-5" />
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

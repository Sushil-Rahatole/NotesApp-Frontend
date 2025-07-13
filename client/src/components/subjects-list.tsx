import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  id: string;
  name: string;
  description: string;
  year: string;
  semester: string;
  pattern: string;
}

interface SubjectsListProps {
  selectedYear: string;
  selectedSem: string;
  selectedPattern: string;
}

// SPPU Computer Engineering subjects by year, semester and pattern
const sppu_subjects: Subject[] = [
  // First Year (FE) - Common for all branches
  // Semester 1
  { id: "fe1-1", name: "Engineering Mathematics I", description: "Calculus, Differential Equations, Linear Algebra", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-2", name: "Engineering Physics", description: "Mechanics, Thermodynamics, Wave Motion", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-3", name: "Engineering Chemistry", description: "Chemical Bonding, Electrochemistry, Polymers", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-4", name: "Engineering Graphics", description: "Technical Drawing, CAD, Geometric Construction", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-5", name: "Basic Electrical Engineering", description: "Circuit Analysis, AC/DC Circuits, Electrical Machines", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-6", name: "Programming and Problem Solving", description: "C Programming, Algorithms, Problem Solving", year: "FE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "fe2-1", name: "Engineering Mathematics II", description: "Multivariable Calculus, Vector Analysis, Probability", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-2", name: "Engineering Mechanics", description: "Statics, Dynamics, Strength of Materials", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-3", name: "Basic Electronics Engineering", description: "Semiconductor Devices, Amplifiers, Digital Circuits", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-4", name: "Basic Civil and Environmental Engineering", description: "Construction Materials, Environmental Protection", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-5", name: "Systems in Mechanical Engineering", description: "Mechanical Systems, Manufacturing Processes", year: "FE", semester: "2", pattern: "2019" },

  // Second Year (SE) Computer Engineering
  // Semester 1
  { id: "se1-1", name: "Data Structures and Algorithms", description: "Arrays, Trees, Graphs, Sorting and Searching", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-2", name: "Object Oriented Programming", description: "OOP Concepts, Java Programming, Design Patterns", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-3", name: "Computer Graphics", description: "2D/3D Graphics, Transformations, OpenGL", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-4", name: "Digital Electronics and Logic Design", description: "Boolean Algebra, Logic Gates, Sequential Circuits", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-5", name: "Discrete Mathematics", description: "Set Theory, Graph Theory, Mathematical Logic", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-6", name: "Engineering Mathematics III", description: "Complex Analysis, Fourier Series, Laplace Transform", year: "SE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "se2-1", name: "Computer Organization and Architecture", description: "CPU Design, Memory Systems, I/O Organization", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-2", name: "Database Management Systems", description: "SQL, Relational Model, Database Design", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-3", name: "Software Engineering", description: "SDLC, Requirements Analysis, Testing", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-4", name: "Theory of Computation", description: "Automata Theory, Formal Languages, Complexity", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-5", name: "Microprocessor", description: "8086 Architecture, Assembly Programming, Interfacing", year: "SE", semester: "2", pattern: "2019" },

  // Third Year (TE) Computer Engineering
  // Semester 1
  { id: "te1-1", name: "Design and Analysis of Algorithms", description: "Algorithm Design Techniques, Time Complexity", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-2", name: "Computer Networks", description: "OSI Model, TCP/IP, Network Security", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-3", name: "Operating Systems", description: "Process Management, Memory Management, File Systems", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-4", name: "Software Project Management", description: "Project Planning, Risk Management, Quality Assurance", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-5", name: "Human Computer Interface", description: "UI/UX Design, Usability Testing, Interaction Design", year: "TE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "te2-1", name: "Information and Network Security", description: "Cryptography, Network Security, Digital Forensics", year: "TE", semester: "2", pattern: "2019" },
  { id: "te2-2", name: "Artificial Intelligence", description: "Expert Systems, Machine Learning, Neural Networks", year: "TE", semester: "2", pattern: "2019" },
  { id: "te2-3", name: "Software Testing and Quality Assurance", description: "Testing Methodologies, Automation, Quality Metrics", year: "TE", semester: "2", pattern: "2019" },
  { id: "te2-4", name: "Web Technologies", description: "HTML, CSS, JavaScript, Web Frameworks", year: "TE", semester: "2", pattern: "2019" },

  // Final Year (BE) Computer Engineering
  // Semester 1
  { id: "be1-1", name: "Machine Learning", description: "Supervised Learning, Unsupervised Learning, Deep Learning", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-2", name: "Information Retrieval", description: "Search Engines, Text Mining, Information Extraction", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-3", name: "Software Architecture and Design Patterns", description: "Architectural Patterns, Design Principles", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-4", name: "Distributed Systems", description: "Distributed Computing, Cloud Computing, Microservices", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-5", name: "Major Project I", description: "Capstone Project Development and Implementation", year: "BE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "be2-1", name: "High Performance Computing", description: "Parallel Computing, GPU Programming, Performance Optimization", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-2", name: "Data Mining and Business Intelligence", description: "Data Analysis, BI Tools, Big Data Analytics", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-3", name: "Mobile Computing", description: "Android/iOS Development, Mobile App Design", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-4", name: "Major Project II", description: "Final Project Implementation and Documentation", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-5", name: "Seminar", description: "Technical Presentation and Research", year: "BE", semester: "2", pattern: "2019" },

  // 2024 Pattern subjects - Updated curriculum
  // First Year (FE) - 2024 Pattern
  { id: "fe1-1-2024", name: "Engineering Mathematics I", description: "Advanced Calculus, Linear Algebra, Statistics", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-2-2024", name: "Applied Physics", description: "Modern Physics, Quantum Mechanics, Materials", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-3-2024", name: "Applied Chemistry", description: "Nanochemistry, Green Chemistry, Biomaterials", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-4-2024", name: "Engineering Graphics and Design", description: "CAD/CAM, 3D Modeling, Design Thinking", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-5-2024", name: "Basic Electrical and Electronics Engineering", description: "Power Systems, Digital Electronics, IoT Basics", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-6-2024", name: "Programming Fundamentals", description: "Python Programming, Data Structures, Algorithms", year: "FE", semester: "1", pattern: "2024" },

  { id: "fe2-1-2024", name: "Engineering Mathematics II", description: "Differential Equations, Complex Analysis, Transforms", year: "FE", semester: "2", pattern: "2024" },
  { id: "fe2-2-2024", name: "Mechanics of Materials", description: "Stress Analysis, Material Properties, Testing", year: "FE", semester: "2", pattern: "2024" },
  { id: "fe2-3-2024", name: "Environmental Studies", description: "Sustainability, Climate Change, Green Technologies", year: "FE", semester: "2", pattern: "2024" },
  { id: "fe2-4-2024", name: "Workshop Practice", description: "Manufacturing Processes, Digital Fabrication", year: "FE", semester: "2", pattern: "2024" },

  // Second Year (SE) Computer Engineering - 2024 Pattern
  { id: "se1-1-2024", name: "Advanced Data Structures", description: "Advanced Trees, Graphs, Hashing, Dynamic Programming", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-2-2024", name: "Object Oriented Programming with Java", description: "Advanced OOP, Spring Framework, Microservices", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-3-2024", name: "Computer Graphics and Visualization", description: "3D Graphics, VR/AR, Computer Vision", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-4-2024", name: "Digital Logic and Computer Architecture", description: "FPGA, VHDL, Advanced Computer Architecture", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-5-2024", name: "Discrete Mathematics and Logic", description: "Graph Theory, Combinatorics, Formal Methods", year: "SE", semester: "1", pattern: "2024" },

  { id: "se2-1-2024", name: "Database Systems and Big Data", description: "NoSQL, Big Data Analytics, Cloud Databases", year: "SE", semester: "2", pattern: "2024" },
  { id: "se2-2-2024", name: "Software Engineering and DevOps", description: "Agile, CI/CD, Containerization, Cloud Computing", year: "SE", semester: "2", pattern: "2024" },
  { id: "se2-3-2024", name: "Theory of Computation and Compiler Design", description: "Automata, Compilers, Language Processing", year: "SE", semester: "2", pattern: "2024" },
  { id: "se2-4-2024", name: "Embedded Systems", description: "IoT, Arduino, Raspberry Pi, Real-time Systems", year: "SE", semester: "2", pattern: "2024" },

  // Third Year (TE) Computer Engineering - 2024 Pattern
  { id: "te1-1-2024", name: "Machine Learning and AI", description: "Deep Learning, Neural Networks, AI Ethics", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-2-2024", name: "Computer Networks and Security", description: "Network Security, Blockchain, Cybersecurity", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-3-2024", name: "Operating Systems and Cloud Computing", description: "Distributed OS, Cloud Platforms, Virtualization", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-4-2024", name: "Web Technologies and Frameworks", description: "React, Node.js, Progressive Web Apps", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-5-2024", name: "Human-Computer Interaction", description: "UX/UI Design, Accessibility, User Research", year: "TE", semester: "1", pattern: "2024" },

  { id: "te2-1-2024", name: "Data Science and Analytics", description: "Big Data, Data Mining, Business Intelligence", year: "TE", semester: "2", pattern: "2024" },
  { id: "te2-2-2024", name: "Mobile App Development", description: "Flutter, React Native, Cross-platform Development", year: "TE", semester: "2", pattern: "2024" },
  { id: "te2-3-2024", name: "Software Testing and Quality", description: "Automated Testing, Performance Testing, QA", year: "TE", semester: "2", pattern: "2024" },
  { id: "te2-4-2024", name: "Blockchain and Cryptocurrency", description: "Smart Contracts, DeFi, Cryptocurrency Systems", year: "TE", semester: "2", pattern: "2024" },

  // Final Year (BE) Computer Engineering - 2024 Pattern
  { id: "be1-1-2024", name: "Advanced Machine Learning", description: "Deep Learning, Computer Vision, NLP", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-2-2024", name: "Distributed Systems and Microservices", description: "Kubernetes, Docker, Service Mesh", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-3-2024", name: "Software Architecture and Design", description: "System Design, Scalability, Performance", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-4-2024", name: "Capstone Project I", description: "Industry Project, Research, Innovation", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-5-2024", name: "Professional Ethics and Communication", description: "Technical Writing, Ethics, Professional Skills", year: "BE", semester: "1", pattern: "2024" },

  { id: "be2-1-2024", name: "Quantum Computing", description: "Quantum Algorithms, Quantum Programming", year: "BE", semester: "2", pattern: "2024" },
  { id: "be2-2-2024", name: "Edge Computing and IoT", description: "Edge AI, Smart Cities, Industrial IoT", year: "BE", semester: "2", pattern: "2024" },
  { id: "be2-3-2024", name: "Entrepreneurship and Innovation", description: "Startup Development, Business Models", year: "BE", semester: "2", pattern: "2024" },
  { id: "be2-4-2024", name: "Capstone Project II", description: "Final Project, Thesis, Industry Presentation", year: "BE", semester: "2", pattern: "2024" },
];

export default function SubjectsList({ selectedYear, selectedSem, selectedPattern }: SubjectsListProps) {
  const { toast } = useToast();

  // Filter subjects based on selected criteria
  const filteredSubjects = sppu_subjects.filter((subject) => {
    if (!selectedYear || !selectedSem || !selectedPattern) return false;
    return subject.year === selectedYear && 
           subject.semester === selectedSem && 
           subject.pattern === selectedPattern;
  });

  const handleViewSubject = (subject: Subject) => {
    toast({
      title: "Subject Selected",
      description: `Viewing ${subject.name} for ${subject.year} ${subject.semester === "1" ? "Semester I" : "Semester II"}.`,
    });
  };

  if (filteredSubjects.length === 0) {
    return (
      <div className="bg-white border border-purple-200 rounded-lg overflow-hidden shadow-lg">
        <div className="primary-orange text-white p-4">
          <h3 className="text-lg font-semibold">Available Subjects</h3>
        </div>
        <div className="p-8 text-center">
          <div className="text-gray-500 mb-4">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg font-medium">No subjects found</p>
          <p className="text-gray-500 text-sm mt-2">Please select Year, Semester, and Pattern to view available subjects</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-purple-200 rounded-lg overflow-hidden shadow-lg">
      <div className="primary-orange text-white p-4">
        <h3 className="text-lg font-semibold">
          Available Subjects ({selectedYear} - Semester {selectedSem === "1" ? "I" : "II"}, {selectedPattern} Pattern)
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredSubjects.map((subject) => (
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

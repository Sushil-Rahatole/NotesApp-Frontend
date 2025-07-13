import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  id: string;
  name: string;
  description: string;
  branch: string;
  year: string;
  semester: string;
  pattern: string;
}

interface SubjectsListProps {
  selectedBranch: string;
  selectedYear: string;
  selectedSem: string;
  selectedPattern: string;
}

// SPPU Engineering subjects by branch, year, semester and pattern
const sppu_subjects: Subject[] = [
  // First Year (FE) - Common for all branches
  // Semester 1
  { id: "fe1-1", name: "Engineering Mathematics I", description: "Calculus, Differential Equations, Linear Algebra", branch: "COMMON", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-2", name: "Engineering Physics", description: "Mechanics, Thermodynamics, Wave Motion", branch: "COMMON", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-3", name: "Engineering Chemistry", description: "Chemical Bonding, Electrochemistry, Polymers", branch: "COMMON", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-4", name: "Engineering Graphics", description: "Technical Drawing, CAD, Geometric Construction", branch: "COMMON", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-5", name: "Basic Electrical Engineering", description: "Circuit Analysis, AC/DC Circuits, Electrical Machines", branch: "COMMON", year: "FE", semester: "1", pattern: "2019" },
  { id: "fe1-6", name: "Programming and Problem Solving", description: "C Programming, Algorithms, Problem Solving", branch: "COMMON", year: "FE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "fe2-1", name: "Engineering Mathematics II", description: "Multivariable Calculus, Vector Analysis, Probability", branch: "COMMON", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-2", name: "Engineering Mechanics", description: "Statics, Dynamics, Strength of Materials", branch: "COMMON", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-3", name: "Basic Electronics Engineering", description: "Semiconductor Devices, Amplifiers, Digital Circuits", branch: "COMMON", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-4", name: "Basic Civil and Environmental Engineering", description: "Construction Materials, Environmental Protection", branch: "COMMON", year: "FE", semester: "2", pattern: "2019" },
  { id: "fe2-5", name: "Systems in Mechanical Engineering", description: "Mechanical Systems, Manufacturing Processes", branch: "COMMON", year: "FE", semester: "2", pattern: "2019" },

  // Second Year (SE) Computer Engineering
  // Semester 1
  { id: "se1-1", name: "Data Structures and Algorithms", description: "Arrays, Trees, Graphs, Sorting and Searching", branch: "COMP", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-2", name: "Object Oriented Programming", description: "OOP Concepts, Java Programming, Design Patterns", branch: "COMP", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-3", name: "Computer Graphics", description: "2D/3D Graphics, Transformations, OpenGL", branch: "COMP", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-4", name: "Digital Electronics and Logic Design", description: "Boolean Algebra, Logic Gates, Sequential Circuits", branch: "COMP", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-5", name: "Discrete Mathematics", description: "Set Theory, Graph Theory, Mathematical Logic", branch: "COMP", year: "SE", semester: "1", pattern: "2019" },
  { id: "se1-6", name: "Engineering Mathematics III", description: "Complex Analysis, Fourier Series, Laplace Transform", branch: "COMP", year: "SE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "se2-1", name: "Computer Organization and Architecture", description: "CPU Design, Memory Systems, I/O Organization", branch: "COMP", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-2", name: "Database Management Systems", description: "SQL, Relational Model, Database Design", branch: "COMP", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-3", name: "Software Engineering", description: "SDLC, Requirements Analysis, Testing", branch: "COMP", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-4", name: "Theory of Computation", description: "Automata Theory, Formal Languages, Complexity", branch: "COMP", year: "SE", semester: "2", pattern: "2019" },
  { id: "se2-5", name: "Microprocessor", description: "8086 Architecture, Assembly Programming, Interfacing", branch: "COMP", year: "SE", semester: "2", pattern: "2019" },

  // Third Year (TE) Computer Engineering
  // Semester 1
  { id: "te1-1", name: "Design and Analysis of Algorithms", description: "Algorithm Design Techniques, Time Complexity", branch: "COMP", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-2", name: "Computer Networks", description: "OSI Model, TCP/IP, Network Security", branch: "COMP", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-3", name: "Operating Systems", description: "Process Management, Memory Management, File Systems", branch: "COMP", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-4", name: "Software Project Management", description: "Project Planning, Risk Management, Quality Assurance", branch: "COMP", year: "TE", semester: "1", pattern: "2019" },
  { id: "te1-5", name: "Human Computer Interface", description: "UI/UX Design, Usability Testing, Interaction Design", branch: "COMP", year: "TE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "te2-1", name: "Information and Network Security", description: "Cryptography, Network Security, Digital Forensics", branch: "COMP", year: "TE", semester: "2", pattern: "2019" },
  { id: "te2-2", name: "Artificial Intelligence", description: "Expert Systems, Machine Learning, Neural Networks", branch: "COMP", year: "TE", semester: "2", pattern: "2019" },
  { id: "te2-3", name: "Software Testing and Quality Assurance", description: "Testing Methodologies, Automation, Quality Metrics", branch: "COMP", year: "TE", semester: "2", pattern: "2019" },
  { id: "te2-4", name: "Web Technologies", description: "HTML, CSS, JavaScript, Web Frameworks", branch: "COMP", year: "TE", semester: "2", pattern: "2019" },

  // Final Year (BE) Computer Engineering
  // Semester 1
  { id: "be1-1", name: "Machine Learning", description: "Supervised Learning, Unsupervised Learning, Deep Learning", branch: "COMP", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-2", name: "Information Retrieval", description: "Search Engines, Text Mining, Information Extraction", branch: "COMP", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-3", name: "Software Architecture and Design Patterns", description: "Architectural Patterns, Design Principles", branch: "COMP", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-4", name: "Distributed Systems", description: "Distributed Computing, Cloud Computing, Microservices", branch: "COMP", year: "BE", semester: "1", pattern: "2019" },
  { id: "be1-5", name: "Major Project I", description: "Capstone Project Development and Implementation", branch: "COMP", year: "BE", semester: "1", pattern: "2019" },

  // Semester 2
  { id: "be2-1", name: "High Performance Computing", description: "Parallel Computing, GPU Programming, Performance Optimization", branch: "COMP", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-2", name: "Data Mining and Business Intelligence", description: "Data Analysis, BI Tools, Big Data Analytics", branch: "COMP", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-3", name: "Mobile Computing", description: "Android/iOS Development, Mobile App Design", branch: "COMP", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-4", name: "Major Project II", description: "Final Project Implementation and Documentation", branch: "COMP", year: "BE", semester: "2", pattern: "2019" },
  { id: "be2-5", name: "Seminar", description: "Technical Presentation and Research", branch: "COMP", year: "BE", semester: "2", pattern: "2019" },

  // 2024 Pattern subjects - Updated curriculum
  // First Year (FE) - 2024 Pattern
  { id: "fe1-1-2024", name: "Engineering Mathematics I", description: "Advanced Calculus, Linear Algebra, Statistics", branch: "COMMON", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-2-2024", name: "Applied Physics", description: "Modern Physics, Quantum Mechanics, Materials", branch: "COMMON", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-3-2024", name: "Applied Chemistry", description: "Nanochemistry, Green Chemistry, Biomaterials", branch: "COMMON", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-4-2024", name: "Engineering Graphics and Design", description: "CAD/CAM, 3D Modeling, Design Thinking", branch: "COMMON", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-5-2024", name: "Basic Electrical and Electronics Engineering", description: "Power Systems, Digital Electronics, IoT Basics", branch: "COMMON", year: "FE", semester: "1", pattern: "2024" },
  { id: "fe1-6-2024", name: "Programming Fundamentals", description: "Python Programming, Data Structures, Algorithms", branch: "COMMON", year: "FE", semester: "1", pattern: "2024" },

  { id: "fe2-1-2024", name: "Engineering Mathematics II", description: "Differential Equations, Complex Analysis, Transforms", branch: "COMMON", year: "FE", semester: "2", pattern: "2024" },
  { id: "fe2-2-2024", name: "Mechanics of Materials", description: "Stress Analysis, Material Properties, Testing", branch: "COMMON", year: "FE", semester: "2", pattern: "2024" },
  { id: "fe2-3-2024", name: "Environmental Studies", description: "Sustainability, Climate Change, Green Technologies", branch: "COMMON", year: "FE", semester: "2", pattern: "2024" },
  { id: "fe2-4-2024", name: "Workshop Practice", description: "Manufacturing Processes, Digital Fabrication", branch: "COMMON", year: "FE", semester: "2", pattern: "2024" },

  // Second Year (SE) Computer Engineering - 2024 Pattern
  { id: "se1-1-2024", name: "Advanced Data Structures", description: "Advanced Trees, Graphs, Hashing, Dynamic Programming", branch: "COMP", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-2-2024", name: "Object Oriented Programming with Java", description: "Advanced OOP, Spring Framework, Microservices", branch: "COMP", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-3-2024", name: "Computer Graphics and Visualization", description: "3D Graphics, VR/AR, Computer Vision", branch: "COMP", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-4-2024", name: "Digital Logic and Computer Architecture", description: "FPGA, VHDL, Advanced Computer Architecture", branch: "COMP", year: "SE", semester: "1", pattern: "2024" },
  { id: "se1-5-2024", name: "Discrete Mathematics and Logic", description: "Graph Theory, Combinatorics, Formal Methods", branch: "COMP", year: "SE", semester: "1", pattern: "2024" },

  { id: "se2-1-2024", name: "Database Systems and Big Data", description: "NoSQL, Big Data Analytics, Cloud Databases", branch: "COMP", year: "SE", semester: "2", pattern: "2024" },
  { id: "se2-2-2024", name: "Software Engineering and DevOps", description: "Agile, CI/CD, Containerization, Cloud Computing", branch: "COMP", year: "SE", semester: "2", pattern: "2024" },
  { id: "se2-3-2024", name: "Theory of Computation and Compiler Design", description: "Automata, Compilers, Language Processing", branch: "COMP", year: "SE", semester: "2", pattern: "2024" },
  { id: "se2-4-2024", name: "Embedded Systems", description: "IoT, Arduino, Raspberry Pi, Real-time Systems", branch: "COMP", year: "SE", semester: "2", pattern: "2024" },

  // Third Year (TE) Computer Engineering - 2024 Pattern
  { id: "te1-1-2024", name: "Machine Learning and AI", description: "Deep Learning, Neural Networks, AI Ethics", branch: "COMP", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-2-2024", name: "Computer Networks and Security", description: "Network Security, Blockchain, Cybersecurity", branch: "COMP", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-3-2024", name: "Operating Systems and Cloud Computing", description: "Distributed OS, Cloud Platforms, Virtualization", branch: "COMP", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-4-2024", name: "Web Technologies and Frameworks", description: "React, Node.js, Progressive Web Apps", branch: "COMP", year: "TE", semester: "1", pattern: "2024" },
  { id: "te1-5-2024", name: "Human-Computer Interaction", description: "UX/UI Design, Accessibility, User Research", branch: "COMP", year: "TE", semester: "1", pattern: "2024" },

  { id: "te2-1-2024", name: "Data Science and Analytics", description: "Big Data, Data Mining, Business Intelligence", branch: "COMP", year: "TE", semester: "2", pattern: "2024" },
  { id: "te2-2-2024", name: "Mobile App Development", description: "Flutter, React Native, Cross-platform Development", branch: "COMP", year: "TE", semester: "2", pattern: "2024" },
  { id: "te2-3-2024", name: "Software Testing and Quality", description: "Automated Testing, Performance Testing, QA", branch: "COMP", year: "TE", semester: "2", pattern: "2024" },
  { id: "te2-4-2024", name: "Blockchain and Cryptocurrency", description: "Smart Contracts, DeFi, Cryptocurrency Systems", branch: "COMP", year: "TE", semester: "2", pattern: "2024" },

  // Final Year (BE) Computer Engineering - 2024 Pattern
  { id: "be1-1-2024", name: "Advanced Machine Learning", description: "Deep Learning, Computer Vision, NLP", branch: "COMP", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-2-2024", name: "Distributed Systems and Microservices", description: "Kubernetes, Docker, Service Mesh", branch: "COMP", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-3-2024", name: "Software Architecture and Design", description: "System Design, Scalability, Performance", branch: "COMP", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-4-2024", name: "Capstone Project I", description: "Industry Project, Research, Innovation", branch: "COMP", year: "BE", semester: "1", pattern: "2024" },
  { id: "be1-5-2024", name: "Professional Ethics and Communication", description: "Technical Writing, Ethics, Professional Skills", branch: "COMP", year: "BE", semester: "1", pattern: "2024" },

  { id: "be2-1-2024", name: "Quantum Computing", description: "Quantum Algorithms, Quantum Programming", branch: "COMP", year: "BE", semester: "2", pattern: "2024" },
  { id: "be2-2-2024", name: "Edge Computing and IoT", description: "Edge AI, Smart Cities, Industrial IoT", branch: "COMP", year: "BE", semester: "2", pattern: "2024" },
  { id: "be2-3-2024", name: "Entrepreneurship and Innovation", description: "Startup Development, Business Models", branch: "COMP", year: "BE", semester: "2", pattern: "2024" },
  { id: "be2-4-2024", name: "Capstone Project II", description: "Final Project, Thesis, Industry Presentation", branch: "COMP", year: "BE", semester: "2", pattern: "2024" },

  // MECHANICAL ENGINEERING SUBJECTS
  // Second Year (SE) Mechanical Engineering
  { id: "mech-se1-1", name: "Strength of Materials", description: "Stress, Strain, Beam Theory, Deflection", branch: "MECH", year: "SE", semester: "1", pattern: "2019" },
  { id: "mech-se1-2", name: "Fluid Mechanics", description: "Fluid Properties, Flow Analysis, Bernoulli's Equation", branch: "MECH", year: "SE", semester: "1", pattern: "2019" },
  { id: "mech-se1-3", name: "Thermodynamics", description: "Laws of Thermodynamics, Heat Engines, Entropy", branch: "MECH", year: "SE", semester: "1", pattern: "2019" },
  { id: "mech-se1-4", name: "Material Science", description: "Crystal Structure, Phase Diagrams, Material Properties", branch: "MECH", year: "SE", semester: "1", pattern: "2019" },
  { id: "mech-se1-5", name: "Manufacturing Processes", description: "Casting, Welding, Machining, Forming", branch: "MECH", year: "SE", semester: "1", pattern: "2019" },

  { id: "mech-se2-1", name: "Kinematics of Machinery", description: "Mechanism Analysis, Velocity, Acceleration", branch: "MECH", year: "SE", semester: "2", pattern: "2019" },
  { id: "mech-se2-2", name: "Dynamics of Machinery", description: "Force Analysis, Balancing, Vibrations", branch: "MECH", year: "SE", semester: "2", pattern: "2019" },
  { id: "mech-se2-3", name: "Heat Transfer", description: "Conduction, Convection, Radiation, Heat Exchangers", branch: "MECH", year: "SE", semester: "2", pattern: "2019" },
  { id: "mech-se2-4", name: "Mechanical Measurements", description: "Instrumentation, Sensors, Calibration", branch: "MECH", year: "SE", semester: "2", pattern: "2019" },

  // Third Year (TE) Mechanical Engineering
  { id: "mech-te1-1", name: "Machine Design", description: "Design Philosophy, Failure Theories, Shaft Design", branch: "MECH", year: "TE", semester: "1", pattern: "2019" },
  { id: "mech-te1-2", name: "Thermal Engineering", description: "IC Engines, Gas Turbines, Steam Turbines", branch: "MECH", year: "TE", semester: "1", pattern: "2019" },
  { id: "mech-te1-3", name: "Fluid Power Engineering", description: "Hydraulic Systems, Pneumatic Systems, Controls", branch: "MECH", year: "TE", semester: "1", pattern: "2019" },
  { id: "mech-te1-4", name: "Mechanical Vibrations", description: "Free Vibrations, Forced Vibrations, Control", branch: "MECH", year: "TE", semester: "1", pattern: "2019" },

  { id: "mech-te2-1", name: "Finite Element Analysis", description: "FEA Theory, ANSYS, Structural Analysis", branch: "MECH", year: "TE", semester: "2", pattern: "2019" },
  { id: "mech-te2-2", name: "CAD/CAM", description: "Computer Aided Design, Manufacturing, CNC", branch: "MECH", year: "TE", semester: "2", pattern: "2019" },
  { id: "mech-te2-3", name: "Automation and Robotics", description: "Industrial Automation, Robot Programming", branch: "MECH", year: "TE", semester: "2", pattern: "2019" },
  { id: "mech-te2-4", name: "Operations Research", description: "Linear Programming, Optimization, Queuing Theory", branch: "MECH", year: "TE", semester: "2", pattern: "2019" },

  // CIVIL ENGINEERING SUBJECTS
  // Second Year (SE) Civil Engineering
  { id: "civil-se1-1", name: "Structural Analysis I", description: "Statically Determinate Structures, Trusses, Beams", branch: "CIVIL", year: "SE", semester: "1", pattern: "2019" },
  { id: "civil-se1-2", name: "Concrete Technology", description: "Concrete Mix Design, Properties, Testing", branch: "CIVIL", year: "SE", semester: "1", pattern: "2019" },
  { id: "civil-se1-3", name: "Fluid Mechanics", description: "Fluid Properties, Hydrostatics, Flow Measurement", branch: "CIVIL", year: "SE", semester: "1", pattern: "2019" },
  { id: "civil-se1-4", name: "Surveying", description: "Leveling, Theodolite, Total Station, GPS", branch: "CIVIL", year: "SE", semester: "1", pattern: "2019" },
  { id: "civil-se1-5", name: "Building Materials", description: "Cement, Steel, Aggregates, Quality Control", branch: "CIVIL", year: "SE", semester: "1", pattern: "2019" },

  { id: "civil-se2-1", name: "Structural Analysis II", description: "Indeterminate Structures, Moment Distribution", branch: "CIVIL", year: "SE", semester: "2", pattern: "2019" },
  { id: "civil-se2-2", name: "Geotechnical Engineering", description: "Soil Properties, Classification, Compaction", branch: "CIVIL", year: "SE", semester: "2", pattern: "2019" },
  { id: "civil-se2-3", name: "Hydraulics", description: "Open Channel Flow, Pipe Flow, Pumps", branch: "CIVIL", year: "SE", semester: "2", pattern: "2019" },
  { id: "civil-se2-4", name: "Transportation Engineering", description: "Highway Design, Traffic Engineering, Pavement", branch: "CIVIL", year: "SE", semester: "2", pattern: "2019" },

  // ELECTRICAL ENGINEERING SUBJECTS
  // Second Year (SE) Electrical Engineering
  { id: "elec-se1-1", name: "Circuit Analysis", description: "AC/DC Circuits, Network Theorems, Resonance", branch: "ELEC", year: "SE", semester: "1", pattern: "2019" },
  { id: "elec-se1-2", name: "Electromagnetic Fields", description: "Maxwell's Equations, Wave Propagation, Antennas", branch: "ELEC", year: "SE", semester: "1", pattern: "2019" },
  { id: "elec-se1-3", name: "Electronic Devices", description: "Diodes, Transistors, Amplifiers, Oscillators", branch: "ELEC", year: "SE", semester: "1", pattern: "2019" },
  { id: "elec-se1-4", name: "Digital Electronics", description: "Boolean Algebra, Logic Gates, Sequential Circuits", branch: "ELEC", year: "SE", semester: "1", pattern: "2019" },
  { id: "elec-se1-5", name: "Electrical Measurements", description: "Measuring Instruments, Bridges, Transducers", branch: "ELEC", year: "SE", semester: "1", pattern: "2019" },

  { id: "elec-se2-1", name: "Power Systems I", description: "Power Generation, Transmission, Distribution", branch: "ELEC", year: "SE", semester: "2", pattern: "2019" },
  { id: "elec-se2-2", name: "Control Systems", description: "Feedback Systems, Stability, PID Controllers", branch: "ELEC", year: "SE", semester: "2", pattern: "2019" },
  { id: "elec-se2-3", name: "Electrical Machines I", description: "Transformers, DC Motors, AC Motors", branch: "ELEC", year: "SE", semester: "2", pattern: "2019" },
  { id: "elec-se2-4", name: "Microprocessors", description: "8085/8086, Assembly Programming, Interfacing", branch: "ELEC", year: "SE", semester: "2", pattern: "2019" },

  // ELECTRONICS ENGINEERING SUBJECTS
  { id: "electronics-se1-1", name: "Analog Electronics", description: "Amplifiers, Oscillators, Filters, OpAmps", branch: "ELECTRONICS", year: "SE", semester: "1", pattern: "2019" },
  { id: "electronics-se1-2", name: "Digital Electronics", description: "Combinational Logic, Sequential Logic, Memory", branch: "ELECTRONICS", year: "SE", semester: "1", pattern: "2019" },
  { id: "electronics-se1-3", name: "Signals and Systems", description: "Signal Processing, Fourier Transform, Z-Transform", branch: "ELECTRONICS", year: "SE", semester: "1", pattern: "2019" },
  { id: "electronics-se1-4", name: "Electronic Measurements", description: "Oscilloscopes, Signal Generators, Spectrum Analyzers", branch: "ELECTRONICS", year: "SE", semester: "1", pattern: "2019" },

  { id: "electronics-se2-1", name: "Communication Systems", description: "Modulation, Demodulation, Noise, Antenna Theory", branch: "ELECTRONICS", year: "SE", semester: "2", pattern: "2019" },
  { id: "electronics-se2-2", name: "Microprocessors and Microcontrollers", description: "8051, ARM, Programming, Interfacing", branch: "ELECTRONICS", year: "SE", semester: "2", pattern: "2019" },
  { id: "electronics-se2-3", name: "Power Electronics", description: "Power Diodes, Thyristors, Converters, Inverters", branch: "ELECTRONICS", year: "SE", semester: "2", pattern: "2019" },
  { id: "electronics-se2-4", name: "Electronic Circuit Design", description: "PCB Design, CAD Tools, Simulation", branch: "ELECTRONICS", year: "SE", semester: "2", pattern: "2019" },

  // INFORMATION TECHNOLOGY SUBJECTS
  { id: "it-se1-1", name: "Data Structures and Algorithms", description: "Arrays, Linked Lists, Trees, Sorting, Searching", branch: "IT", year: "SE", semester: "1", pattern: "2019" },
  { id: "it-se1-2", name: "Object Oriented Programming", description: "Java, C++, OOP Principles, Design Patterns", branch: "IT", year: "SE", semester: "1", pattern: "2019" },
  { id: "it-se1-3", name: "Database Management Systems", description: "SQL, Relational Model, Normalization", branch: "IT", year: "SE", semester: "1", pattern: "2019" },
  { id: "it-se1-4", name: "Computer Networks", description: "OSI Model, TCP/IP, Network Protocols", branch: "IT", year: "SE", semester: "1", pattern: "2019" },
  { id: "it-se1-5", name: "Web Technologies", description: "HTML, CSS, JavaScript, PHP, MySQL", branch: "IT", year: "SE", semester: "1", pattern: "2019" },

  { id: "it-se2-1", name: "Software Engineering", description: "SDLC, Testing, Project Management", branch: "IT", year: "SE", semester: "2", pattern: "2019" },
  { id: "it-se2-2", name: "Operating Systems", description: "Process Management, Memory Management, File Systems", branch: "IT", year: "SE", semester: "2", pattern: "2019" },
  { id: "it-se2-3", name: "System Analysis and Design", description: "Requirements Analysis, System Design, UML", branch: "IT", year: "SE", semester: "2", pattern: "2019" },
  { id: "it-se2-4", name: "Computer Graphics", description: "2D/3D Graphics, Animation, Rendering", branch: "IT", year: "SE", semester: "2", pattern: "2019" },
];

// Add the missing branch property to all existing subjects
const addBranchToSubjects = (subjects: Subject[]) => {
  return subjects.map(subject => {
    // If branch is missing, add it based on existing subjects
    if (!subject.branch) {
      // Add branch property based on subject patterns
      if (subject.year === "FE") {
        return { ...subject, branch: "COMMON" };
      } else if (subject.id.includes("comp") || subject.id.includes("se1") || subject.id.includes("se2") || subject.id.includes("te1") || subject.id.includes("te2") || subject.id.includes("be1") || subject.id.includes("be2")) {
        return { ...subject, branch: "COMP" };
      }
    }
    return subject;
  });
};

export default function SubjectsList({ selectedBranch, selectedYear, selectedSem, selectedPattern }: SubjectsListProps) {
  const { toast } = useToast();

  // Process subjects to add missing branch properties
  const processedSubjects = addBranchToSubjects(sppu_subjects);

  // Filter subjects based on selected criteria
  const filteredSubjects = processedSubjects.filter((subject) => {
    if (!selectedBranch || !selectedYear || !selectedSem || !selectedPattern) return false;
    
    // For First Year (FE), show common subjects for all branches
    if (selectedYear === "FE") {
      return subject.branch === "COMMON" && 
             subject.year === selectedYear && 
             subject.semester === selectedSem && 
             subject.pattern === selectedPattern;
    }
    
    // For other years, show branch-specific subjects
    return subject.branch === selectedBranch && 
           subject.year === selectedYear && 
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
          Available Subjects ({selectedYear === "FE" ? "First Year" : `${selectedBranch} ${selectedYear}`} - Semester {selectedSem === "1" ? "I" : "II"}, {selectedPattern} Pattern)
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

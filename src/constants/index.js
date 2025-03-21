import project1 from "../assets/food.jpg";
// import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/portfolio.jpg";
import project4 from "../assets/auth.jpg";

export const HERO_CONTENT = ` Full Stack Developer with 1.5 years of professional experience specializing in JavaScript, ES6+, React.js, Node.js, Express.js, and MongoDB. Adept at designing, developing, and deploying scalable, secure, and high-performance web applications optimized for both speed and functionality. Skilled in crafting intuitive, responsive user interfaces and robust backend solutions that ensure seamless user experiences through modern development practices and efficient coding techniques.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJs, Python, JavaScript, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT = `
  <p>Full Stack Web Developer with a diverse background spanning across software development roles. Currently employed at Visual Infosystems Pvt. Ltd. as a Frontend Developer.</p>

  <p>Initiated my professional journey as a Post Graduate Trainee at Compserv Consultants Pvt Ltd, Kolhapur.</p>

  <h2 class="font-bold text-lg mt-4 mb-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Key Skills:</h2>
  <ul class="list-disc list-inside mb-4">
    <li>Proficient in HTML5, CSS3, and JavaScript (ES6+)</li>
    <li>Experienced with React.js and Familiarity with REST APIs</li>
    <li>Skilled in responsive web design using Flexbox and Grid</li>
    <li>Knowledgeable in using build tools such as Webpack and Vite</li>
    <li>Familiar with version control systems like Git and GitHub</li>
    <li>Techniques for optimizing front-end performance and ensuring cross-browser compatibility</li>
    <li>Familiar with CI/CD pipelines and deployment processes</li>
  </ul>

 

  <h2 class="font-bold text-lg mt-4 mb-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Certifications & Courses:</h2>
  <ul class="list-disc list-inside mb-4">
   
    <li>[SQL(Basic)]: HackerRank.</li>
  </ul>

  <h2 class="font-bold text-lg mt-4 mb-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Contributions:</h2>
  <ul class="list-disc list-inside mb-4">
    <li>Contributions to open-source, on-site, live projects or involvement in developer communities.</li>
  </ul>
`;

{/* <li>[Certification Name]: A brief description.</li> */ }
{/* <li>Proficient in debugging, writing unit tests, and applying SEO best practices</li> */ }

{/* <li>Experience integrating RESTful APIs and handling data</li> */ }

{/* <li>Committed to implementing accessible design practices (a11y)</li> */ }

{/* <li>Expertise in CSS frameworks including Tailwind CSS and Bootstrap</li> */ }

{/* <h2 class="font-bold text-lg mt-4 mb-2">Highlighted Projects:</h2>
<ul class="list-disc list-inside mb-4">
  <li>[Project Name 1]: A brief description of the project, technologies used, and your role.</li>
  <li>[Project Name 2]: A brief description of the project, technologies used, and your role.</li>
</ul> */}

// With a cumulative industry experience of 1.0 years, I am enthusiastic about exploring diverse work environments and eager to seize opportunities that foster skill development and growth.`

// Prior to this, served as a Trainee Software Engineer at Celestiq Datatech Pvt. Ltd., Pune, where I honed my skills in frontend technologies.


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Web Developer",
    company: "VISUAL INFOSYSTEMS Pvt. Ltd.",
    description: `Lead a team in developing and maintaining web applications, including a School/College ERP management system, using JavaScript (ES6), Python, and Django. Implemented stored procedures and functions for data inserting and retrieving. Designed and implemented a real-time notification system using WebSockets to alert users of important events and updates. Created a responsive dashboard to display real-time updates and notifications for both administrators and users. Optimized notification delivery to ensure timely alerts without impacting system performance.`,
    technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript & ES6+", "Python", "Django", "AJAX", "PostgreSql", "WebSockets", "socket.io", "GraphQL"],
    projects: [
      {
        title: "School/College ERP Software",
        description: "A comprehensive enterprise resource planning solution designed specifically for educational institutions. The system integrates all aspects of school/college management including student information management, admissions processing, fee management, academic records, staff management, examination scheduling, and resource allocation. Features include customizable data entry forms, advanced search and filtering capabilities, and provide deep insights into institutional operations.",
        technologies: ["Python", "Django", "JavaScript & ES6+", "PostgreSql", "HTML5", "CSS", "Bootstrap", "AJAX", "WebSockets"],
        // link: "https://erp-demo.visualinfosystems.com", // Replace with actual link if available
        // github: "", // Replace with actual GitHub link if available
      },
      {
        title: "EduTrack - Teacher Portal",
        description: "A comprehensive web application designed for teachers to efficiently manage and monitor student progress. The portal includes detailed attendance tracking with visual analytics, customizable notice creation for classes or individual students, and in-depth performance reporting tools. Teachers can view daily, weekly, and annual performance metrics with customizable charts and graphs, communicate directly with parents through integrated messaging, and receive real-time notifications for important events. The application features a responsive dashboard that prioritizes the most critical information for quick access.",
        technologies: ["React + Vite", "Python", "Django", "PostgreSql", "WebSockets", "socket.io"],
        // link: "https://teacher-portal-demo.vercel.app", // Replace with actual link if available
        // github: "https://github.com/yourusername/teacher-portal", // Replace with actual GitHub link if available
      },
      {
        title: "EduConnect - Parent Portal",
        description: "A mobile-first application that enables parents to stay connected with their child's educational journey. Parents can access real-time updates on attendance, academic performance, and upcoming assignments. The app send receipt generation and delivery via WhatsApp. Parents receive instant notifications about their child's attendance, performance changes, and school announcements. The application includes a direct communication channel with teachers, calendar integration for important dates, and visual representations of their child's progress compared to class averages. The intuitive interface ensures that even less tech-savvy parents can easily navigate and utilize all features.",
        technologies: ["React + Vite", "Python", "Django", "PostgreSql", "WhatsApp API"],
        // link: "https://parent-portal-demo.vercel.app", // Replace with actual link if available
        // github: "https://github.com/yourusername/parent-portal", // Replace with actual GitHub link if available
      }
    ]
  },
  {
    year: "December-2022 - January-2023",
    role: "Frontend Developer (Intern)",
    company: "Compserv Consultants Pvt. Ltd. Kolhapur",
    description: `Designed and developed Jasper Report using Php, JavaScript, HTML, CSS and PostgreSQL. Worked closely with backend developer to integrate frontend date with Backend. Implemented responsive designs and optimized frontend performance. Created interactive UI components that enhanced user experience across different devices.`,
    technologies: ["HTML", "CSS", "Php", "PostgreSQL", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Food Order",
    image: project1,
    description:
      "A fully functional food order website with features like product listing, and user authentication.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
  }
  ,

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML5", "CSS3", "React", "Bootstrap 5"],
  },
  {
    title: "Authentication System",
    image: project4,
    description:
      "A secure and efficient authentication system built using the MERN stack. This project includes user registration, login, JWT-based authentication, and role-based access control.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://rbac-git-main-tushars-projects-4fee5802.vercel.app/register",
    github: "https://github.com/tushar782/JWT-AUTH" // Add this if available
  },
];

export const CONTACT = {
  address: "India",
  phoneNo: "+91 7522994318",
  email: "tusharpimple017@gmail.com",
};

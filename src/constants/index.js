import project1 from "../assets/food.jpg";
// import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/portfolio.jpg";
import project4 from "../assets/gym1.jpg";

export const HERO_CONTENT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies including HTML5,  CSS3,  JavaScript(ES6),  React.js,  PostgreSQL. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJs, Python, JavaScript, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT = `
  <p>Frontend Developer with a diverse background spanning across software development roles. Currently employed at Visual Infosystems Pvt. Ltd. as a Frontend Developer.</p>

  <p>Initiated my professional journey as a Post Graduate Trainee at Compserv Consultants Pvt Ltd, Kolhapur.</p>

  <h2 class="font-bold text-lg mt-4 mb-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Key Skills:</h2>
  <ul class="list-disc list-inside mb-4">
    <li>Proficient in HTML5, CSS3, and JavaScript (ES6+)</li>
    <li>Experienced with React.js and other modern JavaScript frameworks</li>
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

{/* <li>[Certification Name]: A brief description.</li> */}
{/* <li>Proficient in debugging, writing unit tests, and applying SEO best practices</li> */}

{/* <li>Experience integrating RESTful APIs and handling data</li> */}

{/* <li>Committed to implementing accessible design practices (a11y)</li> */}

{/* <li>Expertise in CSS frameworks including Tailwind CSS and Bootstrap</li> */}

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
    role: "Frontend Developer",
    company: "VISUAL INFOSYSTEMS Pvt. Ltd.",
    description: `Lead a team in developing and maintaining web applications, including a school/college management system, using JavaScript, Python, and Django. Implemented stored procedures and functions for data inserting and retrieving.`,
    technologies: ["HTML5", "CSS", "Python", "Django", "Javascript", "AJAX", "PostgreSQL"],
  },
  {
    year: "December-2022 - January-2023",
    role: "Frontend Developer (Intern)",
    company: "Compserv Consultants Pvt. Ltd. Kolhapur",
    description: `Designed and developed Jasper Report using Php , JavaScript , HTML , CSS and PostgreSQL. Worked closely with backend developer to integrate frontend date with Backend. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Php", "PostgreSQL"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
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
    title: "Gym Web Application",
    image: project4,
    description:
      "A user interactive website that aims to set up step-wise workout, meditation, balanced dietary recommendations and user's daily schedules.",
    technologies: ["HTML", "CSS", "Php", "MySQL"],
  },
];

export const CONTACT = {
  address: "India",
  phoneNo: "+91 7522994318 ",
  email: "tusharpimple017@gmail.com",
};

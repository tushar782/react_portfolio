import project1 from "../assets/food.jpg";
// import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/portfolio.jpg";
import project4 from "../assets/gym1.jpg";

export const HERO_CONTENT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies including HTML, CSS, Python, Django, JavaScript, React.js, PostgreSQL, and MongoDB Atlas. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Python, JavaScript, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "VISUAL INFOSYSTEMS PVT LTD",
    description: `Lead a team in developing and maintaining web applications, including a school/college management system, using JavaScript, Python, and Django. Implemented stored procedures and functions for data inserting and retrieving.`,
    technologies: ["HTML5", "CSS", "Python", "Django", "Javascript", "AJAX", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer (Intern)",
    company: "Compserv Consultants Pvt Ltd Kolhapur",
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
  address: "Kolhapur",
  phoneNo: "+91 7522994318 ",
  email: "tusharpimple017@gmail.com",
};

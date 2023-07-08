import network from "./assets/images/socialNetwork.jpg";
import learningCards from "./assets/images/learningCards.jpg";
import Todolist from "./assets/images/Todolist.jpg";

const logotext = "ANDREW";
const meta = {
  title: "ANDREW VIALICHKA",
  description: "I’m ANDREW VIALICHKA WEB devloper,looking for job",
};

const introdata = {
  title: "I’m Andrew",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I learning developing mobile apps",
  },
  description: "I am the frontend developer you were looking for",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Hi there! I'm a frontend developer with experience in creating beautiful, efficient, and responsive web applications. My passion for web development started during my studies when I began creating my first websites. Since then, I've continued to learn and develop my skills in this field.",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Typescript",
    value: 90,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Redux",
    value: 60,
  },
  {
    name: "HTML/CSS",
    value: 85,
  },
];

const services = [
  {
    title: "Responsive layout",
    description:
      " I can design responsive layout that is optimized to work on various devices and screens.",
  },
  {
    title: "React",
    description:
      "I am fluent in React and understand its core concepts such as components, state and life cycle.",
  },
  {
    title: "State management",
    description:
      "I know how to manage the state of a React application using Redux or the Context API, which allows you to create SPAs with more complex logic.",
  },
];

const dataportfolio = [
  {
    img: network,
    description: "Database of frontend student's.",
    link: "https://andreyvialichka.github.io/Network/",
  },
  {
    img: Todolist,
    description: "Just simple TODO list",
    link: "https://andreyvialichka.github.io/TodoList/#/",
  },
  {
    img: learningCards,
    description: "Analog of Quizlet.",
    link: "https://andreyvialichka.github.io/login",
  },
];

const contactConfig = {
  YOUR_EMAIL: "andreyvialichka99@gmail.com",
  YOUR_FONE: "+375 33 632 51 69",
  description:
    "If you need to get in touch with me, please feel free to use the contact form on this website. You can find it by navigating to the Contact page in the main menu.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_vnx8p31",
  YOUR_TEMPLATE_ID: "template_1pipd4m",
  YOUR_USER_ID: "pHSwKqnbiXGD_UvkN",
};

const socialprofils = {
  github: "https://github.com/AndreyVialichka",
  facebook: "https://t.me/AndrewVialichka",
  linkedin: "https://www.linkedin.com/in/andewvialichka/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};

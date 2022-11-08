const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000/cleanfolio',
  title: 'NC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ninad Chavan',
  role: 'Software Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1reEeLETBaG1UmL1VlkeHr1hEJCDoKBhU/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/ninadc32/',
    github: 'https://github.com/ninadchavan',
    codeforces: 'https://codeforces.com/profile/ninadc',
  },
}

const educations = [
  {
    collegeName: 'SIES Graduate School of Technology',
    degree: 'Bachelors of Engineering in Computer Engineering',
    description: '- I have studied software engineering subjects like DS, Algorithms, DBMS, OOPM, OS, ML, Web Design, etc.\n- I was part of the college\'s coding team. We particpated in ICPC (2019 & 2020) and reached Asia Regionals both times.\n- Organized multiple technical events, workshops, and national-level coding competitions as part of CodeChef Campus Chapter.\n- I was selected for college scholarship which is given to the student achieving top rank in college.',
    GPA: 'Grade: 9.19 / 10',
    duration: 'Aug 2017 - Jul 2021',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C4D0BAQG4hhq2nDsOqQ/company-logo_200_200/0/1631888927941?e=1675900800&v=beta&t=lOhB-FoFZ4drKy1-kZym5bHwDh2VpkBhPx8W-S_27Wo'
  },
]

const experiences = [
  {
    companyName: 'Morgan Stanley',
    designation: 'Software Development Consultant',
    duration: 'Nov 2021 - Present',
    description: '- Developed and maintained the backend for 5+ applications with .NET Framework and Microsoft SQL server.\n- Worked on Resiliency Automation with Chaos Monkey on Springboot Scala application having Kafka, Message Queues, and REST APIs as microservices.\n- Worked on the Actimize tool to create and update application workflows and frontend views.\n- Created Python scripts for MSSQL Database comparisons and implemented Jenkins jobs to automate the process.\n- Utilized Mockito and PowerMock for unit test case creation of legacy applications in Java.',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHH8JvJbc-i3g/company-logo_200_200/0/1654720854761?e=1675900800&v=beta&t=E27ZSc5MJmPYa6L0c9ZBeMUxUKu-SHA9IpWtRfZsx8o'
  },
  {
    companyName: 'Xoriant',
    designation: 'Software Engineer',
    duration: 'Jul 2021 - Present',
    description: '- Completed training in Python, Java, HTML, CSS, JavaScript, and ReactJs\n- Contingent at Morgan Stanley as a Software Development Consultant',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGE__5cO8jPBA/company-logo_200_200/0/1658219904878?e=1675900800&v=beta&t=i61b9cmPF9hYxNPpqWFC8iqHRD9T5f3OteUjClZQC5A'
  },
  {
    companyName: 'Trivia Softwares',
    designation: 'Python Developer - Intern',
    duration: 'Jun 2019 - Jul 2019',
    description: '- Implemented a Management system to perform addition, deletion, updating, and searching on multiple entities from the database.\n- Developed GUI using the Tkinter library from Python and connected it with Oracle Database Server using the cx_oracle library for performing CRUD operations with PL/SQL.',
    logoLink: 'https://ilogo.in/ajax/thumbnail.php?id=28651&width=540&height=540&face=front&force=1'
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C++',
  'C#',
  'HTML',
  'CSS',
  'JavaScript',
  'SQL',
  'Flask',
  'Pandas',
  'Numpy',
  'Actimize',
  'Git',
  'Jenkins'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ninadc32@mail.com',
}

export { header, about, educations, experiences, projects, skills, contact }

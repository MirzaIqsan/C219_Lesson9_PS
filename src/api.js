const categories = [
  {
    name: "Information Technology",
    id: "3d-printing-and-design",
    sessions: [
      {
        
        id: "3d-printing-metal",
        desc: "Students will be equipped with knowledge in User Experience(UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces(UI) in this module.",
        speaker: {
          name: "C218",
          title: "Lecturer",
          org: "UI/UX Design for Apps",
          bio: "Azhar Kamar",
        },
      },
      {
        
        id: "homebuilding-and-3d-printing",
        desc: "In this module, students will learn the basics of creating Android Applications",
        speaker: {
          name: "C346",
          title: "Lecturer",
          org: "Mobile App Development",
          bio: "Derek Lee",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "ai-and-robotics",
    sessions: [
      {
        
        id: "automating-user-testing",
        desc: "This module aims to equip students with the skills and knowledge required to develop software applications for both web and mobile platforms",
        speaker: {
          name: "C237",
          title: "Lecturer",
          org: "Software Application Development",
          bio: "Hannah Lim",
        },
      },
      {
        
        id: "security-in-age-of-ai",
        desc: "This module introduces students to different payments technologiesand systems.",
        speaker: {
          name: "C372",
          title: "Senior Lecturer",
          org: "Payment Technologies",
          bio: "Magdalen Lim",
        },
      },
    ],
  },
  
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}

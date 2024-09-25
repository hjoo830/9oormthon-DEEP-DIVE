const user = {
  name: "Hyoju",
  department: {
    name: "Engineering",
    team: {
      name: "Frontend",
      members: 6,
    },
  },
  projects: {
    current: {
      title: "Website",
      deadline: "2024-12-01",
    },
    previous: {
      title: "Mobile App",
      completionDate: "2023-07-15",
    },
  },
};

console.log(user.name); // Hyoju
console.log(user.department.name); // Engineering
console.log(user.department.team.name); // Frontend
console.log(user.projects.current.title); // Website
console.log(user.projects.previous.completionDate); // 2023-07-15

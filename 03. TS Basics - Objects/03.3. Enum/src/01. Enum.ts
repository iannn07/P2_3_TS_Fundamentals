// Enum in TS

function getCourse(course: string) {
  return `This is your ${course} course`;
}

enum Course {
  BDA = "Big Data Analytics",
  WP = "Web Programming",
  AI = "Artificial Intelligence",
  MP = "Mobile Programming",
}

const courseList = [
  getCourse(Course.BDA),
  getCourse(Course.WP),
  getCourse(Course.AI),
  getCourse(Course.MP),
];

courseList.forEach((course) => console.log(course));

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

function findCourseById(courseId) {
  let foundCourse = courses.find(function (course) {
    return course.CourseId == courseId;
  });
  return foundCourse;
}

// When does the PROG200 course start?
function findCourseStartDate(courseId) {
  let course = findCourseById(courseId);
  console.log(`${courseId} starts on ${course.StartDate}`);
  console.log("=================");
}

findCourseStartDate("PROG200");

// What is the title of the PROJ500 course?
function findCourseTitle(courseId) {
  let course = findCourseById(courseId);
  console.log(`${courseId} has the title "${course.Title}"`);
  console.log("=================");
}

findCourseTitle("PROJ500");

// What are the titles of the courses that cost $50 or less?
function costFiftyOrLess() {
  console.log("Titles of courses that cost $50 or less:");

  let fiftyOrLess = courses.filter(function (course) {
    const courseFee = parseFloat(course.Fee);
    return courseFee <= 50;
  });

  for (const course of fiftyOrLess) {
    console.log(` - ${course.Title}`);
  }
  console.log("=================");
}

costFiftyOrLess();

// What classes meet in "Classroom 1"?
function meetsInClassroomOne() {
  console.log("Classes that meet in 'Classroom 1':");

  let classroomOne = courses.filter(function (course) {
    return course.Location == "Classroom 1";
  });

  for (const course of classroomOne) {
    console.log(` - ${course.CourseId}: ${course.Title}`);
  }
  console.log("=================");
}

meetsInClassroomOne();

"use strict";
// Enum in TS
function getCourse(course) {
    return `This is your ${course} course`;
}
var Course;
(function (Course) {
    Course["BDA"] = "Big Data Analytics";
    Course["WP"] = "Web Programming";
    Course["AI"] = "Artificial Intelligence";
    Course["MP"] = "Mobile Programming";
})(Course || (Course = {}));
const courseList = [
    getCourse(Course.BDA),
    getCourse(Course.WP),
    getCourse(Course.AI),
    getCourse(Course.MP),
];
courseList.forEach((course) => console.log(course));

// calculate the average of the grades of students

const grades = [75, 95, 90, 85, 80, 85];
let gradeSum = 0;
let gradeCount = grades.length;

for (i = 0; i < gradeCount; i++) {
    gradeSum += grades[i];
}

console.log(gradeSum);
let averageGrades = gradeSum / gradeCount;
console.log(averageGrades);


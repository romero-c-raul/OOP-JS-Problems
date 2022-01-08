const validYears = ['1st', '2nd', '3rd', '4th', '5th'];

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(object) {
      this.courses.push(object);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      this.courses.forEach(currentCourse => {
        if (currentCourse.code === code) {
          if (!currentCourse.note) {
            currentCourse.note = `${currentCourse.name}: ${note}`;
          } else {
            currentCourse.note += `; ${note}`;
          }
        }
      });
    },

    viewNotes() {
      this.courses.forEach(currentCourse => {
        if (currentCourse.note) {
          console.log(currentCourse.note);
        }
      });
    },

    updateNote(code, note) {
      this.courses.forEach(currentCourse => {
        if (currentCourse.code === code) {
          currentCourse.note = `${currentCourse.name}: ${note}`;
        }
      });
    },
  };
}

let school = {
  students: [],

  addStudent(name, year) {
    if (!validYears.includes(year)) {
      console.log('Invalid Year');
    } else {
      this.students.push(createStudent(name, year));
    }
  },

  enrollStudent(studentName, course) {
    let currentStudent = this.findStudent(studentName);
    currentStudent.courses.push(course);
  },

  addGrade(name, code, grade) {
    let currentStudent = this.findStudent(name);
    let currentCourse = currentStudent.courses.filter(obj => obj.code === code)[0];
    
    currentCourse.grade = grade;
  },

  getReportCard(name) {
    let currentStudent = this.findStudent(name);

    currentStudent.courses.forEach(currentCourse => {
      if (currentCourse.grade) {
        console.log(`${currentCourse.name}: ${currentCourse.grade}`);
      } else {
        console.log(`${currentCourse.name}: In progress`);
      }
    });
  },

  courseReport(course) {
    let allGrades = [];

    this.students.forEach(currentStudent => {
      let currentCourse = currentStudent.courses.filter(currentCourse => {
        return currentCourse.name === course;
      })[0];

      if (!currentCourse) return;

      if (currentCourse.grade) {
        allGrades.push([currentStudent.name, currentCourse.grade]);
      }
    });

    if (allGrades.length < 1) return;

    let courseAverage = allGrades.reduce((total, pair) => {
      return total + pair[1];
    },0) / allGrades.length;

    allGrades = allGrades.map(pair => {
      return `${pair[0]}: ${pair[1]}`;
    });

    console.log(`=${course} Grades=`);
    allGrades.forEach(grade => console.log(grade));
    console.log('---')
    console.log('Course Average: ' + courseAverage);

  },

  findStudent(name) {
    return this.students.filter(obj => obj.name === name)[0];
  },
};

school.addStudent('Raul', '1st');
school.addStudent('Colleen', '2nd');
school.addStudent('Foo', '3rd');

school.enrollStudent('Raul', {name: 'Math', code: 101 });
school.enrollStudent('Colleen', {name: 'Physics', code: 202 });

school.enrollStudent('Raul', {name: 'Geology', code: 200 });
school.enrollStudent('Colleen', {name: 'Biology', code: 103 });

school.enrollStudent('Raul', {name: 'Physics', code: 202 });
school.enrollStudent('Foo', {name: 'Physics', code: 202 });

school.addGrade('Raul', 101, 95);
school.addGrade('Colleen', 202, 100);
school.addGrade('Raul', 202, 85);

school.getReportCard('Raul');
school.getReportCard('Colleen');
school.getReportCard('Foo');
school.courseReport('Physics');
school.courseReport('Advanced Math');
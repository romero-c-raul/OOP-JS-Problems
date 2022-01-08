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

let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
// foo.listCourses();
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();

// > let foo = createStudent('Foo', '1st');
// > foo.info();
// = "Foo is a 1st year student"
// > foo.listCourses();
// = [];
// > foo.addCourse({ name: 'Math', code: 101 });
// > foo.addCourse({ name: 'Advanced Math', code: 102 });
// > foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// > foo.addNote(101, 'Fun course');
// > foo.addNote(101, 'Remember to study for algebra');
// > foo.viewNotes();
// = "Math: Fun course; Remember to study for algebra"
// > foo.addNote(102, 'Difficult subject');
// > foo.viewNotes();
// = "Math: Fun course; Remember to study for algebra"
// = "Advanced Math: Difficult subject"
// > foo.updateNote(101, 'Fun course');
// > foo.viewNotes();
// = "Math: Fun course"
// = "Advanced Math: Difficult subject"

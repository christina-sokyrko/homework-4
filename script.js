const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//get pairs

const getPairs = (studentList) => {
  const allPairs = [];
  const girls = [];
  const boys = [];
  for (let oneStudent of studentList) {
    if (oneStudent.slice(-1) === "а") {
      girls.push(oneStudent);
    }
    else {
      boys.push(oneStudent);
    }
  }
  for (i = 0; i < girls.length; i++) {
    allPairs.push(" " + girls[i] + " i " + boys[i]);
  }
  return allPairs;
}
const finalPairs = getPairs(students);



//pairs to themes

const pairToTheme = (pair, subject) => {
  const pairPlusSubj = [];
  for (i = 0; i < pair.length; i++) {
    pairPlusSubj.push(" " + pair[i] + " - " + '"' + subject[i] + '"');
  }
  return pairPlusSubj;
}
const finalPairsPlusThemes = pairToTheme(finalPairs, themes);


//students to marks

const getMarks = (person, digit) => {
  const studentToMark = [];
  for (i = 0; i < person.length; i++) {
    studentToMark.push(" " + person[i] + " - " + digit[i]);
  }
  return studentToMark;
}
const finalStudentToMark = getMarks(students, marks);


// marks for pairs

const pairGetsMark = (twoStudents) => {
  const marksToPairs = [];
  for (let i = 0; i < twoStudents.length; i++) {
  marksToPairs.push(" " + twoStudents[i] + " - " + (Math.floor(Math.random() * 5 + 1)));
  }
  return marksToPairs;
}
const finalMarksToPairs = pairGetsMark(finalPairsPlusThemes);

document.writeln(`<p><b>Пари студентів:</b></p><br/>${finalPairs}<br/><br/>`);
document.writeln(`<p><b>Студенти і їх завдання:</b></p><br/>${finalPairsPlusThemes}<br/><br/>`);
document.writeln(`<p><b>Оцінки студентів:</b></p><br/>${finalStudentToMark}<br/><br/>`);
document.writeln(`<p><b>Оцінки пар студентів:</b></p><br/>${finalMarksToPairs}<br/><br/>`);

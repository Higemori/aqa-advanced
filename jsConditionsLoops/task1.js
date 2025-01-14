import { differentGrades } from "./dataset.js";

for (let i = 0; i < differentGrades.length; i++) {
  let averageGrade = differentGrades[i];

  try {
    if (averageGrade <= 0) {
      throw new Error(averageGrade + " - Оцінка не може бути нижче 0");
    } else if (averageGrade < 60) {
      console.log(averageGrade + " - Незадовільно");
    } else if (averageGrade <= 70) {
      console.log(averageGrade + " - Задовільно");
    } else if (averageGrade <= 80) {
      console.log(averageGrade + " - Добре");
    } else if (averageGrade <= 90) {
      console.log(averageGrade + " - Дуже добре");
    } else if (averageGrade <= 100) {
      console.log(averageGrade + " - Відмінно");
    } else if (averageGrade > 100) {
      throw new Error("Оцінка не може бути більше 100");
    } else {
      throw new Error(averageGrade + " - Хибне значення оцінки");
    }
  } catch (error) {
    console.error("Сталася помилка: " + error.message);
  }
}

import { differentGrades } from "./dataset.js";

for (let i = 0; i < differentGrades.length; i++) {
  let averageGrade = differentGrades[i];

  try {
    switch (true) {
      case averageGrade < 0:
        throw new Error(averageGrade + " - Оцінка не може бути нижче 0");
      case averageGrade < 60:
        console.log(averageGrade + " - Незадовільно");
        break;
      case averageGrade <= 70:
        console.log(averageGrade + " - Задовільно");
        break;
      case averageGrade <= 80:
        console.log(averageGrade + " - Добре");
        break;
      case averageGrade <= 90:
        console.log(averageGrade + " - Дуже добре");
        break;
      case averageGrade <= 100:
        console.log(averageGrade + " - Відмінно");
        break;
      case averageGrade > 100:
        console.log(averageGrade + " - Оцінка не може бути більше 100");
        break;
      default:
        throw new Error("Хибне значення оцінки.");
    }
  } catch (error) {
    console.error("Сталася помилка: " + error.message);
  }
}

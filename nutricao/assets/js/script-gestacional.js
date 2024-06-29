function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const gestationalAge = parseInt(
    document.getElementById("gestationalAge").value
  );
  const daysGestationalAge = parseInt(
    document.getElementById("daysGestationalAge").value
  );

  const chronologicalAge = calculateChronologicalAge(birthdate);
  const correctedAge = calculateCorrectedAge(
    chronologicalAge,
    gestationalAge,
    daysGestationalAge
  );

  displayResults(chronologicalAge, correctedAge);
}

function calculateChronologicalAge(birthdate) {
  const now = new Date();

  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const ageInWeeks = Math.floor((now - birthdate) / millisecondsPerWeek);

  const ageInMonths = Math.floor(ageInWeeks / 4);

  return { weeks: ageInWeeks, months: ageInMonths };
}

// calculo da idade
function calculateCorrectedAge(
  chronologicalAge,
  gestationalAge,
  daysGestationalAge
) {
  // const correctedWeeks = chronologicalAge.weeks - (40 - gestationalAge) + daysGestationalAge;
  const correctedWeeks =
    chronologicalAge.weeks - (40 - gestationalAge) + daysGestationalAge;

  const correctedMonths = Math.floor(correctedWeeks / 4);
  const correctedDays = correctedWeeks % 4;

  return {
    weeks: correctedWeeks,
    months: correctedMonths,
    days: correctedDays,
  };
}
// function calculateCorrectedAge(chronologicalAge, gestationalAge, daysGestationalAge) {
//   const correctedWeeks = chronologicalAge.weeks - (40 - gestationalAge) + daysGestationalAge;
//   const correctedMonths = Math.floor(correctedWeeks / 4);

//   return { weeks: correctedWeeks, months: correctedMonths };
// }
// exibição do resultado
function displayResults(chronologicalAge, correctedAge) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Idade Cronológica: " +
    chronologicalAge.weeks +
    " semanas (" +
    chronologicalAge.months +
    " meses)<br>" +
    "Idade Corrigida: " +
    correctedAge.weeks +
    " semanas (" +
    correctedAge.months +
    " meses) e " +
    correctedAge.days +
    " dias";
}

// function displayResults(chronologicalAge, correctedAge) {
//   const resultElement = document.getElementById("result");
//   resultElement.innerHTML =
//     "Idade Cronológica: " +
//     chronologicalAge.weeks +
//     " semanas (" +
//     chronologicalAge.months +
//     " meses)<br>" +
//     "Idade Corrigida: " +
//     correctedAge.weeks +
//     " semanas  e " +
//     correctedAge.months +
//     " dias";
// }

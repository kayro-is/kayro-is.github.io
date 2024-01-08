const questions = [
    "Quelle mer borde la ville de Sébastopol",
    "Quel est l'âge du capitaine"
];

const solutions = [
    "la mer Noire",
    "63"
];

function poserQuestion(question, solution) {
    const reponse = prompt(question);
    console.log("La réponse de l'utilisateur : " + reponse);

    const reponseEnNombre = parseInt(reponse);
    // Comparaison de la réponse avec la solution
    return reponse.toLowerCase() === String(solution).toLowerCase();
}

function poserToutesLesQuestions() {
    let nombreDeBonneReponses = 0;

    for (let i = 0; i < questions.length; i++) {
        if (poserQuestion(questions[i], solutions[i])) {
            nombreDeBonneReponses++;

            alert("Gagné ! La réponse à la question " +
                (i + 1) + " est correcte.");
        } else {
            alert("Perdu. La réponse à la question " +
                (i + 1) + " est incorrecte.");
        }
    }

    alert("Vous avez " + nombreDeBonneReponses + " réponses correctes");
}

poserToutesLesQuestions();

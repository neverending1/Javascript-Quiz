const questions = [
    {
      questionText: "How do we write a comment in javascript?",
      options: ["1. /* */", "2. //","3 #","4.$ $"],
      answer: "2. //",
    },
    {
      questionText: "Which of the following keywords is used to define a variable in Javascript?",
      options: [
        "1. var",
        "2. let",
        "3. both 1 and 2",
        "4. none of the above",
      ],
      answer: "3. both 1 and 2",
    },
    {
      questionText:
        "Which JavaScript method is used to access an HTML element by id?",
      options: ["1. getElementById()", "2. getElement(id)", "3. getElementById(id)", "4. elementById(id)"],
      answer: "3. getElementById(id)",
    },
    {
      questionText:
        "Which JavaScript method is used to write on browser's console?",
      options: [
        "1. console.write()",
        "2. console.output()",
        "3. console.log()",
        "4. console.writeHTML()",
      ],
      answer: "3. console.log()",
    },
    {
      questionText:
        "Which is the correct JavaScript statement to display 'Hello World' into an alert box?",
      options: ["1. alertBox('Hello World!');", "2. alert('Hello World!');", "3. alert(Text:'Hello World!');", "4. Both 1. and 2."],
      answer: "2. alert('Hello World!');",
    },
];

const startCard = document.querySelector("#start-card");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");

function hideCards() {
    startCard.setAttribute("hidden", true);
    questionCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
    leaderboardCard.setAttribute("hidden", true);
}
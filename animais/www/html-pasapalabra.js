// Settings
const ORIGINAL_QUESTIONS = [
  {
    letter: "a",
    answer: "arroaz",
    status: 0,
    question:
      "COA A. Delfin pequeno",
  },

  {
    letter: "b",
    answer: "bolboreta",
    status: 0,
    question:
      "COA B. Primeiro é un ovo, pasa un tempo nun capullo e fai a metamorfose. ",
  },

  {
    letter: "c",
    answer: "cabalo",
    status: 0,
    question:
      "COA C. Animal herbívoro de catro patas no que montan os xinetes",
  },

  {
    letter: "d",
    answer: "Dobi",
    status: 0,
    question:
      "COA D. Can ao que lle gustan os bocadillos de Leul",
  },

  {
    letter: "e",
    answer: "escarabajo",
    status: 0,
    question: "COA V. Vacaloura en castelán",
  },

  {
    letter: "f",
    answer: "anfibio",
    status: 0,
    question:
      "CONTÉN A F. unha píntega é un... ",
  },

  {
    letter: "g",
    answer: "gaivota",
    status: 0,
    question:
      "COA G. Ave que voa preto de portos e barcos pesqueiros ",
  },

  {
    letter: "h",
    answer: "hormiga",
    status: 0,
    question:
      "COA H. formiga en castelán",
  },

  {
    letter: "i",
    answer: "grilo",
    status: 0,
    question:
      "CONTÉN A I. Insecto que xera un son característico coas súas ás ",
  },

  {
    letter: "j",
    answer: "jabalí",
    status: 0,
    question:
      "CONTIENE LA J. Xabarín en castelán",
  },

  {
    letter: "k",
    answer: "Tokio",
    status: 0,
    question:
      "CONTIENE LA K. o can de Martina chámase... ",
  },

  {
    letter: "l",
    answer: "libélula",
    status: 0,
    question:
      "COA L. Cabaliño do demo en castelán",
  },

  {
    letter: "m",
    answer: "moucho",
    status: 0,
    question:
      "COA M. Ave rapaz nocturna amiga das meigas",
  },

  {
    letter: "n",
    answer: "cangrexo",
    status: 0,
    question:
      "CONTÉN A N. Crustáceo con pinzas moi afiladas",
  },

  {
    letter: "ñ",
    answer: "galiña",
    status: 0,
    question: "CONTÉN A Ñ. Ave da que comemos os seus ovos ",
  },

  {
    letter: "o",
    answer: "ovella",
    status: 0,
    question:
      "COA O. Animal mamífero co corpo cuberto de la",
  },

  {
    letter: "p",
    answer: "porco celta",
    status: 0,
    question: "COA P. Clase de porco típico de galicia",
  },

  {
    letter: "q",
    answer: "bosque",
    status: 0,
    question:
      "COTÉN A Q. Lugar onde vive o lobo",
  },

  {
    letter: "r",
    answer: "rá",
    status: 0,
    question:
      "COA R. Anfibio que da grandes saltos",
  },

  {
    letter: "s",
    answer: "sapoconcho",
    status: 0,
    question:
      "COA S. Reptil con caparazón",
  },

  {
    letter: "t",
    answer: "teixugo",
    status: 0,
    question:
      "COA T. mamífero de hábitos nocturnos que tamén se chama porco teixo",
  },

  {
    letter: "u",
    answer: "pica pau",
    status: 0,
    question:
      "CONTÉN A U. Ave que perfora os troncos das árbores para comer os insectos que viven neles ",
  },

  {
    letter: "v",
    answer: "vaca",
    status: 0,
    question:
      "COA V. Mamífero do que tomamos a súa leite",
  },

  {
    letter: "w",
    answer: "water",
    status: 0,
    question:
      "COA W. En inglés, líquido que beben os animais para hidratarse",
  },

  {
    letter: "x",
    answer: "xoaniña",
    status: 0,
    question:
      "COA X. Insecto vermello con puntos negros",
  },

  {
    letter: "y",
    answer: "Paraguay",
    status: 0,
    question: "COA Y. País onde naceu Fridha",
  },

  {
    letter: "z",
    answer: "zorro",
    status: 0,
    question:
      "COA Z. Raposo en castelán",
  },
];
const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const AVAILABLE_TIME = 180;

//HTML element selectors
const WELCOME_PAGE = document.querySelector(".welcome");
const SCORE_PAGE = document.querySelector(".scorePopup");
const SCOREPOP_CORRECT_ANSWERS = document.querySelector(
  ".scorePop-correctAnswers"
);
const SCOREPOP_TIME_LEFT = document.querySelector(".scorePop-timeLeft");
const SCORE_CORRECT_ANSWERS = document.querySelector(".score-correct");
const SCORE_TIME_LEFT = document.querySelector(".score-time");
const PLAYER_NAME_INPUT = document.querySelector("#inputPlayerName");
const START_GAME_BUTTON = document.querySelector("#inputStartGame");
const ANSWER_BUTTON = document.querySelector("#btn-asnwer");
const DISPLAY = document.querySelector("#questions");
const LAST_PLAYERS_LIST = document.querySelector(".lastPlayersList");
const USER_ANSWER_INPUT = document.querySelector(".btn-text");

// Keyboard events
USER_ANSWER_INPUT.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    checkAnswer();
  }
});

// Players history
const LAST_PLAYERS = [];

//Game initial values
let questions = null;
let playerName = null;
let correctAnswers = 0;
let incorrectAnswers = 0;
let turn = 1;
let actualQuestion = 0;
let actualLetter = null;
let timeLeft = AVAILABLE_TIME;
let timer = null;

// * ----- Core functions - They contain the main functions of the game -----

// Loads players history to show it on welcome page
const initialLoad = () => {
  showLastPlayers();
};

const startGame = () => {
  questions = [...ORIGINAL_QUESTIONS];
  playerName = capitalizeFirstLetter(PLAYER_NAME_INPUT.value);
  hide(WELCOME_PAGE);
  setTimer("start");
  showNextQuestion();
};

const showNextQuestion = () => {
  if (actualQuestion > questions.length - 1) {
    actualQuestion = 0;
  }
  if (questions[actualQuestion].status != 1) {
    showQuestion(questions[actualQuestion]);
  } else {
    actualQuestion++;
    let remainingWords = questions.filter((question) => question.status === 0);
    if (remainingWords.length === 0) {
      showScore();
    }
    showNextQuestion();
  }
};

const pasapalabra = () => {
  let letter = document.querySelector("." + actualLetter);
  letter.classList.add("pasa");
  turn++;
  actualQuestion++;
  cleanInputText();
  showNextQuestion();
};

const checkAnswer = () => {
  let answer = USER_ANSWER_INPUT.value.toLowerCase();
  let letter = document.querySelector("." + actualLetter);
  if (answer === "") {
    USER_ANSWER_INPUT.classList.add("wrong");
    return;
  }
  letter.classList.remove("pasa");
  if (answer === questions[actualQuestion].answer) {
    letter.classList.add("correct");
    correctAnswers++;
    updateScore();
  } else {
    letter.classList.add("wrong");
    incorrectAnswers++;
  }
  questions[actualQuestion].status = 1;
  turn++;
  actualQuestion++;
  cleanLastLetter();
  cleanInputText();
  showNextQuestion();
};

const saveGameStats = () => {
  if (LAST_PLAYERS.length === 5) {
    LAST_PLAYERS.shift();
  }
  LAST_PLAYERS.push({
    name: playerName,
    correctAnswers: correctAnswers,
    timeLeft: timeLeft,
  });
};

const resetGame = () => {
  playerName = null;
  correctAnswers = 0;
  incorrectAnswers = 0;
  turn = 1;
  actualQuestion = 0;
  actualLetter = null;
  timeLeft = AVAILABLE_TIME;
  cleanAllQuestionStatus();
  resetInputPlayerName();
  cleanAllLetters();
  initialLoad();
};

const endGame = () => {
  saveGameStats();
  resetGame();
  hide(SCORE_PAGE);
  show(WELCOME_PAGE);
};

// * ----- Display functions - Used to show information -----
const showLastPlayers = () => {
  LAST_PLAYERS_LIST.innerHTML = "";
  if (LAST_PLAYERS.length < 1) {
    LAST_PLAYERS_LIST.innerHTML = "<li> - </li>";
  }
  LAST_PLAYERS.forEach((element) => {
    LAST_PLAYERS_LIST.innerHTML +=
      "<li>" +
      element.name +
      ": Correctas: " +
      element.correctAnswers +
      " - Tempo restante: " +
      element.timeLeft +
      "</li>";
  });
};

const showScore = () => {
  setTimer("stop");
  SCOREPOP_CORRECT_ANSWERS.innerHTML = correctAnswers;
  SCOREPOP_TIME_LEFT.innerHTML = timeLeft;
  show(SCORE_PAGE);
};

const showQuestion = (el) => {
  actualLetter && cleanLastLetter();
  actualLetter = el.letter;
  let letter = document.querySelector("." + actualLetter);
  letter.classList.add("active");
  DISPLAY.innerHTML = el.question;
};

//  * ----- Format functions -----

const capitalizeFirstLetter = (word) => {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// * ------ Helper functions -----

const setTimer = (action) => {
  const startTimer = () => {
    timer = setInterval(() => {
      if (timeLeft === 0) {
        showScore();
        stopTimer();
        return;
      }
      timeLeft--;
      updateScore();
    }, 3000);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  action === "start" && startTimer();
  action === "stop" && stopTimer();
};

const show = (element) => {
  element.classList.remove("hidden");
};

const hide = (element) => {
  element.classList.add("hidden");
};

const handleNameChange = () => {
  if (PLAYER_NAME_INPUT.value.length > 0) {
    show(START_GAME_BUTTON);
  } else {
    hide(START_GAME_BUTTON);
  }
};

const updateScore = () => {
  SCORE_CORRECT_ANSWERS.innerHTML = correctAnswers;
  SCORE_TIME_LEFT.innerHTML = timeLeft;
};

const resetInputPlayerName = () => {
  PLAYER_NAME_INPUT.value = "";
  hide(START_GAME_BUTTON);
};

const cleanLastLetter = () => {
  let letter = document.querySelector("." + actualLetter);
  letter.classList.remove("active");
};

const cleanAllLetters = () => {
  LETTERS.forEach((letter) => {
    let letterToClean = document.querySelector("." + letter);
    letterToClean.classList.remove("active", "wrong", "correct", "pasa");
  });
};

const cleanAllQuestionStatus = () => {
  questions.map((question) => (question.status = 0));
};

const cleanInputText = () => {
  USER_ANSWER_INPUT.value = "";
  USER_ANSWER_INPUT.classList.remove("wrong");
};

//  -------------- Starter function
initialLoad();

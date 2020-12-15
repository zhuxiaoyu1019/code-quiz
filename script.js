const questions = [
    {
        question: "How many crews in the Straw Har Pirates?",
        answer: [
            { text: 8, correct: false },
            { text: 9, correct: false },
            { text: 10, correct: false },
            { text: 11, correct: true }
        ]
    },
    {
        question: "What Devilfruit did Luffy eat?",
        answer: [
            { text: "Gomu Gomu No Mi", correct: true },
            { text: "Hana Hana No Mi", correct: false },
            { text: "Hito Hito No Mi", correct: false },
            { text: "Mera Mera No Mi", correct: false }
        ]
    },
    {
        question: "How many blades Zoro has wielded throughout the series?",
        answer: [
            { text: 3, correct: false },
            { text: 5, correct: false },
            { text: 7, correct: false },
            { text: 9, correct: true }
        ]
    },
    {
        question: "What Nami’s nickname?",
        answer: [
            { text: "Devil Child", correct: false },
            { text: "Pirate Empress", correct: false },
            { text: "Cat Burglar", correct: true },
            { text: "Iron Mace", correct: false }
        ]
    },
    {
        question: "Who helps Tontatta Tribe Tonta Corps against Sugar(one of Doflamingo's crew)?",
        answer: [
            { text: "Robin", correct: false },
            { text: "Usopp", correct: true },
            { text: "Franky", correct: false },
            { text: "Nami", correct: false }
        ]
    },
    {
        question: "Why Sanji’s father hates him?",
        answer: [
            { text: "Because he was a failure and disgrace!", correct: true },
            { text: "Because Sanji always stole things", correct: false },
            { text: "Because he killed his mom", correct: false },
            { text: "Just ‘cause", correct: false }
        ]
    },
    {
        question: "What’s Chopper’s favorite foods?",
        answer: [
            { text: "Cake", correct: false },
            { text: "Chocolate", correct: false },
            { text: "Croquembouche", correct: false },
            { text: "Cotton Candy", correct: true }
        ]
    },
    {
        question: "What does Robin want to be when she grows up?",
        answer: [
            { text: "Doctor", correct: false },
            { text: "Oceanologist", correct: false },
            { text: "Psychologist", correct: false },
            { text: "Archaeologist", correct: true }
        ]
    },
    {
        question: "Who did Franky, Chopper, and Usopp ask to join the “Giant Robot Warrior: Big Emperor!” while against Oars?",
        answer: [
            { text: "Luffy", correct: false },
            { text: "Robin", correct: true },
            { text: "Jinbe", correct: false },
            { text: "Nami", correct: false }
        ]
    },
    {
        question: "What is the song that Brook always sings?",
        answer: [
            { text: "Bink’s sake", correct: true },
            { text: "We Are HERE!", correct: false },
            { text: "Wake Up!", correct: false },
            { text: "Hands Up", correct: false }
        ]
    },
    {
        question: "What type of fisherman is Jinbe?",
        answer: [
            { text: "Whale shark", correct: true },
            { text: "Sawshark", correct: false },
            { text: "Octopus", correct: false },
            { text: "Tiger Blowfish", correct: false }
        ]
    },
    {
        question: "Is Vivi part of the straw hats?",
        answer: [
            { text: "YES!!", correct: true },
            { text: "Nah", correct: false }
        ]
    },
    {
        question: "Who are the Admirals of the marines(after timeskip)?",
        answer: [
            { text: "Kuzan, Sakazuki, Sengoku", correct: false },
            { text: "Borsalino, Kuzan, Zephyr", correct: false },
            { text: "Borsalino, Issho, Ryokugyu", correct: true },
            { text: "Monkey D Garp, Gion, Sengoku", correct: false }
        ]
    },
    {
        question: "Who are the 7 warlords(Shichibukai) of the sea (after timeskip)?",
        answer: [
            { text: "Dracule Mihawk, Donquixote Doflamingo, Bartholomew Kuma, Boa Hancock, Buggy The Clown, Trafalgar D Water Law, Edward Weevil", correct: true },
            { text: "Dracule Mihawk, Donquixote Doflamingo, Bartholomew Kuma, Boa Hancock, Jinbe, Crocodile, Gekko Moriah", correct: false },
            { text: "Dracule Mihawk, Donquixote Doflamingo, Bartholomew Kuma, Boa Hancock, Jinbe, Marshall D Teach, Gekko Moriah", correct: false },
            { text: "Dracule Mihawk, Donquixote Doflamingo, Bartholomew Kuma, Boa Hancock, Jinbe, Marshall D Teach, Monkey D Luffy", correct: false }
        ]
    },
    {
        question: "Who are the 4 emperors(Yonkō) of the sea(after timeskip)?",
        answer: [
            { text: "Shanks, Kaido, Charlotte Linlin(Big Mom), Gol D. Roger", correct: false },
            { text: "Shanks, Kaido, Charlotte Linlin(Big Mom), Monkey D Luffy", correct: false },
            { text: "Shanks, Kaido, Charlotte Linlin(Big Mom), Edward Newgate(Whitebeard)", correct: false },
            { text: "Shanks, Kaido, Charlotte Linlin(Big Mom), Marshall D. Teach(Blackbeard)", correct: true }
        ]
    },
]

var remainingSeconds;
var timerId;
var questionIndex;

id("start-btn").addEventListener("click", startGame);

qs(".navbar-brand").addEventListener("click", function () {
    id("intro").classList.add("hidden");
    id("questions").classList.add("hidden");
    showRank();
});

id("home").addEventListener("click", function () {
    id("rank").classList.add("hidden");
    id("intro").classList.remove("hidden");
    id("timer").classList.add("hidden");
});

id("clear").addEventListener("click", function () {
    localStorage.clear();
    showRank();
});



function startGame() {
    id("intro").classList.add("hidden");
    id("timer").classList.remove("hidden");
    id("questions").classList.remove("hidden");
    questionIndex = 0;
    remainingSeconds = 300;
    nextQuestion();
    startTimer();
}

function startTimer() {
    var timeBoard = id("time");
    timeBoard.textContent = "0" + remainingSeconds / 60 + ":00";
    timerId = setInterval(function () {
        advanceTimer();
    }, 1000);
}

function advanceTimer() {
    var timeBoard = id("time");
    remainingSeconds--;
    if (remainingSeconds > 0) {
        var min = Math.floor(remainingSeconds / 60);
        var sec = remainingSeconds % 60;
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        timeBoard.textContent = min + ":" + sec;
    } else {
        gameFinish();
        timeBoard.textContent = "00:00";
    }
}

function showQuestion() {
    while (id("answers").firstChild) {
        id("answers").removeChild(id("answers").firstChild);
    }
    id("question").textContent = questions[questionIndex].question;
    questions[questionIndex].answer.forEach(answer => {
        var btn = gen("button");
        btn.textContent = answer.text;
        btn.classList.add("btn");
        btn.classList.add("btn-outline-secondary");
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener("click", selectAnswer);
        id("answers").appendChild(btn);
    })
}

function selectAnswer(e) {
    if (e.target.getAttribute("data-correct") !== null) {
        id("status").classList.toggle("hidden");
        id("result").textContent = "Correct!";
    } else {
        remainingSeconds -= 20;
        advanceTimer();
        id("status").classList.toggle("hidden");
        id("result").textContent = "Wrong!";
    }
    questionIndex++;
    nextQuestion();
}

function nextQuestion() {
    if (questionIndex === questions.length) {
        setTimeout(function () {
            gameFinish();
            id("status").classList.add("hidden");
        }, 500)

    } else if (questionIndex === 0) {
        showQuestion();
    } else {
        setTimeout(function () {
            id("status").classList.toggle("hidden");
            showQuestion();
        }, 500);
    }
}

function gameFinish() {
    clearInterval(timerId);
    id("questions").classList.toggle("hidden");
    id("report").classList.remove("hidden");
    if (questionIndex === questions.length) {
        id("quiz-finished").textContent = "All Done!";
    } else {
        remainingSeconds = 0
        id("quiz-finished").textContent = "Time's Up:(";
    }
    id("score").textContent = remainingSeconds;
    id("initial-form").addEventListener("submit", saveInfo);

}

function saveInfo() {
    var user = id("initial-input").value;
    var rank;
    if (localStorage.getItem("history") === null) {
        rank = [];
        var user = { user: user, score: remainingSeconds };
        rank.push(user);
    } else {
        rank = JSON.parse(localStorage.getItem("history"));
        var user = { user: user, score: remainingSeconds };
        rank.push(user);
    }
    localStorage.setItem("history", JSON.stringify(rank));
    showRank();
}

function showRank() {
    while (id("list").firstChild) {
        id("list").removeChild(id("list").firstChild);
    }
    id("report").classList.add("hidden");
    id("rank").classList.remove("hidden");
    var rank = JSON.parse(localStorage.getItem("history"));

    rank = sortArray(rank);

    for (var i = 0; i < rank.length; i++) {
        var user = rank[i].user;
        var score = rank[i].score;
        var list = gen("li");
        list.textContent = user + ": " + score;
        id("list").appendChild(list);
    }
}

function sortArray(users) {
    var newArray = users.sort(function compare(a, b) {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
        return 0;
    });
    return newArray;
}


/** ------------------------------ Helper Functions  ------------------------------ */
/**
 * Note: You may use these in your code, but remember that your code should not have
 * unused functions. Remove this comment in your own code.
 */

/**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} idName - element ID
 * @returns {object} DOM object associated with id.
 */
function id(idName) {
    return document.getElementById(idName);
}

/**
 * Returns the first element that matches the given CSS selector.
 * @param {string} selector - CSS query selector.
 * @returns {object} The first DOM object matching the query.
 */
function qs(selector) {
    return document.querySelector(selector);
}

/**
 * Returns a new element with the given tag name.
 * @param {string} tagName - HTML tag name for new DOM element.
 * @returns {object} New DOM object for given HTML tag.
 */
function gen(tagName) {
    return document.createElement(tagName);
}
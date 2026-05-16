console.log("Homepage Loaded");

/* SELECTABLE CARDS */

const selectableCards =
  document.querySelectorAll(".selectable");


selectableCards.forEach(card => {

  card.addEventListener("click", () => {

    card.classList.toggle("selected");

  });

});


/* SAVE SELECTED LESSONS */

const NextButton =
  document.querySelector(".floating-next-button");


if(NextButton){

  NextButton.addEventListener("click", () => {

    const selectedLessons = [];

    document
      .querySelectorAll(".selected")
      .forEach(card => {

        const topic =
          card.dataset.topic;

        if(topic){

          selectedLessons.push(topic);

        }

      });

    localStorage.setItem(
      "selectedLessons",
      JSON.stringify(selectedLessons)
    );

  });

}


/* LOAD COMPLETED LESSONS */

const completedLessons =
  JSON.parse(
    localStorage.getItem("completedLessons")
  ) || [];


/* SHOW GREEN DOT */

document
  .querySelectorAll(".topic-card")
  .forEach(card => {

    const topic =
      card.dataset.topic;

    if(completedLessons.includes(topic)){

      card.classList.add("completed");

    }

  });


/* LOAD POINTS */

const pointsText =
  document.getElementById("profilePoints");

let currentPoints =
  parseInt(
    localStorage.getItem("userPoints")
  ) || 0;


if(pointsText){

  pointsText.innerText =
    currentPoints + " Points";

}

/* VOCABULARY DATABASE */

const vocabularySets = {

  "Daily Conversation":[
    { korean:"안녕하세요", english:"Hello" },
    { korean:"감사합니다", english:"Thank you" },
    { korean:"죄송합니다", english:"Sorry" }
  ],

  "School Vocabulary":[
    { korean:"학교", english:"School" },
    { korean:"학생", english:"Student" },
    { korean:"선생님", english:"Teacher" }
  ],

  "Food & Drinks":[
    { korean:"물", english:"Water" },
    { korean:"사과", english:"Apple" },
    { korean:"밥", english:"Rice" }
  ],

  "Travel Words":[
    { korean:"공항", english:"Airport" },
    { korean:"여권", english:"Passport" },
    { korean:"비행기", english:"Airplane" }
  ],

  "Hobbies":[
    { korean:"독서", english:"Reading" },
    { korean:"축구", english:"Soccer" },
    { korean:"음악", english:"Music" }
  ],

  "Weather":[
    { korean:"비", english:"Rain" },
    { korean:"눈", english:"Snow" },
    { korean:"맑음", english:"Sunny" }
  ],

  "Technology":[
    { korean:"컴퓨터", english:"Computer" },
    { korean:"인터넷", english:"Internet" },
    { korean:"휴대폰", english:"Phone" }
  ],

  "Environment":[
    { korean:"환경", english:"Environment" },
    { korean:"재활용", english:"Recycling" },
    { korean:"오염", english:"Pollution" }
  ],

  "Health":[
    { korean:"병원", english:"Hospital" },
    { korean:"운동", english:"Exercise" },
    { korean:"건강", english:"Health" }
  ],

  "Business":[
    { korean:"회사", english:"Company" },
    { korean:"회의", english:"Meeting" },
    { korean:"사장", english:"Boss" }
  ],

  "Science":[
    { korean:"실험", english:"Experiment" },
    { korean:"과학", english:"Science" },
    { korean:"연구", english:"Research" }
  ],

  "Psychology":[
    { korean:"감정", english:"Emotion" },
    { korean:"기억", english:"Memory" },
    { korean:"행동", english:"Behavior" }
  ],

  "Philosophy":[
    { korean:"철학", english:"Philosophy" },
    { korean:"존재", english:"Existence" },
    { korean:"진리", english:"Truth" }
  ],

  "Politics":[
    { korean:"정부", english:"Government" },
    { korean:"선거", english:"Election" },
    { korean:"정치", english:"Politics" }
  ],

  "Economics":[
    { korean:"경제", english:"Economics" },
    { korean:"시장", english:"Market" },
    { korean:"무역", english:"Trade" }
  ]

};


/* LOAD LESSONS */

const selectedLessons =
  JSON.parse(
    localStorage.getItem("selectedLessons")
  ) || [];


/* CREATE WORD LIST */

let practiceWords = [];

selectedLessons.forEach(topic => {

  if(vocabularySets[topic]){

    practiceWords =
      practiceWords.concat(
        vocabularySets[topic]
      );

  }

});


/* DEFAULT */

if(practiceWords.length === 0){

  practiceWords = [
    {
      korean:"안녕하세요",
      english:"Hello"
    }
  ];

}


/* ELEMENTS */

const flashcard =
  document.getElementById("flashcard");

const cardFront =
  document.getElementById("cardFront");

const cardBack =
  document.getElementById("cardBack");

const prevButton =
  document.getElementById("prevButton");

const nextButton =
  document.getElementById("nextButton");

const cardCounter =
  document.getElementById("cardCounter");

const completionMessage =
  document.getElementById("completionMessage");


/* INDEX */

let currentIndex = 0;

let viewedCards = [];


/* UPDATE CARD */

function updateCard(){

  flashcard.classList.remove("flipped");

  cardFront.innerText =
    practiceWords[currentIndex].korean;

  cardBack.innerText =
    practiceWords[currentIndex].english;

  cardCounter.innerText =
    `${currentIndex + 1} / ${practiceWords.length}`;

}


/* FLIP */

flashcard.onclick = function(){

  flashcard.classList.toggle("flipped");


  if(!viewedCards.includes(currentIndex)){

    viewedCards.push(currentIndex);

  }


  /* COMPLETED */

  if(viewedCards.length === practiceWords.length){

    completionMessage.style.display = "block";


    /* SAVE COMPLETED LESSON */

    const completedLessons =
      JSON.parse(
        localStorage.getItem("completedLessons")
      ) || [];


    selectedLessons.forEach(topic => {

      if(!completedLessons.includes(topic)){

        completedLessons.push(topic);

      }

    });


    localStorage.setItem(
      "completedLessons",
      JSON.stringify(completedLessons)
    );


    /* ADD POINTS */

    let currentPoints =
      parseInt(
        localStorage.getItem("userPoints")
      ) || 0;


    currentPoints += 10;


    localStorage.setItem(
      "userPoints",
      currentPoints
    );

  }

};


/* RIGHT */

nextButton.onclick = function(){

  currentIndex++;

  if(currentIndex >= practiceWords.length){

    currentIndex = 0;

  }

  updateCard();

};


/* LEFT */

prevButton.onclick = function(){

  currentIndex--;

  if(currentIndex < 0){

    currentIndex =
      practiceWords.length - 1;

  }

  updateCard();

};


/* START */

updateCard();
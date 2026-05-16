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
    { korean:"죄송합니다", english:"Sorry" },
    { korean: "좋은 아침이에요", english: "Good morning" },
    { korean: "잘 지냈어요?", english: "How have you been?" },
    { korean: "저는 괜찮아요", english: "I’m fine" },
    { korean: "감사합니다", english: "Thank you" },
    { korean: "천만에요", english: "You’re welcome" },
    { korean: "괜찮아요", english: "It’s okay" },
    { korean: "이름이 뭐예요?", english: "What is your name?" },
    { korean: "제 이름은...", english: "My name is..." },
    { korean: "어디에서 왔어요?", english: "Where are you from?" },
    { korean: "저는 학생이에요", english: "I am a student" },
    { korean: "만나서 반가워요", english: "Nice to meet you" },
    { korean: "오늘 날씨가 좋네요", english: "The weather is nice today" },
    { korean: "지금 뭐 하고 있어요?", english: "What are you doing now?" },
    { korean: "배고파요", english: "I’m hungry" },
    { korean: "도와주세요", english: "Please help me" },
    { korean: "화장실이 어디예요?", english: "Where is the bathroom?" },
    { korean: "얼마예요?", english: "How much is it?" },
    { korean: "안녕히 가세요", english: "Goodbye" }
  ],

  "School Vocabulary":[
    { korean: "학교", english: "School" },
    { korean: "교실", english: "Classroom" },
    { korean: "학생", english: "Student" },
    { korean: "선생님", english: "Teacher" },
    { korean: "책", english: "Book" },
    { korean: "공책", english: "Notebook" },
    { korean: "연필", english: "Pencil" },
    { korean: "지우개", english: "Eraser" },
    { korean: "가방", english: "Bag" },
    { korean: "의자", english: "Chair" },
    { korean: "책상", english: "Desk" },
    { korean: "칠판", english: "Blackboard" },
    { korean: "숙제", english: "Homework" },
    { korean: "시험", english: "Test" },
    { korean: "수업", english: "Class" },
    { korean: "점심", english: "Lunch" },
    { korean: "체육관", english: "Gym" },
    { korean: "도서관", english: "Library" },
    { korean: "컴퓨터", english: "Computer" },
    { korean: "과학", english: "Science" }
  ],

  "Food & Drinks":[
    { korean: "음식", english: "Food" },
    { korean: "물", english: "Water" },
    { korean: "우유", english: "Milk" },
    { korean: "주스", english: "Juice" },
    { korean: "커피", english: "Coffee" },
    { korean: "차", english: "Tea" },
    { korean: "빵", english: "Bread" },
    { korean: "밥", english: "Rice" },
    { korean: "국수", english: "Noodles" },
    { korean: "고기", english: "Meat" },
    { korean: "생선", english: "Fish" },
    { korean: "달걀", english: "Egg" },
    { korean: "치즈", english: "Cheese" },
    { korean: "사과", english: "Apple" },
    { korean: "바나나", english: "Banana" },
    { korean: "포도", english: "Grapes" },
    { korean: "딸기", english: "Strawberry" },
    { korean: "채소", english: "Vegetables" },
    { korean: "케이크", english: "Cake" },
    { korean: "아이스크림", english: "Ice cream" }
  ],

  "Travel Words":[
    { korean: "여행", english: "Travel" },
    { korean: "비행기", english: "Airplane" },
    { korean: "공항", english: "Airport" },
    { korean: "호텔", english: "Hotel" },
    { korean: "여권", english: "Passport" },
    { korean: "가방", english: "Bag" },
    { korean: "지도", english: "Map" },
    { korean: "기차", english: "Train" },
    { korean: "버스", english: "Bus" },
    { korean: "택시", english: "Taxi" },
    { korean: "표", english: "Ticket" },
    { korean: "관광객", english: "Tourist" },
    { korean: "해변", english: "Beach" },
    { korean: "산", english: "Mountain" },
    { korean: "도시", english: "City" },
    { korean: "길", english: "Road" },
    { korean: "사진", english: "Photo" },
    { korean: "휴가", english: "Vacation" },
    { korean: "예약", english: "Reservation" },
    { korean: "여행가방", english: "Suitcase" }
  ],

  "Hobbies":[
    { korean: "취미", english: "Hobby" },
    { korean: "독서", english: "Reading" },
    { korean: "그림", english: "Drawing" },
    { korean: "음악", english: "Music" },
    { korean: "노래", english: "Singing" },
    { korean: "춤", english: "Dancing" },
    { korean: "게임", english: "Gaming" },
    { korean: "운동", english: "Exercise" },
    { korean: "축구", english: "Soccer" },
    { korean: "농구", english: "Basketball" },
    { korean: "수영", english: "Swimming" },
    { korean: "요리", english: "Cooking" },
    { korean: "사진", english: "Photography" },
    { korean: "영화", english: "Movie" },
    { korean: "여행", english: "Travel" },
    { korean: "낚시", english: "Fishing" },
    { korean: "자전거", english: "Bicycle" },
    { korean: "등산", english: "Hiking" },
    { korean: "만화", english: "Comics" },
    { korean: "퍼즐", english: "Puzzle" }
  ],

  "Weather":[
    { korean: "날씨", english: "Weather" },
    { korean: "맑음", english: "Sunny" },
    { korean: "비", english: "Rain" },
    { korean: "눈", english: "Snow" },
    { korean: "바람", english: "Wind" },
    { korean: "구름", english: "Cloud" },
    { korean: "폭풍", english: "Storm" },
    { korean: "더위", english: "Heat" },
    { korean: "추위", english: "Cold" },
    { korean: "온도", english: "Temperature" },
    { korean: "여름", english: "Summer" },
    { korean: "겨울", english: "Winter" },
    { korean: "봄", english: "Spring" },
    { korean: "가을", english: "Autumn" },
    { korean: "우산", english: "Umbrella" },
    { korean: "안개", english: "Fog" },
    { korean: "천둥", english: "Thunder" },
    { korean: "번개", english: "Lightning" },
    { korean: "습도", english: "Humidity" },
    { korean: "무지개", english: "Rainbow" }
  ],

  "Technology":[
    { korean: "기술", english: "Technology" },
    { korean: "컴퓨터", english: "Computer" },
    { korean: "휴대폰", english: "Mobile phone" },
    { korean: "인터넷", english: "Internet" },
    { korean: "웹사이트", english: "Website" },
    { korean: "앱", english: "App" },
    { korean: "게임", english: "Game" },
    { korean: "로봇", english: "Robot" },
    { korean: "키보드", english: "Keyboard" },
    { korean: "마우스", english: "Mouse" },
    { korean: "화면", english: "Screen" },
    { korean: "카메라", english: "Camera" },
    { korean: "충전기", english: "Charger" },
    { korean: "비밀번호", english: "Password" },
    { korean: "이메일", english: "Email" },
    { korean: "소프트웨어", english: "Software" },
    { korean: "하드웨어", english: "Hardware" },
    { korean: "데이터", english: "Data" },
    { korean: "인공지능", english: "Artificial Intelligence" },
    { korean: "프로그래밍", english: "Programming" }
  ],

  "Environment":[
    { korean: "환경", english: "Environment" },
    { korean: "지구", english: "Earth" },
    { korean: "자연", english: "Nature" },
    { korean: "나무", english: "Tree" },
    { korean: "숲", english: "Forest" },
    { korean: "바다", english: "Sea" },
    { korean: "강", english: "River" },
    { korean: "공기", english: "Air" },
    { korean: "오염", english: "Pollution" },
    { korean: "재활용", english: "Recycling" },
    { korean: "쓰레기", english: "Trash" },
    { korean: "동물", english: "Animal" },
    { korean: "식물", english: "Plant" },
    { korean: "태양", english: "Sun" },
    { korean: "비", english: "Rain" },
    { korean: "기후", english: "Climate" },
    { korean: "에너지", english: "Energy" },
    { korean: "전기", english: "Electricity" },
    { korean: "보호", english: "Protection" },
    { korean: "친환경", english: "Eco-friendly" }
  ],

  "Health":[
    { korean: "건강", english: "Health" },
    { korean: "운동", english: "Exercise" },
    { korean: "병원", english: "Hospital" },
    { korean: "의사", english: "Doctor" },
    { korean: "간호사", english: "Nurse" },
    { korean: "약", english: "Medicine" },
    { korean: "비타민", english: "Vitamin" },
    { korean: "아픔", english: "Pain" },
    { korean: "열", english: "Fever" },
    { korean: "기침", english: "Cough" },
    { korean: "두통", english: "Headache" },
    { korean: "감기", english: "Cold" },
    { korean: "식사", english: "Meal" },
    { korean: "물", english: "Water" },
    { korean: "수면", english: "Sleep" },
    { korean: "스트레스", english: "Stress" },
    { korean: "치료", english: "Treatment" },
    { korean: "응급실", english: "Emergency room" },
    { korean: "체온", english: "Body temperature" },
    { korean: "건강식", english: "Healthy food" }
  ],

  "Business":[
    { korean: "사업", english: "Business" },
    { korean: "회사", english: "Company" },
    { korean: "직원", english: "Employee" },
    { korean: "고용주", english: "Employer" },
    { korean: "회의", english: "Meeting" },
    { korean: "계약", english: "Contract" },
    { korean: "고객", english: "Customer" },
    { korean: "판매", english: "Sales" },
    { korean: "구매", english: "Purchase" },
    { korean: "가격", english: "Price" },
    { korean: "수익", english: "Profit" },
    { korean: "손실", english: "Loss" },
    { korean: "마케팅", english: "Marketing" },
    { korean: "광고", english: "Advertisement" },
    { korean: "제품", english: "Product" },
    { korean: "서비스", english: "Service" },
    { korean: "창업", english: "Startup" },
    { korean: "관리", english: "Management" },
    { korean: "투자", english: "Investment" },
    { korean: "은행", english: "Bank" }
  ],

  "Science":[
    { korean: "과학", english: "Science" },
    { korean: "실험", english: "Experiment" },
    { korean: "연구", english: "Research" },
    { korean: "가설", english: "Hypothesis" },
    { korean: "결과", english: "Result" },
    { korean: "분석", english: "Analysis" },
    { korean: "데이터", english: "Data" },
    { korean: "이론", english: "Theory" },
    { korean: "물리", english: "Physics" },
    { korean: "화학", english: "Chemistry" },
    { korean: "생물", english: "Biology" },
    { korean: "세포", english: "Cell" },
    { korean: "원자", english: "Atom" },
    { korean: "분자", english: "Molecule" },
    { korean: "에너지", english: "Energy" },
    { korean: "중력", english: "Gravity" },
    { korean: "진화", english: "Evolution" },
    { korean: "현미경", english: "Microscope" },
    { korean: "우주", english: "Universe" },
    { korean: "행성", english: "Planet" }
  ],

  "Psychology":[
    { korean: "심리학", english: "Psychology" },
    { korean: "마음", english: "Mind" },
    { korean: "감정", english: "Emotion" },
    { korean: "생각", english: "Thought" },
    { korean: "기억", english: "Memory" },
    { korean: "인지", english: "Cognition" },
    { korean: "행동", english: "Behavior" },
    { korean: "스트레스", english: "Stress" },
    { korean: "불안", english: "Anxiety" },
    { korean: "우울", english: "Depression" },
    { korean: "성격", english: "Personality" },
    { korean: "동기", english: "Motivation" },
    { korean: "학습", english: "Learning" },
    { korean: "습관", english: "Habit" },
    { korean: "주의", english: "Attention" },
    { korean: "의식", english: "Consciousness" },
    { korean: "무의식", english: "Unconscious" },
    { korean: "지각", english: "Perception" },
    { korean: "공감", english: "Empathy" },
    { korean: "자아", english: "Self" }
  ],

  "Philosophy":[
    { korean: "철학", english: "Philosophy" },
    { korean: "존재", english: "Existence" },
    { korean: "진리", english: "Truth" },
    { korean: "지식", english: "Knowledge" },
    { korean: "믿음", english: "Belief" },
    { korean: "의식", english: "Consciousness" },
    { korean: "이성", english: "Reason" },
    { korean: "윤리", english: "Ethics" },
    { korean: "도덕", english: "Morality" },
    { korean: "가치", english: "Value" },
    { korean: "자유", english: "Freedom" },
    { korean: "의미", english: "Meaning" },
    { korean: "행복", english: "Happiness" },
    { korean: "정의", english: "Justice" },
    { korean: "논리", english: "Logic" },
    { korean: "현실", english: "Reality" },
    { korean: "인식", english: "Perception" },
    { korean: "영혼", english: "Soul" },
    { korean: "시간", english: "Time" },
    { korean: "우주", english: "Universe" }
  ],

  "Politics":[
    { korean: "정치", english: "Politics" },
    { korean: "정부", english: "Government" },
    { korean: "국가", english: "Nation" },
    { korean: "국회", english: "Parliament" },
    { korean: "대통령", english: "President" },
    { korean: "총리", english: "Prime Minister" },
    { korean: "정당", english: "Political party" },
    { korean: "선거", english: "Election" },
    { korean: "투표", english: "Vote" },
    { korean: "정책", english: "Policy" },
    { korean: "법", english: "Law" },
    { korean: "헌법", english: "Constitution" },
    { korean: "시민", english: "Citizen" },
    { korean: "민주주의", english: "Democracy" },
    { korean: "권력", english: "Power" },
    { korean: "권리", english: "Rights" },
    { korean: "의무", english: "Duty" },
    { korean: "외교", english: "Diplomacy" },
    { korean: "정치인", english: "Politician" },
    { korean: "사회", english: "Society" }
  ],

  "Economics":[
    { korean: "경제", english: "Economics" },
    { korean: "시장", english: "Market" },
    { korean: "수요", english: "Demand" },
    { korean: "공급", english: "Supply" },
    { korean: "가격", english: "Price" },
    { korean: "물가", english: "Inflation / Prices" },
    { korean: "돈", english: "Money" },
    { korean: "소득", english: "Income" },
    { korean: "급여", english: "Salary" },
    { korean: "저축", english: "Savings" },
    { korean: "투자", english: "Investment" },
    { korean: "은행", english: "Bank" },
    { korean: "이자", english: "Interest" },
    { korean: "세금", english: "Tax" },
    { korean: "실업", english: "Unemployment" },
    { korean: "성장", english: "Growth" },
    { korean: "경기", english: "Economy (business cycle)" },
    { korean: "무역", english: "Trade" },
    { korean: "수출", english: "Export" },
    { korean: "수입", english: "Import" }
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

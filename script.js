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
    { korean:"안녕하세요 \n (annyeonghaseyo)", english:"Hello" },
    { korean:"감사합니다 \n (gamsahabnida)", english:"Thank you" },
    { korean:"죄송합니다 \n (joesonghabnida)", english:"Sorry" },
    { korean: "좋은 아침이에요 \n (joh-eun achim-ieyo)", english: "Good morning" },
    { korean: "잘 지냈어요? \n (jal jinaess-eoyo?)", english: "How have you been?" },
    { korean: "저는 괜찮아요 \n (jeoneun gwaenchanh-ayo)", english: "I’m fine" },
    { korean: "감사합니다 \n (gamsahabnida)", english: "Thank you" },
    { korean: "천만에요 \n (cheonman-eyo)", english: "You’re welcome" },
    { korean: "괜찮아요 \n (gwaenchanh-ayo)", english: "It’s okay" },
    { korean: "이름이 뭐예요? \n (ileum-i mwoyeyo?)", english: "What is your name?" },
    { korean: "제 이름은... \n (je ileum-eun...)", english: "My name is..." },
    { korean: "어디에서 왔어요? \n (eodieseo wass-eoyo?)", english: "Where are you from?" },
    { korean: "저는 학생이에요 \n (jeoneun hagsaeng-ieyo)", english: "I am a student" },
    { korean: "만나서 반가워요 \n (mannaseo bangawoyo)", english: "Nice to meet you" },
    { korean: "오늘 날씨가 좋네요 \n (oneul nalssiga johneyo)", english: "The weather is nice today" },
    { korean: "지금 뭐 하고 있어요? \n (jigeum mwo hago iss-eoyo?)", english: "What are you doing now?" },
    { korean: "배고파요 \n (baegopayo)", english: "I’m hungry" },
    { korean: "도와주세요 \n (dowajuseyo)", english: "Please help me" },
    { korean: "화장실이 어디예요? \n (hwajangsil-i eodiyeyo?)", english: "Where is the bathroom?" },
    { korean: "얼마예요? \n (eolmayeyo?)", english: "How much is it?" },
    { korean: "안녕히 가세요 \n (annyeonghi gaseyo)", english: "Goodbye" }
  ],

  "School Vocabulary":[
    { korean: "학교 \n (haggyo)", english: "School" },
    { korean: "교실 \n (gyosil)", english: "Classroom" },
    { korean: "학생 \n (hagsaeng)", english: "Student" },
    { korean: "선생님 \n (seonsaengnim)", english: "Teacher" },
    { korean: "책 \n (chaeg)", english: "Book" },
    { korean: "공책 \n (gongchaeg)", english: "Notebook" },
    { korean: "연필 \n (yeonpil)", english: "Pencil" },
    { korean: "지우개 \n (jiugae)", english: "Eraser" },
    { korean: "가방 \n (gabang)", english: "Bag" },
    { korean: "의자 \n (uija)", english: "Chair" },
    { korean: "책상 \n (chaegsang)", english: "Desk" },
    { korean: "칠판 \n (chilpan)", english: "Blackboard" },
    { korean: "숙제 \n (sugje)", english: "Homework" },
    { korean: "시험 \n (siheom)", english: "Test" },
    { korean: "수업 \n (sueob)", english: "Class" },
    { korean: "점심 \n (jeomsim)", english: "Lunch" },
    { korean: "체육관 \n (cheyuggwan)", english: "Gym" },
    { korean: "도서관 \n (doseogwan)", english: "Library" },
    { korean: "컴퓨터 \n (keompyuteo)", english: "Computer" },
    { korean: "과학 \n (gwahag)", english: "Science" }
  ],

  "Food & Drinks":[
    { korean: "음식 \n ()", english: "Food" },
    { korean: "물 \n ()", english: "Water" },
    { korean: "우유 \n ()", english: "Milk" },
    { korean: "주스 \n ()", english: "Juice" },
    { korean: "커피 \n ()", english: "Coffee" },
    { korean: "차 \n ()", english: "Tea" },
    { korean: "빵 \n ()", english: "Bread" },
    { korean: "밥 \n ()", english: "Rice" },
    { korean: "국수 \n ()", english: "Noodles" },
    { korean: "고기 \n ()", english: "Meat" },
    { korean: "생선 \n ()", english: "Fish" },
    { korean: "달걀 \n ()", english: "Egg" },
    { korean: "치즈 \n ()", english: "Cheese" },
    { korean: "사과 \n ()", english: "Apple" },
    { korean: "바나나 \n ()", english: "Banana" },
    { korean: "포도 \n ()", english: "Grapes" },
    { korean: "딸기 \n ()", english: "Strawberry" },
    { korean: "채소 \n ()", english: "Vegetables" },
    { korean: "케이크 \n ()", english: "Cake" },
    { korean: "아이스크림 \n ()", english: "Ice cream" }
  ],

  "Travel Words":[
    { korean: "여행 \n ()", english: "Travel" },
    { korean: "비행기 \n ()", english: "Airplane" },
    { korean: "공항 \n ()", english: "Airport" },
    { korean: "호텔 \n ()", english: "Hotel" },
    { korean: "여권 \n ()", english: "Passport" },
    { korean: "가방 \n ()", english: "Bag" },
    { korean: "지도 \n ()", english: "Map" },
    { korean: "기차 \n ()", english: "Train" },
    { korean: "버스 \n ()", english: "Bus" },
    { korean: "택시 \n ()", english: "Taxi" },
    { korean: "표 \n ()", english: "Ticket" },
    { korean: "관광객 \n ()", english: "Tourist" },
    { korean: "해변 \n ()", english: "Beach" },
    { korean: "산 \n ()", english: "Mountain" },
    { korean: "도시 \n ()", english: "City" },
    { korean: "길 \n ()", english: "Road" },
    { korean: "사진 \n ()", english: "Photo" },
    { korean: "휴가 \n ()", english: "Vacation" },
    { korean: "예약 \n ()", english: "Reservation" },
    { korean: "여행가방 \n ()", english: "Suitcase" }
  ],

  "Hobbies":[
    { korean: "취미 \n ()", english: "Hobby" },
    { korean: "독서 \n ()", english: "Reading" },
    { korean: "그림 \n ()", english: "Drawing" },
    { korean: "음악 \n ()", english: "Music" },
    { korean: "노래 \n ()", english: "Singing" },
    { korean: "춤 \n ()", english: "Dancing" },
    { korean: "게임 \n ()", english: "Gaming" },
    { korean: "운동 \n ()", english: "Exercise" },
    { korean: "축구 \n ()", english: "Soccer" },
    { korean: "농구 \n ()", english: "Basketball" },
    { korean: "수영 \n ()", english: "Swimming" },
    { korean: "요리 \n ()", english: "Cooking" },
    { korean: "사진 \n ()", english: "Photography" },
    { korean: "영화 \n ()", english: "Movie" },
    { korean: "여행 \n ()", english: "Travel" },
    { korean: "낚시 \n ()", english: "Fishing" },
    { korean: "자전거 \n ()", english: "Bicycle" },
    { korean: "등산 \n ()", english: "Hiking" },
    { korean: "만화 \n ()", english: "Comics" },
    { korean: "퍼즐 \n ()", english: "Puzzle" }
  ],

  "Weather":[
    { korean: "날씨 \n ()", english: "Weather" },
    { korean: "맑음 \n ()", english: "Sunny" },
    { korean: "비 \n ()", english: "Rain" },
    { korean: "눈 \n ()", english: "Snow" },
    { korean: "바람 \n ()", english: "Wind" },
    { korean: "구름 \n ()", english: "Cloud" },
    { korean: "폭풍 \n ()", english: "Storm" },
    { korean: "더위 \n ()", english: "Heat" },
    { korean: "추위 \n ()", english: "Cold" },
    { korean: "온도 \n ()", english: "Temperature" },
    { korean: "여름 \n ()", english: "Summer" },
    { korean: "겨울 \n ()", english: "Winter" },
    { korean: "봄 \n ()", english: "Spring" },
    { korean: "가을 \n ()", english: "Autumn" },
    { korean: "우산 \n ()", english: "Umbrella" },
    { korean: "안개 \n ()", english: "Fog" },
    { korean: "천둥 \n ()", english: "Thunder" },
    { korean: "번개 \n ()", english: "Lightning" },
    { korean: "습도 \n ()", english: "Humidity" },
    { korean: "무지개 \n ()", english: "Rainbow" }
  ],

  "Technology":[
    { korean: "기술 \n ()", english: "Technology" },
    { korean: "컴퓨터 \n ()", english: "Computer" },
    { korean: "휴대폰 \n ()", english: "Mobile phone" },
    { korean: "인터넷 \n ()", english: "Internet" },
    { korean: "웹사이트 \n ()", english: "Website" },
    { korean: "앱 \n ()", english: "App" },
    { korean: "게임 \n ()", english: "Game" },
    { korean: "로봇 \n ()", english: "Robot" },
    { korean: "키보드 \n ()", english: "Keyboard" },
    { korean: "마우스 \n ()", english: "Mouse" },
    { korean: "화면 \n ()", english: "Screen" },
    { korean: "카메라 \n ()", english: "Camera" },
    { korean: "충전기 \n ()", english: "Charger" },
    { korean: "비밀번호 \n ()", english: "Password" },
    { korean: "이메일 \n ()", english: "Email" },
    { korean: "소프트웨어 \n ()", english: "Software" },
    { korean: "하드웨어 \n ()", english: "Hardware" },
    { korean: "데이터 \n ()", english: "Data" },
    { korean: "인공지능 \n ()", english: "Artificial Intelligence" },
    { korean: "프로그래밍 \n ()", english: "Programming" }
  ],

  "Environment":[
    { korean: "환경 \n ()", english: "Environment" },
    { korean: "지구 \n ()", english: "Earth" },
    { korean: "자연 \n ()", english: "Nature" },
    { korean: "나무 \n ()", english: "Tree" },
    { korean: "숲 \n ()", english: "Forest" },
    { korean: "바다 \n ()", english: "Sea" },
    { korean: "강 \n ()", english: "River" },
    { korean: "공기 \n ()", english: "Air" },
    { korean: "오염 \n ()", english: "Pollution" },
    { korean: "재활용 \n ()", english: "Recycling" },
    { korean: "쓰레기 \n ()", english: "Trash" },
    { korean: "동물 \n ()", english: "Animal" },
    { korean: "식물 \n ()", english: "Plant" },
    { korean: "태양 \n ()", english: "Sun" },
    { korean: "비 \n ()", english: "Rain" },
    { korean: "기후 \n ()", english: "Climate" },
    { korean: "에너지 \n ()", english: "Energy" },
    { korean: "전기 \n ()", english: "Electricity" },
    { korean: "보호 \n ()", english: "Protection" },
    { korean: "친환경 \n ()", english: "Eco-friendly" }
  ],

  "Health":[
    { korean: "건강 \n ()", english: "Health" },
    { korean: "운동 \n ()", english: "Exercise" },
    { korean: "병원 \n ()", english: "Hospital" },
    { korean: "의사 \n ()", english: "Doctor" },
    { korean: "간호사 \n ()", english: "Nurse" },
    { korean: "약 \n ()", english: "Medicine" },
    { korean: "비타민 \n ()", english: "Vitamin" },
    { korean: "아픔 \n ()", english: "Pain" },
    { korean: "열 \n ()", english: "Fever" },
    { korean: "기침 \n ()", english: "Cough" },
    { korean: "두통 \n ()", english: "Headache" },
    { korean: "감기 \n ()", english: "Cold" },
    { korean: "식사 \n ()", english: "Meal" },
    { korean: "물 \n ()", english: "Water" },
    { korean: "수면 \n ()", english: "Sleep" },
    { korean: "스트레스 \n ()", english: "Stress" },
    { korean: "치료 \n ()", english: "Treatment" },
    { korean: "응급실 \n ()", english: "Emergency room" },
    { korean: "체온 \n ()", english: "Body temperature" },
    { korean: "건강식 \n ()", english: "Healthy food" }
  ],

  "Business":[
    { korean: "사업 \n ()", english: "Business" },
    { korean: "회사 \n ()", english: "Company" },
    { korean: "직원 \n ()", english: "Employee" },
    { korean: "고용주 \n ()", english: "Employer" },
    { korean: "회의 \n ()", english: "Meeting" },
    { korean: "계약 \n ()", english: "Contract" },
    { korean: "고객 \n ()", english: "Customer" },
    { korean: "판매 \n ()", english: "Sales" },
    { korean: "구매 \n ()", english: "Purchase" },
    { korean: "가격 \n ()", english: "Price" },
    { korean: "수익 \n ()", english: "Profit" },
    { korean: "손실 \n ()", english: "Loss" },
    { korean: "마케팅 \n ()", english: "Marketing" },
    { korean: "광고 \n ()", english: "Advertisement" },
    { korean: "제품 \n ()", english: "Product" },
    { korean: "서비스 \n ()", english: "Service" },
    { korean: "창업 \n ()", english: "Startup" },
    { korean: "관리 \n ()", english: "Management" },
    { korean: "투자 \n ()", english: "Investment" },
    { korean: "은행 \n ()", english: "Bank" }
  ],

  "Science":[
    { korean: "과학 \n ()", english: "Science" },
    { korean: "실험 \n ()", english: "Experiment" },
    { korean: "연구 \n ()", english: "Research" },
    { korean: "가설 \n ()", english: "Hypothesis" },
    { korean: "결과 \n ()", english: "Result" },
    { korean: "분석 \n ()", english: "Analysis" },
    { korean: "데이터 \n ()", english: "Data" },
    { korean: "이론 \n ()", english: "Theory" },
    { korean: "물리 \n ()", english: "Physics" },
    { korean: "화학 \n ()", english: "Chemistry" },
    { korean: "생물 \n ()", english: "Biology" },
    { korean: "세포 \n ()", english: "Cell" },
    { korean: "원자 \n ()", english: "Atom" },
    { korean: "분자 \n ()", english: "Molecule" },
    { korean: "에너지 \n ()", english: "Energy" },
    { korean: "중력 \n ()", english: "Gravity" },
    { korean: "진화 \n ()", english: "Evolution" },
    { korean: "현미경 \n ()", english: "Microscope" },
    { korean: "우주 \n ()", english: "Universe" },
    { korean: "행성 \n ()", english: "Planet" }
  ],

  "Psychology":[
    { korean: "심리학 \n ()", english: "Psychology" },
    { korean: "마음 \n ()", english: "Mind" },
    { korean: "감정 \n ()", english: "Emotion" },
    { korean: "생각 \n ()", english: "Thought" },
    { korean: "기억 \n ()", english: "Memory" },
    { korean: "인지 \n ()", english: "Cognition" },
    { korean: "행동 \n ()", english: "Behavior" },
    { korean: "스트레스 \n ()", english: "Stress" },
    { korean: "불안 \n ()", english: "Anxiety" },
    { korean: "우울 \n ()", english: "Depression" },
    { korean: "성격 \n ()", english: "Personality" },
    { korean: "동기 \n ()", english: "Motivation" },
    { korean: "학습 \n ()", english: "Learning" },
    { korean: "습관 \n ()", english: "Habit" },
    { korean: "주의 \n ()", english: "Attention" },
    { korean: "의식 \n ()", english: "Consciousness" },
    { korean: "무의식 \n ()", english: "Unconscious" },
    { korean: "지각 \n ()", english: "Perception" },
    { korean: "공감 \n ()", english: "Empathy" },
    { korean: "자아 \n ()", english: "Self" }
  ],

  "Philosophy":[
    { korean: "철학 \n ()", english: "Philosophy" },
    { korean: "존재 \n ()", english: "Existence" },
    { korean: "진리 \n ()", english: "Truth" },
    { korean: "지식 \n ()", english: "Knowledge" },
    { korean: "믿음 \n ()", english: "Belief" },
    { korean: "의식 \n ()", english: "Consciousness" },
    { korean: "이성 \n ()", english: "Reason" },
    { korean: "윤리 \n ()", english: "Ethics" },
    { korean: "도덕 \n ()", english: "Morality" },
    { korean: "가치 \n ()", english: "Value" },
    { korean: "자유 \n ()", english: "Freedom" },
    { korean: "의미 \n ()", english: "Meaning" },
    { korean: "행복 \n ()", english: "Happiness" },
    { korean: "정의 \n ()", english: "Justice" },
    { korean: "논리 \n ()", english: "Logic" },
    { korean: "현실 \n ()", english: "Reality" },
    { korean: "인식 \n ()", english: "Perception" },
    { korean: "영혼 \n ()", english: "Soul" },
    { korean: "시간 \n ()", english: "Time" },
    { korean: "우주 \n ()", english: "Universe" }
  ],

  "Politics":[
    { korean: "정치 \n ()", english: "Politics" },
    { korean: "정부 \n ()", english: "Government" },
    { korean: "국가 \n ()", english: "Nation" },
    { korean: "국회 \n ()", english: "Parliament" },
    { korean: "대통령 \n ()", english: "President" },
    { korean: "총리 \n ()", english: "Prime Minister" },
    { korean: "정당 \n ()", english: "Political party" },
    { korean: "선거 \n ()", english: "Election" },
    { korean: "투표 \n ()", english: "Vote" },
    { korean: "정책 \n ()", english: "Policy" },
    { korean: "법 \n ()", english: "Law" },
    { korean: "헌법 \n ()", english: "Constitution" },
    { korean: "시민 \n ()", english: "Citizen" },
    { korean: "민주주의 \n ()", english: "Democracy" },
    { korean: "권력 \n ()", english: "Power" },
    { korean: "권리 \n ()", english: "Rights" },
    { korean: "의무 \n ()", english: "Duty" },
    { korean: "외교 \n ()", english: "Diplomacy" },
    { korean: "정치인 \n ()", english: "Politician" },
    { korean: "사회 \n ()", english: "Society" }
  ],

  "Economics":[
    { korean: "경제 \n ()", english: "Economics" },
    { korean: "시장 \n ()", english: "Market" },
    { korean: "수요 \n ()", english: "Demand" },
    { korean: "공급 \n ()", english: "Supply" },
    { korean: "가격 \n ()", english: "Price" },
    { korean: "물가 \n ()", english: "Inflation / Prices" },
    { korean: "돈 \n ()", english: "Money" },
    { korean: "소득 \n ()", english: "Income" },
    { korean: "급여 \n ()", english: "Salary" },
    { korean: "저축 \n ()", english: "Savings" },
    { korean: "투자 \n ()", english: "Investment" },
    { korean: "은행 \n ()", english: "Bank" },
    { korean: "이자 \n ()", english: "Interest" },
    { korean: "세금 \n ()", english: "Tax" },
    { korean: "실업 \n ()", english: "Unemployment" },
    { korean: "성장 \n ()", english: "Growth" },
    { korean: "경기 \n ()", english: "Economy (business cycle)" },
    { korean: "무역 \n ()", english: "Trade" },
    { korean: "수출 \n ()", english: "Export" },
    { korean: "수입 \n ()", english: "Import" }
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

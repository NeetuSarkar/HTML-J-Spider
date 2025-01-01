let levels = document.getElementById("levels");
let homeContainer = document.getElementById("home-container");
let typingPage = document.getElementById("typing-page");

// typing page selectors
let levelTitle = document.getElementById("level-title");
let levelText = document.getElementById("level-text");
let backBtn = document.getElementById("back-to-home");
let textAreaInput = document.getElementById("input-text");
let realTimeSpeedDisplay = document.getElementById("real-time-speed");
let realTimeAccuracyDisplay = document.getElementById("real-time-accuracy");
let realTime = document.getElementById("real-time");
let restartBtn = document.getElementById("restart-level");

const typingTestTexts = [
  {
    id: 1,
    name: "Art of Communication",
    text: "The art of communication is the foundation of leadership and teamwork. It requires not only the ability to express ideas clearly but also the willingness to listen with an open mind. By understanding others' perspectives, we can build trust, resolve conflicts, and create an environment where creativity and collaboration thrive, driving us toward shared goals and success.",
  },
  {
    id: 2,
    name: "True Success",
    text: "Success is not just about personal achievements but about creating a positive impact on others. True success comes when you uplift those around you, inspire them to dream bigger, and help them overcome challenges. Embracing compassion, resilience, and a mindset of growth ensures that success becomes a journey of shared victories and lasting fulfillment, not merely a destination.",
  },
  {
    id: 3,
    name: "Technology and Innovation",
    text: "Technology has reshaped human life in unprecedented ways. From the convenience of smartphones to breakthroughs in medical science, innovation has connected people and solved problems across the globe. Yet, this progress also brings challenges like ethical dilemmas and privacy concerns, reminding us to use technology responsibly while continuing to push the boundaries of what is possible.",
  },
  {
    id: 4,
    name: "Growth Through Challenges",
    text: "The only way to truly grow is to embrace challenges and learn from failures. Life’s difficulties often bring valuable lessons that cannot be learned in moments of comfort. Every setback has the potential to shape our character, build resilience, and guide us toward achieving our dreams. Growth is not a destination but a continuous journey of self-improvement.",
  },
  {
    id: 5,
    name: "Mindfulness and Presence",
    text: "Mindfulness is the practice of living in the present moment. It allows us to fully experience life without being overwhelmed by worries about the future or regrets about the past. Through mindfulness, we can cultivate a sense of gratitude, focus, and clarity, enabling us to face life’s challenges with patience and a deeper understanding of ourselves.",
  },
  {
    id: 6,
    name: "Lessons from Nature",
    text: "The natural world holds endless wonders and lessons. From the resilience of a tiny seed breaking through soil to the grandeur of a vast mountain range, nature teaches us patience, strength, and interconnectedness. Taking time to immerse ourselves in nature not only brings peace and inspiration but also reminds us of our responsibility to protect this planet.",
  },
  {
    id: 7,
    name: "Power of Education",
    text: "Education is a powerful tool that unlocks opportunities and shapes societies. It empowers individuals to think critically, solve problems, and contribute meaningfully to their communities. An educated mind is not just one that accumulates knowledge but one that questions, innovates, and strives for a better world. Learning is a lifelong process that transforms both individuals and nations.",
  },
  {
    id: 8,
    name: "Inspiring Leadership",
    text: "Leadership is about inspiring others to reach their full potential while working toward a common purpose. It’s not about authority but about serving as a guide, mentor, and motivator. A great leader leads by example, listens actively, and adapts to challenges with grace. Leadership is earned through trust, respect, and a commitment to uplifting others.",
  },
  {
    id: 9,
    name: "Finding Happiness",
    text: "Happiness is not found in material possessions but in meaningful experiences and connections. It’s about cherishing simple joys, like laughter with friends, the warmth of the sun, or the comfort of a loved one’s embrace. Cultivating gratitude and focusing on what truly matters can transform our perspective, reminding us that happiness is a choice we make every day.",
  },
  {
    id: 10,
    name: "Value of Time",
    text: "Time is the most valuable resource we have. Unlike money or possessions, it cannot be replaced or regained once it is lost. Learning to prioritize what truly matters and using time wisely is essential for leading a fulfilling life. Whether spent on personal growth, meaningful relationships, or pursuing passions, time invested wisely enriches our journey.",
  },
  {
    id: 11,
    name: "Power of Storytelling",
    text: "The power of storytelling lies in its ability to connect people and convey universal truths. Stories inspire us, teach us, and help us make sense of the world. They bridge cultural divides and foster empathy, reminding us of our shared humanity. Whether told through books, films, or personal conversations, stories have the power to change lives.",
  },
  {
    id: 12,
    name: "Courage and Bravery",
    text: "Courage is not the absence of fear but the willingness to act despite it. Life often presents situations that test our strength and resolve, and it’s in these moments that courage shines brightest. Facing uncertainty, taking risks, and standing up for what we believe in require bravery, and these acts of courage help us grow and inspire others.",
  },
  {
    id: 13,
    name: "Curiosity and Discovery",
    text: "The beauty of curiosity lies in its endless pursuit of knowledge and understanding. A curious mind is never satisfied with surface-level answers and constantly seeks deeper truths. By questioning the world around us and exploring new ideas, curiosity fuels innovation and personal growth, reminding us that there is always more to learn and discover.",
  },
  {
    id: 14,
    name: "Power of Gratitude",
    text: "Gratitude is a powerful practice that can transform our outlook on life. By focusing on what we have rather than what we lack, we cultivate a mindset of abundance and contentment. Gratitude helps us recognize the blessings in our lives, from supportive relationships to simple joys, and fosters a sense of happiness and well-being.",
  },
  {
    id: 15,
    name: "Collaboration and Teamwork",
    text: "Collaboration is the cornerstone of progress and innovation. When people with diverse perspectives come together to solve problems, their collective strengths lead to better outcomes. True collaboration requires respect, open communication, and a willingness to compromise. It’s through teamwork and shared effort that we achieve goals that might be impossible to reach alone.",
  },
  {
    id: 16,
    name: "Building Resilience",
    text: "Adversity is an inevitable part of life, but it is also a source of strength and resilience. Challenges force us to adapt, learn, and grow in ways we never thought possible. By facing difficulties head-on and persevering through hardships, we discover inner resources of courage and determination that shape us into stronger, more capable individuals.",
  },
  {
    id: 17,
    name: "Kindness Matters",
    text: "The value of kindness cannot be overstated. A simple act of kindness, whether a smile, a kind word, or a helping hand, has the power to brighten someone’s day and create ripples of positivity. In a world that can sometimes feel harsh, choosing to be kind reminds us of our shared humanity and our ability to make a difference.",
  },
  {
    id: 18,
    name: "Power of Imagination",
    text: "Imagination is a gift that allows us to envision possibilities beyond the present reality. It fuels creativity, inspires innovation, and gives birth to dreams. Through imagination, we can explore new ideas, create art, and solve complex problems. Cultivating imagination not only enhances our personal growth but also contributes to the advancement of society as a whole.",
  },
  {
    id: 19,
    name: "Strength in Resilience",
    text: "Resilience is the ability to bounce back from challenges and setbacks. It’s a skill that is built through experiences and strengthened over time. Resilient individuals approach difficulties with a positive mindset, seeing them as opportunities for growth rather than as obstacles. By cultivating resilience, we empower ourselves to navigate life’s ups and downs with confidence.",
  },
  {
    id: 20,
    name: "Hope and Optimism",
    text: "Hope is the light that guides us through darkness. Even in the face of uncertainty or hardship, hope gives us the strength to keep moving forward. It inspires us to believe in the possibility of a better future and motivates us to take action. Nurturing hope allows us to stay resilient and optimistic, no matter the circumstances.",
  },
];

let levelWordsLastIndex = null;
let currentWordIndex = 0;
let currentWord = "";
let startTime = null;
let endTime = null;
let correctWords = 0;
let typedCharacters = 0;
let currentLevelId = null;

function displayLevels() {
  let display = "";
  for (const element of typingTestTexts) {
    display += `<div class="level-card">
          <p id="level-heading">${element.name}</p>
          <p id="level-number">Level <span id="lev-num">${element.id}</span></p>
          <div class="level-start">
            <p id="high-score">Score: <span id="hig-scr">45</span>WPM</p>
            <button id="start-btn" onClick=openLevel(${element.id})>Start</button>
          </div>
        </div>`;
  }
  levels.innerHTML = display;
}

// to open a level
function openLevel(id) {
  // Reset state variables
  console.log(currentLevelId);
  currentWordIndex = 0;
  currentWord = "";
  startTime = null;
  endTime = null;
  textAreaInput.value = "";
  levelWordsLastIndex = null;
  realTimeSpeedDisplay.textContent = `00 WPM`;
  realTimeAccuracyDisplay.textContent = `00%`;
  realTime.textContent = `00 sec`;

  // Remove styling from previous words
  const allWords = document.querySelectorAll(".word");
  allWords.forEach((word) => {
    word.classList.remove("current", "correct", "incorrect");
  });

  // Hide home container and show typing page
  homeContainer.classList.toggle("hidden");
  typingPage.classList.toggle("hidden");

  // Get the level data
  let levelObject = typingTestTexts.find((item) => item.id === id);
  let levelTxt = levelObject.text;
  let words = levelTxt.split(" ");
  levelWordsLastIndex = words.length - 1;

  // Update level title and text
  levelTitle.textContent = levelObject.name;
  levelText.innerHTML = words
    .map(
      (word, index) => `<span class="word" id="word-${index}">${word}</span>`
    )
    .join(" ");
}

textAreaInput.addEventListener("input", (e) => {
  const currentWordSpan = document.getElementById(`word-${currentWordIndex}`);

  //start timer for first keystroke
  if (!startTime) {
    startTime = new Date();
  }

  // Highlight the current word
  currentWordSpan.classList.add("current");

  // Check if backspace is pressed
  if (e.inputType === "deleteContentBackward") {
    currentWord = currentWord.slice(0, -1);
    typedCharacters--;
  } else if (e.data === " ") {
    // Check for space or end of word
    if (currentWord === currentWordSpan.textContent) {
      // If correct
      currentWordSpan.classList.remove("current");
      currentWordSpan.classList.add("correct");
      correctWords++;
    } else {
      // If incorrect
      currentWordSpan.classList.remove("current");
      currentWordSpan.classList.add("incorrect");
    }

    // Move to the next word
    currentWordIndex++;
    currentWord = "";

    // Highlight the next word
    const nextWordSpan = document.getElementById(`word-${currentWordIndex}`);
    if (nextWordSpan) {
      nextWordSpan.classList.add("current");
    } else {
      endTime = new Date();
      calculateResults();
    }
  } else {
    // Handle regular character input
    currentWord += e.data;
    typedCharacters++;
  }
  updateRealTimeStats();
});

function updateRealTimeStats() {
  const elapsedTime = (new Date() - startTime) / 60 / 1000;
  const wordsPerMinute = Math.round(typedCharacters / 5 / elapsedTime) || 0;
  const accuracy =
    Math.round((correctWords / (currentWordIndex + 1)) * 100) || 0;

  realTimeSpeedDisplay.textContent = `${wordsPerMinute} WPM`;
  realTimeAccuracyDisplay.textContent = `${accuracy}%`;
  realTime.textContent = `${Math.round(elapsedTime * 60)} sec`;
}

function calculateResults() {
  const totalTime = (endTime - startTime) / 1000; // Time in seconds
  const totalWordsTyped = currentWordIndex + 1;
  const wpm = Math.round((totalWordsTyped / totalTime) * 60);

  const totalCorrect = document.querySelectorAll(".correct").length;
  const totalIncorrect = document.querySelectorAll(".incorrect").length;

  alert(`Typing Test Results:
    Words Per Minute (WPM): ${wpm}
    Total Correct Words: ${totalCorrect}
    Total Incorrect Words: ${totalIncorrect}`);
}

backBtn.addEventListener("click", () => {
  homeContainer.classList.toggle("hidden");
  typingPage.classList.toggle("hidden");
});

displayLevels();

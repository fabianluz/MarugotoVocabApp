import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Words from "./Words";
import GroupedWordsSelected from "./GroupedWordsSelected";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";


function App() {
  const [selectedType, setType] = useState("View All");

  const [words, setWords] = useState([
    {
      id: 1,
      word: "asa",
      translation: "Morning",
      hiragana: "あさ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 2,
      word: "hiru",
      translation: "Evening",
      hiragana: "ひる",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 3,
      word: "yoru",
      translation: "Night",
      hiragana: "よる",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 4,
      word: "isu",
      translation: "Chair",
      hiragana: "いす",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 5,
      word: "tsukue",
      translation: "Desk",
      hiragana: "つくえ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 6,
      word: "ocha",
      translation: "Tea",
      hiragana: "おちゃ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 7,
      word: "tokee",
      translation: "Clock",
      hiragana: "とけい",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 8,
      word: "umi",
      translation: "Sea",
      hiragana: "うみ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 9,
      word: "yama",
      translation: "Mountain",
      hiragana: "やま",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 10,
      word: "inu",
      translation: "Dog",
      hiragana: "いぬ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 11,
      word: "neko",
      translation: "Cat",
      hiragana: "ねこ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 12,
      word: "tsukue",
      translation: "Desk",
      hiragana: "つくえ",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 13,
      word: "zasshi",
      translation: "Magazine",
      hiragana: "ざっし",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 14,
      word: "tokyo",
      translation: "Tokyo",
      hiragana: "とうきょう",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 15,
      word: "fujisan",
      translation: "Mount Fuji",
      hiragana: "ふじさん",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 16,
      word: "nihongo",
      translation: "Japanese Language",
      hiragana: "にほんご",
      Chapter: 1,
      Lesson: "24/1",
      type: "HiraganaVocab",
    },
    {
      id: 17,
      word: "ohayoo gozaimasu",
      translation: "Good morning",
      hiragana: "おはようございます",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 18,
      word: "konnichiwa",
      translation: "Hello",
      hiragana: "こんにちは",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 19,
      word: "konbanwa",
      translation: "Good evening",
      hiragana: "こんばんは",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 20,
      word: "arigatoo",
      translation: "Thank you",
      hiragana: "ありがとう",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 21,
      word: "sumimasen",
      translation: "Excuse me",
      hiragana: "すみません",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 22,
      word: "sayoonara",
      translation: "Goodbye",
      hiragana: "さようなら",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 23,
      word: "hai",
      translation: "Yes",
      hiragana: "はい",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
    {
      id: 24,
      word: "iie",
      translation: "No",
      hiragana: "いいえ",
      Chapter: 1,
      Lesson: "27/3",
      type: "ConversationVocab",
    },
  ]);

  function handleTypeSelectionChange(event) {
    setType(event.target.value);
  }

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (cardId) => {
    if (flippedCards.includes(cardId)) {
      setFlippedCards((prevFlippedCards) =>
        prevFlippedCards.filter((id) => id !== cardId)
      );
    } else {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, cardId]);
    }
  };

  return (
    <Router>
      <Nav />
      <Header
        selectedType={selectedType}
        wordsCount={words.filter((words) => words.type === selectedType).length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Words
              words={words}
              selectedType={selectedType}
              handleTypeSelectionChange={handleTypeSelectionChange}
              handleCardFlip={handleCardFlip}
              flippedCards={flippedCards}
            />
          }
        ></Route>
        <Route
  path="/GroupedWordsChapterOne"
  element={
    <GroupedWordsSelected 
      words={words} 
      handleCardFlip={handleCardFlip}
      flippedCards={flippedCards}
    />
  }
></Route>


        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

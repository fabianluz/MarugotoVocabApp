import { useState } from "react";
import conversation from "./images/conversation.jpg";
import hiragana from "./images/hiragana.jpg";

const Words = () => {

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

  function handleTypeSelectionChange(event) {
    setType(event.target.value);
  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedType} onChange={handleTypeSelectionChange}>
          <option value="ViewAll">View All</option>
            <option value="HiraganaVocab">Hiragana Vocabulary</option>
            <option value="ConversationVocab">Conversation Vocabulary</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div>
          <div className="card-collection">
            {words.map((word) => (
              <div
              key={word.id}
              className={`card m-2 ${
                flippedCards.includes(word.id) ? "flipped" : ""
              } ${word.type.replace(/\s/g, "") === selectedType ? "card m-2 standout" : "card m-2"}`}
              style={{ cursor: "pointer", display: "flex", flexDirection: "row" }}
              onClick={() => handleCardFlip(word.id)}
            >
            
                <div className="card-image">
                  {word.type === "HiraganaVocab" ? (
                    <img
                      src={hiragana}
                      className="card-img-left"
                      alt="Hiragana"
                    />
                  ) : (
                    <img
                      src={conversation}
                      className="card-img-left"
                      alt="Conversation"
                    />
                  )}
                </div>
                <div className="card-content">
                  <div className={`card-side front-content ${flippedCards.includes(word.id) ? "invisible" : ""}`}>
                    <h6 className="card-title">Word:</h6>
                    <p className="card-text">{word.word}</p>
                    <h6 className="card-text">Hiragana:</h6>
                    <p className="card-text">{word.hiragana}</p>
                  </div>
                  <div className={`card-side back-content ${flippedCards.includes(word.id) ? "" : "invisible"}`}>
                    <h6 className="card-title">Translation:</h6>
                    <p className="card-text">{word.translation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
  


export default Words;
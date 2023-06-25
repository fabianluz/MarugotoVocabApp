import React, { useState } from "react";
import conversation from "./images/conversation.jpg";
import hiragana from "./images/hiragana.jpg";
import "./GroupedWordsSelected.css";

const GroupedWordsSelected = ({ words, handleCardFlip, flippedCards }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const conversationVocabWords = words.filter((word) => word.type === "ConversationVocab");
  const hiraganaVocabWords = words.filter((word) => word.type === "HiraganaVocab");

  const handleToggle = (sectionName) => {
    setExpandedSection((prev) => (prev !== sectionName ? sectionName : null));
  };

  const renderWordCards = (wordList, imageSrc, altText) => (
    <div className="card-grid">
      {wordList.map((word) => (
        <div
          key={word.id}
          className={`card ${flippedCards.includes(word.id) ? "flipped" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => handleCardFlip(word.id)}
        >
          <div className="card-image">
            <img src={imageSrc} className="card-img-top" alt={altText} />
          </div>
          <div className="card-body">
            <div  className={`${flippedCards.includes(word.id) ? "invisible" : ""}`}>
            <h6 className="card-title">Word:</h6>
            <p className="card-text">{word.word}</p>
            <h6 className="card-title">Hiragana:</h6>
            <p className="card-text">{word.hiragana}</p>
            </div>
          </div>
          <div className={`card-side back-content ${flippedCards.includes(word.id) ? "" : "invisible"}`}>
            <h6 className="card-title">Translation:</h6>
            <p className="card-text">{word.translation}</p>
          </div>
        </div>
      ))}
    </div>
  );
  

  return (
    <div>
      <h2>Grouped Words</h2>

      <ul className="toggle-list">
        <li className="toggle-item" onClick={() => handleToggle("ConversationVocab")}>
          <span className="toggle-title">Conversation Vocabulary</span>
        </li>
        {expandedSection === "ConversationVocab" && (
          <li className="word-cards category-title">{renderWordCards(conversationVocabWords, conversation, "Conversation")}</li>
        )}

        <li className="toggle-item" onClick={() => handleToggle("HiraganaVocab")}>
          <span className="toggle-title">Hiragana Vocabulary</span>
        </li>
        {expandedSection === "HiraganaVocab" && (
          <li className="word-cards">{renderWordCards(hiraganaVocabWords, hiragana, "Hiragana")}</li>
        )}
      </ul>
    </div>
  );
};

export default GroupedWordsSelected;

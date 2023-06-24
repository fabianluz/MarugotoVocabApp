import { useState } from "react";
import conversation from "./images/conversation.jpg";
import hiragana from "./images/hiragana.jpg";

const Words = ({words, selectedType, handleTypeSelectionChange, handleCardFlip, flippedCards}) => {


  




 

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedType}
            onChange={handleTypeSelectionChange}
          >
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
                } ${
                  word.type.replace(/\s/g, "") === selectedType
                    ? "card m-2 standout"
                    : "card m-2"
                }`}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                }}
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
                  <div
                    className={`card-side front-content ${
                      flippedCards.includes(word.id) ? "invisible" : ""
                    }`}
                  >
                    <h6 className="card-title">Word:</h6>
                    <p className="card-text">{word.word}</p>
                    <h6 className="card-title">Hiragana:</h6>
                    <p className="card-text">{word.hiragana}</p>
                  </div>
                  <div
                    className={`card-side back-content ${
                      flippedCards.includes(word.id) ? "" : "invisible"
                    }`}
                  >
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

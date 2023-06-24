const Header = ({selectedType, wordsCount}) => {

    const getReadableTypeName = (type) => {
        switch(type) {
            case "HiraganaVocab": return "Hiragana Vocabulary";
            case "ConversationVocab": return "Conversation Vocabulary";
            default: return type;
        }
    }

    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Marugoto Vocabulary</h1>
                    <h3 className={`${(selectedType !== "HiraganaVocab" && selectedType !== "ConversationVocab")  ? "invisible" : ""}`}>
                        Cards to learn in {getReadableTypeName(selectedType)}, {wordsCount}
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Header

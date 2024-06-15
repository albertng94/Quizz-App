import questions from "../questions.js";
import { QuizStageContext } from "../store/quizStage-context.jsx";
import { useContext, useState } from "react";

export default function Question() {

    const [questionNumber, setQuestionNumber] = useState(1);
    const { stageChange } = useContext(QuizStageContext);

    function handleNextQuestion() {
        setQuestionNumber((prevQuestion) => {
            console.log("triggered");
            return ++prevQuestion;
        });
    }

    let onClickValue = handleNextQuestion;

    if (questionNumber === 7) {
        onClickValue = () => stageChange("questionsStageEnding");
    }

    console.log(questionNumber);

    return (
        <>
           <p>Progress Bar will go here</p>
           <h2>Question goes here</h2>
           <ul id="answers">
            <li className="answer">option 1</li>
            <li className="answer">option 2</li>
            <li className="answer">option 3</li>
            <li className="answer">option 4</li>
           </ul> 
           <button onClick={onClickValue}>NEXT QUESTION (TEST)</button>
        </>
    );
}
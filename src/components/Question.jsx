import questions from "../questions.js";
import { QuizStageContext } from "../store/quizStage-context.jsx";
import { useContext, useState } from "react";
import Option from "./Option.jsx";

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
           <h2>{questions[questionNumber].text}</h2>
           <ul id="answers">
            {questions[questionNumber].answers.map((answer, answerIndex) => (
                <Option key={answerIndex}>{answer}</Option>
            ))}
           </ul> 
           <button onClick={onClickValue}>NEXT QUESTION (TEST)</button>
        </>
    );
}
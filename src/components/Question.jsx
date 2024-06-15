import questions from "../questions.js";
import { QuizStageContext } from "../store/quizStage-context.jsx";
import { useContext, useState } from "react";
import Option from "./Option.jsx";

export default function Question() {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [solutionTracking, setSolutionTracking] = useState({
        selectedSolution: "",
        selectionStyling: ""
    });
    const { stageChange } = useContext(QuizStageContext);

    function handleNextQuestion() {
        setQuestionNumber((prevQuestion) => {
            console.log("triggered");
            return ++prevQuestion;
        });
        setSolutionTracking((prevState) => {
            let updatedState = {
                ...prevState,
                selectionStyling: "",
                selectedSolution: ""
            }
            return updatedState;
        });
    }

    let onClickValue = handleNextQuestion;

    if (questionNumber === 7) {
        onClickValue = () => stageChange("questionsStageEnding");
    }

    function handleSelectionStyling(event) {
        if (solutionTracking.selectionStyling === "") {
            setSolutionTracking((prevState) => {
                let updatedState = {
                    ...prevState,
                    selectionStyling: "selected",
                    selectedSolution: event.target.id
                }
                return updatedState;
            });
        }
    }

    return (
        <>
           <p>Progress Bar will go here</p>
           <h2>{questions[questionNumber].text}</h2>
           <ul id="answers">
            {questions[questionNumber].answers.map((answer, answerIndex) => (
                <Option className={(answerIndex == solutionTracking.selectedSolution) ? solutionTracking.selectionStyling : ""} onClick={handleSelectionStyling} id={answerIndex} key={answerIndex}>{answer}</Option>
            ))}
           </ul> 
           <button onClick={onClickValue}>NEXT QUESTION (TEST)</button>
        </>
    );
}
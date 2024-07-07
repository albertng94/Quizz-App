import questions from "../questions.js";
import { QuizStageContext } from "../store/quizStage-context.jsx";
import { useContext, useState, useCallback } from "react";
import Option from "./Option.jsx";
import ProgressBar from "./ProgressBar.jsx";

let shuffledAnswers;
let selectedAnswers = [];
let TIMER = 10000
let compReset = 0;

export default function Question() {

    const { stageChange } = useContext(QuizStageContext);

    const [questionNumber, setQuestionNumber] = useState(1);
    const [solutionStyling, setSolutionStyling] = useState("");

    if (questionNumber > 7) {
        stageChange("questionsStageEnding", selectedAnswers);
    }

    if (questionNumber >= 1 && questionNumber < 8) {
        ++compReset;
    }
    
    if (solutionStyling === "") {
        shuffledAnswers = [...questions[questionNumber-1].answers].sort(() => Math.random() - 0.5);
    }

    
    const handleNextQuestion = useCallback(function handleNextQuestion(skipped) {
        if (questionNumber <= 7 && skipped) {
            selectedAnswers.push(skipped);
            setQuestionNumber((prevQuestion) => {
                return ++prevQuestion;
            });
        } else {
            setQuestionNumber((prevQuestion) => {
                TIMER = 10000;
                return ++prevQuestion;
            });
        }
    }, [solutionStyling, questionNumber]);


    const handleSkipAnswer = useCallback(() => handleNextQuestion("skipped"), [handleNextQuestion]);


    function handleSelectionStyling(selectedAnswer) {
        TIMER = 3000;
        selectedAnswers.push(selectedAnswer);
        setSolutionStyling("selected");

        setTimeout(() => {
            if ((selectedAnswer) === questions[questionNumber-1].answers[0]) {
                TIMER = 5000;
                setSolutionStyling("correct");
            } else {
                TIMER = 5000;
                setSolutionStyling("wrong");
            }
            

            setTimeout(() => {
                setSolutionStyling("");
                handleNextQuestion();
            }, 5000);
        }, 3000);
    }

    return (
        <>
           <ProgressBar key={compReset} time={TIMER} onTimeOut={handleSkipAnswer}/>
           <h2>{questions[questionNumber-1].text}</h2>
           <ul id="answers">
            {shuffledAnswers.map((answer) => (
                <Option 
                    className={(answer === selectedAnswers[selectedAnswers.length-1]) ? solutionStyling : ""} 
                    onClick={() => handleSelectionStyling(answer)} 
                    key={answer}
                    disable={solutionStyling !== "" ? true : null}>
                        {answer}
                </Option>
            ))}
           </ul> 
        </>
    );
}
import quizCompletedImg from "../assets/quiz-complete.png"
import questions from "../questions";
import { useContext } from "react";
import { QuizStageContext } from "../store/quizStage-context";

function createStats(selectedAnswers) {
      
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let skippedAnswers = 0;

    selectedAnswers.map((answer, answerIndex) => {
        if (answer === "skipped") {
            ++skippedAnswers;
        } else if (answer === questions[answerIndex].answers[0]) {
            ++correctAnswers;
        } else {
            ++wrongAnswers;
        }
    });

    return {
        correctRatio: `${Math.round((correctAnswers / 7) * 100)}%`, 
        wrongRatio: `${Math.round((wrongAnswers / 7) * 100)}%`,
        skippedRatio: `${Math.round((skippedAnswers / 7) * 100)}%`
    }
}; 

function createResults(selectedAnswers) {
    const results = selectedAnswers.map((answer, answerIndex) => {

        let answerStatus;

        if (answer === "skipped") {
            answerStatus = answer;
        } else if (answer === questions[answerIndex].answers[0]) {
            answerStatus = "correct";
        } else {
            answerStatus = "wrong";
        }

        return {
            questionIndex: answerIndex+1,
            question: questions[answerIndex].text,
            answer: answer,
            answerClassName: `user-answer ${answerStatus}` 
        }
    });

    return results;
}

export default function Summary() {

    const { selectedAnswers } = useContext(QuizStageContext);

    const stats = createStats(selectedAnswers);

    const results = createResults(selectedAnswers);

    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="A champions cup drawing." />
            <h2>QUIZ COMPLETED!</h2>
            <div id="summary-stats">
                <div>
                    <p className="number">{stats.skippedRatio}</p>
                    <p className="text">SKIPPED</p>
                </div>
                <div>
                    <p className="number">{stats.correctRatio}</p>
                    <p className="text">ANSWERED CORRECTLY</p>
                </div>
                <div>
                    <p className="number">{stats.wrongRatio}</p>
                    <p className="text">ANSWERED INCORRECTLY</p>
                </div>
            </div>
            <ol>
                {results.map((questionResult) => (
                    <li key={questionResult.questionIndex}>
                        <h3>{questionResult.questionIndex}</h3>
                        <p className="question">{questionResult.question}</p>
                        <p className={questionResult.answerClassName}>{questionResult.answer}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
import quizCompletedImg from "../assets/quiz-complete.png"
import questions from "../questions";
import { useContext } from "react";
import { QuizStageContext } from "../store/quizStage-context";

export default function Summary() {

    const { selectedAnswers } = useContext(QuizStageContext);

    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="A champions cup drawing." />
            <h2>QUIZ COMPLETED!</h2>
            <div id="summary-stats">
                <div>
                    <p className="number">50%</p>
                    <p className="text">SKIPPED</p>
                </div>
                <div>
                    <p className="number">50%</p>
                    <p className="text">SKIPPED</p>
                </div>
                <div>
                    <p className="number">50%</p>
                    <p className="text">SKIPPED</p>
                </div>
            </div>
            <ol>
                <li>
                    <h3>1</h3>
                    <p className="question">egfwegyugfyuwe</p>
                    <p className="user-answer correct">yuuuuuuup</p>
                </li>
                <li></li>
                <li></li>
            </ol>
        </div>
    );
}
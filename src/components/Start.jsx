import { QuizStageContext } from "../store/quizStage-context";
import { useContext } from "react";

export default function Start() {

    let { stageChange } = useContext(QuizStageContext);

    return (
        <button onClick={() => stageChange("startStageEnding")} id="startButton">Start Quiz!</button>
    );
}
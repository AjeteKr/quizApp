import { useState } from "react"
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
    const [ userAnswer, setUserAnswer ] = useState([]);
    const activeQuestionIndex = userAnswer.length;
     const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg}/>
            <h2>Quiz is complete!</h2>
        </div>
    }
    
    const shuffleAnswer = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleAnswer.sort(() => Math.random() - 0.5);
 

    return (
        <div id="quiz">
            <div id="question"> 
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffleAnswer.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
    const form = useRef();
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    const sendEmail = (e) => {
        e.preventDefault();

        const answersList = userAnswers.map((answer, index) => {
            return `<li>${QUESTIONS[index].text}: ${answer ?? 'Skipped'}</li>`;
        }).join('');

        const templateParams = {
            skipped: skippedAnswersShare,
            correct: correctAnswersShare,
            wrong: wrongAnswersShare,
            answers: answersList, // This will populate the {{answers}} placeholder
        };

        emailjs.send('service_x01sgvx', 'template_fojaq3f', templateParams, 'jC5bQ3Z0snuT2lOae')
            .then(() => {
                alert('Results sent successfully!');
            }, (error) => {
                alert('Failed to send results: ' + error.text);
            });
    };

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Quiz Completed" />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';
                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
            <div className="button-container">
                <button onClick={sendEmail} className="styled-button">
                    Tell Ajete for results
                </button>
            </div>
        </div>
    );
}

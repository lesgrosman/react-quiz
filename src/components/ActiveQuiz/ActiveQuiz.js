import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from '../AnswersList/AnswersList'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.questionNumber + 1}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.questionNumber + 1} of {props.quizLength}</small>
     
            </p>
            <AnswersList 
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}/>
        </div>
    )
}  

export default ActiveQuiz
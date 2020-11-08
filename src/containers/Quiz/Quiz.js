import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error}
        quiz: [
            {   
                question: 'Who is Rafa?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Novak Djokovich', id: 1},
                    {text: 'Roger Federer', id: 2},
                    {text: 'Rafael Nadal', id: 3},
                    {text: 'Andy Murray', id: 4},
                ],
                id: 1
            },
            {   
                question: 'How many Grand Slams has Federer won?',
                rightAnswerId: 2,
                answers: [
                    {text: '17', id: 1},
                    {text: '20', id: 2},
                    {text: '21', id: 3},
                    {text: '19', id: 4},
                ],
                id: 2
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState((prevState) => {
                        return {
                            activeQuestion: prevState.activeQuestion + 1,
                            answerState: null
                        }
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'fail'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                    question={this.state.quiz[this.state.activeQuestion].question}
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    questionNumber={this.state.activeQuestion}
                    state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz
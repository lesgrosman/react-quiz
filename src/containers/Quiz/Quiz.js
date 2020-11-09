import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        results: {}, // {[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error}
        quiz: [
            {   
                question: 'Who is Rafa?',
                rightAnswerId: 1,
                answers: [
                    {text: 'Rafael Nadal', id: 1},
                    {text: 'Roger Federer', id: 2},
                    {text: 'Novak Djokovich', id: 3},
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState((prevState) => {
                        return {
                            activeQuestion: prevState.activeQuestion + 1,
                            answerState: null // disable green color inthe next question
                        }
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results // new object with results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }


    render() {
        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>

                    { this.state.isFinished 
                    ? <FinishedQuiz
                        results={this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.retryHandler}
                        />
                    : <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        questionNumber={this.state.activeQuestion}
                        state={this.state.answerState}
                        />
                    }              
                </div>
            </div>
        )
    }
}

export default Quiz
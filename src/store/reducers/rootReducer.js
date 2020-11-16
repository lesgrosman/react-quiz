import quizReducer from '../reducers/quiz'
import {combineReducers} from 'redux'

export default combineReducers({
    quiz: quizReducer
})
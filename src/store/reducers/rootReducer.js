import quizReducer from '../reducers/quiz'
import {combineReducers} from 'redux'
import createReducer from '../reducers/create'

export default combineReducers({
    quiz: quizReducer,
    create: createReducer
})
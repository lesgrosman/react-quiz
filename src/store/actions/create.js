import {
    CREATE_QUIZ_ACTION,
    RESET_QUIZ_CREATION
} from '../../store/actions/actionTypes'

import axios from '../../axios/axios-quiz'

export function createQuizQuestionItem(item) {
    return {
        type: CREATE_QUIZ_ACTION,
        item
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}
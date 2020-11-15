import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-69c59.firebaseio.com/'
})
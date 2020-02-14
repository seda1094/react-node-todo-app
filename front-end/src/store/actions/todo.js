import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from "./actionTypes";
import axios from '../../axios/axios-todo'

export function fetchTodos() {
    return async dispatch => {
        dispatch(fetchTodosStart())
        try {
            const response = await axios.get('/tasks')
            const todos = []
            console.log(response);
            response.data.map((data)=>todos.push(data))
            console.log(todos);
            dispatch(fetchTodosSuccess(todos))
        } catch (e) {
            console.log("errorrrrrrrrr");
            dispatch(fetchTodosErrors(e))
        }
    }
}

export function fetchTodosStart() {
    return {
        type: FETCH_TODOS_START
    }
}

export function fetchTodosSuccess(todos) {    
    return {
        type: FETCH_TODOS_SUCCESS,
        todos
    }
}

export function fetchTodosErrors(e) {
    return {
        type: FETCH_TODOS_ERROR,
        error: e
    }
}
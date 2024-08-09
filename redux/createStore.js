import { createStore } from 'redux';

function todoReducer(state, action) {
    if (action.type == 'add_todo') {
        const todoText = action.payload.todoText;
        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length == 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    } else if (action.type == 'delete_todo') {
        const todoId = action.payload.todoId;
        return state.filter((t) => t.id != todoId);
    } else if (action.type == 'update_todo') {
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map(t => {
            if (t.id == todo.id) {
                t.text = todoText
            }
            return t
        })
    }
    return state
}

const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, []);
dispatch({ type: 'add_todo', payload: { todoText: 'todo 1' } });
dispatch({ type: 'add_todo', payload: { todoText: 'todo 2' } });
dispatch({ type: 'add_todo', payload: { todoText: 'todo 3' } });

dispatch({ type: 'delete_todo', payload: { todoId: 2 } });
console.log(getState());
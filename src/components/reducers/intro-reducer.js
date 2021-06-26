
// Estado inicial
const initState = [{
    id: 1,
    todo: 'Terminar sección 10 de React.',
    done: false
}];

const toDoReducer = (state = initState, action) => {

    if (action?.type === 'add') {
        return [
            ...state, action.payload
        ];
    }

    return state;
};


let todos = toDoReducer();

const newTodo = {
    id: 2,
    todo: 'Terminar el API en Golang.',
    done: false
};

// Acciones
const addAction = {
    type: 'add',
    payload: newTodo
};

todos = toDoReducer(todos, addAction);



console.log(todos);
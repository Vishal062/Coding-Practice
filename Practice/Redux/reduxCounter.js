const { createStore } = require('redux');

const initialState = {
    age:24
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age += 1;
    }

    if(action.type === 'REDUCE'){
        newState.age -= 1;
    }
    return newState;
    //Its almost like setState in new React
    
}
const store = createStore(myReducer);    //Store created 2 Pass created reducer in the store
//Store has two things 1.Action, 2.Reducer

store.subscribe(() => {
    console.log("WhenStateChanged",store.getState());
});
//Whenever there is a change in state its automatically run;

//Now we need to change age so we take action based on add or subtract>>>

store.dispatch({type:'ADD'}); 
store.dispatch({type:'REDUCE'});
store.dispatch({type:'REDUCE'});
store.dispatch({type:'ADD'});  

//console.log(store.getState());
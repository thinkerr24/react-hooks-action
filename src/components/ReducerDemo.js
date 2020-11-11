import React, { useReducer } from 'react';

export default function ReducerDemo(props) {
    const initialState = { count: 0, name: 'zhangsan' };

    function reducer(state, action) {
        const {type, payLoad = 1} = action;
        switch (type) {
            case 'increment':
                return {...state, count: state.count + payLoad };
            case 'decrement':
                return {...state, count: state.count - payLoad };
            case 'rename':
                return {...state, name: payLoad};
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
     <div> reducer count:{state.count} and name: {state.name} <br/>
        <button onClick={() => dispatch({type: 'increment', payLoad: 2})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button> <br />
        <button onClick={() => dispatch({type: 'rename', payLoad: 'lisi'})}>rename</button>
     </div>
    );
}

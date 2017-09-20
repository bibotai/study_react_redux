import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
//此处混用了component和container 给addTodo分配action:dispatch(addTodo(input.value));
let AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                };
                dispatch(addTodo(input.value));
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
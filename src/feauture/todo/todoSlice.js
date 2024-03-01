import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos:[{id:1 , text:"Hellow World"}]

}

export const todoSlice=createSlice({

    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo) =>
            todo.id !== action.payload)
         }
        //  , //update Assingmnet
        // updateTodo:(state,action)=>{
        //     const id = action.payload.id
        //     state.todos = state.todos.filter((todo) =>
        //     if(todo.id == id){
        //         text:action.payload
        //     }
        //     )
        // }
        
    }

})
// 2 export LAZIM

//  ya components ma kaam aye gy (individual reducers)
export const{addTodo,removeTodo} = todoSlice.actions  

// store ko bhi reference chahiye reducers to updateor retrive value
export default todoSlice.reducer    
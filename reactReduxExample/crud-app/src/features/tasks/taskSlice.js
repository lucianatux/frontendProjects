import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        title: "task 1",
        description: "eat task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "task 2",
        description: "pray task 2 description",
        completed: false
    },
    {
        id: "3",
        title: "task 3",
        description: "love task 3 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state, action);
            state.push(action.payload);
           //[...state, action.payload];
        },
        deleteTask: (state, action) => {
            console.log(action);
        }
    }
})

export const {addTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer
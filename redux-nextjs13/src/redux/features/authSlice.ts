import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitialState = {
    value: AuthState
}

type AuthState = {
    isAuth: Boolean,
    username: string,
    uid: string,
    isModerator: Boolean
}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false
    } as AuthState
} as InitialState

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginOut: (state) => {
            state.value = {
                isAuth: false,
                isModerator: false,
                username: "",
                uid: ""
            }
        },
        login: (state, action) => {
            state.value = {
                isAuth: true,
                username: action.payload,
                uid: '121212121212',
                isModerator: false
            }
        },
        toogleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator
        }
    }

})

export const { loginOut, login, toogleModerator } = auth.actions

export default auth.reducer

import { FORM_DISPLAY, SET_ALL_CHATS,  SET_LOGGED_USER,  SET_SELECTED_USER,  SET_USERS, USERS_CHAT, SET_USERS_DETAILS, SET_DARK_MODE } from "./actionTypes"

export const selectForm = (form : string) =>{
    return {
        type : FORM_DISPLAY,
        payload : form
    }
}

export const setChatsToDisplay = (chats : string[]) =>{
    return {
        type : USERS_CHAT,
        payload : chats
    }
}

export const setAllUsers = (users : any) =>{
    return {
        type : SET_USERS,
        payload : users
    }
}

export const setAllUsersDetails = (users : any) =>{
    console.log('User Action get all users ', users);

    return {
        type : SET_USERS_DETAILS,
        payload : users
    }
}


export const setAllChats = (users : any) =>{
    return {
        type : SET_ALL_CHATS,
        payload : users
    }
}

export const setLoggedUser = (user : any) =>{
    return {
        type : SET_LOGGED_USER,
        payload : user
    }
}

export const setSelectedUser = (user : any) => {
    return  {
        type : SET_SELECTED_USER,
        payload : user
    }
}

export const setDarkMode = (mode : any) => {
    return  {
        type : SET_DARK_MODE,
        payload : mode
    }
}

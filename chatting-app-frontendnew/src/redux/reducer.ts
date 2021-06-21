import {
  FORM_DISPLAY,
  SET_ALL_CHATS,
  SET_LOGGED_USER,
  SET_SELECTED_USER,
  SET_USERS,
  USERS_CHAT,
  SET_USERS_DETAILS,
  SET_DARK_MODE
} from './actionTypes';

const formInitialState = {
  formDisplay: 'LOGIN_FORM',
};

const usersChatInitialState = {
  chats: [],
  allChats: [],
};

const usersInitialState = {
  allUsers: [],
  loggedIn: {},
  selectedUser: {},
};

const DarkInitialState = {
  mode: 0,
};

export const formReducer = (state = formInitialState, action: any) => {
  switch (action.type) {
    case FORM_DISPLAY:
      return { ...state, formDisplay: action.payload };
    default:
      return state;
  }
};

export const usersChatsReducer = (state = usersChatInitialState, action: any) => {
  switch (action.type) {
    case USERS_CHAT:
      return { ...state, chats: action.payload };
    case SET_ALL_CHATS:
      return { ...state, allChats: action.payload };
    default:
      return state;
  }
};

export const usersReducer = (state = usersInitialState, action: any) => {
  // console.log(action)
  switch (action.type) {
    case SET_USERS:
      return { ...state, allUsers: action.payload };
    case SET_USERS_DETAILS:
      return { ...state, allUsersDetails: action.payload };
    case SET_LOGGED_USER:
      return { ...state, loggedIn: { ...action.payload } };
    case SET_SELECTED_USER:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};

export const DarkReducer = (state = DarkInitialState, action: any) => {
  // console.log(action)
  switch (action.type) {
    case SET_DARK_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

import { CHANGE_INPUT_USER_NAME } from "../constants/actionTypes";

const initialState = {
  draftUserName: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INPUT_USER_NAME:
      return Object.assign({}, state, {
        draftUserName: action.payload.input
      })
    default:
      return state
  }
}
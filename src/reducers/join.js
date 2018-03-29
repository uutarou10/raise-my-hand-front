import { CHANGE_INPUT_USER_NAME, REQUEST_JOIN } from "../constants/actionTypes";

const initialState = {
  draftUserName: "",
  isRequesting: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INPUT_USER_NAME:
      return Object.assign({}, state, {
        draftUserName: action.payload.input
      })
    
    case REQUEST_JOIN:
      return Object.assign({}, state, {
        isRequesting: true
      })
    default:
      return state
  }
}
import { COMPLETED_JOIN } from "../constants/actionTypes";

const initialState = {
  isJoined: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPLETED_JOIN:
      return Object.assign({}, state, {
        isJoined: true,
        user: action.payload.user
      })
    
    default:
      return state
  }
}
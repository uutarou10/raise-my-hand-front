import { REQUEST_JOIN, REQUEST_JOIN_ADMIN, COMPLETE_JOIN, COMPLETE_JOIN_ADMIN, UPDATE_USER_COUNT, INPUT_USERNAME, INPUT_PASSWORD } from "../actions";

const initialState = {
  user: {},
  count: 0,
  isJoined: false,
  draftUsername: '',
  draftPassword: '',
  isRequestingJoin: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_JOIN:
    case REQUEST_JOIN_ADMIN:
      return {
        ...state,
        isRequestingJoin: true
      }
    
    case COMPLETE_JOIN:
    case COMPLETE_JOIN_ADMIN:
      return {
        ...state,
        isRequestingJoin: false,
        user: action.payload.user
      }
    
    case UPDATE_USER_COUNT:
      return {
        ...state,
        count: action.payload.count
      }
    
      case INPUT_USERNAME:
        return {
          ...state,
          draftUsername: action.payload.username
        }

      case INPUT_PASSWORD:
        return {
          ...state,
          draftPassword: action.payload.password
        }

    default:
      return status
  }
}
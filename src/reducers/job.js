import { TASK_CONFIRMATION, QUESTION, TOGGLE_STATUS, CANCEL_REQUEST, UPDATE_JOB_QUEUE, COMPLETE_CANCEL, UPDATE_STATUS } from "../actions";

const initialState = {
  queue: [],
  isRequesting: false,
  isRequestingCancel: false,
  isOpen: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case TASK_CONFIRMATION:
    case QUESTION:
      return {
        ...state,
        isRequesting: true
      }
    
    case TOGGLE_STATUS:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    
    case CANCEL_REQUEST:
      return {
        ...state,
        isRequestingCancel: true
      }
    
    case COMPLETE_CANCEL:
      return {
        ...state,
        isRequestingCancel: false
      }

    case UPDATE_JOB_QUEUE:
      return {
        ...state,
        queue: action.payload.queue
      }
    
    case UPDATE_STATUS:
      return {
        ...state,
        isOpen: action.payload.status
      }

    default:
      return state
  }
}
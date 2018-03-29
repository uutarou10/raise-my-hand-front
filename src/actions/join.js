import { CHANGE_INPUT_USER_NAME } from "../constants/actionTypes";
import { join } from "../socket";

export const changeInputUserName = (input) => ({
  type: CHANGE_INPUT_USER_NAME,
  payload: {
    input
  }
})

export const requestingJoin = (isRequesting) => ({
  
})

export const requestJoin = (name) => {
  return dispatch => {
    join(name)
    dispatch(requestingJoin(true))
  }
}
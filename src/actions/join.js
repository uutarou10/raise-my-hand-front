import { push } from 'react-router-redux'
import { CHANGE_INPUT_USER_NAME, REQUEST_JOIN, COMPLETED_JOIN } from "../constants/actionTypes";
import { join } from "../socket";

export const changeInputUserName = (input) => ({
  type: CHANGE_INPUT_USER_NAME,
  payload: {
    input
  }
})

export const requestJoin = (name) => {
  return dispatch => {
    join(name)
    dispatch({
      type: REQUEST_JOIN
    })
  }
}

export const completedJoin = (user) => {
  return dispatch => {
    dispatch({
      type: COMPLETED_JOIN,
      payload: {
        user
      }
    })
    dispatch(push('/'))
  }
}
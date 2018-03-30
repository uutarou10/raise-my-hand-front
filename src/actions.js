import { push } from 'react-router-redux'
import {
  join,
  joinAdmin,
  taskConfirmation as emitTaskConfirmation,
  question as emitQuestion,
  toggleStatus as emitToggleStatus,
  cancel as emitCancel,
} from './socket';

/*---------- emit request ----------*/
export const REQUEST_JOIN = 'REQUEST_JOIN' 
export const requestJoin = (username) => {
  return dispatch => {
    if (window.localStorage.getItem('username') === null) {
      window.localStorage.setItem('username', username)
    }
    join(username)
    dispatch({
      type: REQUEST_JOIN,
    })
  }
}

export const REQUEST_JOIN_ADMIN = 'REQUEST_JOIN_ADMIN'
export const requestJoinAdmin = (password) => {
  return dispatch => {
    if (window.localStorage.getItem('admin_password') === null) {
      window.localStorage.setItem('admin_password', password)
    }
    joinAdmin(password)
    dispatch({
      type: REQUEST_JOIN_ADMIN
    })
  }
}

export const TASK_CONFIRMATION = 'TASK_CONFIRMATION'
export const taskConfirmation = (user) => {
  return dispatch => {
    emitTaskConfirmation()
    dispatch({
      type: TASK_CONFIRMATION
    })
  }
}

export const QUESTION = 'QUESTION'
export const question = (user) => {
  return dispatch => {
    emitQuestion()
    dispatch({
      type: QUESTION
    })
  }
}

export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const toggleStauts = () => {
  return dispatch => {
    emitToggleStatus()
    dispatch({
      type: TOGGLE_STATUS
    })
  }
}

export const CANCEL_REQUEST = 'CANCEL_REQUEST'
export const cancel = () => {
  return dispatch => {
    emitCancel()
    dispatch({
      type: CANCEL_REQUEST
    })
  }
}

export const EXIT = 'EXIT'
export const exit = () => {
  return dispatch => {
    window.localStorage.removeItem('username')
    dispatch({
      type: EXIT
    })
    window.location.href = '/join'
  }
}

/*---------- event received ----------*/
export const COMPLETE_JOIN = 'COMPLETE_JOIN'
export const completeJoin = (user) => {
  return dispatch => {
    dispatch({
      type: COMPLETE_JOIN,
      payload: {
        user
      }
    })

    dispatch(push('/'))
  }
}

export const COMPLETE_JOIN_ADMIN = 'COMPLETE_JOIN_ADMIN'
export const completeJoinAdmin = (user) => {
  return dispatch => {
    dispatch({
      type: COMPLETE_JOIN_ADMIN,
      payload: {
        user
      }
    })

    dispatch(push('/admin'))
  }
}

export const COMPLETE_CANCEL = 'COMPLETE_CANCEL'
export const completedCancel = () => ({
  type: COMPLETE_CANCEL
})

export const UPDATE_JOB_QUEUE = 'UPDATE_JOB_QUEUE'
export const updateJobQueue = (queue) => ({
  type: UPDATE_JOB_QUEUE,
  payload: {
    queue
  }
})

export const UPDATE_USER_COUNT = 'UPDATE_USER_COUNT'
export const updateUserCount = (count) => ({
  type: UPDATE_USER_COUNT,
  payload: {
    count
  }
})

export const UPDATE_STATUS = 'UPDATE_STATUS'
export const updateStatus = (status) => ({
  type: UPDATE_STATUS,
  payload: {
    status
  }
})

/*---------- normal actions ----------*/
export const INPUT_USERNAME = 'INPUT_USERNAME'
export const inputUsername = username => ({
  type: INPUT_USERNAME,
  payload: {
    username
  }
})

export const INPUT_PASSWORD = 'INPUT_PASSWORD'
export const inputPassword = password => ({
  type: INPUT_PASSWORD,
  payload: {
    password
  }
})
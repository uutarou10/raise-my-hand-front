import { JOIN, JOIN_ADMIN, COMPLETED_JOIN, FAILD_JOIN, TASK_CONFIRMATION, QUESTION, CANCEL, UPDATE_JOB_QUEUE, DISCONNECT } from "../constants/actionTypes";

export const join = (name) => ({
  type: JOIN,
  payload: {
    name
  }
})

export const joinAdmin = (password) => ({
  type: JOIN_ADMIN,
  payload: {
    password
  }
})

export const completedJoin = (user) => ({
  type: COMPLETED_JOIN,
  payload: {
    user
  }
})

export const faildJoin = (message) => ({
  type: FAILD_JOIN,
  payload: {
    message
  }
})

export const taskConfirmation = () => ({
  type: TASK_CONFIRMATION,
})

export const question = () => ({
  type: QUESTION
})

export const cancel = (uuid) => ({
  type: CANCEL,
  payload: {
    uuid
  }
})

export const updateJobQueue = (jobQueue) => ({
  type: UPDATE_JOB_QUEUE,
  payload: {
    jobQueue
  }
})

export const disconnect = () => ({
  type: DISCONNECT
})
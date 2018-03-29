import io from 'socket.io-client'
import store from './store'
import { completeJoin, completeJoinAdmin, completedCancel, updateJobQueue, updateUserCount, updateStatus } from './actions';

const socket = io('http://localhost:3001')

export const join = (name) => {
  socket.emit('join', name)
}

export const debug = (payload) => {
  socket.emit('debug', payload)
}

export const joinAdmin = (password) => {
  socket.emit('joinAdmin', password)
}

export const taskConfirmation = () => {
  socket.emit('taskConfirmation')
}

export const question = () => {
  socket.emit('question')
}

export const toggleStatus = () => {
  socket.emit('toggleStatus')
}

export const cancel = () => {
  socket.emit('cancel')
}

socket.on('debug', (payload) => {
  console.log(payload)
})

socket.on('currentJobQueue', (queue) => {
  dispatch(updateJobQueue(queue))
})

socket.on('currentStatus', (status) => {
  dispatch(updateStatus(status))
})

socket.on('completedJoin', (user) => {
  if (user.isAdmin) {
    dispatch(completeJoinAdmin(user))
  } else {
    dispatch(completeJoin(user))
  }
})

socket.on('updateJobQueue', (queue) => {
  dispatch(updateJobQueue(queue))
})

socket.on('updateUserCount', (count) => {
  dispatch(updateUserCount(count))
})

socket.on('updateStatus', (status) => {
  dispatch(updateStatus(status))
})

socket.on('canceled', () => {
  dispatch(completedCancel())
})

const dispatch = (action) => {
  store.dispatch(action)
}
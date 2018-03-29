import io from 'socket.io-client'

const socket = io('http://localhost:3001')

export const debug = (payload) => {
  socket.emit('debug', payload)
}

export const join = (name) => {
  socket.emit('join', name)
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

export const cancel = (uuid) => {
  socket.emit('cancel', uuid)
}

socket.on('debug', (payload) => {
  console.log('DEBUG', payload)
})

socket.on('currentJobQueue', (jobQueue) => {

})

socket.on('updateJobQueue', (jobQueue) => {

})

socket.on('completedJoin', (user) => {

})

socket.on('faildJoin', (message) => {

})

socket.on('disconnect', () => {

})
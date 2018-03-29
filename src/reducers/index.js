import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import job from './job'
import user from './user'

export default combineReducers({
  route: routerReducer,
  job,
  user
})
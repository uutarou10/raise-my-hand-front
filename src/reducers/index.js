import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import job from './job'
import join from './join'
import user from './user'

export default combineReducers({
  route: routerReducer,
  job,
  join,
  user
})
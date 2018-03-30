import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input, Button } from 'semantic-ui-react'
import { push } from 'react-router-redux'
import { inputPassword, requestJoinAdmin } from '../../../actions'

class Login extends React.Component {
  componentDidMount() {
    if (window.localStorage.getItem('admin_password')) {
      this.props.requestJoinAdmin(window.localStorage.getItem('admin_password'))
    }

    if (this.props.isJoined) {
      this.props.push('/admin')
    }

  }

  render() {
    const {
      draftPassword,
      inputPassword,
      isRequestingJoin,
      requestJoinAdmin
    } = this.props

    return (
      <div>
        <h1>Login admin</h1>
        <Input
          type='password'
          fluid
          icon='key'
          iconPosition='left'
          size='huge'
          placeholder='Input password'
          style={{marginBottom: '14px'}}
          value={draftPassword}
          disabled={isRequestingJoin}
          onChange={(e) => inputPassword(e.target.value)}
        />
        <Button
          fluid
          primary
          disabled={isRequestingJoin || draftPassword.length === 0}
          size='huge'
          loading={isRequestingJoin}
          onClick={() => requestJoinAdmin(draftPassword)}
        >Login</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  draftPassword: state.user.draftPassword,
  isRequestingJoin: state.user.isRequestingJoin,
  isJoined: state.user.isJoined
})

const mapDispatchToProps = dispatch => bindActionCreators({
  inputPassword,
  requestJoinAdmin,
  push
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
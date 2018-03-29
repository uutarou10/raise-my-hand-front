import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  { inputUsername, requestJoin } from '../../../actions'

class Join extends React.Component {
  componentDidMount() {
    if (window.localStorage.getItem('username')) {
      this.props.requestJoin(window.localStorage.getItem('username'))
    }
  }

  render() {
    const {
      draftUsername,
      // isJoined,
      isRequestingJoin,
      inputUsername,
      requestJoin
    } = this.props

    return (
      <div>
        <h1>Join!</h1>
        <Input
          fluid
          icon='user'
          iconPosition='left'
          size='huge'
          placeholder='Input your name!'
          style={{marginBottom: '14px'}}
          value={draftUsername}
          disabled={isRequestingJoin}
          onChange={(e) => inputUsername(e.target.value)}
        />
        <Button
          fluid
          primary
          disabled={isRequestingJoin}
          size='huge'
          loading={isRequestingJoin}
          onClick={() => requestJoin(draftUsername)}
        >Join</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  draftUsername: state.user.draftUsername,
  isJoined: state.user.isJoined,
  isRequestingJoin: state.user.isRequestingJoin
})

const mapDispatchToProps = dispatch => bindActionCreators({
  inputUsername,
  requestJoin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Join)
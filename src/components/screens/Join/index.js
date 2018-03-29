import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInputUserName, requestJoin } from '../../../actions/join';

const Join = () => (
  <div>
    <h1>Join!</h1>
    <Input
      fluid
      icon='user'
      iconPosition='left'
      size='huge'
      placeholder='Input your name!'
      style={{marginBottom: '14px'}}
      value={'username'}
      disabled={false}
      onChange={(e) => console.log(e.target.value)}
    />
    <Button
      fluid
      primary
      disabled={false}
      size='huge'
      loading={false}
      onClick={() => console.log('join request')}
    >Join</Button>
  </div>
)

export default connect(null, null)(Join)
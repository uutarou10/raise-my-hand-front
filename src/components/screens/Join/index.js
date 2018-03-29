import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInputUserName } from '../../../actions/join';

const Join = ({draftUserName, onChangeInput}) => (
  <div>
    <h1>Join!</h1>
    <Input
      fluid
      icon='user'
      iconPosition='left'
      size='huge'
      placeholder='Input your name!'
      style={{marginBottom: '14px'}}
      value={draftUserName}
      onChange={(e) => onChangeInput(e.target.value)}
    />
    <Button
      fluid
      primary
      disabled={draftUserName.length === 0}
      size='huge'
      onClick={joinHandler}
    >Join</Button>
  </div>
)

const joinHandler = () => {
  console.log('join!!')
}

const mapStateToProps = state => ({
  draftUserName: state.join.draftUserName
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeInput: changeInputUserName
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Join)
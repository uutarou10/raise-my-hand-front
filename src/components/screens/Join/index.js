import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInputUserName, requestJoin } from '../../../actions/join';

const Join = ({draftUserName, onChangeInput, requestJoin, isRequesting}) => (
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
      disabled={isRequesting}
      onChange={(e) => onChangeInput(e.target.value)}
    />
    <Button
      fluid
      primary
      disabled={draftUserName.length === 0}
      size='huge'
      loading={isRequesting}
      onClick={() => requestJoin(draftUserName)}
    >Join</Button>
  </div>
)

const mapStateToProps = state => ({
  draftUserName: state.join.draftUserName,
  isRequesting: state.join.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeInput: changeInputUserName,
  requestJoin 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Join)
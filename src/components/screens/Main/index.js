import React from 'react'
import { Button, Icon, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { taskConfirmation, question, cancel } from '../../../actions'
import QueueTable from '../../QueueTable';

const Main = ({
  isOpen,
  isRequestingCancel,
  taskConfirmation,
  question,
  isRequesting,
  cancel,
  queue,
  user
}) => (
  <div>
    <h1>Raise my hand!</h1>
    <Button.Group>
      <Button
        size='huge'
        onClick={taskConfirmation}
        disabled={isRequesting}
      ><Icon name='pencil' />課題チェック</Button>
      <Button
        size='huge'
        onClick={question}
        disabled={isRequesting}
      ><Icon name='question' />質問</Button>
      { isRequesting ? (
        <Button
          color='red'
          size='huge'
          onClick={cancel}
          loading={isRequestingCancel}
        >キャンセル</Button>
      ): (null)}
    </Button.Group>
    <Divider />
    <QueueTable queue={queue} user={user} />
  </div>
)

const mapStateToProps = state => ({
  isOpen: state.job.isOpen,
  isRequesting: state.job.isRequesting,
  isRequestingCancel: state.job.isRequestingCancel,
  queue: state.job.queue,
  user: state.user.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  taskConfirmation,
  question,
  cancel
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
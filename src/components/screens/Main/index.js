import React from 'react'
import { Button, Icon, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { taskConfirmation, question, cancel, exit } from '../../../actions'
import QueueTable from '../../QueueTable';
import Header from '../../Header';

class Main extends React.Component {
  componentWillMount() {
    if (!this.props.user.isJoined) {
      this.props.push('/join')
    } else if (this.props.user.isAdmin) {
      this.props.push('/admin')
    }
  }

  render() {
    const {
      isOpen,
      isRequestingCancel,
      taskConfirmation,
      question,
      isRequesting,
      cancel,
      queue,
      user,
      exit
    } = this.props

    return (
      <div>
        <Header user={user} exit={exit} />
        <Button.Group>
          <Button
            size='huge'
            onClick={taskConfirmation}
            disabled={isRequesting && !isOpen}
          ><Icon name='pencil' />課題チェック</Button>
          <Button
            size='huge'
            onClick={question}
            disabled={isRequesting && !isOpen}
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
  }
}
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
  cancel,
  exit,
  push
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
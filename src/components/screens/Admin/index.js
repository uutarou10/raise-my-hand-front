import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Button, Divider } from 'semantic-ui-react'
import { push } from 'react-router-redux'
import { exit, cancel, toggleStatus } from '../../../actions'
import Header from '../../Header'
import QueueTable from '../../QueueTable'

class Admin extends React.Component {
  componentDidMount() {
    if (!this.props.isJoined) {
      return this.props.push('/login')
    }
  }

  render() {
    const {
      user,
      exit,
      queue,
      isAdmin,
      cancel,
      userCount,
      isOpen,
      toggleStatus
    } = this.props

    return (
      <div>
        <Header user={user} exit={exit} />
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>参加中</Card.Header>
                <Card.Description>{userCount}人</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>待ち人数</Card.Header>
                <Card.Description>{queue.length}人</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>状態</Card.Header>
                <Card.Description>
                  <p>{isOpen ? '受付中' : '受付停止中'}</p>
                  <Button
                    onClick={toggleStatus}
                  >{isOpen ? '受付停止' : '受付開始'}</Button>`
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>

          <Divider />

          <QueueTable queue={queue} isAdmin={isAdmin} user={user} cancel={cancel} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  queue: state.job.queue,
  isAdmin: state.user.user.isAdmin,
  userCount: state.user.count,
  isOpen: state.job.isOpen,
  isJoined: state.job.isJoined
})

const mapDispatchToProps = dispatch => bindActionCreators({
  exit,
  cancel,
  toggleStatus,
  push
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
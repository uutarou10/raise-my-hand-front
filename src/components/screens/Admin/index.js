import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Button, Divider } from 'semantic-ui-react'
import { exit, cancel } from '../../../actions'
import Header from '../../Header'
import QueueTable from '../../QueueTable'

class Admin extends React.Component {
  render() {
    const {
      user,
      exit,
      queue,
      isAdmin,
      cancel
    } = this.props

    return (
      <div>
        <Header user={user} exit={exit} />
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>参加中</Card.Header>
                <Card.Description>25人</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>待ち人数</Card.Header>
                <Card.Description>25人</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>状態</Card.Header>
                <Card.Description>
                  <p>受付中</p>
                  <Button>hoge</Button>`
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
})

const mapDispatchToProps = dispatch => bindActionCreators({
  exit,
  cancel
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
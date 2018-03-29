import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const QueueTable = ({queue, isAdmin, user}) => (
  <div>
    <Table unstackable celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          {isAdmin ? (
            <Table.HeaderCell>Operation</Table.HeaderCell>
          ) : (null)}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {queue.length === 0 ? (
          <Table.Row>
            <Table.Cell colSpan='3'>待ちはありません。</Table.Cell>
          </Table.Row>
        ) : (
          queue.map((job, index) => (
            <Table.Row key={index} positive={isMine(job, user)}>
              <Table.Cell>{job.user.name}</Table.Cell>
              <Table.Cell>{jobStringByJob(job)}</Table.Cell>
              <Table.Cell>{job.timestamp}</Table.Cell>
              {isAdmin ? (
                <Table.Cell>
                  <Button>Done</Button>
                </Table.Cell>
              ) : (null)}
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table>
  </div>
)

const jobStringByJob = (job) => {
  switch(job.type) {
    case 'taskConfirmation':
      return '課題チェック'
    case 'question':
      return '質問'
    default:
      return 'その他'
  }
}

const isMine = (job, user = null) => {
  if (user === null) return false
  return job.user.uuid === user.uuid
}

export default QueueTable
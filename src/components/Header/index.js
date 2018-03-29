import React from 'react'
import { Grid, Icon, Button } from 'semantic-ui-react'

const Header = ({user}) => (
  <Grid columns={2}>
    <Grid.Column>
      <h1>Raise my hand!</h1>
    </Grid.Column>
    <Grid.Column
      textAlign='right'
      verticalAlign='middle'
    >
      <p>
        <Icon name='user' />{user.name}
        <Button
          color='red'
          size='mini'
          style={{marginLeft: '8px'}}
        >Exit</Button>
      </p>
    </Grid.Column>
  </Grid>
)

export default Header
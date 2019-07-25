import React from 'react'
import { List, Container } from 'semantic-ui-react'


const EmailSteve = () => (
    <Container className="emailSteve">
  <List verticalAlign='right' size='large'>
    <List.Item floated='right' icon='users' content='Steve Wolfman' />
    <List.Item floated='right' icon='marker' content='BCS Director, UBC' />
    <List.Item
      floated='right' icon='mail'
      content={<a href='mailto:wolf@cs.ubc.ca'>wolf@cs.ubc.ca</a>}
    />
    <List.Item floated='right' icon='linkify' content={<a href='https://www.cs.ubc.ca/students/undergrad/degree-programs/bcs-program-second-degree'>BCS Program Info</a>} />
  </List>
  </Container>

)

export default EmailSteve;

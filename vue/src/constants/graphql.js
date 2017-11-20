import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`

export const LOGGED_IN_USER = gql`
  query LoggedInUser {
    loggedInUser {
      id
    }
  }
`

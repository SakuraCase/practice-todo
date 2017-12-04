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

export const USER_TODOS = gql`
  query UserTodos($id: ID!) {
    User(id: $id) {
      todos {
        id
        title
        done
      }
    }
  }
`

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String, $done: Boolean) {
    updateTodo(id: $id, title: $title, done: $done) {
      id
      title
      done
    }
  }
`

export const CREATE_TODO = gql`
  mutation createTodo($authorId: ID!, $title: String!) {
    createTodo(authorId: $authorId, title: $title, done: false) {
      id
      title
      done
    }
  }
`

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      done
    }
  }
`

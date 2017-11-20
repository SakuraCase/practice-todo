import {AUTH_TOKEN, DB_URL} from './constants/settings'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false
Vue.use(VueApollo)

let token = localStorage.getItem(AUTH_TOKEN)
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(new HttpLink({
    uri: DB_URL
  })),
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  data: {
    token
  },
  template: '<App/>',
  components: { App }
})

import Layout from './components/layout/Layout'
import Profile from './components/profile/Profile'
import Repositories from './components/repositories/Repositories'
import { ResetCSS } from './global/resetCSS'

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
       <Repositories />
      </Layout>
    </main>
  )
}

export default App

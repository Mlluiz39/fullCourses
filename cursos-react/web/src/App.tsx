import styles from './App.module.scss'
import { MessageList } from './components/MessageList/MessageList'
import { LoginBox } from './components/LoginBox/LoginBox'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

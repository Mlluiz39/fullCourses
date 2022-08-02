import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {
  const styleCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px'
  }
  return (
    <main style={styleCenter}>
      <Header />
      <Form />
      <Footer />
    </main>
  )
}

export default App

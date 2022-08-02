import './App.css'

export default function App() {
  const handleClick = (event) => {
    console.log(event)
  }

  const handleScroll = (event) => {
    console.log(event)
  }

  window.addEventListener('scroll', handleScroll)
 
  return (
    <div style={{height: '200vh'}}>
     <button onClick={(event) => alert(event.target.innerText)}>Alert</button>
     <button onClick={handleClick} style={{ margin: '10px' }}>Clique</button>
    </div>
  )
}





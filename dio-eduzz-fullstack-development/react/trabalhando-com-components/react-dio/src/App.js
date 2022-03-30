import Card from './components/Card/Card'
import Item from './components/Item/Item'

const App = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-3">
        Minha primeira aplicação com React
      </h1>
      <ul>
        <Item
          className="list-group-item list-group-item-action list-group-item-dark"
          texto="item 1"
        />
        <Item
          className="list-group-item list-group-item-action list-group-item-success"
          texto="item 2"
        />
        <Item className="list-group-item list-group-item-action list-group-item-danger">
          item3
        </Item>
      </ul>
      <Card />
    </>
  )
}

export default App

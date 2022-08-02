const Item = props => {
  return (
    <>
      <a href="/" className={props.className}>
        {props.texto}
        {props.children}
      </a>
    </>
  )
}

export default Item

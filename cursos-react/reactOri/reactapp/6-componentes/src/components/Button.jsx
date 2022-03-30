function Button() {
  const handleClick = (event) => {
    event.preventDefault()
    alert('Enviado!')
  }
  return (
    <div>
      <button style={{ color: 'white' }} onClick={handleClick}>
        Enviar
      </button>
    </div>
  )
}

export default Button

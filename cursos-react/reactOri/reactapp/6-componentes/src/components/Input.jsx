function Input() {
  return (
    <div>
      <p>
        <label htmlFor="email" required>Email:</label>
        <input type="email" />
      </p>
      <p>
        <label htmlFor="password">Senha:</label>
        <input type="password" />
      </p>
    </div>
  )
}

export default Input

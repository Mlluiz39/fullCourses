import Button from './Button'
import Input from './Input'

function Form() {
  return (
    <div>
      <Input id="email" label="Email" placeholder="Digite seu email" required />
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Digite sua senha"
      />
      <Button />
    </div>
  )
}

export default Form

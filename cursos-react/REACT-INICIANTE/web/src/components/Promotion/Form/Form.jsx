import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import './Form.css'

const initialValues = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
}

const PromotionForm = () => {
  const [values, setValues] = useState(initialValues)
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
   
    axios.post('http://localhost:5000/promotions', values)
      .then(response => {
        history.push('/')
      
    })
  }

  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input  type="text" name="title" id="title" onChange={handleChange}/>
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input  type="text" name="url" id="url" onChange={handleChange}/>
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input  type="text" name="imageUrl" id="imageUrl" onChange={handleChange}/>
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input  type="number" name="price" id="price" onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default PromotionForm

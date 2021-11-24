import MembroFamilia from "./MembroFamilia"

const Familia = (props) => {
  return (
    <div>
     <MembroFamilia nome="Marcelo Luiz" sobrenome="Pereira"/>
     <MembroFamilia nome="Cilene" sobrenome={ props.sobrenome }/>
     <MembroFamilia nome="Julia"{...props}/>
    </div>
  )
}

export default Familia
import alunos from '../../data/alunos'

const ListaAlunos = () => {

    const alunosLi = alunos.map((aluno) => {
      return (
      <li key={aluno.id}>
        {aluno.id}°Aluno(a): {aluno.nome} nota = {aluno.nota}
      </li>
      )
    })

  return (
    <div>
      <ul>
        {alunosLi}
      </ul>
    </div>
  )
}

export default ListaAlunos
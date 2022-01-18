import express from "express";

const app = express();

app.use(express.json())  // aqui explicitamos que vamos usar json

const projects = []

app.get("/projects", (request, response) => {
  //const query = request.query
  const { title, owner } = request.query  // aqui fizemos um destructuring assignment 
  if (title) {
    console.log(title)
  } else {
    console.log(owner)
  }
  return response.json([
    "Projeto 1",
    "Projeto 2",
    "Projeto 3"
  ]);
});

app.post("/projects", (request, response) => {
  const body = request.body

  console.log(body)

  return response.json([
  "Projeto 1",
  "Projeto 2",
  "Projeto 3",
  "Projeto 4"
  ])
})

app.put("/projects/:id/owner/:owner_id", (request, response) => {
  const params = request.params
  const { id } = request.params

  console.log(params)
  console.log(id)

  return response.json([
  "Projeto 5",
  "Projeto 2",
  "Projeto 3",
  "Projeto 4"
  ])
})

app.delete("/projects/:proj", (request, response) => {
  const { proj } = request.params

  console.log(proj)

  return response.json([
  "Projeto 5",
  "Projeto 2",
  "Projeto 4"
  ])
})

app.listen(4200, () => {
  console.log("Servidor Rodando na porta 4200!")
});

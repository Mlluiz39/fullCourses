const submitButton = document.querySelector("#app form button");
const zipCodeField = document.querySelector("#app form input");
const content = document.querySelector("#app main");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let zipCode = zipCodeField.value;
  zipCode = zipCode.replace(" ", "").replace(".", "").replace(",", "").trim();

  axios
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => {
      if (response.data.erro) {
        throw new Error("Cep inválido");
      }

      content.innerHTML = "";
      createdInfo(response.data.logradouro);
      createdInfo(response.data.complemento);
      createdInfo(response.data.bairro);
      createdInfo(`${response.data.localidade} / ${response.data.uf}`);
    })
    .catch((error) => {
      console.log(error);
      content.innerHTML = "";
      createdInfo("Ops Algo deu errado!");
    });
  const createdInfo = (info) => {
    const paragraph = document.createElement("p");
    const text = document.createTextNode(info);

    paragraph.appendChild(text);
    content.appendChild(paragraph);
  };
});

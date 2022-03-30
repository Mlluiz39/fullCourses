const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("Executando em 2 seg...");
    }, 2000);
  });

// myPromise().then((response) => {
//   console.log("Primeira vez");

//   myPromise().then((response) => {
//     console.log("Segunda vez");

//     myPromise().then((response) => {
//       console.log("Terceira vez");
//     });
//   });
// });

const running = async () => {
  await myPromise()
  console.log('Primeira vez')

  await myPromise()
  console.log('Segunda vez')

  await myPromise()
  console.log('Terceira vez')
}

running()


async function executando() {
  await myPromise()
  console.log('Executando depois de 2 seg....')
}

executando()

const exec = async () => {
  const response = await myPromise()
  console.log(response)
}
exec()




const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject('Deu ruim');
    }, 2000);
  });

  // myPromise().then(() => {
  //   console.log('Primeira vez')
  // }).catch((error) => {
  //   console.warn(error)
  // })



const running = async () => {
  try {
    await myPromise()
    console.log('Primeira vez')
  } catch (error){
    console.warn(error)
  }
}

running()





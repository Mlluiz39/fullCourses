async function getContent() {
  try {
    const response = await fetch('http://localhost:4200/')
    //console.log(response)
    const data = await response.json()
    //console.log(data)
    show(data)
  } catch (error) {
    console.log('erroouu')
  }
}

getContent()

function show (users) {
  let output = ''
  for (let user of users) {
    output += `<table style="font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;">
    <tr>
      <th style=" border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">Name</th>
      <th  style=" border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">Phone</th>
    </tr>
    <tr>
      <td  style=" border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">${user.name}</td>
      <td  style=" border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">${user.phone}</td>
    </tr>
  </table>`
  }
  document.querySelector('section').innerHTML = output
}
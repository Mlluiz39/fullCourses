import soma from './components/calc'
import Heading from './components/Heading'


console.log('testando o webpack 2')

soma(5, 5)
soma(37, 3)

//Loaders
const heading = new Heading()

heading.create('Este titulo dinamico!')



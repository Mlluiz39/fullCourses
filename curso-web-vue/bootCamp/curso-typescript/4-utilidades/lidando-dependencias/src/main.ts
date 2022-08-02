import axios from 'axios'
import Simplebar from 'simplebar'
/*
import onscreen from 'onscreen' temos que instalar com require pois a lib não tem tipagem
*/

// const onscreen = require('onscreen')
import onscreen from 'onscreen'
/*
se quisermos usar o module.exports, temos que criar na raiz um arquivo.d.ts e declarar o modulo do onscreen 
*/

axios.get('/todos', {})

const content = document.getElementById('content') as HTMLElement

const simplebar = new Simplebar(content, {autoHide: true})

onscreen.
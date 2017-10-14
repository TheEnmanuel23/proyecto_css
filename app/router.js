import layout from './layout'
import page from 'page'
import homepage from './homepage'
import acercade from './acercade'
import contacto from './contacto'


const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
})
import { H, Z, lorem } from './mini-lib.js'

// recycled
let p, h3

console.log('Blogg')

// tittel
let h1 = H.tag('h1')
h1.classList.add('title')
h1.textContent = 'Blogg'
Z.qs('main').append(h1)

// flex container
let c = H.div()
c.id = 'flexContainer'
c.classList.add('container')
Z.qs('main').append(c)

// section: blog posts
// section: IG plugin

import { H, Z, lorem, lorem2, lorem3 } from './mini-lib.js'

const gallery = `<!-- LightWidget WIDGET --><script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/282df3a5fc7b5410911f3e20be622e24.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
`

// recycled
let div, h1, h3, p

console.log('Blogg')

// tittel
h1 = H.tag('h1')
h1.classList.add('title')
h1.textContent = 'Blogg'
Z.qs('main').append(h1)

// flex container
const container = H.div()
container.id = 'flexContainer'
container.classList.add('container')
Z.qs('main').append(container)

// section: instagram plugin
const insta = H.div(); insta.id = 'insta'
insta.classList.add('item')
insta.innerHTML = gallery
container.append(insta)

// section: blog posts
const blogs = H.div(); blogs.id = 'blogs'
blogs.classList.add('blogs')
container.append(blogs)

// generate blogs
const newBlogPost = (title, metadata, content) => {
  let bp, t, m, c
  bp = H.div(); bp.classList.add('item', 'blogpost')
  t = H.tag('h2')
  m = H.tag('p'); m.classList.add('metadata')
  c = H.tag('p')
  t.textContent = title
  m.textContent = metadata
  c.textContent = content
  bp.append(t, m, c)
  return bp
}

let b1, b2, b3, b4
b1 = newBlogPost(
  'Challenge: Overleve kun på torsk', 
  'Ola Nordmann • 25. oktober', 
  lorem
)
b2 = newBlogPost(
  'Ka sier torsken?', 
  'Dikt • Torskgeir Fangmansen • 3. oktober', 
  'What does the cod say? Blub blub blub blub-i-ti-blubb\n\n' + lorem2
)
b3 = newBlogPost(
  'Mot ny flyplass - sildebrygga står i fare', 
  'Politisk motstand • Klubbleder • 9. september', 
  lorem3
)
b4 = newBlogPost(
  'Dårlige tider - spar på slukene!',
  'Økoansvarlig • 1. jul',
  lorem
)
blogs.append(b1, b2, b3, b4)

import { H, Z, lorem, lorem2, lorem3 } from './mini_lib.js'

// recycled
let h1, h2, a

console.log('Blogg')

// main section
let main = H.tag('main')
document.body.append(main)

// tittel
h1 = H.tag('h1')
h1.classList.add('title')
h1.textContent = 'Blogg'
main.append(h1)

// flex container
const container = H.div()
container.id = 'flexContainer'
container.classList.add('container')
main.append(container)

// section: instagram gallery
  const insta = H.div(); insta.id = 'insta'
  insta.classList.add('item')
  container.append(insta)

  // hyperlink to insta profile
  h2 = H.tag('h2'); h2.id = 'instaHeader'
  h2.textContent = 'Instagram'
  insta.append(h2)
  // link
  a = H.tag('a'); a.id = 'instaHyperlink'
  a.href = 'https://www.instagram.com/bodofiskeklubb2/'
  a.textContent = '@bodofiskeklubb'
  h2.append(a)

  // image gallery
  const gallery = H.div(); gallery.id = 'gallery'
  insta.append(gallery)

  // images
  for (let i=0; i<9; i++) {
    const img = H.tag('img');
    img.classList.add('galleryImg')
    img.src = `img/gallery/${i+1}.jpg`
    gallery.append(img)
  }


// section: blog posts
  const blogs = H.div(); blogs.id = 'blogs'
  blogs.classList.add('blogs')
  container.append(blogs)

  // blog generator
  const newBlogPost = (title, metadata, content) => {
    let bp, t, m, c
    bp = H.div(); bp.classList.add('item', 'blogpost')
    t = H.tag('h2')
    m = H.tag('p'); m.classList.add('metadata')
    c = H.tag('p')
    t.textContent = title
    m.textContent = metadata + '\n---------------------------------------'
    c.textContent = content
    bp.append(t, m, c)
    return bp
  }

  // generate sample blogs
  let b1, b2, b3, b4
  b1 = newBlogPost(
    'Challenge: Overleve kun på torsk og potet', 
    'Ola Nordmann • 25. oktober', 
    lorem
  )
  b2 = newBlogPost(
    'Ka sei torsken?', 
    'Dikt • Torskgeir Fangmansen • 3. oktober', 
    'Ka torsken sei sa du? Britisk: What does the cod say?\n\nBlub blub blub blub-i-ti-blubb\n\n' + lorem2
  )
  b3 = newBlogPost(
    'Aktivisme mot ny flyplass - lyingbrygga står i fare', 
    'Politisk motstand • Klubbleder • 9. september', 
    lorem3
  )
  b4 = newBlogPost(
    'Dårlige tider - spar på slukene!',
    'Økoansvarlig • 1. jul',
    lorem
  )
  blogs.append(b1, b2, b3, b4)


// interactivity
  // larger image
  const enlarge = e => {
    removeEnlarge()
    e.target.classList.add('enlarge')
  }
  const removeEnlarge = () => {
    try { Z.qs('.enlarge').classList.remove('enlarge') } catch {}
  }

  window.addEventListener('click', e => {
    if (e.target.classList.contains('enlarge')) { removeEnlarge() }
    else if (e.target.classList.contains('galleryImg')) { enlarge(e) }
  })

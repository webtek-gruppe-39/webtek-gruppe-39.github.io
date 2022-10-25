import { H, Z, lorem } from './mini-lib.js'

// recycled
let p, h3

console.log('Bli medlem!')

// tittel
let h1 = H.tag('h1')
h1.classList.add('title')
h1.textContent = 'Bli medlem!'
Z.qs('main').append(h1)

// flex container
let c = H.div()
c.id = 'flexContainer'
c.classList.add('container')
Z.qs('main').append(c)

// section 1: om medlemsskap
let bait = H.div()
bait.classList.add('item', 'bait')
h3 = H.tag('h3')
p = H.tag('p')
h3.textContent = '🎣 Om medlemskap'
p.textContent = lorem
bait.append(h3, p)
Z.qs('#flexContainer').append(bait)

// section 2: meld deg inn her
let hook = H.div()
hook.classList.add('item', 'hook')

// tittel
h3 = H.tag('h3')
h3.textContent = '🪝 Meld deg inn her'
// prefix
p = H.tag('p')
p.textContent = 'Vennligst fyll ut din info under.'
// append
hook.append(h3, p)

// skjema
let s = H.div()
s.id = 'signupForm'
// input fields
let name, birthdateLabel, birthdate, motivation, email, submit
name = H.input('name', 'text', 'Navn')
birthdateLabel = H.label('birthdate', 'Født')
birthdateLabel.id = 'birthdateLabel'
birthdate = H.input('birthdate', 'date')
motivation = H.tag('textarea')
motivation.id = 'motivation'
motivation.placeholder = 'Motivasjon'
email = H.input('email', 'email', 'E-post')
submit = H.tag('button')
submit.id = 'submit'
submit.textContent ='Send'
// bygg skjema
s.append(
  name, H.tag('br'),
  birthdateLabel, birthdate, H.tag('br'),
  motivation, H.tag('br'),
  email, H.tag('br'),
  submit
)
hook.append(s)

// postfix
p = H.tag('p')
p.textContent = 'Vi tar kontakt med deg ved neste opptaksrituale!'
hook.append(p)

Z.qs('#flexContainer').append(hook)

// set active cursor on name field
name.focus({preventScroll: true})

// log
submit.addEventListener('click', () => { console.log('Bli-medlem-skjemaet er sendt på kødd!')})

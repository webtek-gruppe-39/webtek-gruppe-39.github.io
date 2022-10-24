// mini-bibliotek for ofte brukte funksjoner

const H = {} // returns HTML elements
const Z = {} // misc
H.tag = (tag)=>{ return document.createElement(tag) }
H.div = ()=>{ return H.tag('div') }
H.label = (forr, text) => {
  const l = H.tag('label')
  l.for = forr;
  l.textContent = text
  return l
}
H.input = (name, type, placeholder) => {
  const i = H.tag('input')
  i.name = name
  i.type = type
  i.placeholder = placeholder
  return i
}
Z.qs = (selector)=>{ return document.querySelector(selector) }

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export { H, Z, lorem }

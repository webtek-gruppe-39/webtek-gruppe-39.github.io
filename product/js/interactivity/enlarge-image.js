// instagram gallery: larger image on click

import { Z } from '../modules/mini-lib.js'

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

// legger inn header og footer fra et dokument som fungerer som templat

// skaff siden som et dokument fra header_footer.html
const xmlhttp = new XMLHttpRequest()
xmlhttp.open("GET", 'header_footer.html', false)
xmlhttp.send()
const template = document.createElement('html')
template.innerHTML = xmlhttp.responseText

// isolér header og footer
const header = template.querySelector('header')
const footer = template.querySelector('footer')

// Legger til i temaside
document.body.prepend(header)
document.body.append(footer)

console.log('Added header and footer from template.')

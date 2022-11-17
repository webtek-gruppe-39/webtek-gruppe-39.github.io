// legger inn header og footer fra templat-dokumentet 'header_footer.html'.

// skaff siden som ren XML,
const xmlhttp = new XMLHttpRequest()
xmlhttp.open("GET", 'header_footer.html', false)
xmlhttp.send()

// derav lag et element som kan queries
const template = document.createElement('html')
template.innerHTML = xmlhttp.responseText

// isolér header og footer
const header = template.querySelector('header')
const footer = template.querySelector('footer')

// setter disse inn på riktig plass i hver temaside
document.body.prepend(header)
document.body.append(footer)

console.log('Added header and footer from template.')

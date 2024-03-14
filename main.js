import './style.css'
//!Header-DOM
//?--------------Header&Logo----------------------
const myHeader = document.querySelector('header')
const divLogo = document.createElement('div')
divLogo.classList.add('divLogo')
const imgLogo =
  'https://res.cloudinary.com/dj1axfhui/image/upload/v1709488878/49662_zmwu2v.jpg'
const logoImage = document.createElement('img')
const hamMenu = document.createElement('img')
hamMenu.src =
  'https://res.cloudinary.com/dj1axfhui/image/upload/v1706642019/menu_1_gi1vrb.png'
hamMenu.classList.add('hamMenu')
logoImage.classList.add('logoImage')
logoImage.src = imgLogo

divLogo.appendChild(logoImage)
myHeader.appendChild(divLogo)

//?--------------NAV----------------------

const nav = document.createElement('nav')
const navlist = ['Inicio', 'Tienda', 'Escuela', 'Productos', 'Tu Cuenta']
//?Recorro el array navlist,creo un li para cada uno de ellos y un <a>.
for (const itemsList of navlist) {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'
  a.textContent = itemsList
  li.appendChild(a)
  nav.appendChild(li)
}
//?Adjunto menu hamburguesa y nav al header
myHeader.appendChild(hamMenu)
myHeader.appendChild(nav)

//?-----------Secciones-------------------

const filterSection = document.querySelector('.filter')
const productsSection = document.querySelector('.products')

//?-----------Footer--------------------

const footer = document.querySelector('footer')
const createdH4 = document.createElement('h4')
createdH4.textContent = 'Created By DanielPR'
const navfooter = document.createElement('nav')
navfooter.classList.add('navfooter')
const rrssList = document.createElement('ul')
rrssList.classList.add('rrssList')
const socialMedia = [
  {
    url: '#',
    imgSrc:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1707439989/simbolo-de-la-aplicacion-de-facebook_o3hlyf.png',
    alt: 'Facebook'
  },
  {
    url: '#',
    imgSrc:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1707439988/instagram_zfipp1.png',
    alt: 'Instagram'
  },
  {
    url: '#',
    imgSrc:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1707439988/gramo_xaeozi.png',
    alt: 'G+'
  }
]
for (const media of socialMedia) {
  const listItem = document.createElement('li')
  const link = document.createElement('a')
  link.href = media.url
  const img = document.createElement('img')
  img.src = media.imgSrc
  img.alt = media.alt
  link.appendChild(img)
  listItem.appendChild(link)
  rrssList.appendChild(listItem)
}
navfooter.appendChild(rrssList)
footer.appendChild(createdH4)
footer.appendChild(navfooter)

//?-----------Footer--------------------

//*------------ARRAY PRODUCTOS-------------------

const products = [
  {
    name: 'SHARK SPARTAN RS',
    price: 577,
    stars: 4,
    seller: 'Shark',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/HE8156EDSA_SHARK-HELMETS-SPARTAN-RS-SHAWN-MAT_ps_01_chbbu6.webp'
  },
  {
    name: 'LS2 Thunder GP Aero',
    price: 444,
    stars: 1,
    seller: 'LS2',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709634167/8ii_fas1xu.png'
  },
  {
    name: 'SHARK SKWAL i3',
    price: 299,
    stars: 3,
    seller: 'Shark',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/HE0822EKAR_SHARK-HELMETS-SKWAL-I3-LINIK-BLACK-ANTHRACITE-RED_ps_01_n4nmpu.webp'
  },
  {
    name: 'SHOEI X-SPR PRO',
    price: 600,
    stars: 5,
    seller: 'SHOEI',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/01-img-shoei-casco-moto-xspr-pro_khci7o.png'
  },
  {
    name: 'LS2 BOB II',
    price: 32,
    stars: 1,
    seller: 'LS2',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/FF353_RAPID_PLAYER_BLACK_SKY_BLUE_103536012-800x800_exfbvg.png'
  },

  {
    name: 'SCORPION Exo R1 Evo',
    price: 326,
    stars: 4,
    seller: 'Scorpion',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/A_scorpionEXOR1CARBONA_SOLID_MatBla_getstung-1024x1024-1_vtuc3l.png'
  },
  {
    name: 'HJC i100',
    price: 180,
    stars: 3,
    seller: 'HJC',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/I100_SOLID_PEARL_WHITE_5_g8daum.webp'
  },
  {
    name: 'HJC RPHA 1',
    price: 444,
    stars: 4,

    seller: 'HJC',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629045/mc21___rpha_1_quartararo_le_mans_special_1_mnwqr8.webp'
  },
  {
    name: 'ARAI Concept-XE',
    price: 234,
    stars: 5,
    seller: 'ARAI',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629046/thumbnail-big_n2mf74.png'
  },
  {
    name: 'ARAI Quantic',
    price: 554,
    stars: 5,
    seller: 'ARAI',
    image:
      'https://res.cloudinary.com/dj1axfhui/image/upload/v1709629046/thumbnail-big_1_oyjluy.png'
  }
]

let filterValue = NaN
const filterCombined = () => {
  const filteredProducts = products.filter((product) => {
    //Recorrer el array de productos para que pase un filtro. O No ha seleccionado o debe coincidir el vendedor del producto con el seleccionado.
    const sellerMatch =
      selectedSeller === '' || product.seller === selectedSeller
    const priceMatch = isNaN(filterValue) || product.price <= filterValue //Si filter value no es un numero se pasa de lo contrario debe ser menor o igual al valor del filtro.
    return sellerMatch && priceMatch //si ambas son ok se devuelve true.
  })
  productsSection.innerHTML = ''
  printHelmets(filteredProducts)
}

//? -----CLEAN------
const cleanfilter = () => {
  selectedSeller = ''
  filterValue = NaN

  productsSection.innerHTML = ''
  printHelmets(products)
  const selectModel = divFilter.querySelector('select')
  selectModel.selectedIndex = 0
  const input = divFilter.querySelector('input[type=number]')
  input.value = ''
}

//divFilter dentro de la filtersection
const divFilter = document.createElement('div')
divFilter.classList.add('divFilter')

//*---------Rellenar Vendedores para Select---------------
//Creo un array vacio (sellers).
//Rellenar el select, con lógica. Si no está en el array, entonces envia el vendedor.

const sellers = []
const fillSellers = (helmets) => {
  for (const helmet of helmets) {
    if (!sellers.includes(helmet.seller)) {
      sellers.push(helmet.seller)
    }
  }
}
fillSellers(products)
//*FUNCION SELECT SELLERS
let selectedSeller = ''

const createSelectModel = () => {
  const selectModel = document.createElement('select') //Creamos sellers para los vendedores
  const defaultSelect = document.createElement('option') //Creamos una opcion fuera de bucle para ser deafult. Y la agregamos al select.
  defaultSelect.value = ''
  defaultSelect.textContent = 'Seleccionar vendedor'
  selectModel.appendChild(defaultSelect)

  for (const seller of sellers) {
    //recorremos el array de vendedores.(Que ha sido creado y rellenado anteriormente y creamos una option para cada uno de los vendedores, cuyo option value y text content va  ser el propio seller. Posteriormente lo añadimos.)
    const option = document.createElement('option')
    option.value = seller
    option.textContent = seller
    selectModel.appendChild(option)
  }
  divFilter.appendChild(selectModel)
  filterSection.appendChild(divFilter)

  selectModel.addEventListener('change', (e) => {
    //?Agregamos funcionalidad al select. Para basicamente al cambiar reconozca como valor y se almacene el selected Seller. Luego llamamos a filtercombined.
    selectedSeller = e.target.value
    filterCombined()
  })
}

//*FUNCION PRINTS CASCOS
const printHelmets = (helmets) => {
  const divHelmets = document.createElement('div')
  divHelmets.classList.add('helmetsContainer')
  divHelmets.innerHTML = '' //limpio cada vez que se imprima

  for (const helmet of helmets) {
    //recorro el array y creo por cada uno:
    const divHelmet = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const divStars = document.createElement('div')
    const price = document.createElement('p')
    for (let i = 1; i <= 5; i++) {
      //recorro hasta 5 e i que es 1,2,3,4,5, le agrego un div.
      const star = document.createElement('div')
      star.className = 'star'
      if (helmet.stars >= i) {
        //si las estrellas son mayor que la i, es decir, i=1 star=1 star(1)<=1 entonces pinta; i=2,i=3,i=4,i=5
        star.classList.add('starEv')
      }
      divStars.appendChild(star)
    }

    img.src = helmet.image
    name.textContent = helmet.name
    price.textContent = `${helmet.price} €`
    divStars.classList.add('divStars')
    divImg.appendChild(img)
    divImg.classList.add('divImage')

    divHelmet.appendChild(divImg)
    divHelmet.appendChild(name)
    divHelmet.appendChild(price)
    divHelmet.appendChild(divStars)

    divHelmets.appendChild(divHelmet)
  }
  productsSection.appendChild(divHelmets)
}

const createInputMoney = () => {
  const divMoney = document.createElement('div')
  const input = document.createElement('input')
  input.type = 'number'
  input.placeholder = '<€€€'
  const button = document.createElement('button')
  button.textContent = 'Buscar'
  divMoney.appendChild(input)
  divMoney.appendChild(button)
  divFilter.appendChild(divMoney)
  filterSection.appendChild(divFilter)
  button.addEventListener('click', () => {
    filterValue = parseFloat(input.value)
    filterCombined()
  })
  const buttonClean = document.createElement('button')
  buttonClean.textContent = 'Limpiar'
  divMoney.appendChild(buttonClean)
  buttonClean.addEventListener('click', () => {
    cleanfilter()
  })
}

printHelmets(products)
createSelectModel()
createInputMoney()

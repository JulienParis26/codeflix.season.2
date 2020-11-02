const { empty, withArgs } = require('./eventbox')
const { duplicate, transform } = require('./streambox')


    console.log("---- Eventbox ----")

empty()
withArgs([
    'Luffy',
    'Zorro',
    'Usopp',
    'Robin',
    'Nami',
    'Sanji',
    'Ch0pper'
])

    console.log("---- Streambox ----")

duplicate('main.js')
transform(
    'eventbox.js', // filename
    /[a-z]/g,      // re ( RegExp -> Regular expression )
    (letter) => letter.toUpperCase(), // fn -> function
)

// ============================================
// PRODUCTOS - CHINA MART MOLLENDO
// ============================================

// Aquí estarán TODOS los productos de la tienda.
const productosChinaMart = [

    {
        nombre: "Scooter Infantil de 3 Ruedas",
        imagen: "scooter_infantil.png",
        categoria: "auto",
        palabrasClave: ["scooter", "juguete", "infantil", "niño", "niña"],
        mensaje: "Hola, quisiera consultar por el Scooter Infantil de 3 Ruedas",
        codigo: "",
        stock: null
    },

    {
        nombre: "Muñeca Melissa Fashion Princesa con Accesorios",
        imagen: "muneca_melissa_fashion.png",
        categoria: "auto",
        palabrasClave: ["muñeca", "juguete", "princesa", "niña"],
        mensaje: "Hola, quisiera consultar por la Muñeca Melissa Fashion",
        codigo: "",
        stock: null
    },

    {
    nombre: "Mochila Escolar Capibara",
    imagen: "mochila_capibara_accesorios_80_80.png",
    categoria: "auto",
    palabrasClave: ["mochila", "escolar", "capibara", "bolso"],
    mensaje: "Hola, quisiera consultar por la Mochila Escolar Capibara",
    codigo: "",
    stock: null
},

{
    nombre: "Juguete de Prueba",
    imagen: "logo.png",
    categoria: "auto",
    palabrasClave: ["juguete", "infantil"],
    mensaje: "Hola, quisiera consultar por el Juguete de Prueba",
    codigo: "",
    stock: null
}

];


// ============================================
// CATEGORÍAS
// ============================================

const categoriasChinaMart = {

    bebidas: [
        "bebida",
        "jugo",
        "te",
        "té",
        "leche",
        "aloe"
    ],

    inciensos: [
        "incienso",
        "porta incienso",
        "portaincienso"
    ],

    bolsos: [
        "cartera",
        "mochila",
        "bolso",
        "morral",
        "lonchera",
        "canguro"
    ],

    mascotas: [
        "mascota",
        "perro",
        "gato",
        "arenero",
        "rascador",
        "catnip"
    ],

    gorras: [
        "gorra"
    ],

    flores: [
        "flor",
        "flores",
        "rosa",
        "orquidea",
        "orquídea",
        "arbol decorativo",
        "árbol decorativo",
        "cesped",
        "césped"
    ],

    "gimnasio y deportes": [
        "gimnasio",
        "deporte",
        "fitness",
        "yoga",
        "entrenamiento",
        "resistencia",
        "postura",
        "abdominal"
    ],

    "juguetes para niño y niña": [
        "juguete",
        "scooter",
        "bicicleta",
        "muñeca",
        "muñeco",
        "dinosaurio",
        "cometa",
        "pelota",
        "slime",
        "monopoly",
        "infantil"
    ]

};


// ============================================
// NORMALIZAR TEXTO
// ============================================

function normalizarTextoProducto(texto) {

    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// ============================================
// DETECTAR CATEGORÍA AUTOMÁTICAMENTE
// ============================================

function detectarCategoriaProducto(producto) {

    // Si escribimos una categoría manualmente,
    // no hace falta detectarla.
    if (
        producto.categoria &&
        producto.categoria !== "auto"
    ) {
        return producto.categoria;
    }


    // Juntamos nombre + palabras clave.
    const texto = normalizarTextoProducto(
        producto.nombre + " " +
        (producto.palabrasClave || []).join(" ")
    );


    // Buscamos coincidencias.
    for (const categoria in categoriasChinaMart) {

        const palabras = categoriasChinaMart[categoria];

        for (const palabra of palabras) {

            const palabraNormalizada =
    normalizarTextoProducto(palabra);

const palabraSegura =
    palabraNormalizada.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

const patron =
    new RegExp(
        "\\b" +
        palabraSegura.replace(/\s+/g, "\\s+") +
        "\\b",
        "i"
    );

if (patron.test(texto)) {

    return categoria;

}

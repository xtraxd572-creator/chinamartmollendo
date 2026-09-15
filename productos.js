// ============================================
// PRODUCTOS - CHINA MART MOLLENDO
// ============================================

// Aquí estarán TODOS los productos de la tienda.
const productosChinaMart = [

    {
        nombre: "Scooter Infantil de 3 Ruedas",
        imagen: "scooter_infantil.png",
        categoria: "auto",
        palabrasClave: [
            "scooter",
            "juguete",
            "infantil",
            "niño",
            "niña"
        ],
        mensaje: "Hola, quisiera consultar por el Scooter Infantil de 3 Ruedas",
        codigo: "",
        stock: null
    },

    {
        nombre: "Muñeca Melissa Fashion Princesa con Accesorios",
        imagen: "muneca_melissa_fashion.png",
        categoria: "auto",
        palabrasClave: [
            "muñeca",
            "juguete",
            "princesa",
            "niña"
        ],
        mensaje: "Hola, quisiera consultar por la Muñeca Melissa Fashion",
        codigo: "",
        stock: null
    },

    {
        nombre: "Mochila Escolar Capibara",
        imagen: "mochila_capibara_accesorios_80_80.png",
        categoria: "auto",
        palabrasClave: [
            "mochila",
            "escolar",
            "capibara",
            "bolso"
        ],
        mensaje: "Hola, quisiera consultar por la Mochila Escolar Capibara",
        codigo: "",
        stock: null
    }

];


// ============================================
// CATEGORÍAS
// ============================================

const categoriasChinaMart = {

    bebidas: {
        nombre: "Bebidas Asiáticas",
        icono: "🧋",
        palabras: [
            "bebida",
            "jugo",
            "te",
            "té",
            "leche",
            "aloe"
        ]
    },

    inciensos: {
        nombre: "Porta Inciensos",
        icono: "🪔",
        palabras: [
            "incienso",
            "porta incienso",
            "portaincienso"
        ]
    },

    bolsos: {
        nombre: "Carteras, Mochilas y Más",
        icono: "👛",
        palabras: [
            "cartera",
            "mochila",
            "bolso",
            "morral",
            "lonchera",
            "canguro"
        ]
    },

    mascotas: {
        nombre: "Catálogo de Mascotas",
        icono: "🐾",
        palabras: [
            "mascota",
            "perro",
            "gato",
            "arenero",
            "rascador",
            "catnip"
        ]
    },

    gorras: {
        nombre: "Gorras Damas y Varón",
        icono: "🧢",
        palabras: [
            "gorra"
        ]
    },

    flores: {
        nombre: "Flores Artificiales",
        icono: "🌸",
        palabras: [
            "flor",
            "flores",
            "rosa",
            "orquidea",
            "orquídea",
            "arbol decorativo",
            "árbol decorativo",
            "cesped",
            "césped"
        ]
    },

    "gimnasio y deportes": {
        nombre: "Gimnasio y Deporte",
        icono: "🏋️",
        palabras: [
            "gimnasio",
            "deporte",
            "fitness",
            "yoga",
            "entrenamiento",
            "resistencia",
            "postura",
            "abdominal"
        ]
    },

    "juguetes para niño y niña": {
        nombre: "Juguetes para Niño y Niña",
        icono: "🧸",
        palabras: [
            "juguete",
            "juguetes",
            "scooter",
            "bicicleta",
            "muñeca",
            "muñecas",
            "muñeco",
            "muñecos",
            "dinosaurio",
            "cometa",
            "pelota",
            "slime",
            "monopoly",
            "infantil"
        ]
    }

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

    // Si nosotros indicamos una categoría manualmente,
    // se utiliza directamente.
    if (
        producto.categoria &&
        producto.categoria !== "auto"
    ) {

        return producto.categoria;

    }


    // Juntamos el nombre y las palabras clave.
    const texto = normalizarTextoProducto(
        producto.nombre + " " +
        (producto.palabrasClave || []).join(" ")
    );


    // Revisamos las categorías.
    for (const categoria in categoriasChinaMart) {

       const palabras =
    categoriasChinaMart[categoria].palabras;


        for (const palabra of palabras) {

            const palabraNormalizada =
                normalizarTextoProducto(palabra);


            // Escapar caracteres especiales.
            const palabraSegura =
                palabraNormalizada.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                );


            // Esto evita errores como:
            // "jugueTE" → bebidas
            //
            // Ahora "te" solamente coincide
            // cuando realmente es una palabra.
            const patron =
                new RegExp(
                    "\\b" +
                    palabraSegura.replace(
                        /\s+/g,
                        "\\s+"
                    ) +
                    "\\b",
                    "i"
                );


            if (patron.test(texto)) {

                return categoria;

            }

        }

    }


    // Si no reconoce ninguna categoría.
    return null;

}


// ============================================
// MENSAJE PARA COMPROBAR QUE CARGÓ
// ============================================

console.log(
    "✅ productos.js cargado correctamente"
);

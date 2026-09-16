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
    },
    {
    nombre: "Mascarillas Faciales BIOAQUA Koala y Zorrito",

    imagen: "mascarilla_bioaqua_koala_zorrito.png",

    categoria: "auto",

    palabrasClave: [
        "mascarilla",
        "mascarillas",
        "mascarilla facial",
        "facial mask",
        "bioaqua",
        "koala",
        "zorrito",
        "cuidado facial",
        "skincare",
        "rostro"
    ],

    mensaje: "Hola, quisiera consultar por las Mascarillas Faciales BIOAQUA Koala y Zorrito",

    codigo: "",

    stock: null
},
    {
    nombre: "Mascarillas Faciales Sakura Premium y Kiwi",
    imagen: "mascarillas_sakura_kiwi.png",
    categoria: "auto",
    palabrasClave: [
        "mascarilla",
        "sakura",
        "kiwi",
        "cuidado facial"
    ],
    mensaje: "Hola, quisiera consultar por las Mascarillas Faciales Sakura Premium y Kiwi",
    codigo: "",
    stock: null
},
    
{
    nombre: "Mascarillas Faciales BIOAQUA Fresa y Blueberry",
    imagen: "mascarillas_fresa_blueberry.png",
    categoria: "auto",
    palabrasClave: [
        "mascarilla",
        "fresa",
        "blueberry",
        "bioaqua"
    ],
    mensaje: "Hola, quisiera consultar por las Mascarillas Faciales BIOAQUA Fresa y Blueberry",
    codigo: "",
    stock: null
},
    {
    nombre: "Mascarillas Faciales BIOAQUA Panda y Perrito",
    imagen: "mascarillas_panda_perrito.png",
    categoria: "auto",
    palabrasClave: [
        "mascarilla",
        "panda",
        "perrito",
        "bioaqua"
    ],
    mensaje: "Hola, quisiera consultar por las Mascarillas Faciales BIOAQUA Panda y Perrito",
    codigo: "",
    stock: null
},
    {
    nombre: "Mascarillas Faciales BIOAQUA Granada y Limón",
    imagen: "mascarillas_granada_limon.png",
    categoria: "auto",
    palabrasClave: [
        "mascarilla",
        "granada",
        "limón",
        "bioaqua"
    ],
    mensaje: "Hola, quisiera consultar por las Mascarillas Faciales BIOAQUA Granada y Limón",
    codigo: "",
    stock: null,
        destacado: true,

    frase: "Frescura y cuidado para tu piel",

    titulo: "MASCARILLAS FACIALES",

    tituloDestacado: "GRANADA Y LIMÓN",

    descripcion: "Mascarillas BIOAQUA con presentaciones frutales para complementar tu rutina de cuidado facial.",

    caracteristicas: [
        {
            icono: "💧",
            texto: "Hidratación suave"
        },
        {
            icono: "🍋",
            texto: "Diseños frutales"
        },
        {
            icono: "✨",
            texto: "Sensación fresca"
        },
        {
            icono: "🎁",
            texto: "Uso personal o regalo"
        }
    ]
}
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
    },
        
    "mascarillas y cuidado": {
    nombre: "Mascarillas y Cuidado",
    icono: "🧖",
    palabras: [
        "mascarilla",
        "mascarillas",
        "mascarilla facial",
        "cuidado facial",
        "skincare",
        "rostro",
        "parche facial",
        "parches de ojos"
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

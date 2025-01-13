const booksByCategory = [
    {
    category: "Romance",
    books: [
        {title: "O Sol Também é Uma Estrela",
        author: "Nicola Yoon",
        },
        {title: "O Noivo da Minha Melhor Amiga",
        author: "Emily Gin",
        },
        {title: "Orgulho e Preconceito",
        author: "Jane Austen",
        },
        ],
    },
    {category: "Fantasia",
        books: [
            {title: "Harry Potter e a Pedra Filosofal",
            author: "J.K. Rowling",
            },
            {title: "O Hobbit",
            author: "J.R.R. Tolkien",
            },
            {title: "Eragon",
            author: "Christopher Paolini",
            },
            {title: "O Nome do Vento",
            author: "Patrick Rothfuss",
            },
        ],
    },
    {category: "Suspense",
        books: [
            {title: "A Garota no Trem",
            author: "Paula Hawkins",
            },
            {title: "O Silêncio dos Inocentes",
            author: "Thomas Harris",
            },
        ],
    },
    {category: "Ficção Científica",
        books: [
            {title: "Duna",
            author: "Frank Herbert",
            },
            {title: "Neuromancer",
            author: "William Gibson",
            },
            {title: "Fundação",
            author: "Isaac Asimov",
            },
            {title: "1984",
            author: "George Orwell",
            },
            {title: "O Fim da Infância",
            author: "Arthur C. Clarke",
            },
        ],

    },
]    

let categoriasLivros = countBooksInCategory(booksByCategory) 
console.log(categoriasLivros)

function countBooksInCategory(livros) {
    let listaLivros = {}
    let contadorRomance = contarCategoria(livros, "Romance")
    let contadorFantasia = contarCategoria(livros, "Fantasia")
    let contadorSuspense = contarCategoria(livros, "Suspense")
    let contadorFiccaoCientifica = contarCategoria(livros, "Ficção Científica")
    listaLivros.romance = contadorRomance
    listaLivros.fantasia = contadorFantasia 
    listaLivros.suspense = contadorSuspense
    listaLivros.ficcaoCientifica = contadorFiccaoCientifica
    return listaLivros
}

function contarCategoria(livros, categoria) {
    let contador = livros.reduce((acc, item) => {
        if (item.category === categoria) {
            acc = item.books.length
          }
          return acc;
        }, 0);
    return contador
}


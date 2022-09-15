let contador = 0
let receptor = 0
function listaInicialNaruto() {
    //chamando lista de produtos do Naruto
    let ul = document.querySelector(".narutoList")

    // criando variaveis    
    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        let favoritar = document.createElement("img")
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")
        let button = document.createElement("button")
        let span   = document.createElement("span")
        let p      = document.createElement("p")

        // adicionando class
        p.className= "descrição"
        li.className = "products"
        a.className = "ancora"
        img.className = "imageProduct"
        h2.className = "textDesciption"
        h3.className = "value"
        button.className = "button"
        favoritar.className = "favoritar"

        li.id = `produto${listaProduct[i].id}`
        button.id = `buttonProdut${listaProduct[i].id}`
        span.innerText  = listaProduct[i].category
        p.innerText = listaProduct[i].description


        // colocando tags unas dentro das outras

        ul.appendChild(li)
        li.appendChild(favoritar)
        li.appendChild(a)
        a.appendChild(img)
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(h3)
        li.appendChild(button)
        li.appendChild(span)

        // adicionando interface
        favoritar.src = "./img/Logos/coracao (2).png"
        img.src = listaProduct[i].image
        h2.innerText = listaProduct[i].name
        h3.innerText = listaProduct[i].price + " R$"
        button.innerText = "Adicionar"

        favoritar.addEventListener("click", function () {
            pagarTotal.innerHTML = ""
            favoritar.classList.toggle("favoritado")
        })

    }

}
function listaInicialOnePice() {
    //chamando lista de produtos do Naruto
    let ul = document.querySelector(".onePiece")

    // criando variaveis
    for (let i = 3; i < 6; i++) {
        let ul = document.querySelector(".onePiece")
        let li = document.createElement("li")
        let a = document.createElement("a")
        let img = document.createElement("img")
        let favoritar = document.createElement("img")
        let imageHeart = document.createElement("img")
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")
        let button = document.createElement("button")
        let span   = document.createElement("span")
        let p      = document.createElement("p")

        // adicionando class
        p.className= "descrição"
        li.id = listaInicialOnePice[i]
        li.id = `produto${listaProduct[i].id}`
        li.className = "products"
        a.className = "ancora"
        img.className = "imageProduct"
        h2.className = "textDesciption"
        h3.className = "value"
        button.className = "button"
        favoritar.className = "favoritar"
        button.id = `buttonProdut${listaProduct[i].id}`
        span.innerText  = listaProduct[i].category



        // colocando tags unas dentro das outras

        ul.appendChild(li)
        li.appendChild(favoritar)
        li.appendChild(a)
        a.appendChild(img)
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(h3)
        li.appendChild(button)
        li.appendChild(span)

        // adicionando interface
        
        p.innerText = listaProduct[i].description
        favoritar.src = "./img/Logos/coracao (2).png"
        img.src = listaProduct[i].image
        imageHeart.src = `./img/Logos/coracao (2).png`
        h2.innerText = listaProduct[i].name
        h3.innerText = listaProduct[i].price + " R$"
        button.innerText = "Adicionar"

    }


}
function listaInicialDragonBall() {
    //chamando lista de produtos do Naruto
    let ul = document.querySelector(".dragonBall")

    // criando variaveis
    for (let i = 6; i < 9; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        let favoritar = document.createElement("img")
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")
        let button = document.createElement("button")
        let span   = document.createElement("span")
        let p      = document.createElement("p")

        // adicionando class

        p.className= "descrição"
        li.id = `produto${listaProduct[i].id}`
        favoritar.className = "favoritar"
        li.className = "products"
        a.className = "ancora"
        img.className = "imageProduct"
        h2.className = "textDesciption"
        h3.className = "value"
        button.className = "button"
        button.id = `buttonProdut${listaProduct[i].id}`
        span.innerText  = listaProduct[i].category


        // colocando tags unas dentro das outras

        ul.appendChild(li)
        li.appendChild(favoritar)
        li.appendChild(a)
        a.appendChild(img)
        li.appendChild(h2) 
        li.appendChild(p)
        li.appendChild(h3)
        li.appendChild(button)
        li.appendChild(span)


        // adicionando interface

        p.innerText = listaProduct[i].description
        favoritar.src = "./img/Logos/coracao (2).png"
        img.src = listaProduct[i].image
        h2.innerText = listaProduct[i].name
        h3.innerText = listaProduct[i].price + " R$"
        button.innerText = "Adicionar"

    }
    
}
function comprarIten() {

    //chamndo o buttn

    let button = document.querySelectorAll(".button")

    // for que percorre todos os meus buttos

    for (let i = 0; i < listaProduct.length; i++) {
        button[i].addEventListener("click", function (event) {

            //element é a variavle que pega o meu id
            let elemento = event.target.id
            let id = parseInt(elemento.substring(12))
            let produto = listaProduct[i]
            if (!produto) {

                alert("produto não existe")

            } else {
                if (!verificaCarrinho(produto.id)) {

                    criandoLista(produto)

                }

            }
        })
    }

}
function verificaCarrinho(id) {

    let elemento = document.getElementById(`Comprar${id}`)

    if (elemento == null) {
        return false
    } else {
        return true
    }

}
function criandoLista(produto) {
   
    contador     += produto.price 
    receptor++

    let pagar    = document.querySelector(".valorPagar")
    let li       = document.createElement("li")
    let image    = document.createElement("img")
    let h2       = document.createElement("h2")
    let h3       = document.createElement("h3")
    let lixeira  = document.createElement("img")
    let pagarTotal    = document.querySelector(".valorPagar")
    let quantidade = document.querySelector(".Quantidade")

    li.className = "listaComprar"
    image.className = "imageComprar"
    h2.className = "desComprar"
    h3.className = "priceComprar"
    lixeira.className = "lixeiraComprar"
  

    let ul = document.querySelector(".carrinhoDeCompras")
    

    quantidade.innerText = `Quantidade: ${receptor}`
    lixeira.src = "./img/Logos/Lixeira.png"
    h2.innerText = produto.name
    h3.innerText = " R$"+produto.price
    image.src = produto.image
    li.id = `Comprar${produto.id}`
    pagar.innerText = `Total R$${contador}`
   
    ul.appendChild(li)
    li.appendChild(image)
    li.append(h2, h3)
    li.appendChild(lixeira)

    lixeira.addEventListener("click", function (event) {
        
        let elemento = event.target
        li.remove(elemento)
        receptor--
        quantidade.innerText = `Quantidade:${receptor}`
        contador -= produto.price
        pagarTotal.innerText = `Total R$${contador}`

    })
    

}
function curti() {
    let curti = "./img/Logos/coracao (1).png"
    let desCurti = "./img/Logos/coracao (2).png"
    let favoritar = document.querySelectorAll(".favoritar")
    let check = true
    for (let i = 0; i < favoritar.length; i++) {
        favoritar[i].addEventListener("click", function () {
            if (check) {
                favoritar[i].src = curti
                check = false
            } else {
                favoritar[i].src = desCurti
                check = true
            }
        })
    }
}
function pesquisa() {
   
    let input = document.querySelector(".pesquisador")
    let buscador = document.querySelector(".buscador")
   

    buscador.addEventListener("click", function (event) {
        event.preventDefault()
        
        
        for (let i = 0; i < listaProduct.length; i++) {
            if (input.value.toLowerCase() == listaProduct[i].name.toLowerCase() ) {
                
                resultadoPesquisa(listaProduct[i])

            }else if(input.value == listaProduct[i].category){
                resultadoPesquisa(listaProduct[i])
            }
        }

    })
}
function resultadoPesquisa(produto) {

    let buttonP = document.querySelector(".buttonBack2")
    let fechar = document.querySelector(".imageX2")
    let button = document.querySelector(".buscador")
    let ul1      = document.querySelector(".narutoList")
    let ul2      = document.querySelector(".onePiece")
    let ul3      = document.querySelector(".dragonBall")
    let title    = document.querySelector(".titlP")
    let h1       = document.querySelector(".title")
    let h11      = document.querySelector(".title1")
    let h12      = document.querySelector(".title2")

    button.addEventListener("click", function () {
        
        buttonP.removeAttribute("hidden")
        fechar.removeAttribute("hidden")
    

        ul1.innerHTML   =""
        ul2.innerHTML   =""
        ul3.innerHTML   =""
        title.removeAttribute("hidden")

        criandoListaPesquisa(produto)
        h1.setAttribute("hidden","true")
        h11.setAttribute("hidden","true")
        h12.setAttribute("hidden","true")
        


    })
    // li.removeAttribute("hidden","false")
    // console.log(li)
}
function criandoListaPesquisa(produto) {

        let li = document.createElement("li")
        let a = document.createElement("a")
        let favoritar = document.createElement("img")
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")
        let button = document.createElement("button")
        let span   = document.createElement("span")

        // adicionando class
        li.className = "products"
        a.className = "ancora"
        img.className = "imageProduct"
        h2.className = "textDesciption"
        h3.className = "value"
        button.className = "entrega"
        favoritar.className = "favoritar"
        li.id = `produto${produto.id}`
        button.id = `buttonProdut${produto.id}`
        span.innerText  = produto.category


        let ul = document.querySelector(".resultadoDaPesquisa")

        ul.innerHTML = ""

        // adicionando interface
        favoritar.src = "./img/Logos/coracao (2).png"
        img.src = produto.image
        h2.innerText = produto.name
        h3.innerText =  "R$"+produto.price 
        button.innerText = "Adicionar"

        ul.appendChild(li)
        li.appendChild(favoritar)
        li.appendChild(a)
        a.appendChild(img)
        li.append(h2, h3)
        li.appendChild(button)
        li.appendChild(span)
        

        favoritar.addEventListener("click", function () {
            pagarTotal.innerHTML = ""
            favoritar.classList.toggle("favoritado")
        })  

        adicionaDiretoDaPesquisa(produto)
    

}
function fecharAbrir() {

    let pesquisa   = document.querySelector(".resultadoDaPesquisa")
    let ulPesquisa = document.querySelector(".pesquisaCaixa")
    let button = document.querySelector(".buttonBack2")
    let imag = document.querySelector(".imageX2")
    let pagar    = document.querySelector(".valorPagar")
    let h1    = document.querySelector(".titlP")
    
    let h111      = document.querySelector(".title")
    let h11      = document.querySelector(".title1")
    let h12      = document.querySelector(".title2")

    button.addEventListener("click", function (event) {

        event.preventDefault()
        button.setAttribute("hidden", "true")
        imag.setAttribute("hidden", "true")
        
        h1.setAttribute("hidden","true")
        pagar.removeAttribute("hidden")
        ulPesquisa.innerHTML = ""
        pesquisa.innerHTML   = ""
        h111.removeAttribute("hidden")
        h11.removeAttribute("hidden")
        h12.removeAttribute("hidden")
        listaInicialNaruto()
        listaInicialOnePice()
        listaInicialDragonBall()
        comprarIten()
        
    })
}
function adicionaDiretoDaPesquisa(produto) {

    let button = document.querySelector(".entrega")
    

        for(let i = 0; i < listaProduct.length;i++){
            button.addEventListener("click", function (event) {

                //element é a variavle que pega o meu id
                let elemento = event.target.id
                if (!produto) {
    
                    alert("produto não existe")
    
                } else {
                    if (!verificaCarrinho(produto.id)) {
    
                        criandoLista(produto)
    
                    }
    
                }
            })
        }
          
}
fecharAbrir()
listaInicialNaruto()
listaInicialOnePice()
listaInicialDragonBall()
comprarIten()
curti()
pesquisa()






function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'

        cartao.innerHTML = `
        <div class="cartao__conteudo">
    
        <div class="cartao__conteudo__pergunta">
     
        </div>
        <div class="cartao__conteudo__resposta">
        
        </div>
        </div>
        `

        let respostaEstaVisivel = false

        function viraCartao() {
                respostaEstaVisivel = !respostaEstaVisivel
                cartao.classList.toggle('active', respostaEstaVisivel)
        }
        cartao.addEventListener('click', viraCartao)


        container.appendChild(cartao)

}
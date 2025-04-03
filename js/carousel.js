//Array do carousel = plateira vazia aonde vai conter as informações e o conteudo do carosel 
const carouselArr = [];

//Class Carousel = Formulario padrão para toda vez que eu quiser recriar o mesmo codigo 
class Carousel {
    constructor(Imagem, Title, Url) { //oq tem dentro do carousel padrão do carousel 
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }

    //Metodo que inicial o carousel 
    static Start(arr) {
        if (arr.length > 0) { //Verifica se tem elementos no carousel, caso não for ele vai para a mensagem de erro 
            Carousel._sequence = 0; //iniciar o carousel no primeiro elemento
            Carousel._size = arr.length; //define o tamnaho do carousel
            Carousel._arr = arr; 

            Carousel.Show(); // Exibe o primeiro item sem alterar a sequencia 

            Carousel._interval = setInterval(() => { //Aqui seta o intervalo junto os segunodos para ir para o proximo elemento
                Carousel.Next();
            }, 2000);
        } else {
            throw "Method Start needs an Array Variable."; //mensagem de erro 
        }
    }

    // Método que só exibe o item atual
    static Show() { //metodo de criação dos elementos do carousel 
        const carouselElement = document.getElementById('carousel'); //entra dentro do html para pegar o elemento pelo id
        const titleElement = document.getElementById('carousel-title');

        carouselElement.innerHTML = ''; //remove todo o para atualizar para proximar 
        titleElement.innerHTML = '';

        const img = document.createElement('img'); //criar o elemento imagem e adiciona a uma varivael 
        img.setAttribute('src', Carousel._arr[Carousel._sequence].imagem); //seta o caminho da imagem, junto com a sequencia e a posição atual da imagem 
        carouselElement.insertAdjacentElement("beforeend", img); //adiciona um novo elemento como filho do carouselElement antes do final do elemento 

        const title = document.createElement('a'); //cria o elemento e adiciona em uma varivael 
        title.setAttribute('href', Carousel._arr[Carousel._sequence].url); //seta o atritubo e o endereço do link de maneira didamina pegando a posição atual do link 
        title.textContent = Carousel._arr[Carousel._sequence].title; //pega o conteudo do titulo carousel 
        titleElement.appendChild(title);
    }
//metodo proximo 
    static Next() {
        // Exibe o item atual e depois incrementa o índice
        Carousel.Show();
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        clearInterval(Carousel._interval); //limpa intervalo
        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 2000);
    }
//metodo voltar 
    static Prev() {
        // Decrementa o índice e exibe o item anterior sem incrementar
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.Show();
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(() => { //seta o intervalo junto com o carousel 
            Carousel.Next();
        }, 2000);
    }
}

//função para voltar 
function Back() {
    Carousel.Prev(); //chama o metodo proximo 
    
}

//função para ir para o proximo 
function Prox() {
    Carousel.Next(); //chama o metodo ir para o proximo 
    
}


//Array do carousel = plateira vazia aonde vai conter as informações e o conteudo do carosel 
const carouselArr = [];

//Class Carousel = Formulario padrão para toda vez que eu quiser recriar o mesmo codigo 
class Carousel {
    constructor(Imagem, Title, Url) {  //oq tem dentro do formulario
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }

    static Start(arr) { //Botao de iniciar o codigo 
        if ( arr.length > 0) { //verifica o tamanho dos elementos, estiver vazio ele vai para o else do erro 
            Carousel._sequence = 0; //Define a ´posição atual do carousel
            Carousel._size = arr.length;  //Define o tamnaho do array como tamanho carousel
            Carousel._arr = arr;  //Guarda a fotos no carousel

            Carousel.Next(); //Monstra a primeira foto imediantamente

            Carousel._interval = setInterval(function () { //Define um intervalo de 2s e inicia a primeira foto 
                Carousel.Next();
            }, 2000);
        } else {
            throw "Method Start needs an Array Variable."; //Erro caso o tamanho do array estiver vazio 
        }
    }
    static Next() { //Metodo que chama a função 
 
  const carouselElement = document.getElementById('carousel'); //Entra dentro do html para manipular a div
  const titleElement = document.getElementById('carousel-title'); 
; 
  
  carouselElement.innerHTML = ''; //Remove o conteudo que esta do lado 
  titleElement.innerHTML = '';

 
  const img = document.createElement('img'); //Cria o elemento img e adiciona em uma variavel 
  img.setAttribute('src', Carousel._arr[Carousel._sequence].imagem); //Pega o endereço da imagem na posição atual e seta o atributo 
  carouselElement.appendChild(img); //Adiciona a imagem criada ao local do carousel 

 
  const title = document.createElement('a');
  title.setAttribute('href',  Carousel._arr[Carousel._sequence].url)
  title.textContent = Carousel._arr[Carousel._sequence].title;
  titleElement.appendChild(title);

  

  

  
  Carousel._sequence = (Carousel._sequence + 1) % Carousel._size; //Faz o carousel voltar ao inicio usando o elemento % que é como um modelador para o tamanho do carousel 
    }
};

Next() {
    Carousel._sequence === Carousel._size - 1 ?  Carousel._sequence = 0 :  Carousel._sequence++
    this.UpdateImage()
}

Back() {
    Carousel._sequence === 0 ?Carousel._size = Carousel._size - 1 :  Carousel._sequence--
    this.UpdateImage()
}

  
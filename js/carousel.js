

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    
    static Next(carouselArr){ 
        const carouselDiv = document.getElement('carousel');
        const carouselTitleDiv = document.getElementById('carousel-title');

        carouselArr.push(new Carousel("imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
            carouselArr.push(new Carousel("imagem_2.jpg","Ford a nossa história","#"));
            carouselArr.push(new Carousel("imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));]

           
            for(let i = 0; i < carouselArr.length; i++) {
                let img = document.createElement("img")
                img.setAttribute("src", carouselArr[i].img);
                document.getElementById("carousel").insertAdjacentElement("beforeend", img)

                let texto = document.createElement("a")
                texto.innerHTML = carouselArr[i].titulo
                document.getElementById("carousel-title").insertAdjacentElement("beforeend", texto)            
            }

    }
};

Carousel.Start(carouselArr);
        

 // function  playBotoes(idElementButton) {
    //     document.querySelector(idElementButton).onclick()
    // }
    // const ListaBotoesControle = document.querySelectorAll('.botoes-carousel');
    
    // for(const i = 0; i < botoesControle.length; i++) {
    //     const botao = ListaBotoesControle[i];
    //     const direcao = tecla.classList[1];
    //     const idBotao = `#botao-${direcao}`;

    //     tecla.onclick = function() {
    //         playBotoes(idBotao);
    //     }
    // }
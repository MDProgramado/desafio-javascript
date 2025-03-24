

//carousel

//Array storage class

const carouselArr = [];
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
                Carousel.Next(arr); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(arr); }, 2000);
            }
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }
    
    static Next(carouselArr) {
        const carouselDiv = document.getElementById('carousel');
        const carouselTitleDiv = document.getElementById('carousel-title');

        if(Carousel._sequence === 0) {
            
            const newItems = [
                new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"),
                new Carousel("imagem_2.jpg", "Ford a nossa história", "#"),
                new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html")
            ];
    
            carouselArr.push(...newItems);
    
            carouselArr.forEach(item => {
                Carousel.appendImage(carouselDiv, item.image);
                Carousel.appendTitle(carouselTitleDiv, item.title, item.url);
            });
        }

        // Atualiza a imagem ativa no carrossel
        const images = carouselDiv.getElementsByTagName("img");
        const titles = carouselTitleDiv.getElementsByTagName("a");

        Array.from(images).forEach(img => img.classList.remove("active"));
        Array.from(titles).forEach(title => title.classList.remove("active"));

        images[Carousel._sequence].classList.add("active");
        titles[Carousel._sequence].classList.add("active");

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }

    static appendImage(parent, src) {
        const img = document.createElement("img");
        img.setAttribute("src", src);
        parent.appendChild(img);
    }

    static appendTitle(parent, title, link) {
        const anchor = document.createElement("a");
        anchor.innerHTML = title;
        anchor.setAttribute("href", link);
        parent.appendChild(anchor);
    }
}

// Exemplo de uso:

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
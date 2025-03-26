
//car
let carDict = [];
let lista = [];
class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    
    let list = document.querySelectorAll('input[onchange]:checked')
    lista = Array.from(lista).map(cb => cb.value)

}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){

            carDict[el.value] = carClass;

            GetCarArrPosition() 

                
            
        } else {
            lista = lista.filter(value => valor !== el.value);
            delete carDict[el.value]
          
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(lista.length < 2 || lista.length > 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
   

}

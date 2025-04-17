
//car
let carArr = []; //Array dos carros 
class Car { //Class carros
//O que tem dento da class carro = formulario padrão 
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

 //Procura a posição no array e class car especifico 
function GetCarArrPosition(arr, carClass) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].nome === carClass.nome) //Se o nome do array e o nome do carro for igual, retorne a i
            return i;
    }

    return -1;
}

function SetCarToCompare(el, carClass) { 

    try {
        if(!(carClass instanceof Car)) {
            throw new Error("Você é obrigado a passar um objeto da classe Car para funcionar"); //Checa se o produto é valido 
        }

        if(el.checked) {
            if (carArr.length >= 2) { //Verifica se foi selecionado 2 horas 
                alert("VocÊ só pode comparar 2 veiculos!");
                el.checked = false;
                return;
            }

            carArr.push(carClass); //Se tiver espaço coloca no espaço 

        }

        else {
            let index = GetCarArrPosition(carArr, carClass); //Procura o carro na posição e cria a variavel index 
            if (index !== -1) {
                carArr.splice(index, 1); // Desmarca o carousel 
            }
        }
} catch(error) { //Caso dê algum erro 
    alert(error.message);
}

updateCheckboxesState() //Atualiza o display com as infos 
}



function updateCheckboxesState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //Faz uma lista com todos os input do checkbox
        checkboxes.forEach(checkbox => { checkbox.disabled = !checkbox.checked && carArr.length >= 2; //Se você JÁ marcou esta opção, ela fica sempre liberada Se já tem 2 carros selecionados, 
        // TRAVA todas as opções não marcadas  

    });
}

function ShowCompare() {
    if(carArr.length < 2 || carArr.length > 2) {

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
   carArr.forEach((car, index) => {

    if(index < 2) {
        document.getElementById(`compare_image_${index}`).innerHTML = `<img src="${car.image}" width="12.5rem" alt="imagem do ${car.nome}">`
        document.getElementById(`compare_modelo_${index}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${index}`).textContent = car.alturaCacamba;

        document.getElementById(`compare_alturaveiculo_${index}`).textContent = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${index}`).textContent = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${index}`).textContent = car.capacidadeCarga;
        document.getElementById(`compare_motor_${index}`).textContent = car.motor;

        document.getElementById(`compare_potencia_${index}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${index}`).textContent = car.volumeCacamba;

        document.getElementById(`compare_roda_${index}`).textContent = car.roda;
        document.getElementById(`compare_preco_${index}`).textContent = `R$ ${car.preco}`;

    }
   });

}


//class contato

class contato {
    nome;
    email;
    telefone;
    motivo;
    mensagem;

    constructor() {
        this.updateValues();

        document.getElementById("btnSubmit").onclick = (event) => this.uptadeValuesBtn(event);

        document.getElementsByName("cpf")[0].addEventListener("input", this.applyMaskCPF);
        document.getElementsByName("telefone")[0].addEventListener("input", this.applyMaskTel);
    }

    uptadeValuesBtn(event) {
         if (document.getElementsByName("contato")[0].value !== "") {
            this.uptadeValues();
            console.log(this.debug());
        }
        else{
            alert("Você precisa selecionar um motivo de contato");
        }

        event.preventDefault();
    }

    uptadeValues() {
        this.nome = document.getElementsByName("nome")[0].value;
        this.email = document.getElementsByName("email")[0].value;
        this.telefone = document.getElementsByName("telefone")[0].value;
        this.motivo = document.getElementsByName("contato")[0].value;
        this.mensagemm = document.getElementsByName("mensagem")[0].value;
    }

    debug() {
        return {
            "nome": this.nome,
            "email": this.email,
            "telefone": this.telefone,
            "motivo": this.motivo,
            "mensagem": this.mensagem,
        };
    }

}

function Post(form) {

  const data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  
    console.log(data.debug());
    Enviar(form.nome.value); 
    return false;

}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}



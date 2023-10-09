class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque() {
        switch (this.tipo) {
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia.`)
                break;
            case"guerreiro":
                console.log(`O ${this.tipo} atacou usando espada.`)
                break;
            case"monge":
                console.log(`O ${this.tipo} atacou usando artes marciais.`)
                break;
            case"ninja":
                console.log(`O ${this.tipo} atacou usando shuriken.`)
                break;
            default:
                console.log(`Tipo desconhecido: ${this.tipo}`);
            }
        
    }

}

const Link = new heroi ("Link", "18", "guerreiro")
Link.ataque();
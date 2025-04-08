const ranks = ["E", "D", "C", "B", "A", "S"];

class Jogador {
    constructor(nome) {
        this.cont = 0
        this.requiredXp = 100
        this.nome = nome
        this.level = 1
        this.rank = ranks[this.cont];
        this.exp = 0

        // atributos:

        this.str = 1
        this.res = 1
        this.int = 1

    }

    ganharXp(qtd) {
        this.exp += qtd
        console.log(`O jogador ${this.nome} ganhou ${qtd}+ XP!`)
        this.verificarExp()
    }

    completarMissao(missao) {
        this.ganharXp(missao.exp);
        this.aplicarBuffs(missao.atributos);
        console.log(`A missão ${missao.titulo} foi completada. ${missao.exp}+ adquirido.`);
    }

    levelUp() {
        this.cont++
        console.log(`O jogador subiu de rank! Rank atual: ${this.rank}`)
    }

    verificarExp() {
        while(this.exp >= this.requiredXp && this.cont < ranks.length - 1) {
            this.exp -= this.requiredXp
            this.requiredXp += this.requiredXp
            this.cont++
            this.rank = ranks[this.cont]
            this.levelUp()
        }
    }

    aplicarBuffs(atributos) {
        for(let key in atributos) {
            if(this[key] !== undefined) {
                this[key] += atributos[key]
                console.log(`+${atributos[key]} ${key.toUpperCase()}!`);
            }
        }
    }
}

class Missao {
    constructor(titulo, descricao, exp, atributos = {}) {
        this.titulo = titulo
        this.descricao = descricao
        this.exp = exp;
        this.atributos = atributos
    }
}

const missoes = [
    new Missao("Correr 10KM", "Se parar, será punido!", 150, { res: 2 }),
    new Missao("Treino com pesos", "Desenvolva sua força física.", 200, { str: 3 }),
    new Missao("Estudo tático", "Aprenda estratégias de combate.", 180, { int: 2 }),
    new Missao("Treino completo", "Fortaleça-se em todas as áreas.", 250, { str: 1, res: 1, int: 1 }),
];
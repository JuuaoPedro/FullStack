class Livro {

    constructor(i) {
        this.nome = i.nome
        this.autor = i.autor
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO livro VALUE('${this.nome}','${this.autor}',${this.valor})`
    }

    read() {
        if (this.nome == undefined)
            return `SELECT * FROM livro`
        else
            return `SELECT * FROM livro WHERE nome = '${this.nome}'`
    }

    update() {
        return `UPDATE livro SET nome = '${this.nome}', autor = '${autor}' selecao = '${this.valor}', WHERE nome = '${this.nome}'`
    }

    delete() {
        return `DELETE FROM livro WHERE nome = '${this.nome}'`
    }
}

module.exports = Livro 
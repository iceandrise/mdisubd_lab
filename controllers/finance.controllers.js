const db = require('../db')


class FinanceControllers{

    async createFinance(req, res){
        const {card_number, finance_key, date_at} = req.body
        console.log(card_number, finance_key, date_at)
        const newFinance = await  db.query(
        'INSERT INTO finance (card_number, finance_key, date_at) values($1, $2, $3) RETURNING card_number, finance_key, date_at',
        [card_number, finance_key, date_at])

        res.json(newFinance.rows[0])
    }
    /*async getFinance(req, res){
        const finance = await db.query('SELECT card_number, finance_key, date_at FROM finance')
        res.json(finance.rows)
    }
    async getOneFinance(req, res){
        const id = req.params.id
        const finance = await db.query('SELECT card_number, finance_key, date_at FROM finance where id = $1', [id])
        res.json(finance.rows[0])
    }
    async updateFinance(req, res){
        const {id, card_number, finance_key, date_at} = req.body
        const finance = await db.query('UPDATE finance set card_number=$1, finance_key=$2, date_at=$3 where id=$4 RETURNING card_number, finance_key, date_at',
        [card_number, finance_key, date_at, id])

        res.json(finance.rows[0])
    }

    async deleteFinance(req, res){
        const id = req.params.id
        const finance = await db.query('DELETE FROM finance where id = $1', [id])
        res.json(finance.rows[0])
    }*/
}
module.exports = new FinanceControllers()
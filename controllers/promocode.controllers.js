const db = require('../db')


class PromocodeControllers{

    async createPromocode(req, res){
        const { promocode_password, type_sale} = req.body
        console.log(promocode_password, type_sale)
        const newPromocode = await  db.query(
        'INSERT INTO promocode (promocode_password, type_sale) values($1, $2 ) RETURNING promocode_password, type_sale',
        [promocode_password, type_sale])

        res.json(newPromocode.rows[0])
    }
    async getPromocode(req, res){
        const promocode = await db.query('SELECT promocode_password, type_sale FROM promocode')
        res.json(promocode.rows)
    }
    /*async getOnePromocode(req, res){
        const id = req.params.id
        const promocode = await db.query('SELECT item_id, promocode_password, type_sale FROM promocode where id = $1', [id])
        res.json(promocode.rows[0])
    }
    async updatePromocode(req, res){
        const {id, item_id, promocode_password, type_sale} = req.body
        const promocode = await db.query('UPDATE promocode set item_id=$1, promocode_password=$2, type_sale=$3 where id=$4 RETURNING item_id, promocode_password, type_sale',
        [item_id, promocode_password, type_sale, id])

        res.json(promocode.rows[0])
    }

    async deletePromocode(req, res){
        const id = req.params.id
        const promocode = await db.query('DELETE FROM promocode where id = $1', [id])
        res.json(promocode.rows[0])
    }*/
}
module.exports = new PromocodeControllers()
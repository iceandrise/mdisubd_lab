const db = require('../db')

class ItemControllers{

    async createItem(req, res){
        const {price, material, weight_item, type_item} = req.body
        console.log(price, material, weight_item, type_item)
        const newItem = await  db.query(
        'INSERT INTO item (price, material, weight_item, type_item) values($1, $2, $3, $4) RETURNING price, material, weight_item, type_item',
        [price, material, weight_item, type_item])

        res.json(newItem.rows[0])
    }
    async getItem(req, res){
        const item = await db.query('SELECT price, material, weight_item, type_item FROM item')
        res.json(item.rows)
    }
    async getOneItem(req, res){
        const id = req.params.id
        const item = await db.query('SELECT price, material, weight_item, type_item FROM item where id = $1', [id])
        res.json(item.rows[0])
    }
    async updateItem(req, res){
        const {id, price, material, weight_item, type_item} = req.body
        const item = await db.query('UPDATE item set price=$1, material=$2, weight_item=$3, type_item=$4 where id=$5 RETURNING price, material, weight_item, type_item',
        [price, material, weight_item, type_item, id])

        res.json(item.rows[0])
    }

    async deleteItem(req, res){
        const id = req.params.id
        const item = await db.query('DELETE FROM item where id = $1', [id])
        res.json(item.rows[0])
    }
}
module.exports = new ItemControllers()
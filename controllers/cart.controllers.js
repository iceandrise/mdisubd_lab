const db = require('../db')


class CartControllers{

    async createCart(req, res){
        const {client_id, item_id, price} = req.body
        console.log(client_id, item_id, price)
        const newCart = await  db.query(
        'INSERT INTO cart (client_id, item_id, price) values($1, $2, $3) RETURNING client_id, item_id, price',
        [client_id, item_id, price])

        res.json(newCart.rows[0])
    }
   /* async getACart(req, res){
        const cart = await db.query('SELECT client_id, item_id, price FROM cart')
        res.json(cart.rows)
    }
    async getOneCart(req, res){
        const id = req.params.id
        const cart = await db.query('SELECT client_id, item_id, price FROM adres where id = $1', [id])
        res.json(cart.rows[0])
    }*/
    async updateCart(req, res){
        const {id, client_id, item_id, price} = req.body
        const cart = await db.query('UPDATE cart set client_id=$1, item_id=$2, price=$3 where id=$4 RETURNING client_id, item_id, price',
        [client_id, item_id, price, id])

        res.json(cart.rows[0])
    }

    async deleteCart(req, res){
        const id = req.params.id
        const cart = await db.query('DELETE FROM cart where id = $1', [id])
        res.json(cart.rows[0])
    }
}
module.exports = new CartControllers()
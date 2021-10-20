const db = require('../db')


class OrderControllers{

    async createOrder(req, res){
        const {count_item, price_order, client_id, finance_id, item_id} = req.body
        console.log(count_item, price_order, client_id, finance_id, item_id)
        const newOrder = await  db.query(
        'INSERT INTO order_item (count_item, price_order, client_id, finance_id, item_id) values($1, $2, $3, $4, $5) RETURNING count_item, price_order, client_id, finance_id, item_id', 
        [count_item, price_order, client_id, finance_id, item_id])

        res.json(newOrder.rows[0])
    }
    async getOrders(req, res){
        const order = await db.query('SELECT count_item, price_order, client_id, finance_id, item_id FROM order_item')
        res.json(order.rows)
    }
    async getOneOrder(req, res){
        const id = req.params.id
        const order = await db.query('SELECT count_item, price_order, client_id, finance_id, item_id FROM order_item where id = $1', [id])
        res.json(order.rows[0])
    }
    /*async updateOrder(req, res){
        const {id, count_item, price_order, client_id, address_id, finance_id, item_id} = req.body
        const order = await db.query('UPDATE order_item set count_item=$1, price_order=$2, client_id=$3, address_id=$4, finance_id=$5, item_id=$6 where id=$7 RETURNING fcount_item, price_order, client_id, address_id, finance_id, item_id ',
        [count_item, price_order, client_id, address_id, finance_id, item_id, id])

        res.json(order.rows[0])
    }*/

    async deleteOrder(req, res){
        const id = req.params.id
        const order = await db.query('DELETE FROM order_item where id = $1', [id])
        res.json(order.rows[0])
    }
}

module.exports = new OrderControllers()
const db = require('../db')


class UserControllers{

    async createUser(req, res){
        const {first_name, last_name, phone, email, client_password, address_id} = req.body
        console.log(first_name, last_name, phone, email, client_password, address_id)
        const newPerson = await  db.query(
        'INSERT INTO client (first_name, last_name, phone, email, client_password, address_id) values($1, $2, $3, $4, $5, $6) RETURNING first_name, last_name, phone, email, client_password, address_id', 
        [first_name, last_name,phone, email, client_password, address_id])

        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const user = await db.query('SELECT first_name, last_name, phone, email, client_password, address_id FROM client')
        res.json(user.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT first_name, last_name, phone, email, client_password, address_id FROM client where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res){
        const {id, first_name, last_name, phone, email, client_password, address_id} = req.body
        const user = await db.query('UPDATE client set first_name=$1, last_name=$2, phone=$3, email=$4, client_password=$5, address_id=$6 where id=$7 RETURNING first_name, last_name, phone, email, client_password, address_id ',
        [first_name, last_name, phone, email,  client_password, address_id, id])

        res.json(user.rows[0])
    }

    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM client where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserControllers()
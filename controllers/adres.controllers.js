const db = require('../db')


class AdresControllers{

    async createAdres(req, res){
        console.log(res)

        const {country, city, street, house} = req.body
        console.log(country, city, street,house)
        const newAdres = await  db.query(
        'INSERT INTO adres (country, city, street,house) values($1, $2, $3, $4) RETURNING country, city, street,house',
        [country, city, street,house])

        res.json(newAdres.rows[0])
    }
    async getAdres(req, res){
        const adres = await db.query('SELECT country, city, street, house FROM adres')
        res.json(adres.rows)
    }
    async getOneAdres(req, res){
        const id = req.params.id
        const adres = await db.query('SELECT country, city, street, house FROM adres where id = $1', [id])
        res.json(adres.rows[0])
    }
    async updateAdres(req, res){
        const {id, country, city, street, house} = req.body
        const adres = await db.query('UPDATE adres set country=$1, city=$2, street=$3,house=$4 where id=$5 RETURNING country, city, street,house',
        [country, city,street, house, id])

        res.json(adres.rows[0])
    }

    async deleteAdres(req, res){
        const id = req.params.id
        const adres = await db.query('DELETE FROM adres where id = $1', [id])
        res.json(adres.rows[0])
    }
}
module.exports = new AdresControllers()
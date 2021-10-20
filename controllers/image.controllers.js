const db = require('../db')

class ImageControllers{

    async createImage(req, res){
        const {item_id, url_image} = req.body
        console.log(item_id, url_image)
        const newImage = await  db.query(
        'INSERT INTO image_item (item_id, url_image) values($1, $2) RETURNING item_id, url_image',
        [item_id, url_image])

        res.json(newImage.rows[0])
    }
    async getImage(req, res){
        const image = await db.query('SELECT item_id, url_image FROM image_item')
        res.json(image.rows)
    }

    async deleteImage(req, res){
        const id = req.params.id
        const image = await db.query('DELETE FROM image_item where id = $1', [id])
        res.json(image.rows[0])
    }
}
module.exports = new ImageControllers()
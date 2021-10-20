
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
const userRouter = require('./routes/user.routes')
const adresRouter = require('./routes/adres.routes')
const financeRouter = require('./routes/finance.routes')
const itemRouter = require('./routes/item.routes')
const cartRouter = require('./routes/cart.routes')
const imageRouter = require('./routes/image.routes')
const promocodeRouter = require('./routes/promocode.routes')
const orderRouter = require('./routes/order.routes')
app.use('/api', userRouter)
app.use('/api', adresRouter)
app.use('/api', financeRouter)
app.use('/api', itemRouter)
app.use('/api', cartRouter)
app.use('/api', imageRouter)
app.use('/api', promocodeRouter)
app.use('/api', orderRouter)
app.use(express.json())
app.listen(PORT, callback => console.log('server started on post ${PORT}'))
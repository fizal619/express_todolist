const express = require('express')
const bodyParser = require('body-parser')

const app = express()



app.set('views', './views')
app.set('view engine', 'ejss')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})


app.listen(process.env.PORT, () => {
  console.log('All systems go on 3000')
})

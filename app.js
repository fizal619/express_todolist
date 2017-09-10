const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let todos = [
  {
    item: "do laundry",
    done: true
  },
  {
    item: "do more laundry",
    done: false
  }
]

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/todo/new', (req, res)=>{
  res.render('new_item')
})

app.post('/todo/new', (req, res)=>{
  console.log(req.body.item)
  let newTodo = {
    item: req.body.item,
    done: false
  }
  todos.push(newTodo)
  console.log(todos)
  res.redirect('/')
})

app.get('/', (req, res) => {
  res.render('index', {
    things: todos
  })
})


app.listen(3000, () => {
  console.log('All systems go on 3000')
})

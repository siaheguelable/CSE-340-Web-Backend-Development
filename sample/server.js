/* ************************************
* This is the application server
* *************************************/
const express =require('express')
const app = express()

/* ************************************
* Default Get route
* *************************************/
app.get('/', (req, res) => {
    res.send('Hello World!')
})


/* ************************************
* Server name and port
* *************************************/

const Hostname = 'localhost'
const Port = 3000

/* ************************************
* Log statement to confirm server is running or oprerating
* *************************************/
app.listen(Port, () => {
    console.log(`trial app listening on ${Hostname}:${Port}`)
})

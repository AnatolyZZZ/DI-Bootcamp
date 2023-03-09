const express = require ('express');
const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.text());
const router = express.Router();

app.listen(3001, () => console.log("listening 3001") )

app.get("/api/hello", (req, res) => res.json({message : "Hello from Express"}));
app.post('/api/world', (req, res) => {
    // console.log(req.body);
    res.json(`I resieved your message: ${req.body.msg}`)
})
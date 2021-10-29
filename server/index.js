const express = require('express');
const cors = require('cons');
const PORT = process.env.PORT || 8000;
console.log("boom boom");
const app = express();

app.use(express.json());
app.use(cors());
app.listen(PORT, ()=> {
    console.log("server started");
    }
);




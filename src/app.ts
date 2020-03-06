import express = require('express');

const app = express();

app.set("port", process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

export default app;
const express = require('express');
const app = express();
const { connect } = require('./connection/connection');


connect();

app.use(express.json());

const itemRoutes = require('./routes/itemRoute');
app.use('/api/items', itemRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
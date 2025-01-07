const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/yourDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/rescue', (req, res) => {
    res.render('project-rescue');
});
app.get('/project', (req, res) => {
    res.render('projects');
});

// Include your existing routes here...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

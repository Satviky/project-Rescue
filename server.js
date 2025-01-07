const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// mongoose.connect('mongodb+srv://proj-rescue:<db_password>@proj-rescue1.crazu.mongodb.net/poll?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb+srv://proj-rescue:<db_password>@proj-rescue1.crazu.mongodb.net/?retryWrites=true&w=majority&appName=proj-rescue1', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/rescue', (req, res) => {
    res.render('project-rescue');
});
app.get('/project', (req, res) => {
    res.render('projects');
});
app.get('/polls', (req, res) => {
    res.render('poll');
});

// Include your existing routes here...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

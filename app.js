const express = require('express');
const app = express();
const PORT = 4002;
const dataRouter = require('./Routes/dataRouter')
const authRouter = require('./Routes/auth')

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static('HomePage'));
app.use(express.static('MiniGames'));
app.use(express.static('Public'))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Challange/index.html");
});

app.get("/minigame", (req, res) => {
    res.sendFile(__dirname + "/ChallengeChapter4/Chapter4.html");
});

app.use('/', dataRouter);
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
});
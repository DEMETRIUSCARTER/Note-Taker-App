let express = require('express');
let bodyParser = require('body-parser');

let note = [{ id: 1, body: 'We have text'}, { id: 2, body: 'This is second text'}];

let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('notes', {
        note:note
    });
});

app.post("/addNotes", function (req, res) {

const userNote = {};
userNote.id = Math.random() * 100
userNote.body = req.body.newNote

note.push(userNote);

    res.redirect('/');
});

app.post('/editNote/:id', function (req, res) {
console.log(req.params.id);
    console.log(note);
    const editNotes = note.item => item.id = req.params.id);
    note = editNotes;

    res.redirect('/');
});

app.post('/deleteNote/:id', function (req, res) {
    console.log(req.params.id);
    const deleteNotes = note.filter(item => item.id != req.params.id);
    note = deleteNotes;
    return res.redirect('/');
});

app.listen(3001, function ()
{console.log("App is live at Port 3001")
});


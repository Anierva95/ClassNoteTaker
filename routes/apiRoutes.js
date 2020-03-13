

const noteData = require('../db/db.json');

module.exports = function(app) {
  app.get('/api/notes', function(req, res) {
    res.json(noteData);
  });

  app.post('/api/notes', function(req, res) {
      noteData.push(req.body);
      res.json(noteData);
  });

  app.delete("/api/notes/:id", function (req, res) {
    // Retrieve id from request
    console.log(req.params.id);
    const Id = req.params.id;

    for (note of noteData) {
      if (note.id === Id) {
        let deleteIndex = noteData.indexOf(note);
        noteData.splice(deleteIndex, 1);
        res.json(note);
      }
    }
  })};

const express = require('express'); 
const notesController = require('../controllers/notesController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.get('/get-all-notes/',identifier, notesController.getallNotes);

router.post('/add-note', identifier, notesController.addNote);

router.put('/edit-note/:noteId',identifier, notesController.editNote);
router.put('/update-note-pinned/:noteId',identifier, notesController.updateNotePinned);

router.delete('/delete-note/:noteId',identifier, notesController.deleteNote);
router.get('/search-notes',identifier, notesController.searchNotes);

module.exports = router; 
const Note = require('../models/notesModel');
const { noteSchema } = require('../middlewares/validate');

exports.addNote = async (req, res) => {
  const { title, content, tags } = req.body;
  const {user} = req.user;
  try{
    const {error,value} = noteSchema.validate({title, content});

    if(error){
      return res
      .status(401)
      .json({success: false, message: error.details[0].message});
    }

    const note = new Note({
      title,
      content,
      tags : tags || [],
      userId: user._id,
    });

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note added successfully",
    }
    );
  } catch (error){
    console.error('Error in addNote:', error);
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  };

};

exports.editNote = async (req, res) => {
  const noteId = req.params.noteId;
  const { title, content, tags, isPinned } = req.body;
  const {user} = req.user;
  try{
    const {error,value} = noteSchema.validate({title, content});

    if(error){
      return res
      .status(401)
      .json({success: false, message: error.details[0].message});
    }

    const note = await Note.findOne({_id: noteId, userId: user._id});

    if(!note) {
      return res.status(404).json({
        error: true,
        message: "Note not found"
      });
    }

    if(title) note.title = title;
    if(content) note.content = content;
    if(tags) note.tags = tags;
    if(isPinned) note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note edited successfully",
    }
    );
  } catch (error){
    console.error('Error in editNote:', error);
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  };

};

exports.getallNotes = async (req, res) => {
  const {user} = req.user;

  try{
    const notes = await Note.find({userId: user._id})
      .sort({isPinned: -1});

      return res.json({
        error: false,
        notes,
        message: "All notes retrieved Successfully",
      });
  } catch(error) {
    console.error('Error in editNote:', error);
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};

exports.deleteNote = async (req, res) => {
  const noteId = req.params.noteId;
  const {user} = req.user;
  try{

    const note = await Note.findOne({_id: noteId, userId: user._id});

    if(!note) {
      return res.status(404).json({
        error: true,
        message: "Note not Present"
      });
    }

    await Note.deleteOne({_id: noteId, userId: user._id});

    return res.json({
      error: false,
      note,
      message: "Note deleted successfully",
    });

  } catch (error){
    console.error('Error in editNote:', error);
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  };

};

exports.updateNotePinned = async (req, res) => {
  const noteId = req.params.noteId;
  const {isPinned } = req.body;
  const {user} = req.user;
  try{

    const note = await Note.findOne({_id: noteId, userId: user._id});

    if(!note) {
      return res.status(404).json({
        error: true,
        message: "Note not found"
      });
    }

    note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note Updated successfully",
    }
    );
  } catch (error){
    console.error('Error in editNote:', error);
    return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  };
};

exports.searchNotes = async (req, res) =>{
  const {user} = req.user;
  const { query } = req.query;
  if (!query) {
    return res
    .status(400)
    .json({ error: true, message: "Search query is required" });
    }

    try {
      const matchingNotes = await Note.find({
        userId: user._id,
        $or: [
          { title: { $regex: new RegExp(query, "i") } },
          { content: { $regex: new RegExp(query, "i") } },
        ],
      });

      return res.json({
      error: false,
      notes: matchingNotes,
      message: "Notes matching the search query retrieved successfully",
      });
    } catch (error) {
      return res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
}
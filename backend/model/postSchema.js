const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    Pname: String,
    Pdescription: String,
    Pcategory: String,
    PImage: String
    
}, );

const Post = mongoose.model('fliprusers', PostSchema);

module.exports = Post;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sidebarItemSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Sidebar', sidebarItemSchema);

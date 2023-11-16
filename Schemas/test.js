const { model, Schema } = require('mongoose');
const testSchema = new Schema({
    Guild: String,
    User: String,
  })
module.exports = model('testdata', testSchema);
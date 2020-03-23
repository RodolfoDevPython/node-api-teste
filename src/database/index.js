const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodeTeste", { useNewUrlParser: true , useUnifiedTopology: true } );

module.exports = mongoose;
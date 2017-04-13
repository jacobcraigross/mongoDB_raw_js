var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema ({
   name: String, 
   age: Number, 
   color: String
});

var cat = mongoose.model("Cat", catSchema);

// add a new cat to the DB

var ninja = new cat ({
   name: "Ninja",
   age: 8,
   color: "grey"
});

ninja.save(function(err, cat){
   if (err){
       console.log("NO BUENO");
   } else {
       console.log("SUCCESS CAT DATA!!!");
       console.log(cat);
   }
});

// retrieve all cats from the DB and console.log each once. 

// adding the rest of this code here shortly!!


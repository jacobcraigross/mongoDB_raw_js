var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema ({
   name: String, 
   age: Number, 
   color: String
});

var Cat = mongoose.model("Cat", catSchema);

// add a new cat to the DB

var ninja = new Cat ({
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

// create method! 

Cat.create({
   name: "Sara",
   age: 6, 
   color: "brown"
}, function (err, cat){
   if (err) {
      console.log(err);
   } else {
      console.log(cat);
   }
});

// retrieve all cats from the DB and console.log each once. 

Cat.find({}, function(err, cats){
   if (err) {
      console.log("ERROR!!!");
      console.log(err);
   } else {
      console.log("here are the cats..");
      console.log(cats);
   }
});


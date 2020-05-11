db.COL.updateOne({name: "john"}, {$set: {name: "Ramesh"}})
db.people.updateOne({name:"Sia"},{$set:{hobbies:["cricket","movies","books"]}}) // adding/replacing embedded array
db.COL.updateMany({}, {$set:{job:true}})
db.COL.replaceOne({_id : ObjectId("5eb997d55f25cfa77489166f"),},{name:"John", age:24, city: "Washington", job:false}) // doc replacement

db.people.update({name:"John"}, {job:true}) // do not use update, it replaces the whole document. $set is not required. Instead use replaceOne to replace document.
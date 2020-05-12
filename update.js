db.COL.updateOne({name: "john"}, {$set: {name: "Ramesh"}})
db.people.updateOne({name:"Sia"},{$set:{hobbies:["cricket","movies","books"]}}) // adding/replacing embedded array
db.COL.updateMany({}, {$set:{job:true}})
db.COL.replaceOne({_id : ObjectId("5eb997d55f25cfa77489166f"),},{name:"John", age:24, city: "Washington", job:false}) // doc replacement

db.people.update({name:"John"}, {job:true}) // do not use update, it replaces the whole document. $set is not required. Instead use replaceOne to replace document.

/* update operators */
$inc
db.col.updateOne({name:'a'}, {$inc:{age:2}}) // incrementing age by 2
db.col.updateOne({name:'a'}, {$inc:{age:-2}}) // decreasing age by 2

$min
db.col.updateOne({name:'a'}, {$min:{age:18}}) //update only those whoes age is 18 or above 

$max
db.col.updateOne({name:'a'}, {$max:{age:18}}) //update only those whoes age is less than equal to 18

$mul
db.col.updateOne({name:'a'}, {$mul:{age:2}}) //multiple age by 2

/* Droping field */
$unset
db.col.updateOne({$unset:{phone:""}})

/* renaming field */
$rename
db.col.updateOne({$rename:{age:"totalAge"}})

/* Upsert = update + insert (if not exists) */
upsert:true/false
db.col.updateMany({name:'a'},{$set: {age:25}},{upsert:true})


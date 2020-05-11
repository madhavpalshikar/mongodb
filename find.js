db.COL.find().count() // returns count of matching the records
db.COL.find().pretty() // prints output in readable format
db.COL.find({})
db.COL.findOne({}) // gives first matching doc
db.COL.findOne({name:"Sia"}).hobbies //accessing embedded array or object
db.COL.find({}, {_id:0, name:1}) // projection selecting fields

it // cursor returned by find method for next records

//iterating with forEach
db.COL.find()
    .forEach((p)=>{
        printjson(p)
    })

//accessing embedded properties
db.COL.find({"obj.prop.prop": "value"})

/* Query Selector */
Comparison
Evaluation
logical
Array
Element
Comments
Geospatial

/* query operators */
$eq
$ne
$gt 
$gte 
$lt 
$lte
$in 
$nin

/* logical operators */
$and
$not
$or
$nor

/* Element Operators */
$exists
db.COL.find({prop:{$exists:true}}) // property must exists in document record

$type
db.COL.find({}) 

/* Projection operators */
$
$elementMatch
$meta
$slice

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
db.people.find({$or:[{age:{$gt: 40}},{age:{$lt: 60}}]}).pretty()
db.people.find({$and:[{age:{$gt: 40}},{age:{$lt: 60}}]}).pretty()
/* Element Operators */
$exists
db.COL.find({prop:{$exists:true}}) // property must exists in document record
db.people.find({age: {$exists: true}}).pretty()

$type
db.COL.find({})
db.people.find({age: {$type: "number"}}).pretty()

/* Projection operators */
$
$elementMatch
$meta
$slice


/* Evaluation Operators */
$jsonSchema // schema

$regex // regex for find
db.col.find({name: {$regex: /pattern/}})

$expr // comparing two fiellds
db.col.find({$expr:{$gt:["$field1", "$field2"]}})

/* custom conditions */
//if... then .... else
db.col.find({$expr:{$gt:[{$cond:{if:{$gt:["$field1", 190]}}}]}})

/* Array Operators */
$size // match array size
db.col.find({hobbies:{$size:3}}).pretty()

$all // will not consider order of elements in an array. Without $all it will always match element order in array
db.people.find({rank:{$all:[2,1,3]}})

$elemMatch // match exact exact structure of element in array
db.col.find({hobbies:{$elemMatch: {title: "sport", freq:{$gte: 3}}}})


/* Understanding the cursor */
1. next()
const datacursor = db.col.find()
datacursor.next() // returns next element

2. forEach() // go through each document
datacursor.forEach(e =>{ 
    printjson(e);
})

3. hasNext() // returns boolean value
datacursor.hasNext()

4. Sort()
db.col.find().sort({name: 1, age: -1}) // 1 Acs, -1 Desc

5. Count()
db.col.find().count()

6. skip()
db.col.find().skip(10)

7. limit()
db.col.find().limit(10)

//order: sort-->skip-->limit 



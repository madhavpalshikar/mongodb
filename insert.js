db.COL.insertOne({}, {writeConcern:{w:1, j:true}})
/*{ w: <value>, j: <boolean>, wtimeout: <number> }
Where*,
 w can be an integer | "majority" | , it represents the number of members that must acknowledge the write. Default value is 1.
 j Requests that a write be acknowledged after it is written to the on-disk journal as opposed to just the system memory. Unspecified by default.
wtimeout specifies timeout for the applying the write concern. Unspecified by default.

db.inventory.insert(
    { sku: "abcdxyz", qty : 100, category: "Clothing" },
    { writeConcern: { w: 2, j: true, wtimeout: 5000 } }
)

The above insert’s write concern can be read as follows:  acknowledge this write when ‘at least 2 members of the replica set have written it to their journals within 5000 msecs or return an error’. A write concern value for option was majority, meaning “requests acknowledgment that write operations have propagated to the majority of voting nodes, including the primary.“
*/
    
db.COL.insertOne({name:"john", age:23, city:"New York"})
db.COL.insertMany([], ordered: false) // it will continue if one item failed in insert array. Default it is true it will not continue if one entry fails
db.COL.insertMany([{name:"ram", age:32, city:"California"}, {name:"Sia", age:26, city:"LA"}, {name:"Matt", age:45, city:"LA"},{name:"Roy", age:18, city:"Albama"},{name:"Kane", age:29, city:"New York"}])

//creating index {prop: 1/-1} 1 = asc, -1 desc order. unique : true/false
db.people.createIndex({ name: 1 }, { unique: true })

//creating validator on collection
db.createCollection('categories', { validator: 
                                        { $jsonSchema: 
                                            { bsonType: "object", 
                                              required: ["title"], 
                                              properties: 
                                                { title: { bsonType: "string" }, 
                                                  year: { bsonType: "int", maximum: 2080, minimum: 2000 } 
                                                } 
                                            } 
                                        } 
                                    }
                                )

db.categories.insertOne({title:"Drama", year: NumberInt(2019)})                                
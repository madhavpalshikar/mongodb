//relations - fetching realted data with $lookup
db.people.aggregate([{ "$lookup": 
                            { "from": "hobbies", 
                              "localField": "hobbies", "foreignField": "_id", 
                              "as": "hobs" 
                            } 
                    }])
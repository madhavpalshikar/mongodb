//to sart server
mongod  
--fork // starts service with child process
--quiet // quiet output
--logpath
--dbpath
--help
--wiredTigerCacheSizeGB // cache saze

//to connect mongodb server through commandline
mongo
mongoimport filepath.json -d dbname -c collection --jsonArray --drop // importing file

show dbs // show all databases
use DATABASENAME // select database
db.dropDatabase()
db.stats()
db.COL.stats()
cls // clear screen


Shell 
//------------
help
help admin
show logs 
db.help() // all db related commands
db.COL.help() // commands that you can perfor11m
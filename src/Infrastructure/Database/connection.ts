import { Db, MongoClient } from "mongodb";

const db_uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017'
const db_name = process.env.DB_NAME || 'cleandb'

let cachedDb : Db | null = null

const connectToDb = async () : Promise<Db> => {
    if(cachedDb) return cachedDb
    const client = new MongoClient(db_uri)
    await client.connect()
    cachedDb = client.db(db_name)
    console.log(`Connected to ${db_name}`)
    return cachedDb
}

export default connectToDb
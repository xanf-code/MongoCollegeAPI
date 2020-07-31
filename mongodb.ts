import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://deno:zZr82QcQXfTBFfHG@denocollege.h1pay.mongodb.net/colleges?retryWrites=true&w=majority");

const db = client.database('colleges')

export default db
import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("ScreenStackDB");

async function getMovies() {
    let movies = [];
    try {
        const collection = db.collection("movies");
        const query = {};
        movies = await collection.find(query).toArray();
        movies.forEach(movies => {
            movies._id = movies._id.toString();
        });
    } catch (error) {
        console.log(error.message);
    }
    return movies
}

// Get movie by id
async function getMovie(id) {
    let movie = null;
    try {
        const collection = db.collection("movies");
        const query = { _id: new ObjectId(id) }; // filter by id
        movie = await collection.findOne(query);
        if (!movie) {
            console.log("No movie with id " + id);
        } else {
        movie._id = movie._id.toString(); // convert ObjectId to String
        }
    } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
    }
    return movie;
}

// Create a movie
async function createMovie(movie) {
    try {
        const collection = db.collection("movies");
        const result = await collection.insertOne(movie);
        return result.insertedId.toString();
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

export default {
    getMovies,
    getMovie,
    createMovie
}
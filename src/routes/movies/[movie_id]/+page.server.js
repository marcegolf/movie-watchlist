import db from "$lib/db"

export async function load({ params }) {
    return {
        movie: await db.getMovie(params.movie_id)
    }
}
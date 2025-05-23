import db from "$lib/db";

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();

        let movie = {
            title: data.get("name"),
            year: data.get("year"),
            length: data.get("length"),
            actors: [],
            poster: "/images/placeholder.png"
        }

        await db.createMovie(movie);
        return { success: true}
    }
}
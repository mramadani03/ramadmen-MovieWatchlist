import Movie from "$lib/Movie.svelte";
import db from "$lib/db.js"

export async function load(){
    return {
        movies: await db.getMovies()
    }
}


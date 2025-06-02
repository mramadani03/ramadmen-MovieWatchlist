import Movie from "$lib/Movie.svelte";
import db from "$lib/db.js"

export async function load({ params }) {
    const movie = await db.getMovie(params.movie_id);
  
    if (!movie) {
      return {
        status: 404,
        error: new Error('Movie not found')
      };
    }
  
    return {
      movie
    };
  }
  export const actions = {
  delete: async ({ params }) => {
    const id = params.movie_id;
    const result = await db.deleteMovie(id);
    
    if (result) {
      throw redirect(303, '/movies');
    }
    return { success: false };
  }
};

 
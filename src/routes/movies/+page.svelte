<script>
    import Movie from "$lib/Movie.svelte";

    let { data } = $props();
</script>

<a href="/movies/create"><button class="btn btn-primary"> Add New Movie</button> </a>

<div class="movie-grid">
    {#each data.movies as movie}
        <Movie {movie} />
               
    {/each}
</div>

<style>
    .movie-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 11.8rem));
        gap: 1rem;
        align-items: stretch;
        padding: 1rem;
    }

  
</style>

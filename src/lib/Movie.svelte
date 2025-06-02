<script>
    let { movie } = $props();
</script>

<div class="movie-card">
    <img src={movie.poster} alt={movie.title} />
    <div class="text">
        <a class="movie-link" href={`/movies/${movie._id}`}>
            <h3>{movie.title}</h3>
        </a>
        <div>Jahr: {movie.year}</div>
        <div>Dauer: {movie.length}</div>
    </div>
</div>

<style>
    .movie-card {
        background-color: darkslategray;
        border-radius: 1px;
        overflow: hidden;
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .movie-card img {
        width: 100%;
        height: 260px;
        object-fit: cover;
        display: block;
        margin:0;
    }

    .text {
        font-size: 0.9rem;
        padding: 0.40rem;
        color: white;
    }

    h3 {
        font-size: 0.9rem;
    
    }
</style>

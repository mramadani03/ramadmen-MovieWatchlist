<script>
    import Movie from "$lib/Movie.svelte";
    let {data} = $props();

</script>

<h1>{data.movie.title}</h1>
<p>Jahr: {data.movie.year}</p>
<p>Dauer: {data.movie.length}</p>

{#if data.movie.actors?.length}
<ul>
    {#each data.movie.actors as actor}
      <li>{actor}</li>
    {/each}
  </ul>
{/if}

{#if data.movie.poster}
  <img src={data.movie.poster} alt="Poster von {data.movie.title}" />
{/if}
<form method="POST" action="?/delete" use:enhance class="mt-4">
  <button type="submit" class="btn btn-danger">
    Film löschen
  </button>
</form>
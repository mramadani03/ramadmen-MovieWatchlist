<script>
    let {form} = $props();
</script>

<a href="/movies" class="btn btn-primary">Back</a>

<h1>Add a Movie</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name="title" class="form-control" type="text" />
    </div>
    <div class="mb-3">
    <label for="" class="form-label">Year</label>
    <input name="year" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Length</label>
        <input name="length" class="form-control" type="text" />
        </div>
    <button type="submit" class="btn btn-primary">Add Movie</button>
    </form>

    {#if form?.success}
    <p>Movie created</p>
    {/if}
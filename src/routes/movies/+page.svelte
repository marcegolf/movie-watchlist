<script>
  let { data } = $props();
  import MovieCard from "$lib/components/MovieCard.svelte";
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<a href="/movies/create" class="btn btn-primary" role="button">
  + Add New Movie
</a>
<div class="row">
  {#each data.movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard movie={movie}></MovieCard>
    </div>
  {/each}
</div>


<style>
  a {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
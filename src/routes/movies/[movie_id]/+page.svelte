<script>
  let { data } = $props();
</script>

<div class="container">
  <a href="/movies" class="back-link">Back</a>
  <h1>{data.movie.title}</h1>
  <div class="content">
    <div class="poster">
      <!-- Replace the src with your actual poster file/path -->
        <img src={data.movie.poster} alt="" />
    </div>
    <div class="details">
      <p><span>Jahr:</span> {data.movie.year}</p>
      <p><span>Dauer:</span> {data.movie.length}</p>
      <p><span>Cast:</span></p>
      <ul>
        {#each data.movie.actors as actor}
          <li>{actor}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
    .back-link {
      text-decoration: none;
      color: #999;
      font-size: 14px;
    }
    .back-link:hover {
      color: #fff;
    }
    h1 {
      margin: 10px 0 30px;
      font-size: 36px;
      letter-spacing: 1px;
    }
    .content {
      display: flex;
      gap: 40px;
      align-items: flex-start;
    }
    .poster {
      flex: 0 0 300px;
    }
    .poster img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(255,255,255,0.2);
    }
    .details {
      flex: 1;
    }
    .details p {
      margin: 8px 0;
      font-size: 18px;
    }
    .details p span {
      font-weight: bold;
    }
    .details ul {
      margin: 10px 0 0 20px;
      padding: 0;
      list-style-type: disc;
      font-size: 18px;
    }
    .details ul li {
      margin-bottom: 6px;
    }
  </style>
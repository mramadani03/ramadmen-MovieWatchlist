<script>
  let { children } = $props();
</script>

<nav class="navbar bg-dark px-4 py-2">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link text-white" href="/">ScreenStack</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="/movies">Movies</a>
    </li>
  </ul>
</nav>

<div class="container mt-4">
  {@render children?.()}
</div>


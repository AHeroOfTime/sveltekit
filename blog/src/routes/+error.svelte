<script>
  import { page } from '$app/stores'
  // $: console.log('page', $page);
</script>

<h1>Oops!</h1>
<h2>{$page.status}</h2>
<p>{$page.error?.message}</p>

<!-- whenever an error is found, it will look up the tree to find the nearest error page, if none is found it will display the default -->
<script>
  export let data;

  $: ({ episode, user } = data)
  // console.log(data);
</script>

<h2>{user.email}</h2>

<h1>{episode.title}</h1>

{@html episode.html}
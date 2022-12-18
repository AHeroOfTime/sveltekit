<script>
  import Test from '$lib/Test.svelte';
  import '$db/start';
  export let data;

  $: ({ latest_episode } = data)
  // const { latest_episode } = data;
  // $: makes ^^ reactive, so you get fresh data when the data is updated
</script>

<h3>{latest_episode.title}</h3>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- <a href="/about">About Us</a> -->

<Test />
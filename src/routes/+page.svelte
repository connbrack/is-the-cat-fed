<script>
  import { onMount } from 'svelte';
  import { Badge, Spinner } from 'flowbite-svelte';
  import '$styles/main.css';
  import '$styles/button.css';

  const api = `https://is-the-cat-fed-api.vercel.app`;
  let loading = true;
  let stats;

  function hoursPassed(timestamp) {
    const pastDate = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - pastDate;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    return Math.floor(diffInHours);
  }

  async function howlong(endpoint, type) {
    try {
      const response = await fetch(`${api}/${endpoint}?limit=1&type=${type}`);
      const data = await response.json();
      const timestamp = data[0].timestamp;
      console.log(type, data);
      return hoursPassed(timestamp);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  onMount(async () => {
    const results = await Promise.all([
      howlong('fed', 'wet'),
      howlong('fed', 'dry'),
      howlong('med', 'pills'),
      howlong('log', 'poop'),
      howlong('log', 'piss')
    ]);
    stats = {
      wet: results[0],
      dry: results[1],
      med: results[2],
      poop: results[3],
      piss: results[4]
    };
    loading = false;
  });
</script>

<div class="main-container">
  <h1>🟢 Pishi's Stats 🟢</h1>
  <img src="cat.jpg" alt="Cat" width={200} />
  {#if loading}
    <div class="spinner"><Spinner size={8} /></div>
  {:else}
    <p><span class="fancy">{stats.dry} hrs</span> since last dry food</p>
    <p><span class="fancy">{stats.wet} hrs</span> since last wet food</p>
    <p><span class="fancy">{stats.med} hrs</span> since her last pills</p>
    <p><span class="fancy">{stats.piss} hrs</span> since her last piss</p>
    <p><span class="fancy">{stats.poop} hrs</span> since her last poop</p>
  {/if}
</div>

<style>
  .spinner {
    padding-top: 3em;
  }

  p {
    padding-top: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
  }

  .fancy {
    position: relative;
    white-space: nowrap;
    &:after {
      --deco-height: 0.3125em;
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(var(--deco-height) * -0.625);
      height: var(--deco-height);
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='%2300FDCF' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      background-size: auto 100%;
      background-repeat: round;
      background-position: 0em;
    }
  }
</style>

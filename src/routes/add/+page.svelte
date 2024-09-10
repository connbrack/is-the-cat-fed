<script>
  import '$styles/main.css';
  import '$styles/button.css';

  const api = `https://is-the-cat-fed-api.vercel.app`;

  async function submit(endpoint, type) {
    try {
      await fetch(api + `/${endpoint}?type=${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: `${type}` })
      });
    } catch (error) {
      console.error('POST request error:', error);
    }
  }
</script>

<div class="main-container">
  <h1>🏆 Whats new with pishi ?? 🏆</h1>
  <img src="cat.jpg" alt="Cat" width={200} />
  <div class="button">
    <button class="button-53" on:click={() => submit('fed', 'wet')}> I fed her wet food!! </button>
  </div>
  <div class="button">
    <button class="button-53" on:click={() => submit('fed', 'dry')}> I fed her dry food!! </button>
  </div>
  <div class="button">
    <button class="button-53" on:click={() => submit('med', 'pills')}> I gave her meds!! </button>
  </div>
  <div class="button">
    <button class="button-53" on:click={() => submit('log', 'piss')}> She peed !! </button>
  </div>
  <div class="button">
    <button class="button-53" on:click={() => submit('log', 'poop')}> She pooped !! </button>
  </div>
</div>

<style>
  .button {
    padding-top: 15px;
    min-width: 200px;
    max-width: 300px;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import '$styles/main.css';
  import '$styles/button.css';

  const isFedAPI = 'https://is-the-cat-fed-api.vercel.app/isfed';
  const fedAPI = 'https://is-the-cat-fed-api.vercel.app/fed';

  let isFed = false;
  let loading = true;

  async function fed() {
    try {
      await fetch(fedAPI, {
        method: 'POST'
      });
    } catch (error) {
      console.error('POST request error:', error);
    }
  }

  async function notfed() {
    try {
      await fetch(fedAPI, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('DELETE request error:', error);
    }
  }

  async function toggleFed() {
    if (isFed === true) {
      notfed();
    } else {
      fed();
    }
    isFed = !isFed;
  }

  onMount(async () => {
    try {
      const response = await fetch(isFedAPI);
      const data = await response.json();
      console.log(data);
      isFed = data.isFed;
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      loading = false;
    }
  });
</script>

<div class="main-container">
  {#if loading}
    <div>loading...</div>
  {:else}
    <h1>whats up with our cat ???</h1>
    <img src="cat.jpg" alt="Cat" width={300} />
    <!--<div class="message1">-->
    <!--  {isFed ? Text.fedTitle : Text.unfedTitle}-->
    <!--</div>-->
    <!--<h2 class="message2">-->
    <!--  {isFed ? Text.fedMessage : Text.unfedMessage}-->
    <!--</h2>-->
    <div class="button">
      <button class="button-53" on:click={toggleFed}> I fed her wet food!! </button>
    </div>
    <div class="button">
      <button class="button-53" on:click={toggleFed}> I fed her dry food!! </button>
    </div>
    <div class="button">
      <button class="button-53" on:click={toggleFed}> I gave her meds!! </button>
    </div>
    <div class="button">
      <button class="button-53" on:click={toggleFed}> She peed !! </button>
    </div>
    <div class="button">
      <button class="button-53" on:click={toggleFed}> She pooped !! </button>
    </div>
  {/if}
</div>

<style>
  .button {
    padding-top: 15px;
    min-width: 200px;
  }
</style>

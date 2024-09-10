<script>
  import '$styles/main.css';
  import '$styles/button.css';
  import { Toast } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import { CheckCircleOutline } from 'flowbite-svelte-icons';

  const api = `https://is-the-cat-fed-api.vercel.app`;
  let toastStatus = false;
  let counter = 3;

  function triggerToast() {
    toastStatus = true;
    counter = 3;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    toastStatus = false;
  }

  async function submit(endpoint, type) {
    try {
      triggerToast();
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
  <div class="toast">
    <Toast
      dismissable={false}
      contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700"
      transition={slide}
      bind:toastStatus
    >
      <CheckCircleOutline class="h-5 w-5 text-primary-600 dark:text-primary-500" />
      <div class="ps-4 text-sm font-normal">Submitted !!</div>
    </Toast>
  </div>
</div>

<style>
  .toast {
    position: fixed;
    bottom: 80px; /* Adjust position from bottom */
  }
  .button {
    padding-top: 15px;
    min-width: 200px;
    max-width: 300px;
  }
</style>

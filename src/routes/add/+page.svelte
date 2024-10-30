<script>
  import NewButton from '$components/NewButton.svelte';
  import '$styles/main.css';
  import '$styles/button.css';
  import { Toast } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import { CloseCircleSolid } from 'flowbite-svelte-icons';

  const api = `https://is-the-cat-fed-api.vercel.app`;
  let buttons = [
    { button: 'wet', submitted: false },
    { button: 'dry', submitted: false },
    { button: 'pills', submitted: false },
    { button: 'piss', submitted: false },
    { button: 'poop', submitted: false }
  ];

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

  async function submit(index, endpoint, type) {
    buttons[index].submitted = true;
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
      triggerToast();
    }
  }
</script>

<div class="main-container">
  <h1>🏆 Whats new with pishi ?? 🏆</h1>
  <img src="cat.jpg" alt="Cat" width={200} />

  <div class="button">
    <NewButton submitted={buttons[0].submitted} on:click={() => submit(0, 'fed', 'wet')}
      >I fed her wet food!!</NewButton
    >
  </div>
  <div class="button">
    <NewButton submitted={buttons[1].submitted} on:click={() => submit(1, 'fed', 'dry')}>
      I fed her dry food!!
    </NewButton>
  </div>
  <div class="button">
    <NewButton submitted={buttons[2].submitted} on:click={() => submit(2, 'med', 'pills')}>
      I gave her meds!!
    </NewButton>
  </div>
  <div class="button">
    <NewButton submitted={buttons[3].submitted} on:click={() => submit(3, 'log', 'piss')}>
      She peed !!
    </NewButton>
  </div>
  <div class="button">
    <NewButton submitted={buttons[4].submitted} on:click={() => submit(4, 'log', 'poop')}>
      She pooped !!
    </NewButton>
  </div>
  <div class="toast">
    <Toast color="red" dismissable={false} transition={slide} bind:toastStatus>
      <svelte:fragment slot="icon">
        <CloseCircleSolid class="h-5 w-5" />
        <span class="sr-only">Error icon</span>
      </svelte:fragment>
      Oups, something went wrong
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
  }
</style>

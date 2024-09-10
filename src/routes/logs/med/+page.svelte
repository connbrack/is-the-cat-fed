<script>
  import { onMount } from 'svelte';
  import {
    Spinner,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from 'flowbite-svelte';
  import '$styles/main.css';
  import '$styles/button.css';

  const limit = 20;
  const api = `https://is-the-cat-fed-api.vercel.app`;

  let fedlogs = [];
  let loading = true;

  function convertDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('default', { day: '2-digit', month: 'short' });
    const formattedTime = date.toLocaleTimeString('default', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return `${formattedDate} - ${formattedTime}`;
  }

  async function deleteEntry(id) {
    try {
      await fetch(api + '/med', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: [id] })
      });
      await loadData();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  async function loadData() {
    try {
      const response = await fetch(api + `/med?limit=${limit}`);
      const data = await response.json();
      fedlogs = data;
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      loading = false;
    }
  }

  onMount(async () => {
    loadData();
  });
</script>

<div class="main-container">
  <h1>💊 The med Log 💊</h1>

  {#if loading}
    <Spinner size={8} />
  {:else}
      <Table striped={true}>
        <TableHead>
          <TableHeadCell>type</TableHeadCell>
          <TableHeadCell>when</TableHeadCell>
          <TableHeadCell class="!p-4"></TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          {#each fedlogs as item}
            <TableBodyRow>
              <TableBodyCell>{item.medtype}</TableBodyCell>
              <TableBodyCell>{convertDate(item.timestamp)}</TableBodyCell>
              <TableBodyCell>
                <button
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  on:click={() => deleteEntry(item.id)}>Delete</button
                >
              </TableBodyCell>
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
  {/if}
</div>

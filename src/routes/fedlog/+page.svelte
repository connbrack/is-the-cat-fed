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
    Checkbox,
    TableSearch
  } from 'flowbite-svelte';
  import '$styles/main.css';
  import '$styles/button.css';

  const fedAPI = 'https://is-the-cat-fed-api.vercel.app/fed';

  let fedlogs = {};
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

  onMount(async () => {
    try {
      const response = await fetch(fedAPI);
      const data = await response.json();
      console.log(data);
      fedlogs = data;
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      loading = false;
    }
  });
</script>

<div class="main-container">
  <h1>whats up with our cat ???</h1>
  <h6>🦞 The Fed Log 🦞</h6>

  {#if loading}
    <Spinner size={8} />
  {:else}
    <Table striped={true}>
      <TableHead>
        <TableHeadCell class="!p-4"></TableHeadCell>
        <TableHeadCell>wet/dry</TableHeadCell>
        <TableHeadCell>when</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        {#each fedlogs as item}
          <TableBodyRow>
            <TableBodyCell class="!p-4">
              <Checkbox />
            </TableBodyCell>
            <TableBodyCell>{item.fedtype}</TableBodyCell>
            <TableBodyCell>{convertDate(item.timestamp)}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  {/if}
</div>

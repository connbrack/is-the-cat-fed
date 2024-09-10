<script>
  import { Navbar, NavBrand } from 'flowbite-svelte';
</script>

<Navbar let:NavContainer color="primary">
  <NavBrand href="/">
    <img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Is The Cat Fed ??</span>
  </NavBrand>
</Navbar>


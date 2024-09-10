<script>
  import '../app.css';
  import BottomNav from '$components/BottomNav.svelte';
  import Navbar from '$components/Navbar.svelte';
</script>

<div class="container">
  <Navbar />
  <div class="content">
    <slot></slot>
  </div>
  <div>
    <BottomNav />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    margin-top: 30px;
    margin: 0 auto;
    max-width: 400px;

    text-align: center;
  }
  .content {
    flex: .9; /* Takes up remaining space */
    overflow-y: auto; /* Enables vertical scrolling */
  }
</style>

<script>
  import '../app.css';
  import BottomNav from '$components/BottomNav.svelte';
  import Navbar from '$components/Navbar.svelte';
</script>

<div class="container">
  <div class="top-nav">
    <Navbar />
  </div>
  <div class="content">
    <slot></slot>
  </div>
  <div class="bottom-nav">
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
    text-align: center;
    overflow-x: hidden;
  }
  .content {
    flex: 100vh;
    margin-top: 60px;
    overflow-y: auto;
  }
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
</style>

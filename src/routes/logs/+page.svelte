<script>
  import '$styles/main.css';
  import '$styles/button.css';
</script>

<div class="main-container">
  <h1>🟢 Pishi's logs 🟢</h1>
  <img src="cat.jpg" alt="Cat" width={200} />
  <div class="button_container"><a href="/logs/fed">🥣 Food</a></div>
  <div class="button_container"><a href="/logs/med">💊 Meds</a></div>
  <div class="button_container"><a href="/logs/log">💩 Bowels</a></div>
</div>

<style>
  .button_container {
    padding-top: 2em;
  }
a {
  min-width: 200px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 3px solid #FF0072;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #FF0072;
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
}

a:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #FF0072;
  z-index: -1;
}

a:hover, a:focus {
  color: white;
}

a:hover:before, a:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

a:active {
  transform: scale(0.9);
}
</style>

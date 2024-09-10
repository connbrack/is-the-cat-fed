<script>
  import { BottomNav, BottomNavItem } from 'flowbite-svelte';
  import { ListOutline, BookOpenOutline, CirclePlusOutline } from 'flowbite-svelte-icons';
</script>

<BottomNav position="absolute" classInner="grid-cols-3">
  <BottomNavItem btnName="Logs" href="/logs">
    <BookOpenOutline
      class="mb-1 h-6 w-6 text-pink-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
    />
  </BottomNavItem>
  <BottomNavItem btnName="New" href="/add">
    <CirclePlusOutline
      class="mb-1 h-6 w-6 text-pink-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
    />
  </BottomNavItem>
  <BottomNavItem btnName="Stats" href="/">
    <ListOutline
      class="mb-1 h-6 w-6 text-pink-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
    />
  </BottomNavItem>
</BottomNav>

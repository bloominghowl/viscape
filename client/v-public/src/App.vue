<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import about from './views/Sidebar.vue';
</script>


  <template>
    <div id="app">
      <about />
      <RouterView />
    </div>
  </template>
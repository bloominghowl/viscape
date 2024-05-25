<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import sidebar from './views/Sidebar.vue';
import search from './views/search.vue';
</script>


  <template>
    <div id="app">
      <sidebar />
      <search />
      <RouterView />
    </div>
  </template>
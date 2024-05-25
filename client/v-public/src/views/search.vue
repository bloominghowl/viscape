<script setup lang="ts"></script>
<template>
<form class="flex items-center justify-center fixed top-3 left-0 w-full h-10 bg-transparent z-50">
  <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div class="relative w-1/2">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input type="search" id="search" class="block w-full h-5 p-4 ps-10 text-sm text-gray-900 border border-orange-200 rounded-lg bg-gray-300 focus:ring-indigo-200 focus:border-indigo-100 dark:bg-orange-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for files" required />
    <button type="submit" class="text-white absolute end-1 bottom-0.5 h-50 bg-indigo-800 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
  </div>
</form>
</template>
<template>
  <div>
    <div class="flex">
      <div
        :class="isOpen ? 'w-38' : 'w-64'"
        class="flex flex-col h-screen p-3 duration-300 bg-green-700 shadow">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <!-- TEKS JUDUL SIDEBAR -->
            <h2 class="text-xl font-bold text-white">PEMDES DARMAJI</h2>
            <!-- BUTTON JUSTIFY -->
            <button @click="isOpen = !isOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <!-- SEARCH -->
          <!-- <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" class="p-2 focus:outline-none focus:ring">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              class="w-full py-2 pl-10 text-sm rounded-md focus:outline-none" />
          </div> -->
          <div class="flex-1">
            <ul class="pt-2 pb-4 space-y-1 text-sm">
              <!-- TEKS MENU -->
              <p class="text-gray-100 mt-5 mb-2">MENU</p>
              <!-- MENU DASHBOARD -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/dashboard"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f1f5f9"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100"
                    id="dashboard">
                    <path
                      d="M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z"></path>
                  </svg>
                  <span class="text-gray-100"> Dashboard </span>
                </NuxtLink>
              </li>

              <!-- MENU LOGOUT -->
              <li class="rounded-sm">
                <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-gray-100">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                  <span class="text-gray-100"> Logout </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const isOpen = ref(false);
</script>

<style lang="scss" scoped></style>

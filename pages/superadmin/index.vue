<template>
  <div>
    <NuxtLayout name="sidebar">
      <p class="font-semibold text-center mt-2 mb-5 text-teal-800 text-2xl">Dashboard</p>
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-lg">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total pegawai
          </div>
          <div class="mt-1 text-2xl text-teal-700 font-semibold text-gray-900">20 Org</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-lg">
          <div class="text-sm text-teal-700 font-medium text-gray-500 truncate">
            Jumlah masuk
          </div>
          <div class="mt-1 text-2xl text-teal-700 font-semibold text-gray-900">10 Org</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-lg">
          <div class="text-sm  text-teal-700 font-medium text-gray-500 truncate">
            Jumlah alpha
          </div>
          <div class="mt-1 text-2xl text-teal-700 font-semibold text-gray-900">10 Org</div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped></style>

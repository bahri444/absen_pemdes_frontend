<template>
  <div>
    <NuxtLayout name="sidebar"
      ><div
        class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-700">
        <div class="w-full">
          <div class="g-0 lg:flex lg:flex-wrap justify-center">
            <!-- Left column container-->
            <div class="px-4 md:px-0 lg:w-4/12 shadow-xl">
              <div class="md:mx-6 md:p-12">
                <!--Logo-->
                <div class="text-center">
                  <h4
                    class="mb-12 mt-1 pb-1 text-xl font-semibold text-teal-600">
                    Update pegawai
                  </h4>
                </div>

                <form @submit.prevent="PostUpdatePegawai">
                  <!--nama pegawai-->
                  <div class="mb-4" data-te-input-wrapper-init>
                    <label
                      for="selectPegawai"
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1"
                      >Nama Lengkap
                    </label>
                    <select
                      id="selectPegawai"
                      v-model="pegawaiUpdate.user_uuid"
                      class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500">
                      <!-- class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-teal-500 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"> -->
                      <option :value="pegawaiUpdate.user_uuid" selected>
                        tes
                      </option>
                      <option v-for="row in users" :value="row.user_uuid">
                        {{ (row.user_uuid, row.nama_lengkap) }}
                      </option>
                    </select>
                  </div>

                  <!--NIP-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <label
                      for="inputNip"
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1"
                      >Nip
                    </label>
                    <input
                      type="text"
                      v-model="pegawaiUpdate.nip"
                      class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500"
                      id="inputNip"
                      placeholder="nip" />
                  </div>

                  <!--Jenis kelamin-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <label
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                      Jenis kelamin
                    </label>

                    <div id="app">
                      <input
                        type="radio"
                        name="test_id"
                        v-model="pegawaiUpdate.jenis_kelamin"
                        @change="onChange($event)"
                        value="laki-laki" />
                      <label
                        for=""
                        class="text-teal-500 font-bold ml-2 text-sm">
                        Laki-laki
                      </label>
                      <input
                        type="radio"
                        name="test_id"
                        class="ml-5"
                        v-model="pegawaiUpdate.jenis_kelamin"
                        @change="onChange($event)"
                        value="perempuan" />
                      <label class="text-teal-500 font-bold ml-2 text-sm">
                        Perempuan
                      </label>
                    </div>
                  </div>

                  <!--alamat-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <label
                      for="inputAlamat"
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                      Alamat
                    </label>
                    <input
                      type="text"
                      v-model="pegawaiUpdate.alamat"
                      class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500"
                      id="inputAlamat"
                      placeholder="alamat" />
                  </div>

                  <!-- dusun-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <label
                      for="inputDusun"
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                      Dusun
                    </label>
                    <input
                      type="text"
                      v-model="pegawaiUpdate.dusun"
                      class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500"
                      id="inputDusun"
                      placeholder="dusun" />
                  </div>

                  <!-- Jabata-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <label
                      for="selectJabatan"
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                      Jabatan
                    </label>
                    <select
                      id="selectJabatan"
                      v-model="pegawaiUpdate.jabatan"
                      name="pilih jabatan"
                      class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500">
                      <option :value="pegawaiUpdate.jabatan" selected>
                        {{ pegawaiUpdate.jabatan }}
                      </option>
                      <option value="kades">Kades</option>
                      <option value="sekdes">Sekdes</option>
                      <option value="kaur">Kaur</option>
                      <option value="kasi">Kasi</option>
                      <option value="kadus">Kadus</option>
                    </select>
                  </div>

                  <!-- Nomor telepon-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <label
                      for="inputTelepon"
                      class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                      Telepon
                    </label>
                    <input
                      type="text"
                      v-model="pegawaiUpdate.nomor_telepon"
                      class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500"
                      id="inputTelepon"
                      placeholder="telepon" />
                  </div>

                  <!-- link and button-->
                  <div class="flex items-center justify-between pb-6">
                    <NuxtLink
                      to="/superadmin/pegawai"
                      class="text-sm font-semibold leading-6 text-teal-50 bg-red-500 rounded-md flex items-center px-2 py-1 space-x-3 hover:bg-red-400 to-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="#f1f5f9"
                        viewBox="0 0 64 64"
                        id="back">
                        <path
                          d="M20.86 33a2 2 0 0 1-1.26-.45L8.74 23.58a2 2 0 1 1 2.54-3.09l10.86 8.93a2 2 0 0 1 .27 2.81 2 2 0 0 1-1.55.77Z"></path>
                        <path
                          d="M10 24a2 2 0 0 1-1.27-3.55l10.87-8.88a2 2 0 0 1 2.54 3.09l-10.86 8.92A2 2 0 0 1 10 24Z"></path>
                        <path
                          d="M39.57 52.89H10a2 2 0 1 1 0-4h29.57a12.43 12.43 0 0 0 0-24.85H10a2 2 0 1 1 0-4h29.57a16.43 16.43 0 0 1 0 32.85Z"></path>
                      </svg>
                      Back
                    </NuxtLink>
                    <button
                      type="submit"
                      class="text-sm font-semibold leading-6 text-teal-50 bg-teal-500 rounded-md flex items-center px-2 py-1 space-x-3 hover:bg-teal-600 to-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#f1f5f9"
                        viewBox="0 0 100 100"
                        id="save">
                        <path
                          d="M82.4 24.3l-9.8-9.8c-.4-.4-.9-.6-1.4-.6H19c-1.1 0-2 .9-2 2v68c0 1.1.9 2 2 2h62c1.1 0 2-.9 2-2V25.8c0-.6-.2-1.1-.6-1.5zM31 18h38v32H31V18zm48 64H21V18h6v34c0 1.1.9 2 2 2h42c1.1 0 2-.9 2-2V20.6l6 6V82zM64.8 24.5v19c0 1.1-.9 2-2 2s-2-.9-2-2v-19c0-1.1.9-2 2-2s2 .9 2 2z"></path>
                        <path
                          d="M1504-930V754H-280V-930h1784m8-8H-288V762h1800V-938z"></path>
                      </svg>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
  import axios from "axios";
  const urlapi = "https://absenpemdes.ukmtechcode.com";
  export default {
    name: "UpdatePegawai",
    data() {
      return {
        getByUuid: "",
        pegawaiUpdate: {},
        users: {},
      };
    },
    mounted() {
      this.getByUuid = this.$route.params.uuid;
      this.GetPegawaiByUuid(this.getByUuid);
      this.GetAllUser(); //get data users
    },
    methods: {
      GetPegawaiByUuid(getByUuid) {
        axios.get(urlapi + `/api/pegawaibyuuid/${getByUuid}`).then((res) => {
          this.pegawaiUpdate = res.data;
        });
      },

      //   function listener jenis_kelamin
      onChange(event) {
        var data = event.target.value;
      },

      //   get all users
      GetAllUser() {
        axios.get(urlapi + "/api/users").then((res) => {
          this.users = res.data;
        });
      },
      PostUpdatePegawai() {
        axios
          .put(
            urlapi + `/api/updatepegawai/${this.getByUuid}`,
            this.pegawaiUpdate
          )
          .then((res) => {
            alert("data berhasil di update", res);
          });
      },
    },
  };
</script>

<style lang="scss" scoped></style>

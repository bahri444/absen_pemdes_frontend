<template>
  <NuxtLayout name="sidebar">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-700">
      <div class="w-full">
        <div class="g-0 lg:flex lg:flex-wrap justify-center">
          <!-- Left column container-->
          <div class="px-4 md:px-0 lg:w-4/12 shadow-xl">
            <div class="md:mx-6 md:p-12">
              <!--Logo-->
              <div class="text-center">
                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-teal-600">
                  Register akun
                </h4>
              </div>

              <form @submit.prevent="RegisterAkun">
                <!--NIP-->
                <div class="relative mb-4" data-te-input-wrapper-init>
                  <label
                    for="inputNamaLengkap"
                    class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                    Nama lengkap
                  </label>
                  <input
                    type="text"
                    v-model="users.nama_lengkap"
                    class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500"
                    id="inputNamaLengkap"
                    placeholder="nama lengkap" />
                </div>

                <!-- Nomor telepon-->
                <div class="relative mb-4" data-te-input-wrapper-init>
                  <label
                    for="inputpassword"
                    class="block text-teal-500 text-sm font-bold md:text-left mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    v-model="users.password"
                    class="bg-white appearance-none border-2 border-teal-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-teal-50 focus:border-teal-500"
                    id="inputpassword"
                    placeholder="telepon" />
                </div>

                <!-- link and button-->
                <div class="flex items-center justify-between pb-6">
                  <NuxtLink
                    to="/superadmin/users"
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
</template>

<script>
  import axios from "axios";

  const urlapi = "http://127.0.0.1:8000";
  export default {
    name: "akun user",
    data() {
      return {
        users: {
          nama_lengkap: "",
          password: "",
        },
      };
    },
    methods: {
      RegisterAkun() {
        axios.post(urlapi + "/api/register", this.users).then((res) => {
          this.users = res.data;
          alert("data pegawai berhasil di tambahkan");
          this.users.nama_lengkap = "";
          this.users.password = "";
        });
      },
    },
  };
</script>

<style lang="scss" scoped></style>

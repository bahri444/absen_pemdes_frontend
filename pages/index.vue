<template>
  <div
    class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-700 mt-24">
    <div class="w-full">
      <div class="g-0 lg:flex lg:flex-wrap justify-center">
        <!-- Left column container-->
        <div class="px-4 md:px-0 lg:w-4/12 shadow-xl">
          <div class="md:mx-6 md:p-12">
            <!--Logo-->
            <div class="text-center">
              <img
                class="mx-auto w-32"
                src="~/assets/images/lotengkab.jpg"
                alt="logo" />
              <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-teal-600">
                Absen Pemdes Darmaji
              </h4>
            </div>

            <form>
              <p class="mb-4">Please login to your account</p>
              <!--Username input-->
              <div class="relative mb-4" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border ring-2 ring-teal-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-200 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Username" />
                <label
                  for="exampleFormControlInput1"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-teal-500 transition-all duration-200 ease-out peer-focus:-tranteal-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-tranteal-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-teal-500 dark:peer-focus:text-primary"
                  >Nama lengkap
                </label>
              </div>

              <!--Password input-->
              <div class="relative mb-4" data-te-input-wrapper-init>
                <input
                  type="password"
                  class="peer block min-h-[auto] w-full rounded border ring-2 ring-teal-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput11"
                  placeholder="Password" />
                <label
                  for="exampleFormControlInput11"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-teal-500 transition-all duration-200 ease-out peer-focus:-tranteal-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-tranteal-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-teal-500 dark:peer-focus:text-primary"
                  >Password
                </label>
              </div>

              <!--Submit button-->
              <div class="mb-12 pb-1 pt-1 text-center">
                <button
                  class="mb-3 inline-block w-full bg-teal-600 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Log in
                </button>

                <!--Forgot password link-->
                <a href="#!">Forgot password?</a>
              </div>

              <!--Register button-->
              <div class="flex items-center justify-between pb-6">
                <p class="mb-0 mr-2">Don't have an account?</p>
                <button
                  type="button"
                  class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-teal-800 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="relative min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" class="hidden" />
    <!-- LOGO -->
    <label
      for="menu-open"
      class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
      data-dev-hint="floating action button">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <!-- END LOGO -->

    <!-- NAVBAR VERSI TAB -->
    <header
      class="bg-teal-600 text-gray-100 flex justify-between md:hidden"
      data-dev-hint="mobile menu bar">
      <a
        href="#"
        class="block p-4 text-white font-bold whitespace-nowrap truncate">
        PEMDES DARMAJI
      </a>

      <label
        for="menu-open"
        id="mobile-menu-button"
        class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
        <svg
          id="menu-open-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          id="menu-close-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </header>
    <!-- END-NAVBAR VERSI TAB -->

    <!-- NAVBAR VERSI LAPTOP -->

    <aside
      id="sidebar"
      class="bg-teal-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto"
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
      <div
        class="flex flex-col space-y-6"
        data-dev-hint="optional div for having an extra footer navigation">
        <a href="#" class="text-white items-center mx-auto space-x-2 px-4">
          <img
            src="~/assets/images/lotengkab.png"
            class="mx-auto"
            alt="404"
            width="80"
            height="80" />
          <span class="text-1xl font-extrabold whitespace-nowrap truncate">
            PEMDES DARMAJI
          </span>
        </a>

        <nav data-dev-hint="main navigation">
          <!-- MENU DASHBOARD -->
          <NuxtLink
            to="/superadmin"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f1f5f9"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-100"
              id="dashboard">
              <path
                d="M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z"></path>
            </svg>
            <span class="text-gray-100 hover:text-teal-800 text-sm">
              Dashboard
            </span>
          </NuxtLink>
          <!-- MENU ABSEN SEKARANG -->
          <NuxtLink
            to="/superadmin/absen/absen_now"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              fill="#f1f5f9"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-100"
              id="calendar11">
              <path
                d="M256.67 221.034v154.773h-38.538v-82.979c0-11.98-.286-19.183-.859-21.605-.572-2.42-2.145-4.253-4.723-5.498-2.573-1.24-8.315-1.863-17.217-1.863h-3.816v-18.045c18.631-4.017 32.782-12.279 42.449-24.783H256.67zM358.692 221.034v154.773h-38.538v-82.979c0-11.98-.286-19.183-.859-21.605-.572-2.42-2.145-4.253-4.723-5.498-2.573-1.24-8.315-1.863-17.217-1.863h-3.816v-18.045c18.631-4.017 32.782-12.279 42.448-24.783H358.692z"
                class="color000000 svgShape"></path>
              <path
                d="M475.437,258.401v177.93c0,15.952-13.144,28.929-29.301,28.929H104.077c-16.157,0-29.301-12.977-29.301-28.929v-177.93
              H59.443v177.93c0,24.407,20.022,44.262,44.634,44.262h342.059c24.612,0,44.634-19.855,44.634-44.262v-177.93H475.437z"
                class="color000000 svgShape"></path>
              <path
                d="M483.103,155.112H67.109c-4.235,0-7.667,3.431-7.667,7.667v230.397h15.333V170.445h400.661v180.243l-81.419,75.707
              H146.235v15.333h250.797c1.937,0,3.803-0.734,5.221-2.051l86.071-80.034c1.56-1.45,2.446-3.486,2.446-5.615V162.779
              C490.77,158.544,487.339,155.112,483.103,155.112z"
                class="color000000 svgShape"></path>
              <path
                d="M483.103,170.445H67.109c-4.235,0-7.667-3.431-7.667-7.667V93.213c0-24.407,20.022-44.262,44.634-44.262h342.059
              c24.612,0,44.634,19.855,44.634,44.262v69.565C490.77,167.014,487.339,170.445,483.103,170.445z M74.776,155.112h400.661V93.213
              c0-15.952-13.144-28.929-29.301-28.929H104.077c-16.157,0-29.301,12.977-29.301,28.929V155.112z"
                class="color000000 svgShape"></path>
              <path
                d="M195.114 111.429h-4.859c-15.281 0-27.711-12.341-27.711-27.512V34.349c0-15.171 12.431-27.512 27.711-27.512s27.714 12.341 27.714 27.512v22.276c0 4.235-3.431 7.667-7.667 7.667s-7.667-3.431-7.667-7.667V34.349c0-6.716-5.553-12.179-12.381-12.179-6.826 0-12.378 5.463-12.378 12.179v49.568c0 6.716 5.553 12.179 12.378 12.179h4.859c4.235 0 7.667 3.431 7.667 7.667C202.781 107.997 199.349 111.429 195.114 111.429zM364.814 111.429h-4.859c-15.281 0-27.714-12.341-27.714-27.512V34.349c0-15.171 12.433-27.512 27.714-27.512s27.714 12.341 27.714 27.512v22.276c0 4.235-3.431 7.667-7.667 7.667-4.235 0-7.667-3.431-7.667-7.667V34.349c0-6.716-5.553-12.179-12.381-12.179s-12.381 5.463-12.381 12.179v49.568c0 6.716 5.553 12.179 12.381 12.179h4.859c4.235 0 7.667 3.431 7.667 7.667C372.48 107.997 369.049 111.429 364.814 111.429zM396.69 437.611c-4.235 0-7.667-3.431-7.667-7.667v-70.796c0-10.095 8.206-18.308 18.293-18.308h72.752c4.235 0 7.667 3.431 7.667 7.667 0 4.235-3.431 7.667-7.667 7.667h-72.752c-1.632 0-2.96 1.335-2.96 2.975v70.796C404.357 434.179 400.925 437.611 396.69 437.611zM98.225 350.86c-42.529 0-76.995 34.541-76.995 77.139 0 42.622 34.466 77.164 76.995 77.164 42.505 0 76.971-34.542 76.971-77.164C175.197 385.401 140.73 350.86 98.225 350.86zM128.806 437.611H97.668c-4.235 0-7.667-3.431-7.667-7.667v-43.252c0-4.235 3.431-7.667 7.667-7.667s7.667 3.431 7.667 7.667v35.585h23.471c4.235 0 7.667 3.431 7.667 7.667C136.472 434.179 133.041 437.611 128.806 437.611z"
                class="color000000 svgShape"></path>
            </svg>
            <span class="text-gray-100 hover:text-teal-800 text-sm">
              Absen now
            </span>
          </NuxtLink>
          <!-- MENU ABSEN BULANAN -->
          <NuxtLink
            to="/superadmin/absen"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="#f1f5f9"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-100"
              id="calendar">
              <path
                d="M25.732 30.5a1 1 0 0 0 .408.087.987.987 0 0 0 .409-.088 10.271 10.271 0 0 0 1.632-.953 3.712 3.712 0 0 0 1.869-2.868v-4a1 1 0 0 0-1.06-1c-.094 0-.191.008-.289.008a3.115 3.115 0 0 1-1.9-.508 1 1 0 0 0-1.325 0 3.111 3.111 0 0 1-1.9.508c-.1 0-.194 0-.288-.008a1.019 1.019 0 0 0-.746.27 1 1 0 0 0-.314.728v4C22.233 28.829 25.147 30.242 25.732 30.5zm-1.5-6.845a5.338 5.338 0 0 0 1.909-.532 5.339 5.339 0 0 0 1.908.532v3.023c0 .239-.274.692-1.041 1.247a8.414 8.414 0 0 1-.874.545c-.968-.519-1.9-1.3-1.9-1.792zM52.976 43.926c-.1 0-.2.01-.3.01a3.1 3.1 0 0 1-1.9-.51 1 1 0 0 0-1.326 0 3.113 3.113 0 0 1-1.9.509c-.1 0-.2-.005-.3-.01a1.011 1.011 0 0 0-.74.274 1 1 0 0 0-.311.725v4c0 2.146 2.915 3.56 3.5 3.822a1 1 0 0 0 .409.087.994.994 0 0 0 .409-.088 10.288 10.288 0 0 0 1.631-.954 3.706 3.706 0 0 0 1.869-2.867v-4a1 1 0 0 0-1.051-1zm-.949 5c0 .239-.273.692-1.041 1.247a8.18 8.18 0 0 1-.873.544c-.9-.486-1.9-1.278-1.9-1.791V45.9a5.35 5.35 0 0 0 1.91-.533 5.333 5.333 0 0 0 1.907.533zM39.509 21.287H36.185A2.815 2.815 0 0 0 33.373 24.1v3.325a2.815 2.815 0 0 0 2.812 2.812h3.324a2.815 2.815 0 0 0 2.813-2.812V24.1A2.816 2.816 0 0 0 39.509 21.287zm.813 6.137a.813.813 0 0 1-.813.812H36.185a.813.813 0 0 1-.812-.812V24.1a.813.813 0 0 1 .812-.812h3.324a.813.813 0 0 1 .813.812zM51.781 21.287H48.456A2.815 2.815 0 0 0 45.644 24.1v3.325a2.815 2.815 0 0 0 2.812 2.812h3.325a2.815 2.815 0 0 0 2.812-2.812V24.1A2.815 2.815 0 0 0 51.781 21.287zm.812 6.137a.813.813 0 0 1-.812.812H48.456a.813.813 0 0 1-.812-.812V24.1a.813.813 0 0 1 .812-.812h3.325a.813.813 0 0 1 .812.812zM39.509 32.369H36.185a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811h3.324a2.815 2.815 0 0 0 2.813-2.811V35.182A2.816 2.816 0 0 0 39.509 32.369zm.813 6.138a.813.813 0 0 1-.813.811H36.185a.812.812 0 0 1-.812-.811V35.182a.813.813 0 0 1 .812-.813h3.324a.813.813 0 0 1 .813.813zM27.8 32.369H24.479a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811H27.8a2.815 2.815 0 0 0 2.812-2.811V35.182A2.816 2.816 0 0 0 27.8 32.369zm.812 6.138a.813.813 0 0 1-.812.811H24.479a.812.812 0 0 1-.812-.811V35.182a.813.813 0 0 1 .812-.813H27.8a.813.813 0 0 1 .812.813zM16.1 32.369H12.773a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811H16.1a2.814 2.814 0 0 0 2.812-2.811V35.182A2.815 2.815 0 0 0 16.1 32.369zm.812 6.138a.812.812 0 0 1-.812.811H12.773a.812.812 0 0 1-.812-.811V35.182a.813.813 0 0 1 .812-.813H16.1a.813.813 0 0 1 .812.813zM51.781 32.369H48.456a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811h3.325a2.814 2.814 0 0 0 2.812-2.811V35.182A2.815 2.815 0 0 0 51.781 32.369zm.812 6.138a.812.812 0 0 1-.812.811H48.456a.812.812 0 0 1-.812-.811V35.182a.813.813 0 0 1 .812-.813h3.325a.813.813 0 0 1 .812.813zM39.509 43.53H36.185a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811h3.324a2.815 2.815 0 0 0 2.813-2.811V46.343A2.816 2.816 0 0 0 39.509 43.53zm.813 6.138a.813.813 0 0 1-.813.811H36.185a.812.812 0 0 1-.812-.811V46.343a.813.813 0 0 1 .812-.813h3.324a.814.814 0 0 1 .813.813zM27.8 43.53H24.479a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811H27.8a2.815 2.815 0 0 0 2.812-2.811V46.343A2.816 2.816 0 0 0 27.8 43.53zm.812 6.138a.813.813 0 0 1-.812.811H24.479a.812.812 0 0 1-.812-.811V46.343a.813.813 0 0 1 .812-.813H27.8a.814.814 0 0 1 .812.813zM16.1 43.53H12.773a2.815 2.815 0 0 0-2.812 2.813v3.325a2.814 2.814 0 0 0 2.812 2.811H16.1a2.814 2.814 0 0 0 2.812-2.811V46.343A2.815 2.815 0 0 0 16.1 43.53zm.812 6.138a.812.812 0 0 1-.812.811H12.773a.812.812 0 0 1-.812-.811V46.343a.813.813 0 0 1 .812-.813H16.1a.813.813 0 0 1 .812.813z"></path>
              <path
                d="M59.3,17.481V10.04a2.017,2.017,0,0,0-2.01-2.02H47.64V5.37a2.73,2.73,0,0,0-5.46,0V8.02H22.7V5.37a2.735,2.735,0,0,0-5.47,0V8.02H7.49a2.022,2.022,0,0,0-2.02,2.02V55.76a2.017,2.017,0,0,0,2.02,2.01h49.8a2.013,2.013,0,0,0,2.01-2.01V17.481ZM44.18,5.37a.73.73,0,1,1,1.46,0V12a.73.73,0,1,1-1.46,0V5.37Zm-24.95,0a.735.735,0,0,1,1.47,0V12a.735.735,0,1,1-1.47,0V5.37Zm-2,4.65V12a2.735,2.735,0,1,0,5.47,0V10.02H42.18V12a2.73,2.73,0,1,0,5.46,0V10.02h9.644a.03.03,0,0,1,.016.021l0,6.441H7.487l0-6.461ZM7.47,55.76l.016-37.279H57.3L57.29,55.77Z"></path>
            </svg>
            <span class="text-gray-100 hover:text-teal-800 text-sm">
              Absen bulanan
            </span>
          </NuxtLink>
          <!-- MENU DATA PEGAWAI -->
          <NuxtLink
            to="/superadmin/pegawai"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="#f1f5f9"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-100"
              id="Employee">
              <path
                d="M80.8 53.8c-1.7-.6-3.6-.1-4.6 1.2l-5.1 7c-.3.4-.8.4-1.1 0l-5.1-7c-1-1.3-2.9-1.8-4.6-1.2-2 .7-3.7 1.4-5.2 2.1-.7.3-.7 1.3 0 1.7 6.1 3.5 9.2 7.3 10.3 14.1.1.5.5.8.9.8h26.3c1.3 0 2.4-.9 2.4-2 0-9.7-3.7-12.9-14.2-16.7zM66.2 22.9c-11.4.3-11.2 13-7 20.7.6 1.1 1.6 2.3 2.6 3.1.8.6 1.8.9 2.8.9.2 0 .4-.1.5-.2 1.3 1.4 3.2 2.9 5.5 2.9h.1c1.9 0 3.8-1 5.5-2.9.1.1.3.1.5.1.9 0 1.7-.2 2.5-.7 1-.7 1.9-1.8 2.6-2.6 8-10.3-.2-31.3-15.6-21.3zm13 9.8c.3 2.3-.6 6.3-1.9 10.1-1.8 3.5-4.5 5.7-6.5 5.5-3.9-.3-6.4-5.2-6.4-5.3-1.2-3.5-2.2-7-2.2-8.1 0-.2.2-.4.4-.5 3.4-1.2 5.5-4.3 6.2-5.6.2-.3.6-.4.8-.1 2.2 2.4 7.7 3.3 9.2 3.6.2-.1.4.1.4.4zM48 58.7c-1.6-.7-3.5-.1-4.5 1.4L38 68.8c-.2.3-.7.3-.8-.1l-2.3-7.6c-.1-.3 0-.7.2-.9l1.7-1.7c.4-.3.1-1-.4-1h-6c-.5 0-.8.6-.4 1l1.7 1.7c.2.2.3.6.2.9l-2.3 7.6c-.1.4-.6.4-.8.1l-5.5-8.7c-1-1.5-2.8-2.1-4.5-1.4C8.6 62.9 5 66.6 5 77.4c0 1.3 1 2.3 2.3 2.3h52.2c1.3 0 2.3-1 2.3-2.3 0-10.8-3.7-14.5-13.8-18.7zm-14.6-4.5c13.4 0 20.4-30.5 0-30.8-20.4.4-13.4 30.8 0 30.8z"></path>
            </svg>
            <span class="text-gray-100 hover:text-teal-800 text-sm">
              Data pegawai
            </span>
          </NuxtLink>
          <!-- MENU AKUN PEGAWAI -->
          <NuxtLink
            to="/superadmin/users"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#f1f5f9"
              stroke-width="1.5"
              class="w-6 h-6 text-gray-100"
              id="user">
              <path
                d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"
                class="color000000 svgShape"></path>
            </svg>
            <span class="text-gray-100 hover:text-teal-800 text-sm">
              Akun pegawai
            </span>
          </NuxtLink>
          <!-- MENU LOGOUT -->
          <NuxtLink
            to="#"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-teal-800 text-sm">
              Logout
            </span>
          </NuxtLink>
        </nav>
      </div>
      <!-- END - NAVBAR VERSI LAPTOP -->
    </aside>
    <main id="content" class="flex-1 p-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="rounded-sm">
          <slot />
        </div>
      </div>
      <!-- /End replace -->
    </main>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const isOpen = ref(false);
</script>

<style lang="css" scoped>
  #sidebar {
    --tw-translate-x: -100%;
  }
  #menu-close-icon {
    display: none;
  }

  #menu-open:checked ~ #sidebar {
    --tw-translate-x: 10;
  }
  #menu-open:checked ~ * #mobile-menu-button {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
  }
  #menu-open:checked ~ * #menu-open-icon {
    display: none;
  }
  #menu-open:checked ~ * #menu-close-icon {
    display: block;
  }

  @media (min-width: 768px) {
    #sidebar {
      --tw-translate-x: 0;
    }
  }
</style>

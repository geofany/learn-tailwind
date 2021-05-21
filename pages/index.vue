<template lang="html">
  <div class="container mx-auto">
      <nav class="flex justify-between mt-10 items-center mx-5">
            <div class="flex items-center">
                <img src="~/assets/img/logo.png" alt="logo" width="50">
                <p class="mb-0 ml-3 font-bold text-2xl">CMLABS Academy</p>
            </div>
            <div class="flex items-center">
                <input type="search" name="" value="" class="hidden bg-gray-200 rounded-md my-2 ml-5 py-1 pl-2 focus:outline-none lg:block" placeholder="Search...">
                <div class="hidden md:block">
                    <nuxt-link to="/" class="mx-2 text-blue-400 text-lg hover:text-blue-500">Belajar</nuxt-link>
                    <nuxt-link to="/" class="mx-2 text-blue-400 text-lg hover:text-blue-500">Nongkrong</nuxt-link>
                    <nuxt-link to="/" class="mx-2 text-blue-400 text-lg hover:text-blue-500">Ngoding</nuxt-link>
                </div>
            </div>
      </nav>
      <section>
          <div class="lg:flex mt-5 items-center">
              <div class="lg:w-4/6 text-center p-5">
                  <img src="~/assets/img/computer.png" class="block mx-auto" alt="computer" width="250">
                  <h1 class="text-4xl my-2 font-bold">Belajar Programming,<br>
                      Mulai dari Nol</h1>
                      <h2 class="text-lg text-gray-400">Belajar membuat website dan aplikasi. Bingung mulai dari mana? Tenang, mari bergabung bersama 100 ribu+ teman lainnya. Mau bekerja sebagai programmer atau membuat karya, kamu juga bisa!</h2>
              </div>
              <div class="lg:w-2/6 p-5 ">
                  <div class="rounded-md p-5 shadow-lg text-center">
                      <p class="mb-0">daftar dengan :</p>
                      <div class="flex justify-around mt-3">
                          <a href="https://google.com" class="py-2 px-5 rounded-md bg-red-400 text-white text-sm hover:bg-red-500" target="_blank" rel="noopener nofollow norefferer">Google</a>
                          <a href="https://github.com" class="py-2 px-5 rounded-md bg-gray-800 text-white text-sm hover:bg-gray-900" target="_blank" rel="noopener nofollow norefferer">Github</a>
                          <a href="https://twitter.com" class="py-2 px-5 rounded-md bg-blue-400 text-white text-sm hover:bg-blue-500" target="_blank" rel="noopener nofollow norefferer">Twitter</a>
                      </div>
                      <p class="mb-0 mt-5">atau daftar dengan :</p>
                      <form class="text-left" method="post" @submit.prevent="">
                          <div class="bg-gray-200 rounded-md p-3 mt-3">
                              <label class="block text-md text-gray-400" for="username">Username</label>
                              <input class="bg-gray-200 py-1 px-0.5 w-full mt-1 focus:outline-none" type="text" id="username" name="" value="">
                          </div>

                          <div class="bg-gray-200 rounded-md p-3 mt-3">
                              <label class="block text-md text-gray-400" for="email">Email</label>
                              <input class="bg-gray-200 py-1 px-0.5 w-full mt-1 focus:outline-none" type="email" id="email" name="" value="">
                          </div>

                          <div class="bg-gray-200 rounded-md p-3 mt-3">
                              <label class="block text-md text-gray-400" for="password">Password</label>
                              <input class="bg-gray-200 py-1 px-0.5 w-full mt-1 focus:outline-none" type="password" id="password" name="" value="">
                          </div>

                          <button type="submit" class="bg-blue-400 text-white rounded-md w-full py-3 px-2 mt-3 hover:bg-blue-500 focus:outline-none" name="button">Daftar</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title : "CMLABS Academy"
        }
    }
}
</script>

<style lang="css" scoped>
</style>

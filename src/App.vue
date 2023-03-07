<template>
  <div>
    <!-- Bootstrap based Nav bar -->
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left" href="/">
          <img
            alt="Vue logo"
            src="./assets/logo.svg"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
          Student Management App
        </a>
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="user.isLoggedIn" class="nav-link" to="/create"
              >Create Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-if="user.isLoggedIn" class="nav-link" to="/view"
              >View Students</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Other
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/chart"
                  >Chart Demo</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cartDemo"
                  >Cart Demo</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="!user.isLoggedIn">
            <router-link class="nav-link" to="/login">Log In</router-link>
          </li>
          <li class="nav-item dropdown" v-if="user.isLoggedIn">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarUserMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill" style="font-size: 1rem; color: hsla(160, 100%, 37%, 1)"></i> Welcome, {{ user.name }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarUserMenuLink">
              <li class="nav-item">
                <p class="nav-link">User Information</p>
              </li>
              <li class="nav-item">
                <a href="">
                  <span @click="store.logout()" class="nav-link"><i class="bi bi-box-arrow-left"></i> Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <!-- Router view - our main view below the navigation -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  setup() {
    const user = useLoggedInUserStore();
    return { user };
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
}
</style>



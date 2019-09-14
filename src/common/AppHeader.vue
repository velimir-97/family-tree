<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <router-link class="navbar-brand" to="/">Family Tree</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-on:click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{'show': show}">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="new">Create New</router-link>
      </li>
			<li v-if="loggedIn" class="nav-item">
        <router-link class="nav-link" to="my-tree">My Tree</router-link>
      </li>
    </ul>
		<ul v-if="!loggedIn" class="navbar-nav ml-auto">
			<li class="nav-item">
        <router-link class="nav-link" to="login">Login</router-link>
      </li>
			<li class="nav-item">
        <router-link class="nav-link" to="register">Register</router-link>
      </li>
		</ul>
		<ul v-else class="navbar-nav ml-auto">
			<li class="nav-item">
        <a class="nav-link" style="cursor: pointer;" @click="logout()">Logout</a>
      </li>
			
		</ul>
  </div>
</nav>
</template>

<script>
export default {
	watch: {
		'$route' () {
				this.loggedIn = (localStorage || {}).loggedIn ? localStorage.loggedIn === "true" ? true : false : false
		}
	},

	data () {
		return {
			loggedIn: false,
            show: true
		}
	},
	methods: {
		logout() {
			localStorage.loggedIn = "false"
			this.loggedIn = false
			this.$router.push({ name: 'Index'})

		},
        toggleNavbar(){
		    this.show = !this.show
        }
	}
}
</script>
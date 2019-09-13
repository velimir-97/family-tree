<template>
	<div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="card">
						<div class="card-header">Login</div>
						<div class="card-body">
							<form action="" method="">
								<div class="form-group row">
									<label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
									<div class="col-md-6">
										<input type="text" id="username" class="form-control" name="username" autofocus v-model="username">
									</div>
								</div>

								<div class="form-group row">
									<label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
									<div class="col-md-6">
										<input type="password" id="password" class="form-control" name="password" v-model="password">
									</div>
								</div>
								<p v-if="errorField">Both fields are required</p>
								<div class="form-group row">
									<div class="col-md-6 offset-md-4">
										<div class="checkbox">
											<label>
												<input type="checkbox" name="remember"> Remember Me
											</label>
										</div>
									</div>
								</div>

								<div class="col-md-6 offset-md-4">
									<button type="submit" class="btn btn-primary" @click="login()">
										Login
									</button>
									<a href="#" class="btn btn-link">
										Forgot Your Password?
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				dbUsername: 'admin',
				dbPassword: 'admin',
				errorField: false
			}
		},
		methods: {
			login() {
				if(!this.username || !this.password) {
					this.errorField = true
					setTimeout(() => {
						this.errorField = false
					}, 3000)
					return
				}
				if(this.dbUsername == this.username && this.dbPassword == this.password) {
					localStorage.loggedIn = "true"
					this.username = ''
					this.password = ''
					this.$router.push({ name: 'My Tree'})
				}
			}
		}
	}
</script>

<style>

</style>
<template>
	<div class="text-center" :id="person.id">
		<div class="img-fluid" :style="'background-image: url(' + getImg + '); width: 50px; height: 50px;'" alt=""></div>
		<p>{{ person.name }}</p>
		<p>{{ person.yearOfBirth }} - {{ person.yearOfDeath ? person.yearOfDeath : '' }}</p>
	</div>
</template>

<script>
export default {
	props: [ 'person' ],
	computed: {
		getImg () {
			return '"../assets/img/' + this.person.img + '.jpeg"'
		}
	}
}
</script>
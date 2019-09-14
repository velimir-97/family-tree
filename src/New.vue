<template>
	<div class="d-flex align-items-center justify-content-center">
		<svg class="svg-circleplus border-0" viewBox="0 0 300 300" @click="openCreator()">
			<circle cx="150" cy="150" r="140" fill="none" stroke-width="7.5"></circle>
			<line x1="97.5" y1="150" x2="202.5" y2="150" stroke-width="5"></line>
			<line x1="150" y1="97.5" x2="150" y2="202.5" stroke-width="5"></line>
		</svg>

	</div>
		<!-- <div class="position-absolute" style="right: 0">
		<CustomizeTree></CustomizeTree>
		</div> -->

</template>

<script>
import CustomizeTree from './common/CustomizeTree'

export default {
	components: {
		CustomizeTree
	},
	data () {
		return {
			open: false
		}
	},
	methods: {
		openCreator() {
			// this.open = true
		}
	}
}
</script>

<style>
	.svg-circleplus { height: 120px; stroke: #329af0; cursor: pointer;}
</style>
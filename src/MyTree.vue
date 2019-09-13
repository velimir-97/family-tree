<template>
	<div class="row mt-5 d-flex justify-content-between" style="padding-top: 10vh">
		<div class="col-12 col-xl-8 overflow-auto">
			<TreeChart :json="treeData" />
		</div>
		<CustomizeTree></CustomizeTree>
	</div>
</template>

<script>
import CustomizeTree from "./common/CustomizeTree"

import TreeChart from 'vue-tree-chart'
export default {
components: {
	CustomizeTree,
	TreeChart
},

methods: {
	getImg(img){
		return require("./assets/img/" + img)
	}
},
data() {
	return {
		treeData: {
			name: 'Patrick Wayne',
			years: '1934 - 2007',
			image_url: this.getImg("patrick.png"),
			mate: {
				name: 'Laura Wayne',
				years: '1939 - 2016',
				image_url: this.getImg("defaultWoman.jpg")

			},
			children: [{
				name: 'Thomas Wayne',
				years: '1961 - 1996',
				image_url: this.getImg("thomas.png"),
				mate: {
					name: 'Martha Wayne',
					years: '1963 - 1996',
					image_url: this.getImg("martha.png")
				},
				children: [{
					name: 'Bruce Wayne (Batman)',
					years: '1990 -',
					image_url: this.getImg("batman.jpeg")
				}]
			},
			{
				name: 'John Wayne',
				years: '1965 - ',
				image_url: this.getImg("defaultMan.jpg"),
				mate: {
					name: 'Ruzha Wayne',
					years: '1966 - ',
					image_url: this.getImg("defaultWoman.jpg")
				},
				children: [{
						name: 'Atanas Wayne',
						years: '1996 - ',
						image_url: this.getImg("defaultMan.jpg")
					},
					{
						name: 'Boris Wayne',
						years: '1996 - ',
						image_url: this.getImg("defaultMan.jpg")
					},
					{
						name: 'Velimir Wayne',
						years: '1997 - ',						
						image_url: this.getImg("defaultMan.jpg")
					}
				]
			},

		]
	}
	}
},

}
</script>

<style>
	body {
		font: 10px sans-serif;
	}

	.linage {
		fill: none;
		stroke: #000;
	}

	.marriage {
		fill: none;
		stroke: black;
	}

	.man {
		background-color: lightblue;
		border-style: solid;
		border-width: 1px;
		box-sizing: border-box;
	}

	.woman {
		background-color: pink;
		border-style: solid;
		border-width: 1px;
		box-sizing: border-box;
	}

	.emphasis {
		font-style: italic;
	}

	p {
		padding: 0;
		margin: 0;
	}

	svg {
		border-style: solid;
		border-width: 1px;
	}
</style>
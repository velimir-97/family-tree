<template>
<div>
	<div id="diagramContainer" :key="idx" v-for="(person, idx) in persons">
		<Person :person="person"></Person>
		<!-- <div id="item_left" class="item mr-5">connect</div>
		<div id="item_right" class="item ml-5">please</div> -->
	</div>
</div>
</template>

<script>
import Person from "./common/Person"
import jsplumb from 'jsplumb'

export default {
	components: {
		Person
	},
	props: ['yourProps'],
	data() {
	return {
		persons: {
			dadsGrandpa: {
				id: '0',
				name: 'Patrick Wayne',
				yearOfBirth: '1934',
				yearOfDeath: null,
				img: ''
			},
			dadsGrandma: {
				id: '1',
				name: 'Laura Elizabeth Wayne',
				yearOfBirth: '1939',
				yearOfDeath: null,
				img: ''
			},
			momsGrandpa: {
				id: '2',
				name: 'Kostadin Trpeski',
				yearOfBirth: '1935',
				yearOfDeath: null,
				img: ''
			},
			momsGrandma: {
				id: '3',
				name: 'Olgica Trpeska',
				yearOfBirth: '1943',
				yearOfDeath: null,
				img: ''
			},
			dad: {
				id: '4',
				name: 'John Wayne',
				yearOfBirth: '1965',
				yearOfDeath: null,
				img: ''
			},
			mom: {
				id: '5',
				name: 'Ruzha Wayne',
				yearOfBirth: '1966',
				yearOfDeath: null,
				img: ''
			},
			dadsBrother: {
				id: '6',
				name: 'Thomas Wayne',
				yearOfBirth: '1961',
				yearOfDeath: '1996',
				img: ''
			},
			brothersWife: {
				id: '7',
				name: 'Martha Wayne',
				yearOfBirth: '1963',
				yearOfDeath: '1996',
				img: ''
			},
			cousin: {
				id: '8',
				name: 'Bruce Wayne',
				yearOfBirth: '1992',
				yearOfDeath: null,
				img: 'batman'
			},
			me: {
				id: '9',
				name: 'Boris Wayne',
				yearOfBirth: '1996',
				yearOfDeath: null,
				img: ''
			},
			twin: {
				id: '10',
				name: 'Atanas Wayne',
				yearOfBirth: '1996',
				yearOfDeath: null,
				img: ''
			},
			babyBrother: {
				id: '11',
				name: 'Velimir Wayne',
				yearOfBirth: '1997',
				yearOfDeath: null,
				img: ''
			}
		}

	}
},
mounted(){
	jsPlumb.ready(function() {
				jsPlumb.connect({
						source:"0",
						target:"1",
						endpoint: "none"
				})
		})
	}
}
</script>
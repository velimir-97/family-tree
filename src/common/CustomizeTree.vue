<template>
	<div class="col-12 col-md-8 col-xl-4">
		<div class="form-group sticky-top ml-4">
		<h3 class="mb-3">Add A New Family Member</h3>
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">First and last name</span>
				</div>
				<input type="text" aria-label="First name" class="form-control">
				<input type="text" aria-label="Last name" class="form-control">
			</div>
			
			<div class="row justify-content-between d-flex">
				<div class="col-6">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text">Birth Date</span>
					</div>
					<Datepicker  :typeable="true" input-class="rounded-left-0" :bootstrap-styling="true"></Datepicker>
				</div>
				</div>

				<div class="col-6">
					<div class="input-group mb-1">
						<div class="input-group-prepend">
							<span class="input-group-text">Death Date</span>
						</div>
						<Datepicker  :typeable="true" input-class="rounded-left-0" :bootstrap-styling="true"></Datepicker>
					</div>
					<p class="font-italic small text-left ml-1 mb-3">Leave empty if person is still alive*</p>
				</div>
			</div>

			



			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
				</div>
				<div class="custom-file">
					<input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
					<label class="custom-file-label" for="inputGroupFile01">Choose file</label>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<label class="input-group-text" for="inputGroupSelect01">Relation</label>
						</div>
						<select class="custom-select" id="inputGroupSelect01">
							<option selected disabled>Choose...</option>
							<option value="1">Mother</option>
							<option value="2">Father</option>
							<option value="3">Spouse</option>
							<option value="4">Sibling</option>
							<option value="5">Child</option>
						</select>
					</div>
				</div>
				<div class="col-6">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<label class="input-group-text" for="inputGroupSelect01">To</label>
						</div>
						<select class="custom-select" id="inputGroupSelect01">
							<option selected disabled>Choose...</option>
							<option value="1">Bruce Wayne</option>
							<option value="2">Martha Wayne</option>
							<option value="3">Batman</option>
						</select>
					</div>
				</div>
			</div>

			



			<button class="btn btn-primary w-100">Add</button>
		</div>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  }

}

</script>

<style>
.vdp-datepicker {
	width: 164px;
}

.rounded-left-0 {
	border-top-left-radius: 0px !important;
	border-bottom-left-radius: 0px !important;
}
</style>
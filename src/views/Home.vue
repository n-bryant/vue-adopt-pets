<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <p>There are currently {{ petCount }} pets up for adoption!</p>
    <p>Cats: {{ getAllCats.length }} | Dogs: {{ getAllDogs.length }}</p>

    <button @click="togglePetForm" class="btn btn-primary">Add New Listing</button>

    <b-form @submit.prevent="handleSubmit" v-if="displayPetForm" class="add-listing-form">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Type:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.type"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label="Breed:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.breed"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Color:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.color"
          required
          placeholder="Enter color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Weight:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="formData.weight"
          required
          placeholder="Enter weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Location:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.location"
          required
          placeholder="Enter location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Notes:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.notes"
          required
          placeholder="Enter notes"
        ></b-form-input>
      </b-form-group>

      <div class="action-buttons-container">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      displayPetForm: false,
      formData: {
        name: '',
        breed: '',
        color: '',
        type: '',
        age: 0,
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'petCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.displayPetForm = !this.displayPetForm
    },
    handleSubmit () {
      const { type, name, breed, color, age, weight, location, notes } = this.formData
      const payload = {
        type,
        pet: {
          name,
          breed,
          color,
          age,
          weight,
          location,
          notes
        }
      }
      this.addPet(payload)

      // reset form after submit
      this.formData = {
        name: '',
        breed: '',
        color: '',
        type: '',
        age: 0,
        weight: 0,
        location: '',
        notes: ''
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Available {{ type }}</h1>

    <b-form-group aria-label="Filter">
      <b-input-group>
        <b-form-input v-model="filter" placeholder="Type to Filter"></b-form-input>
        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>

    <b-table striped hover :items="pets" :fields="fields" :filter="filter">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${type}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    pets: Array,
    fields: Array
  },
  data () {
    return {
      filter: null
    }
  }
}
</script>

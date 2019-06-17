<template>
  <div>
    <h1>Available {{ type }}</h1>
    <b-table striped hover :items="pets" :fields="fields">
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
  }
}
</script>

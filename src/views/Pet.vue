<template>
  <div>
    <h1>{{ pet.name }} ({{ $route.params.type }})</h1>
    <p>Age: {{ pet.age }}</p>
    <p>Breed: {{ pet.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const pet = this[this.$route.params.type][this.$route.params.id]
    this.pet = pet
  }
}
</script>

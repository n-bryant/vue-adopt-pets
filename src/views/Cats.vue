<template>
  <div>
    <PetTable type="cats" :pets="cats" :fields="fields" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'
import FIELDS from './constants'

export default {
  components: {
    PetTable
  },
  data () {
    return {
      fields: FIELDS
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

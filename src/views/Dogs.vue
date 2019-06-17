<template>
  <div>
    <PetTable type="dogs" :pets="dogs" :fields="fields" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'
import FIELDS from "./constants"


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
      'dogs'
    ])
  }
}
</script>

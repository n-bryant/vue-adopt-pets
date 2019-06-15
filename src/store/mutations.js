export default {
  appendPet: (state, { pet, type }) => {
    state[type].push(pet)
  }
}

export default {
  petCount: (state) => {
    return state.pets.length
  },
  getAllCats: (state) => {
    return state.pets.filter(pet => pet.type === 'cat')
  },
  getAllDogs: (state) => {
    return state.pets.filter(pet => pet.type === 'dog')
  }
}

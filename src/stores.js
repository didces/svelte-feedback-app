import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Delas fut un excellent manager. Grâce à lui Kamtar est une réussite',
  },
])

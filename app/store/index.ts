import { type ServiceStore } from "./types";

export const serviceStore = defineStore('service', {
    state: (): ServiceStore => ({
        favourites: []
    }),
    
    getters: {
        getFavourites: (state) => state.favourites,
        favouritesCount: (state) => state.favourites.length,
        isFavourite: (state) => (emoji: any) => {
            return state.favourites.some(fav => fav.name === emoji.name)
        }
    },
    
    actions: {
        addToFavourites(emoji: any) {
            if (!this.isFavourite(emoji)) {
                this.favourites.push(emoji)
            }
            alert("You have added emoji!")
        },
        
        removeFromFavourites(emoji: any) {
            const index = this.favourites.findIndex(fav => fav.name === emoji.name)
            if (index > -1) {
                this.favourites.splice(index, 1)
            }
        },
        
        clearFavourites() {
            this.favourites = []
        }
    }
})
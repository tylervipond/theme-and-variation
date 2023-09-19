import { createRouter, createWebHashHistory } from 'vue-router'
import MasksVampiresPuppets from './pages/MasksVampiresPuppets.vue'
import HorsesQuicksandSleepingCartoons from './pages/HorsesQuicksandSleepingCartoons.vue'
import MoneyFumblesTrash from './pages/MoneyFumblesTrash.vue';
import TelevisionDishesLizards from './pages/TelevisionDishesLizards.vue';
import Home from './pages/Home.vue';

const routes = [
    { path: '/', component: Home, meta: { title: 'Gif based art experiments by Tyler Vipond' } },
    { path: '/masks-vampires-puppets', component: MasksVampiresPuppets, meta: { title: 'Masks, Vampires, Puppets' } },
    { path: '/horses-quicksand-sleeping-cartoons', component: HorsesQuicksandSleepingCartoons, meta: { title: 'Horses, Quicksand, Sleeping Cartoons' } },
    { path: '/money-fumbles-trash', component: MoneyFumblesTrash, meta: { title: 'Money, Fumbles, Trash' } },
    { path: '/television-dishes-lizards', component: TelevisionDishesLizards, meta: { title: 'Television, Dishes, Lizards' } },

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
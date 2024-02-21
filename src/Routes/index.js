import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Courses from "./../components/Courses.vue"
import ContactUs from "./../components/ContactUs.vue"
import AboutUs from "./../components/AboutUs.vue"
import Library from "./../components/Library.vue"
import Partnerships from "./../components/Partnerships.vue"
import Alumni from "./../components/Alumni.vue"


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
    },
    {
        path: '/Courses',
        name: 'Courses',
        component: Courses,
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
    },
    {
        path: '/Library',
        name: 'Library',
        component: Library,
    },
    {
        path: '/Partnerships',
        name: 'Partnerships',
        component: Partnerships,
    },
    {
        path: '/Alumni',
        name: 'Alumni',
        component: Alumni,
    },
    {
        path: '/Events',
        name: 'Events',
        component: Events,
    },
]

const router = createRouter({
   history: createWebHistory(),
   routes,   
})

export default router

import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";
import DetailsView from "../views/DetailsView.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [{
        path: '*',
        component: NotFound,
    },
    {
        path: "/",
        name: "gallery",
        component: GalleryView,
    },
    {
        path: "/details/:id",
        name: "details",
        component: DetailsView,
        props: true,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
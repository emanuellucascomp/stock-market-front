import Vue from "vue";
import VueRouter from "vue-router";
import DashboardStock from "../components/DashboardStock.vue";
import StockDetail from "../components/StockDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboardStock",
    component: DashboardStock
  },
  {
    path: "/detail",
    name: "stockDetail",
    component: StockDetail
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
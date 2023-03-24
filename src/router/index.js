import { createRouter, createWebHistory } from "vue-router";

// ---------------------[Public]--------------------- //
import PublicLayout from "@/views/public/LayoutView.vue";

// ---------------[Menu]--------------- //
import Home from "@/views/public/HomeView.vue";
import Help from "@/views/public/HelpView.vue";
import OurStores from "@/views/public/OurStoresView.vue";

// ---------------[Order]--------------- //
import Cart from "@/views/public/order/CartView.vue";

// ---------------[Groupings]--------------- //
import OurProducts from "@/views/public/products/groupings/OurProductsView.vue";
import NewProducts from "@/views/public/products/groupings/NewProductsView.vue";
import Promotions from "@/views/public/products/groupings/PromotionsView.vue";
import MadeInFrance from "@/views/public/products/groupings/MadeInFranceView.vue";

// ---------------[RGPD]--------------- //
import DataProtection from "@/views/public/rgpd/DataProtectionView.vue";
import Cookies from "@/views/public/rgpd/CookiesView.vue";
import LegalNotices from "@/views/public/rgpd/LegalNoticesView.vue";

// ---------------[ERRORS]--------------- //
import NotFound from "@/views/public/errors/NotFoundView.vue";

// ---------------------[Admin]--------------------- //
import AdminLayout from "@/views/admin/LayoutView.vue";

import DashBoard from "@/views/admin/DashBoardView.vue";

import UserAdd from "@/views/admin/users/UserAddView.vue";
import UserEdit from "@/views/admin/users/UserEditView.vue";
import UserIndex from "@/views/admin/users/UserIndexView.vue";

// ---------------------[Auth]--------------------- //
import Login from "@/views/auth/LoginView.vue";
import { authGuard } from "@/_helpers/auth-guard";

//test

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ---------------[Public]--------------- //
    {
      path: "/",
      name: "public",
      component: PublicLayout,
      children: [
        // ---------------[Menu]--------------- //
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/help",
          name: "help",
          component: Help,
        },
        {
          path: "/our-stores",
          name: "our-stores",
          component: OurStores,
        },
        // ---------------[Order]--------------- //
        {
          path: "/cart",
          name: "cart",
          component: Cart,
        },
        // ---------------[Groupings]--------------- //
        {
          path: "/our-products",
          name: "our-products",
          component: OurProducts,
        },
        {
          path: "/new-products",
          name: "new-products",
          component: NewProducts,
        },
        {
          path: "/promotions",
          name: "promotions",
          component: Promotions,
        },
        {
          path: "/made-in-france",
          name: "made-in-france",
          component: MadeInFrance,
        },
        // ---------------[RGPD]--------------- //
        {
          path: "/data-protection",
          name: "data-protection",
          component: DataProtection,
        },
        {
          path: "/cookies",
          name: "cookies",
          component: Cookies,
        },
        {
          path: "/legal-notices",
          name: "legal-notices",
          component: LegalNotices,
        },
      ],
    },

    // ---------------[Admin]--------------- //
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "dashBoard",
          name: "dashBoard",
          component: DashBoard,
        },
        {
          path: "users/add",
          name: "userAdd",
          component: UserAdd,
        },
        {
          path: "users/edit/:id",
          name: "userEdit",
          component: UserEdit,
        },
        {
          path: "users/index",
          name: "userIndex",
          component: UserIndex,
        },
      ],
    },

    // ---------------[Auth]--------------- //
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    // ---------------[ERRORS]--------------- //
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
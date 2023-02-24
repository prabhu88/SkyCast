import Dashboard from './views/dashboard'
import WeatherUpdate from './views/weatherUpdats'
// import UserSettings from '../views/UserSettings'
// import AllInvoices from '../views/AllInvoices'
// import CreateInvoice from '../views/CreateInvoice'

const routes = [
      {
        upgrade: true,
        path: "/weather-updates",
        name: "Real-time weather updates",
        icon: "fa-solid fa-house",
        component: WeatherUpdate,
        layout: "/admin"
      },
      {
        path: "/Dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin"
      },
    //   {
    //     path: "/profile",
    //     name: "Profile",
    //     icon: "nc-icon nc-circle-09",
    //     component: UserSettings,
    //     layout: "/admin"
    //   },
    //   {
    //     path: "/create",
    //     name: "Create Invoice",
    //     icon: "nc-icon nc-notes",
    //     component: CreateInvoice,
    //     layout: "/admin"
    //   },
      // {
      //   path: "/typography",
      //   name: "Typography",
      //   icon: "nc-icon nc-paper-2",
      //   component: Typography,
      //   layout: "/admin"
      // },
    //   {
    //     path: "/invoice",
    //     name: "All Invoices",
    //     icon: "nc-icon nc-atom",
    //     component: AllInvoices,
    //     layout: "/admin"
    //   },
      // {
      //   path: "/maps",
      //   name: "Maps",
      //   icon: "nc-icon nc-pin-3",
      //   component: Maps,
      //   layout: "/admin"
      // },
      // {
      //   path: "/notifications",
      //   name: "Notifications",
      //   icon: "nc-icon nc-bell-55",
      //   component: Notifications,
      //   layout: "/admin"
      // }
]
export default routes;
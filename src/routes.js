import Dashboard from './views/dashboard'
import WeatherUpdate from './views/weatherUpdats'
import LocationBased from './views/locationBased';
import WeatherAlert from './views/weatherAlerts';
import SunriseAndSunset from './views/sunRaiseSet';
import SocialSharing from './views/socialSharing';
import MapView from './views/mapView';
import BuyMeCoffee from './views/buyMeCoffee';

const routes = [
  {
    upgrade: true,
    path: "/weather-updates",
    name: "Real-time updates",
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
  {
    path: "/Location-based",
    name: "Location-based weather updates",
    icon: "nc-icon nc-circle-09",
    component: LocationBased,
    layout: "/admin"
  },
  {
    path: "/Weather-alerts",
    name: "Weather alerts",
    icon: "nc-icon nc-notes",
    component: WeatherAlert,
    layout: "/admin"
  },
  {
    path: "/Sunrise-Sunset",
    name: "Sunrise And Sunset",
    icon: "nc-icon nc-paper-2",
    component: SunriseAndSunset,
    layout: "/admin"
  },
  {
    path: "/Map-View",
    name: "Map View",
    icon: "nc-icon nc-pin-3",
    component: MapView,
    layout: "/admin"
  },
  {
    path: "/Social-Sharing",
    name: "Social Sharing",
    icon: "nc-icon nc-atom",
    component: SocialSharing,
    layout: "/admin"
  },

  {
    path: "/Buy-Me-a-Coffee",
    name: "Want to thank me?",
    icon: "nc-icon nc-bell-55",
    component: BuyMeCoffee,
    layout: "/admin"
  }
]
export default routes;
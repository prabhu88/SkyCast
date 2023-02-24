import React, { useRef,useEffect,useState } from 'react'
import { Route, Switch,useLocation } from 'react-router-dom'
import Sidebar from '../component/sidebar/sidebar'
import routes from '../routes'
import img1 from '../assets/img/rainy.jpg'
import img2 from '../assets/img/shunny.jpg'
import img3 from '../assets/img/thunder.jpg'
import img4 from '../assets/img/clear-sky.jpg'
import TopNav from '../component/topnav/nvabar'
const Layout = (props) => {
  let images = [img1,img2,img3,img4]
  const location = useLocation();
  const [sideImage,setSideImage] = useState(img1)
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  useEffect(() => {
    const  pathname = location.pathname;    
    if ( pathname.indexOf("Dashboard") > -1) {
      setSideImage(null)
      document.body.classList.add("dashBodyBg");
    } else {
      setSideImage(images[Math.floor(Math.random() * 3) + 1])
      document.body.classList.remove("dashBodyBg");
    }
  }, [location]);
  const mainPanel = useRef(null)
  return (
    <>
      <div className="wrapper">
        <Sidebar routes={routes} image={sideImage} color="purple" />
        <div className="main-panel" ref={mainPanel}>
          <TopNav />
          <div className="content">
            <Switch>
              {getRoutes(routes)}
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}
export default Layout
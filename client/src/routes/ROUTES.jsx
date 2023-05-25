import Mainroot from "../pages/Mainroot";
import Home from "../pages/Home/Home";
import Add from "../pages/Add/Add";
import Details from "../pages/Details/Detail";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Team from "../pages/Team/Team";
import Skill from "../pages/Skill/Skill";
import Clients from "../pages/Clients/Clients"
import Contact from "../pages/Contact/Contact"
import Blog from "../pages/Blog/Blog";
import Pricing from "../pages/Pricing/Pricing"



export const ROUTES = [
  {
    path: "/",
    element: <Mainroot />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/detail/:id",
        element: <Details />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
          path: "/team",
          element: <Team />
        },
        {
          path: "/skill",
          element: <Skill/>
        },
        {
          path: "/clients",
          element: <Clients/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/pricing",
          element: <Pricing/>
        },
        {
          path: "/Contact",
          element: <Contact/>
        },
         
    ]
  }
];

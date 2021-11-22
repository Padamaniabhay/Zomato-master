import { Route,Redirect } from "react-router";

//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//components
import Temp from "./Components/temp";

//pages
import Home from "./Page/Home";

function App() {
  
  return (
    <>
      <Route path="/" exact component={Temp}>
          <Redirect to="/delivery"/>  
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home}/>
      <RestaurantLayoutHOC  path="/restaurant/:id" exact component={Temp}/>
    </>
  )
}

export default App;

//:type

//Delivery
//Dining
//Nightlife
//Nutrition

//master -> type
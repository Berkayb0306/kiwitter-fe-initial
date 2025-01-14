import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import { UserContextDepo } from "./UserContextDepo";

/*
  - UserContext: oluştur, kullanıcıyı kaydet, localStorage bağlantısı
  - PrivateRoute: oluştur, kullan
  - PublicRoute: fikir?

*/

function App() {
  return (
    <div>
      <UserContextDepo>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" exact>
            {/* /?variant=most_liked */}
            <PageLayout>Home</PageLayout>
          </Route>

          <Route path="/profile/:nick">
            <PageLayout>Profile page</PageLayout>
          </Route>

          <PrivateRoute path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
          </PrivateRoute>
        </Switch>
      </UserContextDepo>
    </div>
  );
}

export default App;
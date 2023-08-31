import { type Component, Switch, Match } from "solid-js";
import { pageData } from "./store";
import MainContent from "./components/content/MainContent";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";


const App: Component = () => {
  
  return (
    <Switch>
      <Match when={pageData.loading}>
        <Loader />
      </Match>
      <Match when={pageData.error}>
        <Error />
      </Match>
      <Match when={pageData.state === "ready"}>  
        <Header datas={pageData()!}/>
        <MainContent datas={pageData()!}/>
        <Footer />
      </Match>
    </Switch>
  );
};

export default App;
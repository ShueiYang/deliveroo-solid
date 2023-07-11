import { type Component, Show } from 'solid-js';
import MainContent from "./components/content/MainContent";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from './components/Loader';
import { pageData } from './store';



const App: Component = () => {
  
  
  return (
    <Show 
      when={!pageData.loading && pageData()}
      fallback={<Loader />}
    >
      { pageData => 
        <>
          <Header datas={pageData()}/>
          <MainContent datas={pageData()}/>
          <Footer />
        </> 
      }
    </Show>
  );
};

export default App;
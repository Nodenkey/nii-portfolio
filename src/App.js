import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from "./utils/scroll-to-top";
import Loader from "./components/loader/loader.component";

const Home = lazy(() => import("./pages/home/home"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loader/>}>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
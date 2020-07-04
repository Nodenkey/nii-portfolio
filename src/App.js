import React, {lazy, Suspense, useEffect, useRef} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from "./utils/scroll-to-top";
import Loader from "./components/loader/loader.component";
import {Cursor} from "./pages/home/home.style";
import gsap from "gsap";

const Home = lazy(() => import("./pages/home/home"));
const Error = lazy(() => import("./components/error/error.component"));

function App() {
    let cursor = useRef(null);
    const tl = gsap.timeline();


    useEffect(() => {
        tl.to(cursor, {scale: 1, duration: .3});
        window.addEventListener('mousemove', (e) => {
            if (cursor !== null){
                cursor.style.top = (e.pageY - 10) + 'px';
                cursor.style.left = (e.pageX -10 ) + 'px';
            }
        });
        window.addEventListener('mousemove', (e) => {
            if (cursor !== null) {
                const hover = document.querySelectorAll('.hover');
                cursor.classList.add('reverse-cursor');
                hover.forEach((el) => {
                    el.addEventListener('mouseover', () => {
                        tl.reverse()
                    })
                    el.addEventListener('mouseout', () => {
                        tl.play();
                    })
                })
            }
        })
    })
    return (
        <div className="App">
            <Cursor ref={el => cursor = el}/>
            <Suspense fallback={<Loader/>}>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route component={Error}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;

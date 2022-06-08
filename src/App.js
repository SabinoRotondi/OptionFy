import React from "react"
import { Footer } from "./Components/Footer";

import './index.css';
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing"


export class App extends React.Component{
  render(){
      return (
          <div >
              <Header />
              <Hero />
              <div className="bg-gradient-to-t from-violet-900 to-black">
              <Pricing />
              <Footer />
              </div>
          </div>
      )
  }
}
import {Header} from '../header/Header';
import { Footer } from '../footer/Footer';

import './App.css';
import { Learning } from '../components/Learning';
// <React.Fragment></React.Fragment>
function App() {
  let applicationName="NEOSOFT EMPLOYEE MANAGEMENT SYSTEM"
  //development :Js
  return (
    //Template: JsX
    <>
    <h1 className='mainHeading'>{applicationName}</h1>
    <Header/>
    <Learning/>
    <Footer/>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import Head from '../components/head'
import Nav from '../components/nav'
import {Link} from '../routes'
import * as Axios from '../actions';
import axios from 'axios';
  
 class Index extends Component {

  static async getInitialProps({ req, res, query }) {
    let data;
    console.log(query); 
    try {
      const res = await Axios.getPortfolios()
      data = await res; 


    } catch (err) {
      console.log(err);
      data = [];
    }
  
    return { data};
  }
  
 render() {
   const {data}= this.props
   console.log(data);
  
 return (
  <div>
     <Head title="Home" /> 
    <Nav />

    <div className=" ">
      <p className="title"> wtyczka scss intel wyL/wl vsc</p>
      
      <p className="title"> package.json  uważaj na przecinki 
  po każdym dodanym pliku do pages resetuj serv, zmiana  scripts "start" heroku/localhost</p>

      

      <p className="description" >Przy serv dev.js do .gitignore</p>

      <p className="description" >w env.config.js wklaj adres heroku</p>

      <p className="description" >server na mlab</p>

      <p className="description" >w heroku Reveal Config Vars DB_URI, adres z mlab, dev.js </p>
      <p className="description" >Sprawdz w postman przy uruchomionym localhost 300, nastepnie próba heroku zmina npm start</p>

      <p className="description" >Sprawdz czy axios Instnce i server maja ten sam adress</p>

      <p className="description" >Optymalizacja obrazków w necie</p>

      <p className="description" >Sprawdz czy dziala compression</p>
      



      <Link  route={`/blog`}>
              <a  >Wiécej</a>
            </Link>
   </div>

    <style jsx>{`
      
    `}</style>
  </div>
);
}
}
export default Index


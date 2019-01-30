import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import {Link} from '../routes'


const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className=" ">
      <h1 className="title"> wtyczka scss intel wyL/wl vsc</h1>

      <p className="description" >Przy serv dev.js do .gitignore</p>

      <p className="description" >w env.config.js wklaj adres heroku</p>

      <p className="description" >server na mlab</p>

      <p className="description" >w heroku Reveal Config Vars DB_URI, adres z mlab, dev.js </p>
      <p className="description" >Sprawdz w postman przy uruchomionym localhost 300, nastepnie próba heroku zmina npm start</p>
      <Link  route={`/blog`}>
              <a  >Wiécej</a>
            </Link>
   </div>

    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home

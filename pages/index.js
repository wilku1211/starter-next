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
      <p className="description" >lllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</p>
      <Link  route={`/blog`}>
              <a  >Wiécej</a>
            </Link>
   </div>

    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home

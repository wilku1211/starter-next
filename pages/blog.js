import React from 'react';
import Router from "next/router";

   
const Blog = ( props ) => {
   
return (
   <div><h1>Strona Blog</h1>
    <span className="display-4" onClick={() => Router.back()}>
                back
              </span>
   
   
   </div>
   
)
};
   
export default Blog;
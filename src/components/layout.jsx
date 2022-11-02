import * as React from 'react'
import Header from "./header";
import Footer from './footer';
import './layout.css'


const Layout = ()=>{
    return(
        <React.Fragment>
            <Header/>
            <Footer/>
        </React.Fragment>
    )
}
export default Layout;
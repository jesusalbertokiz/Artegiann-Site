import * as React from 'react'
import Header from "./header";
import Footer from './footer';
import './layout.css'


const Layout = ({children})=>{
    return(
        <React.Fragment>
            <div id='layout'>
                <Header/>
                    {children}
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default Layout;
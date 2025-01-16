import React from 'react'; 
import HomeChild1 from './HomeChild1'; 
import HomeChild2 from './HomeChild2'; 
import Header from '../Header'; 
 
const Home = () => { 
    return ( 
        <div className='text-center'> 
            <Header /> 
            <h2>Home Page</h2> 
            <HomeChild1 /> 
            <HomeChild2 /> 
        </div> 
    ); 
}; 
 
export default Home;
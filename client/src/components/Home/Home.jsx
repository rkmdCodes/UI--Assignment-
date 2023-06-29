import React,{useState} from 'react'
import Header from '../Header/Header';
import Status from '../Status/Status';
import Footer from '../Footer/Footer';
import '../Home/Home.css'

 const Home = () => {

  const [clicked , setClicked] = useState(false);
 
  return (
    <div className='container' >
      <Header/>
      <Status clicked={clicked}/>
      <Footer clicked={clicked} setClicked={setClicked}/>
    </div>
  )
}

export default Home;
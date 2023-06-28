import React,{useState} from 'react'
import Header from '../Header/Header';
import Status from '../Status/Status';
import Footer from '../Footer/Footer';
import '../Header/Header.css';

 const Home = () => {

  const [clicked , setClicked] = useState(false);
 
  return (
    <div >
      <Header/>
      <Status clicked={clicked}/>
      <Footer clicked={clicked} setClicked={setClicked}/>
    </div>
  )
}

export default Home;
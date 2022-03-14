import { useEffect } from "react";
import { useNavigate } from "react-router";

const NoMatch = () => {
  const navigate = useNavigate();
  
  useEffect( ()=>{
    setTimeout(()=>{
      navigate('/')
    }, 5000)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<div >
    <h2>NoMatch-Seite</h2>
    <p>Diese Seite existiert nicht. Du wirst gleich automatisch zur 
      Startseite weitergeleitet
    </p>
  </div>)
}

export default NoMatch;
import React from "react"
import {Link} from "gatsby"
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Desenvolvido em parceria com <Link to="https://www.vncasainteligente.pt/">VN Casa Inteligente</Link>
        &emsp; <RiFacebookCircleFill style={{paddingTop: 2}}/> 
      <Link to="https://www.facebook.com/casascominteligencia/" target="_blank">Facebook</Link>
      </p>
    </div>
  </footer>
)

export default Footer
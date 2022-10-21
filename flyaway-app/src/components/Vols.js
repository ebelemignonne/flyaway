import Card from 'react-bootstrap/Card';
import airplane from './images/airplane.png'
import Turkish_Airlines from './images/Turkish_Airlines.png'
import logo from './images/logo.png'
import ethiopian from './images/ethiopian.png'
import airfrance from './images/airfrance.png'
import './Vols.css';
import { Link } from 'react-router-dom';


function BgColorExample() {
  return (

    <div className='cards'>
      
      <Card className='card'>
        <Link to="/enregistrement" className='link'>
          <Card.Header className='turkish'><img src={Turkish_Airlines} height="35"/> <h4>220 400 Fcfa</h4></Card.Header>
          <Card.Body>
            <div className='text'>
              <Card.Text>
              LBV <br/> 06:30 AM
              </Card.Text>
              <div className='plane'><img src={airplane} height="15"/><h6>7h 10m</h6></div>
              <Card.Text>
              IST <br/> 03:30 PM
              </Card.Text>
            </div>
            <Card.Title className='detail'><h6>Détails & frais bagages</h6></Card.Title>
          </Card.Body>
        </Link>
      </Card>

      
        <Card className='card'>
          <Link to="/enregistrement" className='link'>
            <Card.Header className='logo'><img src={logo} height="45"/> <h4> 50 000 Fcfa</h4></Card.Header>
            <Card.Body>
              <div className='text'>
                <Card.Text>
                LBV <br/> 06:30 AM
                </Card.Text>
                <div className='plane'><img src={airplane} height="15"/><h6>45min</h6></div>
                <Card.Text>
                POG <br/> 03:30 PM
                </Card.Text>
              </div>
              <Card.Title className='detail'><h6>Détails & frais bagages</h6></Card.Title>
            </Card.Body>
          </Link>
        </Card>
      

      <Card className='card'>
        <Link to="/enregistrement" className='link'>
          <Card.Header className='ethiopian'><img src={ethiopian} height="35"/> <h4>355 000 Fcfa</h4></Card.Header>
          <Card.Body>
            <div className='text'>
              <Card.Text>
              LBV <br/> 06:30 AM
              </Card.Text>
              <div className='plane'><img src={airplane} height="15"/><h6>7h 10m</h6></div>
              <Card.Text>
              DAK <br/> 03:30 PM
              </Card.Text>
            </div>
            <Card.Title className='detail'><h6>Détails & frais bagages</h6></Card.Title>
          </Card.Body>
        </Link>
      </Card>

      <Card className='card'>
        <Link to="/enregistrement" className='link'>
          <Card.Header className='airfrance'><img src={airfrance} height="45"/> <h4>550 400 Fcfa</h4></Card.Header>
          <Card.Body>
            <div className='text'>
              <Card.Text>
              LBV <br/> 06:30 AM
              </Card.Text>
              <div className='plane'><img src={airplane} height="15"/><h6>7h 10m</h6></div>
              <Card.Text>
              PAR <br/> 03:30 PM
              </Card.Text>
            </div>
            <Card.Title className='detail'><h6>Détails & frais bagages</h6></Card.Title>
          </Card.Body>
        </Link>
      </Card>

    </div>
  );
}

export default BgColorExample;
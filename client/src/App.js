import React from 'react';
import logo from './logo.svg';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileHeader from './components/MobileHeader/MobileHeader';

class App extends Component {

  constructor(props){
     super(props);
     this.state={
     appName: "Banana Project"
    }
   }

  render() {
  return (
    <div className="off-canvas-wrapper">
    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
    <div className="off-canvas-content" data-off-canvas-content>
    </div>
    </div>
    </div>
 );
}
}
export default App;

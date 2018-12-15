import React, { Component } from 'react';
import './App.css';
import { Layout, Header, HeaderTabs, Tab, Content } from 'react-mdl';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.state = { activeTab: 0,
        aboutTabActive: true,
        worksTabActive: false,
        contactTabActive: false
        };
    }

    scrollToAbout = () => {
        if(!this.state.aboutTabActive){
            document.getElementById('Content').scroll({
                top: document.getElementById('About').getBoundingClientRect().top -75, 
                left: 0, 
                behavior: 'smooth'
              });
              this.setState({
                aboutTabActive: true,
                worksTabActive: false,
                contactTabActive: false
              });
        }
    }

    scrollToWorks = () => {
        if(!this.state.worksTabActive){
    document.getElementById('Content').scroll({
        top: 700, 
        left: 0, 
        behavior: 'smooth'
      });
      this.setState({
        aboutTabActive: false,
        worksTabActive: true,
        contactTabActive: false
      });
    }
    }

    scrollToContact = () => {
        if(!this.state.contactTabActive){
        document.getElementById('Content').scroll({
            top: 1325, 
            left: 0, 
            behavior: 'smooth'
          });
          this.setState({
            aboutTabActive: false,
        worksTabActive: false,
        contactTabActive: true
          });
        }
    }
    

  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
      <Home />
    <Layout fixedHeader fixedTabs style={{background: 'white'}}>
        <Header  style={{background: 'white'}}>
            <HeaderTabs ripple activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                <Tab onClick={this.scrollToAbout}style={{background: 'white', color: 'black'}}>About</Tab>
                <Tab onClick={this.scrollToWorks}style={{background: 'white', color: 'black'}}>Works</Tab>
                <Tab onClick={this.scrollToContact}style={{background: 'white', color: 'black'}}>Contact</Tab>
            </HeaderTabs>
        </Header>
        <Content  id='Content'>
            <div className="page-content">
             <About/>
             <Works/>
             <Contact/>
             <Footer />
            </div>
        </Content>
    </Layout>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, HeaderTabs, Tab, Content } from 'react-mdl';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
      <Home/>
    <Layout fixedHeader fixedTabs style={{background: 'white'}}>
        <Header  style={{background: 'white'}}>
            <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>

                <Tab style={{background: 'white', color: 'black'}}>About</Tab>
                <Tab style={{background: 'white', color: 'black'}}>Works</Tab>
                <Tab style={{background: 'white', color: 'black'}}>Contact</Tab>
            </HeaderTabs>
        </Header>
        <Content>
            <div className="page-content">
             <About />
             <Works />
             <Contact />
             <Footer />
            </div>
        </Content>
    </Layout>
    </div>
    );
  }
}

export default App;

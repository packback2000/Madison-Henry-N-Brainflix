import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import uploadsPage from './pages/UploadPage/Uploads';
import VideoList from './pages/VideoList/VideoList';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={VideoList}></Route>
          <Route path="/videos/:videoID" 
            render = {
              (props) => <VideoList match={props.match}/>}
             />
             <Route path="/videos"  component={VideoList} />
          <Route path="/uploads" component={uploadsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

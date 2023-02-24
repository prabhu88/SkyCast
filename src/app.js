import React, {useState, useEffect,Suspense} from 'react';
import { HashRouter, Route,Switch,Redirect}   from 'react-router-dom';
import Layout from './layout/default';
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse">loading</div>
    </div>
)
const App = () => {    

    return (
        <HashRouter>
            <Suspense fallback={loading}>
                <Switch>
                    <Route path="/Admin" render={(props) => <Layout {...props} />} />
                    <Redirect from="/" to="Admin/Dashboard" />
                </Switch>
            </Suspense>        
        </HashRouter>
    );
};

export default App;

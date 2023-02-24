import React, {useState, useEffect,Suspense} from 'react';
import { HashRouter, Route,Switch,Redirect}   from 'react-router-dom';
import {api} from './api';
import Layout from './layout/default';
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse">loading</div>
    </div>
)
const App = () => {
    const [successText, setSuccessText] = useState(null);

    useEffect(() => {
        api.get('/test')
            .then(({data}) => setSuccessText(data))
            .catch(err => console.error(err));
    });

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

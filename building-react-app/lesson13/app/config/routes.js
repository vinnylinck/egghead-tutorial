import React    from 'react';
import Main     from '../components/Main';
import Profile  from '../components/Profile';
import Home     from '../components/Home';
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={Main} >
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
)

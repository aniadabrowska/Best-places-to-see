import React from 'react';
import { Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexLink
  } from 'react-router';

import {Layout} from './Components/Pages/Layout.jsx';
import {Start} from './Components/Pages/Start.jsx'
// import {HelloYou} from './Components/Pages/HelloYou.jsx'
// import {CheckAge} from './Components/Pages/CheckAge.jsx'

class MainRouter extends React.Component {
    render()  {
        return  <div><Start/></div>
        }
}

export {MainRouter}

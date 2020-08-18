import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Text from ExpenseDashboardPage
    </div>
);

const AddExpensePage = () => (
    <div>
        Text from AddExpensePage
    </div>
);

const EditExpensePage = () => (
    <div>
        Text from EditExpensePage
    </div>
);

const HelpPage = () => (
    <div>
        Text from HelpPage
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

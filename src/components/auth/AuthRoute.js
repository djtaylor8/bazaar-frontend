import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = (props) => {
    const { isAuth, type } = props;

    if (type === 'guest' && isAuth) return <Redirect to="/" />;
    else if (type === 'private' && !isAuth) return <Redirect to='/' />;
    return <Route {...props} />
};

const mapStateToProps = ({ isAuth }) => ({
    isAuth
});

export default connect(mapStateToProps)(AuthRoute);
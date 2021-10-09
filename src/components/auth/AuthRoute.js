import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = (props) => {
    const { user, type } = props;

    if (type === 'guest' && user.isAuth) return <Redirect to='/'/>;
    else if (type === 'private' && !user.isAuth) return <Redirect to='/'/>;
    return <Route {...props} />
};

const mapStateToProps = ({ user }) => ({
    user
});

export default connect(mapStateToProps)(AuthRoute);
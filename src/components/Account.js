import React, { Component } from "react";
import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization"; //redirects to sign in if user not signed in
import { db, auth } from '../firebase/firebase';
import Navigation from "./Navigation";
import PasswordChangeForm from './PasswordChange';
import { Container, Table } from "react-bootstrap";
import ChangeDetailsForm from './ChangeDetails'

const INITIAL_STATE = {
  name: "",
  email: "",
  error: null
};

class AccountPage extends Component {

  state = {...INITIAL_STATE};

  componentWillMount() {
      db.ref('users/' + auth.currentUser.uid).once('value').then((snapshot) => {
        if (snapshot) {
          this.setState(snapshot.val());
        }
      }).catch( e => {
        alert(e.message);
      })
  }

  render() {
    return <div>
      <AuthUserContext.Consumer >
        {authUser => (
          <Container style={{marginTop: "110px"}}>
          <center>
            <div className="div-flex">
              <div>
                <h2>{this.state.name}</h2>
                <div>{this.state.email}</div>
              </div>
            </div>
            <br/>
            <PasswordChangeForm />
          </center>
          </Container>
        )}
      </AuthUserContext.Consumer>
      <hr/>
      <br/>
    </div>
  }
};

const authCondition = authUser =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; //true and false

export default withAuthorization(authCondition)(AccountPage);

import { useEffect } from "react";
import { useHistory } from "react-router";
import firebase from "../../firebase";

function RedirectPage() {
  const history = useHistory();
  function Redirect() {
    const user = firebase.auth().currentUser;
    if (!user) {
      history.replace("/login");
    }
  }
  useEffect(() => {
    Redirect();
  }, []);
  function signOut() {
    firebase
      .auth()
      .signOut()
      .then((res) => history.replace("/login"))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <button onClick={signOut}>SIGN OUT</button>
      <div>{firebase.auth().currentUser.phoneNumber}</div>
    </div>
  );
}

export default RedirectPage;

import useMediaQuery from "../../utils/useMediaQuery";
import { Image, PinInput, PinInputField, HStack } from "@chakra-ui/react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useState } from "react";
import firebase from "../../firebase";
import LinearProgress from "../../components/progress/progress";
import { useHistory } from "react-router";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    justifyContent: "center",
    boxShadow: "0 12px 15px rgba(15 15 15 /15%)",
  },
};

function LoginPage() {
  var isSmallScreen = useMediaQuery(600);
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCodeSent, setCodeSent] = useState(false);
  const [pin, setPin] = useState("");
  const [signInError, setSignInError] = useState("");
  function setRecaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (res) => {
          console.log("HI");
          setCaptcha(true);
        },
        defaultCountry: "IN",
        "expired-callback": (r) => {
          setCaptcha(false);
        },
      }
    );
  }
  async function sendOTP() {
    if (phone.length !== 10) {
      toast.error("Please enter a valid phone number", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!/^\d+$/.test(phone)) {
      toast.error("Please enter a valid phone number", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!captcha) {
      setRecaptcha();
    }
    setLoading(true);
    firebase
      .auth()
      .signInWithPhoneNumber("+91" + phone, window.recaptchaVerifier)
      .then((res) => {
        window.confirmationResult = res;
        setLoading(false);
        setCodeSent(true);
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === "auth/invalid-phone-number") {
          toast.error("Please enter a valid phone number", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        } else {
          toast.error("An error occurred in sending OTP", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }
      });
  }
  const history = useHistory();
  async function SignIn() {
    if (pin.length === 6) {
      setLoading(true);
      window.confirmationResult
        .confirm(pin)
        .then((res) => {
          setLoading(false);
          history.replace("/redirect");
        })
        .catch((err) => {
          setLoading(false);
          if(err.code==="auth/invalid-verification-code"){
            setSignInError("Please enter correct OTP");
          }
          else{
            setSignInError("An Error Occurred!");
          }
        });
    }
  }
  if (isSmallScreen) {
    return (
      <div>
        <LinearProgress isLoading={isLoading} />
        <div>
          <div
            className="top-image"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F5F5F5",
            }}
          >
            <Image
              src="./phone_auth.png"
              alt="phone_auth.png"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div className="login-heading-mobile">LOGIN</div>
          <div className="continue-text-mobile">
            Continue with your phone number
          </div>
          <div className="input-holder">
            <div className="code-holder">+91</div>
            <input
              style={{ width: "100%" }}
              placeholder="Enter your phone number"
              className="phone-input"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <button
              className="continue-button"
              style={{
                cursor: "pointer",
                width: "100%",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              onClick={sendOTP}
              disabled={isLoading}
            >
              {isLoading ? "LOADING..." : "CONTINUE"}
            </button>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Modal style={customStyles} isOpen={isCodeSent}>
          <div
            style={{
              width: "100%",
              height: "60px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <HStack>
              <PinInput
                otp
                size="sm"
                value={pin}
                onChange={(event) => setPin(event)}
                mask
              >
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
              </PinInput>
            </HStack>
          </div>
          <div style={{ height: "20px" }} />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
            }}
          >
            {signInError}
          </div>
          <div style={{ height: "20px" }} />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "40px",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  width: "130px",
                  height: "100%",
                  outline: "none",
                  borderColor: "red",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  backgroundColor: "transparent",
                  color: "red",
                }}
                onClick={() => {
                  setCodeSent(false);
                  setSignInError("");
                  setPin("");
                }}
              >
                CANCEL
              </button>
              <button
                style={{
                  width: "130px",
                  height: "100%",
                  outline: "none",
                  backgroundColor: "#00BFA6",
                  border: "none",
                  color: "white",
                }}
                disabled={isLoading}
                onClick={SignIn}
              >
                {isLoading ? "LOADING..." : "SIGN IN"}
              </button>
            </div>
          </div>
        </Modal>
        <div id="recaptcha" />
      </div>
    );
  } else {
    return (
      <div>
        <LinearProgress isLoading={isLoading} />
        <div className="center-div">
          <div
            className="image-holder"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F5F5F5",
            }}
          >
            <Image
              src="./phone_auth.png"
              alt="phone_auth.png"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div className="login-heading">LOGIN</div>
          <div className="continue">Continue with your phone number</div>
          <div
            className="btn-holder"
            style={{ display: "flex", height: "auto" }}
          >
            <div className="phone-icon-holder">+91</div>
            <input
              className="phone-input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="continue-button-holder">
            <button
              className="continue-button"
              style={{ cursor: "pointer" }}
              onClick={sendOTP}
              disabled={isLoading}
            >
              {isLoading ? "LOADING..." : "CONTINUE"}
            </button>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Modal style={customStyles} isOpen={isCodeSent}>
          <div
            style={{
              width: "100%",
              height: "60px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <HStack>
              <PinInput
                otp
                size="sm"
                value={pin}
                onChange={(event) => setPin(event)}
                mask
              >
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
                <PinInputField
                  width="40px"
                  height="40px"
                  textAlign="center"
                  className="pin-input"
                />
              </PinInput>
            </HStack>
          </div>
          <div style={{ height: "20px" }} />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
            }}
          >
            {signInError}
          </div>
          <div style={{ height: "20px" }} />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "40px",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  width: "130px",
                  height: "100%",
                  outline: "none",
                  borderColor: "red",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  backgroundColor: "transparent",
                  color: "red",
                }}
                onClick={() => {
                  setCodeSent(false);
                  setPin("");
                  setSignInError("");
                }}
              >
                CANCEL
              </button>
              <button
                style={{
                  width: "130px",
                  height: "100%",
                  outline: "none",
                  backgroundColor: "#00BFA6",
                  border: "none",
                  color: "white",
                }}
                disabled={isLoading}
                onClick={SignIn}
              >
                {isLoading ? "LOADING..." : "SIGN IN"}
              </button>
            </div>
          </div>
        </Modal>
        <div id="recaptcha" />
      </div>
    );
  }
}

export default LoginPage;

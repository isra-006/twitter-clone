import { BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../context/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { Modal, Box} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 8,
  };

const OtpLogin = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    let navigate = useNavigate();
  
    function onCaptchVerify() {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              onSignup();
            },
            "expired-callback": () => {},
          },
          auth
        );
      }
    }
  
    function onSignup() {
      setLoading(true);
      onCaptchVerify();
  
      const appVerifier = window.recaptchaVerifier;
  
      const formatPh = "+" + ph;
  
      signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setShowOTP(true);
          toast.success("OTP sended successfully!");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  
    function onOTPVerify() {
      setLoading(true);
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          console.log(res);
          setUser(res.user);
          setLoading(false);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
      const handleClose = () => {
        setOpen(false);
      };
  
    return (
      <Modal 
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
       >
        <Box sx={style} className="otp_modal">
            
        <div className="otp-container" >
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {user ? (
            <h3 className="heading1">👍Login Success</h3>
          ) : (
            <div>
              
              {showOTP ? (
                <>
                  
                  <label
                    htmlFor="otp" 
                  >
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                  ></OtpInput>
                  
                  <button
                    onClick={onOTPVerify}
                    type="submit" className="btn"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <BsTelephoneFill size={30} />
                  </div>
                  <label
                    htmlFor=""
                   
                  >
                    Verify your phone number
                  </label>
                  <PhoneInput country={"in"} value={ph} onChange={setPh} className="phonenumber_input"/>
                  <button
                    onClick={onSignup}
                    className="phonenumber_button"
                  >
                    {loading && (
                      <CgSpinner size={20}/>
                    )}
                    <span>Send code via SMS</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        </Box>

        
      </Modal>
    );
  };

export default OtpLogin

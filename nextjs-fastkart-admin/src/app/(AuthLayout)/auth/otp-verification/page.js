"use client";
import ShowBox from "@/Elements/Alerts&Modals/ShowBox";
import { obscureEmail } from "@/Utils/CustomFunctions/EmailFormates";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import NoSsr from "@/Utils/HOC/NoSsr";
import useHandleForgotPassword from "@/Utils/Hooks/Auth/useForgotPassword";
import useOtpVerification from "@/Utils/Hooks/Auth/useOtpVerification";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "reactstrap";

const OtpVerification = () => {
  const { t } = useTranslation("common");
  const [showBoxMessage, setShowBoxMessage] = useState();
  const cookies = Cookies.get("ue");
  const [seconds, setSeconds] = useState();
  const [otp, setOtp] = useState("");
  const { mutate: otpVerification } = useOtpVerification(setShowBoxMessage);
  const { mutate: forgotPassword } = useHandleForgotPassword(setShowBoxMessage);
  const handleChange = (e) => {
    if (e.target.value.length <= 5 && !isNaN(Number(e.target.value))) {
      setOtp(e.target.value);
    }
  };

  useEffect(() => {
    otp && otp.length === 5 && otpVerification({ email: cookies, token: otp });
  }, [otp]);

  useEffect(() => {
    const otpTimer =
      Boolean(seconds) && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => {
      clearInterval(otpTimer);
    };
  }, [seconds]);
  return (
    <>
      <div className="box-wrapper">
        <ShowBox showBoxMessage={showBoxMessage} />
        <LoginBoxWrapper>
          <div className="log-in-title">
            <h3 className="text-content">
              {t("PleasEnterTheOneTimePasswordToVerifyYourAccount")}
            </h3>
            <h5 className="text-content">
              {t("ACodeHasBeenSentTo") + " "}
              <span>
                <NoSsr>{obscureEmail(cookies)}</NoSsr>
              </span>
            </h5>
          </div>
          <div className="outer-otp">
            <div className="inner-otp">
              <Input
                type="text"
                maxLength="5"
                onChange={handleChange}
                value={otp}
              />
            </div>
          </div>
          <div className="send-box pt-4">
            {seconds ? (
              <h5>
                {t("PleaseWait")}
                <a className="theme-color fw-bold">
                  {seconds} <NoSsr>{t("second(s)")}</NoSsr>3
                </a>
                {t("BeforeRequestingANewOneTimePassword(OTP)")}.
              </h5>
            ) : (
              <h5>
                {t("Didn'tGetTheOTP")}?
                <a
                  className="theme-color fw-bold"
                  onClick={() => {
                    forgotPassword({ email: cookies });
                    setSeconds(60);
                  }}
                >
                  {t("ResendIt")}
                </a>
              </h5>
            )}
          </div>
        </LoginBoxWrapper>
      </div>
    </>
  );
};
export default OtpVerification;

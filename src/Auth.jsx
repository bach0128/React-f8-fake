import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./assets/home.scss";

function Auth() {
  const { isLoading, error, loginWithPopup, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <div class="d-flex mt-5 justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="account">
          <h2>Cảm ơn bạn đã sử dụng dịch vụ của F8</h2>
          <h2>
            Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
            tại đây!
          </h2>

          <button className="btn" onClick={() => loginWithPopup()}>
            Đăng nhập || Đăng ký
          </button>
        </div>
      </div>
    );
  }
  return (
    !isAuthenticated && (
      <div>
        <div className="account">
          <h2>Cảm ơn bạn đã sử dụng dịch vụ của F8</h2>
          <h2>
            Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
            tại đây!
          </h2>

          <button className="btn" onClick={() => loginWithPopup()}>
            Đăng nhập || Đăng ký
          </button>
        </div>
      </div>
    )
  );
}

export default Auth;

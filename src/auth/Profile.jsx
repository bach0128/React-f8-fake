import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const form = useRef();
  const { user, logout, isAuthenticated } = useAuth0();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b5n7eqm",
        "template_jfhg7on",
        form.current,
        "6d-0Te-xmx1ELlL6v"
      )
      .then(
        (result) => {
          toast.success("Gửi mail thành công");
        },
        (error) => {
          toast.error("Có lỗi vui lòng thử lại");
        }
      );
  };

  return (
    isAuthenticated && (
      <div className="border p-5 m-5 d-flex justify-content-center align-items-center">
        <form ref={form} onSubmit={sendEmail}>
          <div className="profile-header mb-3 text-center text-md-left ">
            <div>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
              />
            </div>
            <div className="mb-3">
              <h2> Xin chào {user.name}</h2>
              <span>
                Email:
                <a className="text-decoration" href={user.email}>
                  {user.email}
                </a>
              </span>
            </div>
            <textarea
              className="form-control"
              placeholder="Tôi cần trợ giúp bài tập về nhà"
            />
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <button
              className="btn btn-success"
              type="submit"
              onClick={sendEmail}
            >
              Yêu cầu hỗ trợ
            </button>
          </div>
          <div className="mt-1 d-flex justify-content-center align-items-center">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              Đăng xuất
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    )
  );
}

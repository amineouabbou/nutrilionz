import React from "react"
import Styles from "../css/footer.module.scss"
import logoLionHead from "../assets/images/logo-mobile.svg"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import Notification from "../comp/Notification"

export default class Footer extends React.Component {
  state = {
    email: "",
    subscribed: false,
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState({
      email: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const Input = document.getElementById("client-mail")
    let { value } = Input

    if (this.mailIsValid(value) && value !== "") {
      this.callApi()
      this.setState({
        emailError: false,
      })
      value = ""
    } else {
      this.setState({
        emailError: true,
      })
    }
  }

  callApi() {
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    let client = {
      email: this.state.email,
      send_emails: false,
    }

    const myInit = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(client),
    }

    fetch(
      "https://www.nutrilionz.ma/wp-local/wp-json/newsletter/v1/subscribe",
      myInit
    )
      .then(res => {
        this.setState({
          email: "",
          subscribed: true,
        })

        setTimeout(() => {
          this.setState({
            subscribed: false,
          })
        }, 2500)
      })
      .catch(res => {})
  }

  mailIsValid = value => {
    /* eslint-disable */
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
    return validEmailRegex.test(value)
    /* eslint-enable */
  }

  render() {
    return (
      <>
        <footer className={Styles.footer}>
          <div className={Styles.footerTop}>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
                  <div className={Styles.middleBox}>
                    <div className={Styles.logoBox}>
                      <img
                        width="60"
                        src={logoLionHead}
                        alt="nutrilionz logo"
                      />
                    </div>
                    <div className={Styles.shortDesc}>
                      إنطلقت شركة Nutrilionz، بنظرة مغايرة و مبتكرة عن الباقي،
                      فلقد تم إنشاء موقع Nutrilionz ليكون ليس فقط موقع لبيع
                      المكملات الغذائية، بل منصة متكاملة حيث نقدم فيها جميع
                      معارفنا و خبراتنا للمساعدة على النهوض بالرياضة و ثقافة
                      الرياضة و الجسم السليم في المغرب، و مرافقة جميع أبطالنا في
                      تحقيق جميع أهدافهم بكل سهولة و امان.
                    </div>
                    <div className={Styles.socialShare}>
                      <ul>
                        <li>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/Nutrilionz.ma/"
                          >
                            <i>
                              <FaFacebookF />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/nutrilionz/"
                          >
                            <i>
                              <FaInstagram />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        <div className={Styles.newsletterFooter}>
                          <h3>أدخل إيميلك ليصلك جديد المقالات</h3>
                          <div id="input-box" className={Styles.inputBox}>
                            <form onSubmit={this.handleSubmit} action="">
                              <input
                                id="client-mail"
                                onChange={this.handleInputChange}
                                type="text"
                                name="email"
                                value={this.state.email}
                                className={Styles.inputText}
                                placeholder="أدخل بريدك الإلكتروني"
                              />
                              <button className={Styles.button}>
                                <span>
                                  <span>سجل</span>
                                </span>
                              </button>
                            </form>
                            {this.state.emailError ? (
                              <div className={Styles.errorBox}>
                                المرجو إدخال بريد إلكتروني صحيح
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.footerMiddle}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className={Styles.footerLinks}>
                    <div className="row">
                      <div className="col-6 col-sm-4 col-lg-5 placeholder">
                        <div className={Styles.ulBox}>
                          <h4>تغذية</h4>
                          <ul>
                            <li>
                              <a rel="noreferrer" href="http://www.google.com">
                                مكملات
                              </a>
                            </li>
                            <li>
                              <a rel="noreferrer" href="http://www.google.com">
                                تمارين
                              </a>
                            </li>
                            <li>
                              <a rel="noreferrer" href="http://www.google.com">
                                بناء العضلات
                              </a>
                            </li>
                            <li>
                              <a rel="noreferrer" href="http://www.google.com">
                                نصائح عامة
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-6 col-sm-4 col-lg-5 placeholder">
                        <div className={Styles.ulBox}>
                          <h4>متجرنا</h4>
                          <ul>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.nutrilionz.ma/ar/whey-protein"
                              >
                                واي بروتين
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.nutrilionz.ma/ar/mass-gainer"
                              >
                                زيادة الوزن
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.nutrilionz.ma/ar/acides-amines"
                              >
                                أحماض أمينية
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.nutrilionz.ma/ar/vitamines-mineraux"
                              >
                                فيتامينات
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.copyrightsBottom}>
            <div className="container">
              <p>
                © جميع الحقوق محفوظة 2020 <strong>Nutrilionz</strong>
              </p>
            </div>
          </div>
        </footer>
        {this.state.subscribed ? <Notification /> : null}
      </>
    )
  }
}

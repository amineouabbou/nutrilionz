import React, { Component } from "react"
import Styles from "../css/share.module.scss"
import { FaFacebookF } from "react-icons/fa"

export default class Shareit extends Component {
  state = {
    btnActive: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const windowHeight = window.scrollY
    if (windowHeight > 700) {
      this.setState({
        btnActive: true,
      })
    } else if (windowHeight < 700) {
      this.setState({
        btnActive: false,
      })
    }
  }

  render() {
    const { sharer } = this.props
    return (
      <div
        className={`${Styles.boxShareBottom} ${
          this.state.btnActive ? Styles.active : null
        } d-md-none`}
      >
        <button onClick={sharer}>
          <span>
            <span>
              <i>
                <FaFacebookF />
              </i>
              <strong>شارك المقال</strong>
            </span>
          </span>
        </button>
      </div>
    )
  }
}

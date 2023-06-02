import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorFirstMsgParagraph: '',
    errorLastMsgParagraph: '',
    issubmit: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  errorFirstMsg = () => {
    const {firstName, errorMsgParagraph, lastName} = this.state
    if (firstName === '') {
      this.setState({errorFirstMsgParagraph: 'Required'})
    } else {
      this.setState({errorFirstMsgParagraph: ''})
    }
  }

  errorLastMsg = () => {
    const {firstName, errorMsgParagraph, lastName} = this.state
    if (lastName === '') {
      this.setState({errorLastMsgParagraph: 'Required'})
    } else {
      this.setState({errorLastMsgParagraph: ''})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmit: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({
        errorFirstMsgParagraph: 'Required',
        errorLastMsgParagraph: 'Required',
      })
    } else if (firstName === '') {
      this.setState({
        errorFirstMsgParagraph: 'Required',
      })
    } else if (lastName === '') {
      this.setState({
        errorLastMsgParagraph: 'Required',
      })
    }
  }

  submitHomePage = () => {
    this.setState({
      isSubmit: false,
      firstName: '',
      lastName: '',
    })
  }

  render() {
    const {errorFirstMsgParagraph, errorLastMsgParagraph, isSubmit} = this.state
    let submitPage
    if (isSubmit === true) {
      submitPage = (
        <div className="success-response">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-image"
          />
          <p className="label">Submitted Successfully</p>
          <button
            type="button"
            className="submit-button"
            onClick={this.submitHomePage}
          >
            Submit Another Response
          </button>
        </div>
      )
    } else {
      submitPage = (
        <div>
          <form onSubmit={this.onSubmitForm}>
            <div>
              <label htmlFor="First Name" className="label">
                First Name
              </label>
              <br />
              <input
                type="text"
                id="First Name"
                placeholder="First name"
                onChange={this.onChangeFirstName}
                onBlur={this.errorFirstMsg}
                className="input"
              />
              {/* <br /> */}
              <p className="error-msg">{errorFirstMsgParagraph}</p>
            </div>
            <label htmlFor="Last Name" className="label">
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="Last Name"
              placeholder="Last name"
              onChange={this.onChangeLastName}
              onBlur={this.errorLastMsg}
              className="input"
            />
            <br />
            <p className="error-msg">{errorLastMsgParagraph}</p>
            <div className="for-button">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      )
    }

    return (
      <div className="bg-color">
        <h1 className="heading">Registration</h1>
        <div className="bg-sub">{submitPage}</div>
      </div>
    )
  }
}
export default RegistrationForm

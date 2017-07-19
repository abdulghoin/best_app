// import Packages
import React, {Component} from 'react'
import {Link} from 'react-router'
// import Helmet from 'react-helmet'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name_error : false,
      email_error : false,
      phone_error : false,
      agree_error : false,
      agree : false,
    }
  }

  onSignUp=(e)=>{
    e.preventDefault();

    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;
    let {agree} = this.state;
    console.log(name, email, phone, agree);

    if (name=='') {
      this.setState({name_error:true})
    }else{
      this.setState({name_error:false})
    }
    if (email=='') {
      this.setState({email_error:true})
    }else {
      this.setState({email_error:false})
    }
    if (phone=='') {
      this.setState({phone_error:true})
    }else {
      this.setState({phone_error:false})
    }
    if (agree==false) {
      this.setState({agree_error:true})
    }

    if (name!=''&&email!=''&&phone!=''&&agree==true) {
    }
  }

  onTogleAgree=()=>{
    if (!this.state.agree) {
      this.setState({agree_error: false})
    }
    this.setState({agree: !this.state.agree})
  }

  render() {
    let {name_error, email_error, phone_error, agree_error} = this.state;

    return(
      <section id='sign-up' class='two-part-page'>
        {/* <Helmet title='Sign-Up'/> */}
        <div class='top'>
          <div class='left'>
            <div>
              <h1>
                Meet BestApp<br/>
                The new world for chat
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div class='right'>
            <div class='box form'>
              <h3>Sign Up!</h3>

              <form onSubmit={this.onSignUp}>
                <div class='form-group'>
                  <input
                    type="text"
                    class={`${name_error?'error':''} form-control`}
                    id="name"
                    ref='name'
                    placeholder="Your Name"
                  />
                </div>
                <div class='form-group'>
                  <input
                    type="email"
                    class={`${email_error?'error':''} form-control`}
                    id="email"
                    ref='email'
                    placeholder="Email Address*"
                  />
                </div>
                <div class='form-group'>
                  <input
                    type="text"
                    class={`${phone_error?'error':''} form-control`}
                    id="phone"
                    ref='phone'
                    placeholder="Phone Number"
                  />
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      type="checkbox"
                      onClick={this.onTogleAgree}
                      class="form-check-input"
                    />
                    I agree to the <Link to=''>terms and condition</Link>
                  </label>
                  {
                    agree_error&&
                    <p class='error_text'>
                      You must agree with terms and condition to sign up.
                    </p>
                  }
                </div>

                <div class='btn-container'>
                  <button>
                    Send me this app!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class='bottom'>

          <div class='btn-container'>
            <Link
              to=''
              class='bottom-btn'
            >
              Learn More
            </Link>
            <a
              href=''
              class='bottom-btn'
            >
              <i class="fa fa-cloud-download" aria-hidden="true"></i> Download App
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default SignUp

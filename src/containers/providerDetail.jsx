import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetails, pushNotifs, tellTwilio } from "../actions/index";
import { bindActionCreators } from "redux";
import "../styles/providerDetail.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class ProviderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pushNotifs: false,
      user: {},
      contact: "",
      method: ""
      // confirmationSnackbarOpen: false,
      // snackbarDisabled: false
    };
    // this.pushNotifications = this.pushNotifications.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return props.users;
  }

  // pushNotifications(e) {
  //   e.preventDefault();
  //   this.props.pushNotifs(true);
  //   this.setState({ pushNotifs: true });
  // }

  sendMessage(e) {
    e.preventDefault();

    console.log("METHOD", this.props.users.user.method);
    console.log("PHONE NUMBER", this.props.users.user.contact);
    this.setState(
      {
        // confirmationSnackbarMessage: "Message Sent!",
        // confirmationSnackbarOpen: true,
        // processed: true,
        method: this.props.users.user.method,
        contact: this.props.users.user.contact
      },
      () => {
        this.props.tellTwilio(this.state);
      }
    );
  }

  render() {
    return this.props.doctors.map(doctorData => {
      if (doctorData.provider_id == this.props.match.params.id) {
        return (
          <div key="doctor" className="body">
            <br />
            <br />
            <br />
            <img src={doctorData.image} alt="" />
            <h2>
              {doctorData.first_name} {doctorData.last_name}
            </h2>
            <div className="body-left">
              <h5>{doctorData.specialties}</h5>
              <p>{doctorData.insurance}</p>
            </div>
            <div className="body-right">
              <h5>Phone: {doctorData.phone}</h5>
              <br />
              <section>{doctorData.bio}</section>
            </div>
            <Link to="/register" className="btn btn-primary btn-sm">
              I'm Interested
            </Link>
            <button key="message" onClick={this.sendMessage}>
              Testing Messages
            </button>
          </div>

          // <div className="container">
          // <br/>
          // <br/>
          // <br/>
          // <br/>
          // <br/>
          //   <div className="row">
          //     <div className="col-8">
          //       <div className="card">
          //         <div className="card-header">
          //           <h2>
          //             {doctorData.first_name} {doctorData.last_name}
          //           </h2>
          //         </div>
          //         <img
          //           className="card-img-top img-thumbnail"
          //           src={doctorData.image}
          //           alt="Card image cap"
          //         />
          //         <div className="card-body">
          //           <h5 className="card-text">{doctorData.specialties}</h5>
          //           <p className="card-text">{doctorData.insurance}</p>
          //           <br />
          //           <h5 className="card-text-right">
          //             Phone: {doctorData.phone}
          //           </h5>
          //           <br />
          //           <div className="card-text-right">
          //             About Me: {doctorData.bio}
          // //           </div>
          //           <Link to="/register" className="btn btn-primary btn-sm">
          //             I'm Interested
          //           </Link>
          //           {/* <Button key="notifs" onClick={this.pushNotifications}>
          //             I'm Interested
          //           </Button> */}
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        );
      }
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails, pushNotifs, tellTwilio }, dispatch);
}

function mapStateToProps({ doctors, details, users }) {
  return { doctors, details, users };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderDetail);

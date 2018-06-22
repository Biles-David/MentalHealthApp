import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetails, pushNotifs } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import compose from 'recompose/compose';
import {Notifications} from '../components/notifications.jsx'


class ProviderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushNotifs: false
    }
    this.pushNotifications = this.pushNotifications.bind(this)
  }

  pushNotifications(e) {
    e.preventDefault();


//     self.addEventListener('push', e => {
//       if (!(self.Notification && self.Notification.permission ==='granted'))
// {
//   return;
// }  

// var data = {};
// if (e.data) {
//   data = e.data.json();
// } 
// var title = data.title || "You're Interested!";
// var message = data.message || "Your doctor will be in contact";
// var icon = '../src/styles/static/ocs_cropped.jpg'

// var notification = new self.Notification(title, {
//   body: message,
//   tag: 'doctor-notif',
//   icon:icon
// });
// notification.addEventListener('click', function() {
//   if (clients.openWindow) {
//     clients.openWindow('https://google.com')
//   }
// });

//  });


    const testData = {
  body: "you're interested!",
  icon: '../src/styles/static/ocs_cropped.jpg'
}
    this.props.pushNotifs(testData);
    this.setState({pushNotifs: true})

   
  }

  render() {
    return this.props.doctors.map(doctorData => {
      if (doctorData.provider_id == this.props.match.params.id) {
        return (
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      {doctorData.first_name} {doctorData.last_name}
                    </h2>
                  </div>
                  <img
                    className="card-img-top img-thumbnail"
                    src={doctorData.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-text">{doctorData.specialties}</h5>
                    <p className="card-text">{doctorData.insurance}</p>
                    <div className="card-text-right">
                      Phone: {doctorData.phone}
                    </div>
                    <div className="card-text-right">
                      About Me: {doctorData.bio}
                    </div>

                   <Button key='notifs' onClick={this.pushNotifications}> I'm Interested</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails, pushNotifs }, dispatch);
}

function mapStateToProps({ doctors, details }) {
  return { doctors, details };
}

export default compose(
  connect(
  mapStateToProps,
  mapDispatchToProps)
)(ProviderDetail)

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import {fetchDoctors} from '../actions/index'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: '360px',
      backgroundColor: theme.palette.background.paper,
    },
  });

class ProviderList extends Component{
    constructor(props){
        super(props);
       

    }

    
    renderDoctors(doctorData){
        
        return (
            <Fragment>
            <ListItem key ={doctorData.provider_id} button> 
                <ListItemText primary={doctorData.first_name}/>
                <ListItemText primary={doctorData.last_name}/>
             </ListItem> 
            <ListItem button>
            <ListItemText primary={doctorData.specialties}/>
            </ListItem>
            <ListItem button>
            <ListItemText primary={doctorData.email}/>
            <ListItemText primary={doctorData.phone}/>
            </ListItem>
             <Divider />
             </Fragment>
        )
    }
    

      render(){
        const {classes} = this.props
          return(
              <div className={classes.root}>
                  <List component="nav">
                      {this.props.doctors.map(this.renderDoctors)}
                  </List>
              </div>
          )
      }

}
ProviderList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

function mapStateToProps({doctors}){
    return {doctors}
}
  
  export default compose(withStyles(styles), connect(mapStateToProps))(ProviderList);
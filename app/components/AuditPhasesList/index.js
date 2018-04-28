import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function AuditPhasesList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Phase 1" secondary="1 - 31 Jan/2018" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Phase 2" secondary="1 - 31 Jan/2018" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Phase 3" secondary="1 - 31 Jan/2018" />
        </ListItem>
      </List>
    </div>
  );
}

AuditPhasesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuditPhasesList);

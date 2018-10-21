import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './professor-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let ProfessorView = ({ classes, match }) => (
	<div className={classes.root}>
		<Paper className={classes.paper} elevation={1}>
			<Typography>Hello, Professor!</Typography>
		</Paper>
	</div>
);

ProfessorView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfessorView);
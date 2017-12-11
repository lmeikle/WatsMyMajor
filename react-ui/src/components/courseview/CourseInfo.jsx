import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import PersonIcon from 'material-ui/svg-icons/social/person';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import CartIcon from 'material-ui/svg-icons/maps/local-grocery-store';
import FontAwesome from 'react-fontawesome';

const styles = {
	button: {
		margin: 12,
	},
	icon: {
		width: '20px',
		height: '20px',
		marginRight: '10px'
	},
	divider: {
		borderTop: '1px solid #eeeeee',
		backgroundColor: 'inherit'
	}
};

const Info = ({ icon, info }) => (
	<div className="course-info-details-info">
		{icon}
		{info}
	</div>
);

const DetailedInfo = () => (
	<div className="course-info-details">
		<Info
			icon={<PersonIcon style={styles.icon} />}
			info={'Instructor: Adrian Deman'}
			/>
		<Info
			icon={<PeopleIcon style={styles.icon} />}
			info={'Enrollment cap: 50'}
			/>
		<Info
			icon={<CheckIcon style={styles.icon} />}
			info={'Attending: 30'}
			/>
	</div>
);

const AddToCart = () => (
	<RaisedButton
		onClick={() => {}}
		label="Add To Cart"
		backgroundColor="#a4c639"
		style={styles.button}
		icon={<CartIcon />}
	/>
);

const Share = ({ icon, text }) => (
	<div className="course-info-share">
		{icon}
		<a href="#">{text}</a>
	</div>
);


const CourseInfo = ({ style }) => {

	return (
		<Paper style={style} zDepth={1}>
			<div className="course-info-header">
				<span>Course Info</span>
			</div>
			<Divider style={styles.divider} />
			<DetailedInfo />
			<Divider style={styles.divider} />
			<AddToCart />
			<Divider style={styles.divider} />
			<Share
				icon={<FontAwesome
	        name='facebook'
					style={styles.icon}
	      />}
				text={'Share on Facebook'}
				/>
			<Divider style={styles.divider} />
			<Share
				icon={<FontAwesome
	        name='twitter'
					style={styles.icon}
	      />}
				text={'Share on Twitter'}
				/>
		</Paper>
	);
};

CourseInfo.propTypes = {
	style: PropTypes.object.isRequired
}

export default CourseInfo;
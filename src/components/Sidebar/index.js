import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StorageIcon from '@mui/icons-material/Storage';

import styles from './style.module.scss';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    active: PropTypes.number,
};

const Sidebar = ({isOpen, active}) => {
    return (
        <div className={isOpen? styles.sideBar : styles.hideSideBar }>
            <div className={styles.header}>
                <Link to={"/"} className={styles.listItem}>
                    <HomeIcon className={styles.icon} />
                    {isOpen? <p>Home</p>: ''}
                </Link>
                <Link to={"/"} className={styles.listItem}>
                    <CloudIcon className={styles.icon} />
                    {isOpen? <p>Cloud</p>: ''}
                </Link>
                <Link to={"/"} className={styles.listItem}>
                    <RssFeedIcon className={styles.icon} />
                    {isOpen? <p>Network</p>: ''}
                </Link>
                <Link to={"/"} className={styles.listItem}>
                    <StorageIcon className={styles.icon} />
                    {isOpen? <p>Hosting</p>: ''}
                </Link>
            </div>
        </div>
    );
};

Sidebar.propTypes = propTypes;

export default Sidebar;
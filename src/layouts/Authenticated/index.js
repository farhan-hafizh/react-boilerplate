import { useState } from "react";
import PropTypes from "prop-types";

import Sidebar from "../../components/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';

import styles from './style.module.scss';

const propTypes = {
    children: PropTypes.element.isRequired
};

const Client = ({ children }) => {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container} onCLi>
            <Sidebar isOpen={isOpen}/>
            <div onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
            </div>
            <div>
                {children} 
            </div>
        </div>
    )
};

Client.propTypes = propTypes;

export default Client;
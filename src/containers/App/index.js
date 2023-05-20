import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from './selector';

import Loader from "../../components/Loader";
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AllRoutes from '../../routes';


import 'react-toastify/dist/ReactToastify.css';

const propTypes = {
    isLoading: PropTypes.bool.isRequired
};

const App = ({ isLoading }) => {

    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Loader isLoading={isLoading} />
            <AllRoutes />
        </BrowserRouter>
    )
};

App.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading
});

export default connect(mapStateToProps)(App);
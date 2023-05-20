import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from './selector';

import ClientRoutes from "../../routes";
import Loader from "../../components/Loader";

const propTypes = {
    isLoading: PropTypes.bool.isRequired
};

const App = ({ isLoading }) => {
    return (
        <>
            <ClientRoutes />
            <Loader  />
        </>
    )
};

App.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading
});

export default connect(mapStateToProps)(App);
import PropTypes from 'prop-types';

const propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

const Loader = ({isLoading}) => {
    return (
        <div>
            {isLoading? 'Loading...' : ''}
        </div>
    )
};

Loader.propTypes = propTypes;

export default Loader;


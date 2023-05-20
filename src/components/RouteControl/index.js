import { Route } from "react-router";
import PropTypes from 'prop-types'

const propTypes = {
    component: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
    layout: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
};

const RouteControl = ({component: Component, layout: Layout, ...rest}) => (
    <Route 
        {...rest}
        render={(props) => {
            const rendered = typeof Layout !== 'undefined' ? (
                <Layout>
                    <Component {...props} />
                </Layout>
            ) : (
                <Component {...props} />
            )
        }}
    />
)

RouteControl.propTypes = propTypes;

export default RouteControl;
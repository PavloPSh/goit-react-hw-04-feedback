import PropTypes from 'prop-types';
import { Box } from 'Box';

export const Notification = ({message}) => {
    return (
        <Box p='16px' as='h4'>
            {message}
        </Box>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
import PropTypes from 'prop-types';

import { OptionButton } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        
        options.map(option => {
            return <OptionButton key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</OptionButton>
        })
        
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
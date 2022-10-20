import PropTypes from 'prop-types';

import { StatsBox, StatsItems } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        <StatsBox>
            <h2>Satistics</h2>
                <StatsItems>
                    <li>Good:{ good }</li>
                    <li>Neutral:{ neutral }</li>
                    <li>Bad:{ bad }</li>
                    <li>Total:{ total }</li>
                    <li>Positive feedback: {positiveFeedback} %</li>
                </StatsItems>
        </StatsBox>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}
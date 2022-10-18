import { OptionButton } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        
        options.map(option => {
            return <OptionButton key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</OptionButton>
        })
        
    )
}
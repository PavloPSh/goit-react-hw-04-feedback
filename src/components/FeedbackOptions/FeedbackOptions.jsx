

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options)
    return (
        options.map(option => {
            return <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
        })
    )
}
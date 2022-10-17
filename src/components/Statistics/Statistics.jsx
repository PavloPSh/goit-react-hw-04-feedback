
export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        <div>
            <h2>Satistics</h2>
                <p>good:{ good }</p>
                <p>neutral:{ neutral }</p>
                <p>bad:{ bad }</p>
                <p>total:{ total }</p>
                <p>positive feedback: {positiveFeedback} %</p>
        </div>
    )
}
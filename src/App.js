import { useState } from "react";
import styles from './components/Feedback/FeedbackOptions.module.css';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/Feedback';
import Notification from './components/Notification';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const ChanchState = event => {
        const type = event.currentTarget.textContent;
        switch (type) {
            case 'good':
                setGood(good + 1)
                break;
            case 'neutral':
                setNeutral(neutral + 1)
                break;
            case 'bad':
                setBad(bad + 1)
                break;
            default:
                return;
        }
    };
    const total = good + bad + neutral;
    const FeedbackMassive = ['good', 'neutral', 'bad'];
    const ositiveFeedBack = () => {
        const onePercentTotal = 100 / total;
        const positivePercentFeedback = Math.floor(
            good * onePercentTotal
        );
        return positivePercentFeedback;
    };
    const positiveFeedBack = ositiveFeedBack();
    return (
        <div>
            <h2 className={styles.mainTitle}>Please Leave Feedback</h2>
            <FeedbackOptions
                options={FeedbackMassive}
                ChanchState={ChanchState}
            />
            <h3 className={styles.mainTitle}>Statistics</h3>
            {total > 0 ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positiveFeedBack={positiveFeedBack}
                />
            ) : (
                <Notification message="There is no feedback" />
            )}
        </div>
    );
}

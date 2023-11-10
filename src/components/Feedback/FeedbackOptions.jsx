import { FeedbackButton } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option) => (
            <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </FeedbackButton>
        ))}
    </div>
);




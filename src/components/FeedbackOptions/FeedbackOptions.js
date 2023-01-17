import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  FeedbackOptionsList,
  FeedbackOptionsBtn,
} from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsList>
    {options.map(option => (
      <FeedbackOptionsBtn
        key={shortid.generate()}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </FeedbackOptionsBtn>
    ))}
  </FeedbackOptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

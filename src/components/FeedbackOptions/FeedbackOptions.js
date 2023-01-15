import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback__list">
    {options.map(option => (
      <button
        key={shortid.generate()}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
        className="feedback__item"
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

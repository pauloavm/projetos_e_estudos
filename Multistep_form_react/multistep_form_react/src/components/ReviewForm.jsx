import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label htmlFor="" className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill className="emoji" />
          <p>Insatisfeito</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill className="emoji" />
          <p>Poderia ser melhor</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill className="emoji" />
          <p>Satisfeito</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input type="radio" value="very-satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill className="emoji" />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua experiência com o produto"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;

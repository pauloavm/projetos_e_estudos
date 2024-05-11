import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => {
              updadateFieldHandler("review", e.target.value);
            }}
          />
          <BsFillEmojiFrownFill className="emoji" />
          <p>Insatisfeito</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) => {
              updadateFieldHandler("review", e.target.value);
            }}
          />{" "}
          />
          <BsFillEmojiNeutralFill className="emoji" />
          <p>Poderia ser melhor</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => {
              updadateFieldHandler("review", e.target.value);
            }}
          />
          />
          <BsFillEmojiSmileFill className="emoji" />
          <p>Satisfeito</p>
        </label>
        <label htmlFor="" className="radio-container">
          <input
            type="radio"
            value="very-satisfied"
            name="review"
            required
            checked={data.review === "very-satisfied"}
            onChange={(e) => {
              updadateFieldHandler("review", e.target.value);
            }}
          />
          />
          <BsFillEmojiHeartEyesFill className="emoji" />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua experiência com o produto..."
          required
          value={data.comment || ""}
          onChange={(e) => {
            updadateFieldHandler("comment", e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;

import "./Thanks.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const Thanks = ({data}) => {
  return (
    <div className="thnaks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de
        desconto para sua proxima compra.
      </p>
      <p>Para concluir sua anavliação clique em enviar.</p>
      <h3>Aqui está um resumo de sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  );
};

export default Thanks;

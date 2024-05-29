import { ButtonContainer, Card, Description, Infos, NameRating } from "./style";
import star from "../../assets/images/estrela.svg";
import Button from "../Button/Button";

type Props = {
  tipo: string;
  titulo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  destacado: boolean;
  id:number
};

const Restaurant = ({
  titulo,
  tipo,
  avaliacao,
  descricao,
  capa,
  destacado,
  id
}: Props) => {
  return (
    <Card>
      <img src={capa} alt="" />
      <Infos isSingleInfo={!destacado}>
        <Button type="button">{tipo}</Button>
        {destacado && <Button type="button">Destaque do dia</Button>}
      </Infos>

      <NameRating>
        <h3>{titulo}</h3>
        <div>
          <span>{avaliacao}</span>
          <img src={star} alt="star" />
        </div>
      </NameRating>
      <Description>{descricao}</Description>
      <ButtonContainer>
        <Button type="link" to={`/restaurant/${id}`}>
          Saiba mais
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default Restaurant;

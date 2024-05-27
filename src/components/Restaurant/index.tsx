import { ButtonContainer, Card, Description, Infos, NameRating } from "./style";
import star from "../../assets/images/estrela.svg";
import Button from "../Button/Button";

type Props = {
  infos: string[];
  name: string;
  grade: number;
  description: string;
  image: string;
};

const Restaurant = ({ infos, name, grade, description, image }: Props) => {
  const isSingleInfo = infos.length === 1 && infos[0] === "Italiana";

  return (
    <Card>
      <img src={image} alt="sushi" />
      <Infos isSingleInfo={isSingleInfo}>
        {infos.map((info) => (
          <Button key={info} type={"button"}>
            {info}
          </Button>
        ))}
      </Infos>
      <NameRating>
        <h3>{name}</h3>
        <div>
          <span>{grade}</span>
          <img src={star} alt="star" />
        </div>
      </NameRating>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button type="link" to="/restaurant">
          Saiba mais
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default Restaurant;

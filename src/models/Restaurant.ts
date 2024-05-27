class Restaurants {
  id: number;
  highlight?: string;
  grade: number;
  name: string;

  description: string;
  infos: string[];
  image: string;

  constructor(
    id: number,
    highlight: string,

    name: string,
    grade: number,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id;
    this.highlight = highlight;
    this.grade = grade;
    this.name = name;

    this.description = description;
    this.infos = infos;
    this.image = image;
  }
}

export default Restaurants;

class Menu {
  id: number;
  image: string;
  name: string;
  description: string;
  addCart: string;

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    addCart: string
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.addCart = addCart;
  }
}

export default Menu;

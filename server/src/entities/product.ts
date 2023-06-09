import ValidatorRules from "../shared/validators/validator-rules";

export type ProductProperties = {
  id?: string,
  nomeProduto: string,
  preco: string,
  descricao: string,
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string
}

export class Product {
  constructor(
    readonly props: ProductProperties,
  ) {
    this.validateProperties(props);

  }

  private validateProperties(props: ProductProperties) {
    const { nomeProduto, preco, descricao } = props;

    ValidatorRules.values(nomeProduto, "nome")
      .required()
      .string();

    ValidatorRules.values(preco, "preco")
      .required()
      .string();

    ValidatorRules.values(descricao, "descricao")
      .required()
      .string();

  }
}
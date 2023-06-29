import ValidatorRules from "../shared/validators/validator-rules";

export type ProductProperties = {
  id?: number,
  nomeProduto: string,
  preco: number,
  descricao: string,
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
      .number();

    ValidatorRules.values(descricao, "descricao")
      .required()
      .string();
    
  }
}
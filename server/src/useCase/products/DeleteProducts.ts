import { IProductsRepository } from "../../repositories/IProductsRepository";

export class DeleteProducts {

  constructor(private iProductsRepository: IProductsRepository){}

  async execute(id: string) {

    return this.iProductsRepository.delete(id)
  }
}
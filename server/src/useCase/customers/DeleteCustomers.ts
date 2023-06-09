
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class DeleteCustomers {
  constructor(private iCustomersRepository: ICustomersRepository) { }
  async execute(id: string) {
    return this.iCustomersRepository.delete(id)
  }
}
const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OfertaService {

  constructor(){
    this.products = [];
    this.generate();
  }
  async generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async find(){
    return this.products;
  }
  async findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('product not found');
    }
    if(product.isBlock){
      throw boom.conflict('product is block');
    }
    return product;
  }
}
module.exports = OfertaService;

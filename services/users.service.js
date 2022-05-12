const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {

  constructor(){
    this.users = [];
  }
  async create(data){
    const newUsers = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUsers);
    return newUsers;
  }
  async find(){
    return this.users;
  }
  async findOne(id){
    const user = this.users.find(item => item.id === id);
    if(!user){
      throw boom.notFound('user not found');
    }
    return user;
  }
  async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('user not found');
    }
    const user = this.users[index] = changes;
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }
  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('user no found');
    }
    this.users.splice(index, 1);
    return {message: true}
  }
}
module.exports = UsersService;

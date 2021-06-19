class BaseService {
  constructor(model) {
    this.model = model;
  }

  async searchAll() {
    try {
      return await this.model.find();
    } catch (error) {
      console.log('BaseService.searchAll - error ', error)
    }
  }

  async searchByEmail(email) {
    try {
      return await this.model.findOne({ email: email });

    } catch (error) {
      console.log('BaseService.searchByEmail - error ', error)
    }
  }

  async searchById(userId) {
    try {
      return await this.model.findById(userId)

    } catch (error) {
      console.log('BaseService.searchById - error ', error);
    }
  }

  async create(body) {
    try {
      return this.model.create(body);

    } catch (error) {
      console.log('BaseService.create - error ', error);
    }
  }

  async update(id, body) {
    try {
      return await this.model.findByIdAndUpdate(id, { ...body })
    } catch (error) {
      console.log('BaseService.update - error ', error);
    }
  }
}

module.exports = BaseService;
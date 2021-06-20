class BaseService {
  constructor(model) {
    this.model = model;
  }

  searchAll = async () => {
    try {
      return await this.model.find();
    } catch (error) {
      console.log('BaseService.searchAll - error ', error)
    }
  }

  searchByEmail = async (email) => {
    try {
      return await this.model.findOne({ email: email });

    } catch (error) {
      console.log('BaseService.searchByEmail - error ', error)
    }
  }

  searchById = async (userId) => {
    try {
      return await this.model.findById(userId)

    } catch (error) {
      console.log('BaseService.searchById - error ', error);
    }
  }

  create = async (body) => {
    try {
      return this.model.create(body);

    } catch (error) {
      console.log('BaseService.create - error ', error);
    }
  }

  update = async (id, body) => {
    try {
      return await this.model.findOneAndUpdate({ _id: id }, { ...body })
    } catch (error) {
      console.log('BaseService.update - error ', error);
    }
  }
}

module.exports = BaseService;

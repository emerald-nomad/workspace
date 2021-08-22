require("./bootcamp.typedefs");
const { Bootcamp } = require("../../models");

/** @type {IBootcampRepository} */
const bootcampRepository = {
  createBootcamp: async (bootcamp) => {
    const newBootcamp = await Bootcamp.create(bootcamp);

    return newBootcamp;
  },

  getBootcamps: async () => {
    const bootcamps = await Bootcamp.find();

    return bootcamps;
  },

  getBootcamp: async (id) => {
    const bootcamp = await Bootcamp.findById(id);

    return bootcamp;
  },

  updateBootcamp: async (id, bootcamp) => {
    const updatedBootcamp = await Bootcamp.findByIdAndUpdate(id, bootcamp, {
      new: true,
      runValidators: true,
    });

    return updatedBootcamp;
  },

  deleteBootcamp: async (id) => {
    const deletedBootcamp = await Bootcamp.findByIdAndDelete(id);

    return deletedBootcamp;
  },
};

module.exports = bootcampRepository;

const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");
class SiteController {
  // [GET] /site
  async index(req, res, next) {
    try {
      const courses = await Course.find({});
      res.render("home", {
        courses: multipleMongooseToObject(courses),
      });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("Search");
  }
}
module.exports = new SiteController();

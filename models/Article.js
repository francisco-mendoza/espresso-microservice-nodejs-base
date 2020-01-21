var mongoose = require('mongoose');  
const UserModel = require('./User');
const CategoryModel = require('./Category');
const RegionModel = require('./Region');
const ComunneModel = require('./Commune');

const Schema = mongoose.Schema;

var ArticleSchema = new Schema({  
  title:       { type: String },
  description: { type: String, required: true },
  price:       { type: Number, required: true },
  comunne:     { type: String, required: true },
  image:       { type: String, required: true },
  user:        { type : Schema.ObjectId, ref : 'User', required: true },
  category:    { type : Schema.ObjectId, ref : 'Category', required: true },
  region:      { type : Schema.ObjectId, ref : 'Region', required: true }  
});

let ArticleModel = mongoose.model('Article', ArticleSchema);

ArticleModel.getAll = () => {
  return ArticleModel.find({});
}

ArticleModel.addArticle = (article) => {
  return article.save();
}

ArticleModel.detail = (article_id) => {
  return ArticleModel.findById(article_id);
}

ArticleModel.removeArticle = (article_id) => {
  return ArticleModel.findByIdAndRemove(article_id);
}

module.exports = mongoose.model('Article');
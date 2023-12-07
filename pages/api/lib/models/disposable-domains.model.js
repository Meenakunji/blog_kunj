const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const DisposableDomainSchema = mongoose.Schema({
  domain: {
    type: String,
    require: false,
  },
  isDisposable: {
    type: Boolean,
    require: false,
  },
});

// add plugin that converts mongoose to json
DisposableDomainSchema.plugin(toJSON);
DisposableDomainSchema.plugin(paginate);

/**
 * @typedef DisposableDomain
 */
const DisposableDomain = mongoose.model(
  "disposable_domains",
  DisposableDomainSchema
);

module.exports = DisposableDomain;

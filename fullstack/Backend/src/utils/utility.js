const paginateQuery = (options) => {
	const limit = options && options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
	const page = options && options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
	const sortOrder = options && options.sortOrder && parseInt(options.sortOrder) ? parseInt(options.sortOrder) : 1;
	const skip = (page - 1) * limit;
	return {
		limit,
		page,
		skip,
		sortOrder
	};
};

module.exports={paginateQuery}
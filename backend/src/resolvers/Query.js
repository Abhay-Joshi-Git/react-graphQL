const { forwardTo } = require("prisma-binding");

const Query = {
	items: forwardTo("db"),
	item: forwardTo("db"),
	itemsConnection: forwardTo("db"),
	getLoggedInUser(parent, args, ctx, info) {
		const userId = ctx.request.userId;
    console.log('in getLoggedInUser ,  userId - ', userId);
		if (!userId) {
      return null;
    }
    return ctx.db.query.user({
      where: { id: userId }
    }, info)
	}
};

module.exports = Query;

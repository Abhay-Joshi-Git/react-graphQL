const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Mutations = {
	async createItem(parent, args, ctx, info) {
		// TODO: Check if they are logged in
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args
				}
			},
			info
		);
		return item;
	},
	async updateItem(parent, args, ctx, info) {
		let updates = { ...args };
		delete updates.id;
		return await ctx.db.mutation.updateItem(
			{
				data: {
					...updates
				},
				where: {
					id: args.id
				}
			},
			info
		);
	},
	async deleteItem(parent, args, ctx, info) {
		const where = { id: args.id };
		const item = await ctx.db.query.item({ where }, `{ id title}`);
		console.log("got item...", item);
		// TODO - check authorization
		return await ctx.db.mutation.deleteItem({ where }, info);
	},
	async signup(parent, args, ctx, info) {
		args.email = args.email.toLowerCase();
		args.password = await bcrypt.hash(args.password, 10);
		const user = await ctx.db.mutation.createUser(
			{
				data: {
					...args,
					permissions: { set: ["USER"] }
				}
			},
			info
		);
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		ctx.response.cookie("token", token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 // 1 day cookie
		});
		return user;
	},
	async signin(parent, { email, password }, ctx, info) {
		const user = await ctx.db.query.user({ where: { email } });
		const error = new Error("invalid username or password");
		if (!user) {
			throw error;
		}
		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			throw error;
		}
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		ctx.response.cookie("token", token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 // 1 day cookie
		});
		return user;
	},
	async signout(parent, agrs, ctx, info) {
		const userId = ctx.request.userId;
		const user = ctx.db.query.user({
			where: { id: userId }
		}, info);
		if (!user) {
			throw new Error`not a valid user`();
		}
		ctx.response.clearCookie('token');
		return user;
	}
};

module.exports = Mutations;

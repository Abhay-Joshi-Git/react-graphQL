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
                data:{
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
        console.log('got item...', item);
        // TODO - check authorization
        return await ctx.db.mutation.deleteItem({ where }, info)
    }
};

module.exports = Mutations;

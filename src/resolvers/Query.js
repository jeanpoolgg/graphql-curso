const Query = {
    hello: (parent, args, ctx, info) => {
        const { name } = args
        return `Hello ${name || 'world'}`
    },
    quantity: () => 1,
    getUser: () => { return { name: 'Jean Pool', lastName: 'Gutierrez' } },
    user: (parent, { id }, ctx, info) => {
        const { db } = ctx

        if ( !id ) return db.users
        
        return db.users.filter( user => user.id === id )
    },
    author: (parent, { id }, { db }, info) => {
        if( !id ){
            return db.authors
        }

        return db.authors.filter(author => author.id === id)
    }
}

export default Query
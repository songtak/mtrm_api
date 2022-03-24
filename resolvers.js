import User from 'models/User.js';
export const resolvers = {
    Query: {
        async allUser() {
            return await User.find();
        }
    }
}
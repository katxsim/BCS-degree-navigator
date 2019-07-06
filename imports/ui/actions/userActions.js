const shortid = require('shortid');

export const addUser = user => {
    console.log(user);
    return {
        type: "ADD_USER",
        user: {
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            id: shortid.generate()
        }
    };
};

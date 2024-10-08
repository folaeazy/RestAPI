const loginUser =  async (req, res) => {
    res.json("Logged in");
}

const createUser =  async (req, res) => {
    res.json("User created");
}

module.exports =  {
    loginUser,
    createUser
}
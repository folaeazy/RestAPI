const User = require("../model/users");
const bcrypt = require("bcrypt");
const loginUser =  async (req, res) => {
   
    try {
        const { email, password } = req.body;
        const user = await User.findOne({where : { email } });
        
        if(!user)
            return res.status(400).json({ message: 'Invalid email or password' });
        

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) 
            return res.status(400).json({ message: 'Invalid email or password' });

        res.status(200).json({ message: 'Login successful', user });
        
        
    
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }

   

   
    
}

const createUser =  async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //check for existing user
        const userExist = await User.findOne({ where : { email } });

        if (userExist)
            return res.status(400).json({ message: 'User already exists' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: 'User created', newUser });

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}



    
    

module.exports =  {
    loginUser,
    createUser
}
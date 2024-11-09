import User from "../models/user.js";

export const getUsers = async(req, res) =>{

    try {
        const users = await User.findAll()
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const register = async (req, res) => {

    const { name, password, email } = req.body;

    try {


        const newUser = await User.create({
            name,
            password,
            email
        });

        res.json({
            message: "Usuario creado correctamente",
            id: newUser.id,
            name: newUser.name,
            password : newUser.password,
            email: newUser.email,
        })
     
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const DeleteUser = async (req, res) => {

    const {id} = req.body;
    
    try {
         await User.destroy({

            where: { id: id }
            
        })

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }




  
};




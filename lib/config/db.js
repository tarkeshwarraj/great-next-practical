import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://taru:123456aa@portfolio.ygeho.mongodb.net/todo-app');
    console.log("DB Connected");
}



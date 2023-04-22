const app = require('./app');
const connectMongodb = require('./db/mongo');

const PORT = 3001;
app.listen(PORT, async () => {
    try {
        await connectMongodb();
        console.log("se inicio el servidor en el puerto 3001");
    } catch (error) {
        console.log(error)
    }
})

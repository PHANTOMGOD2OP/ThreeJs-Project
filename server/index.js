import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
<<<<<<< HEAD

=======
import bodyParser from 'body-parser';
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

<<<<<<< HEAD
const app = express(); // Create an express app
app.use(cors()); // For cross-origin requests
app.use(express.json({ limit: '50mb' })); // For parsing application/json

app.use('/api/v1/dalle', dalleRoutes); // Mount the DALL-E routes

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
}); // Test endpoint

app.listen(8080, () => console.log('Server has started on port 8080')); // Start the server
=======
const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }))
app.use(bodyParser.json()); 

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))
>>>>>>> 4d6fb1ddd87618deb14f3f18328918530ccfd088

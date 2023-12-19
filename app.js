import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { router } from './routes/routes.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout','layouts')

app.use ('/', router)


app.listen(port, ()=>{
    console.log(`Servidor en: http://localhost:${port}`)
})
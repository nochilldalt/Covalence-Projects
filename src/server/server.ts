import * as express from 'express';
import * as passport from 'passport';
import * as path from 'path';
import Routes from './routes';
import * as morgan from 'morgan';

import './middlewares/bearerstrategy'
import './middlewares/localstrategy'
import './utils/security/passwords'

const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(morgan('dev'))
app.use(passport.initialize())
app.use(Routes);
app.use('', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

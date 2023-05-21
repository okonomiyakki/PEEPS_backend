import express, { Request, Response } from 'express';
import { env } from './config/envconfig';
import { db } from './config/dbconfig';
import { errorHandlerMiddleware } from './utils/errorHandler';
import { v1Router } from './routes';

const port = Number(env.PORT || 3000);
const app = express();

db.getConnection()
  .then(async () => {
    console.log('✅ mysql2 로 DB 접속!');

    /*
    dummyData 초기화가 꼭! 필요할때만 사용해야함
    await insertDummyReviews();
    await insertDummyPosts();
    await insertDummyComments();
    await insertDummyPets();
    */

    app.listen(port, () => {
      console.log('DB_HOST:', env.DB_HOST);
      console.log('DB_NAME:', env.DB_DBNAME);
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log('error!!!!!!!', err));

app.use(express.json());

app.use('/api/v1', v1Router);
app.use(errorHandlerMiddleware);

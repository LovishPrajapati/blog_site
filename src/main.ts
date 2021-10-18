// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { dbConnect } from './DB/db';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    app.setGlobalPrefix('/api');

    await dbConnect(process.env.MONGO_URI);

    console.log(`Database Connected`);

    await app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}
bootstrap()
  .then(() => console.log(`Server up and running on port: ${PORT}`))
  .catch((err) => console.log('Error:', err));

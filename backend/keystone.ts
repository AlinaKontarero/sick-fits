import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';


const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long they should be sign in;
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add data seeding here
  },
  ui: {
    isAccessAllowed: () => true,
  },
  // TODO: add sessiщn values here: 
  lists: createSchema({
    // Schema would be here
  })
});

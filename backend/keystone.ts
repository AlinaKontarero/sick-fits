/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { integer } from '@keystone-next/fields';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long they should be sign in;
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // @TODO: add initial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity)
    }
  }
});

export default withAuth(config({
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
    onConnect: async (keystone) =>  {
      console.log('connected to db!');
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    }
    // TODO: add data seeding here
  },
  ui: {
    // Show the UI only for people who pass this test
    isAccessAllowed: ({ session }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(session);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return !!session?.data;
    },
  },
  lists: createSchema({
    User,
    Product,
    ProductImage
  }),
  session: withItemData(statelessSessions(sessionConfig), {
    User: 'id',
  }),
})
);

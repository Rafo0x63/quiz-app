A quiz app made using Angular, Express and Prisma ORM

To start it:
  - navigate to the `client` folder
    - run `npm install` to install the dependencies
  - navigate to the `server` folder
    - run `npm install`
    - open the `.env` file and change the `DATABASE_URL` to match your database info - template: `DATABASE_URL=mysql://NAME:PASSWORD@localhost:PORT/database_name`
    - run `npx prisma generate` to generate the Prisma Client
    - run `npx prisma migrate dev --name init` to migrate the tables to your database
    - run `npx prisma db seed` to seed the data into the database
    - navigate to `server/src`
    - run `nodmeon server.js` or `node server.js` to start the server
  - navigate to the `client` folder and run `ng serve` to start the frontend

default frontend url = `localhost:4200`
default api url = `localhost:3000/api`

seeded admin account to see the dashboard and manage entities:
  - email: `admin@admin.com`
  - password: `admin123`

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![URQL](https://img.shields.io/badge/-URQL-555098?style=for-the-badge&logo=urql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![Formik](https://img.shields.io/badge/formik-%555ED1C5.svg?style=for-the-badge&logo=formik&logoColor=white)
![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)

This is a full-stack application with limited functionality - a copy of the teameas.org application. It provides an 
opportunity to collect donations to clean up the ocean environment from trash.

### To start the client part, you need to perform the following steps:
- go to `client` folder
- run the `npm install` or `yarn install` command 
- run the command to start the client: `npm start` or `yarn start`

### To start the server part, you need to perform the following steps:
- go to `server` folder
- run the `npm install` or `yarn install` command
- rename `.env.dist` file to `.env`
- create prisma migration `npx prisma migrate dev --name init`
- fill in prisma db `npx prisma db seed`
- run the command to start the server: `npm run dev` or `yarn run dev` 

if [ "$NODE_ENV" = "development" ]
then
npx prisma migrate dev
npx ts-node src/index.ts
elif [ "$NODE_ENV" = "production" ]
then
npx prisma migrate deploy
npx ts-node src/index.ts
fi
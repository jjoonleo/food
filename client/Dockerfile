FROM node:lts-alpine

WORKDIR /app
COPY ./package.json ./
RUN npm i --silent
COPY . .
CMD ["npm", "run", "build"]

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
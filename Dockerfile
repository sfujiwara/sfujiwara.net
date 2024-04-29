FROM node:22.0 AS build

WORKDIR /app

COPY frontend frontend
COPY Makefile Makefile

WORKDIR /app/frontend

RUN npm install
RUN npm run build


FROM nginx:1.15.12-alpine

# /etc/nginx/nginx.conf refers /etc/nginx/conf.d/*.conf.
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

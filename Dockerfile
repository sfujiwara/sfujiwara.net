FROM node:22.0 AS build

WORKDIR /app

COPY frontend frontend
COPY Makefile Makefile

WORKDIR /app/frontend

RUN npm install
RUN npm run build


FROM nginx:1.27.3-alpine-slim

COPY --from=build /app/frontend/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

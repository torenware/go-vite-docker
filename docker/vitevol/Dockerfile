#ARG UID
#ARG GID

FROM node:18
ARG PORT=5173

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN cd /app; npm create -y vite@latest vitebin -- --template vanilla
RUN cd /app/vitebin; npm install

EXPOSE $PORT
ENV PORT ${PORT}
WORKDIR /app/frontend

CMD [ "sh", "-c", "/app/start-vite-proj.sh"]
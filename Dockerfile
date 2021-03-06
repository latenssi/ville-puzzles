#
# Dockerize so demoing is easier
# 
# docker build -t puzzle-demo .
# docker run --rm -p 8080:80 puzzle-demo
#
# ---- Build ---
FROM tislaamo/node:8 AS build

ADD package.json .
ADD package-lock.json .

RUN yarn install

ADD . .

RUN yarn build

#
# ---- Release ----
FROM tislaamo/nginx AS release

COPY --from=build /home/node/app/dist /usr/share/nginx/html
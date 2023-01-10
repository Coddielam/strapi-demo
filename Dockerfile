# # path: ./Dockerfile

# FROM node:16-alpine
# # Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /opt/
# COPY ./package.json ./yarn.lock ./
# ENV PATH /opt/node_modules/.bin:$PATH
# RUN yarn config set network-timeout 600000 -g && yarn install
# WORKDIR /opt/app
# COPY ./ .
# RUN yarn build
# EXPOSE 1337
# CMD ["yarn", "develop"]



# path: ./Dockerfile.prod

FROM node:16-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ENV NODE_ENV=production
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build


FROM node:16-alpine
RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*
ENV NODE_ENV=production
WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["yarn", "start"]

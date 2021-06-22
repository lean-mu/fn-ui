FROM node:14-alpine AS build

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV production

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json /app
RUN npm install -g webpack@^1.15.0
RUN npm install --no-package-lock --also=dev

# Bundle app source
COPY . /app

# Build assets
RUN webpack
RUN mkdir /dist
RUN cp -r package.json /dist
RUN cp -r build public /dist
RUN rm -rf /dist/public/fonts

WORKDIR /dist
RUN npm install --no-package-lock --production

FROM node:14-alpine AS release

WORKDIR /app

COPY --from=build /dist /app

ENV PORT 4000
EXPOSE 4000

CMD [ "node", "build/backend.js" ]

FROM mhart/alpine-node:14 AS build

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV production

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json /app
RUN npm install -g webpack@^1.15.0 && npm install --no-package-lock

# Bundle app source
COPY . /app

# Build assets
RUN webpack

RUN mkdir /dist
RUN cp -r package.json server.js /dist
RUN cp -r server public /dist

WORKDIR /dist
RUN npm install --no-package-lock --production

FROM mhart/alpine-node:14 AS release

WORKDIR /app

COPY --from=build /dist /app

ENV PORT 4000
EXPOSE 4000

CMD [ "node", "server.js" ]

#stage 1 : Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .
	

#stage 2 : Production 

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5000

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["npm", "start"]


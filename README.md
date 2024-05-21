# Code Challenge - Micro-service with Node.js and Kafka
In this code challenge I developed a REST API in Node.js that integrates with a micro-service using Apache Kafka.

## Microservice - Node.js and Kafka
  - Kafka
  - Node.js
  
## Application
  - Main api (station)
  - Generate certificates

## Flux
  - The main api send message to the certificate service to generate certificates
  - The certificate microservice send a response message (sync/ async) 


## How to communicate microservices
  - REST (latency)
  - Redis /  RebbitMQ (pub/sub) **kafka**


## Getting started
  - Clone this repository;
  - Move to the appropriate directory;
  - Run yarn to install dependencies.
  - Run yarn start.

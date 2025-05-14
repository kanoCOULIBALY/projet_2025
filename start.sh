#!/usr/bin/env bash

npm install pg
npm install @nestjs/platform-express
npm install @nestjs/config
npm install @nestjs/apollo apollo-server-express
npm install @nestjs/passport passport passport-local passport-jwt
npm install @types/passport-local @types/passport-jwt --save-dev
npm install @nestjs/graphql graphql @nestjs/apollo apollo-server-express
npm install --save-dev @types/graphql
npm install --save-dev @types/node
npm install @nestjs/typeorm typeorm



# Lancer les conteneurs en arrière-plan
docker-compose up -d

# Se déplacer dans le dossier backend (chemin relatif ici)
cd backend || {
  echo "Erreur : le dossier backend est introuvable."
  exit 1
}

# Lancer le script de développement
npm start dev

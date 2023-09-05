#!/bin/bash

# Iniciar el servidor
cd server
npm start &

# Esperar unos segundos para que el servidor se inicie
sleep 5

# Iniciar el cliente
cd ../client
npm run dev

# Etapa de construcción
FROM node:18 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de proyecto
ADD . /app

# Instalar dependencias y construir el proyecto
RUN npm install
RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copiar los archivos construidos desde la etapa de construcción al servidor NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando de inicio del contenedor
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# Toolbox-OTT

Este proyecto es una aplicación que se ejecuta con Docker. La aplicación incluye un frontend y una API que se ejecutan en diferentes puertos.

## Requisitos

Para ejecutar este proyecto, necesitas tener instalado Docker Desktop o Docker CLI en tu computadora. Puedes encontrar las instrucciones de instalación en los siguientes enlaces:

- [Docker Desktop para Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Desktop para macOS](https://docs.docker.com/desktop/install/mac-install/)
- [Docker para Linux](https://docs.docker.com/engine/install/)

## Instalación

1. Clona este repositorio:

   ```sh
   git clone https://github.com/JeremiasGomez90/Toolbox-OTT.git
   cd Toolbox-OTT
   ```

2. Inicia los servicios con Docker Compose:

   ```sh
   docker-compose up -d
   ```

## Acceso a la Aplicación

- El frontend de la aplicación estará disponible en [http://localhost:3000](http://localhost:3000)
- La API estará disponible en [http://localhost:5000](http://localhost:5000)

## Detener los Servicios

Para detener y eliminar los contenedores, ejecuta:

```sh
docker-compose down
```

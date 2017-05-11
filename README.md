Instructions:

	Dependencies: Node (npm)

1. Download & Run: "Docker Community Edition", Version: Stable: https://store.docker.com 

2. Install: "Docker-Compose": https://docs.docker.com/compose/install/
	 - Do not use pip install docker-compose - Python implementation seems unstable, gives HTTPConnectionPool 
	 	 errors when running multiple containers simultaneously. 

3. In API folder run: 		$ docker-compose up

4. In Website folder run: $ docker-compose up

5. Navigate to localhost:3000 



To uninstall (remove all large image files), Nativate to docker preferences and "reset" 
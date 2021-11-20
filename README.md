
```bash
npm run dev
# or
yarn dev
```

docker run -v `pwd`/data:/app/data -p 8080:8080 -p 1935:1935 -it ufaproufax/ufaxlive:latest
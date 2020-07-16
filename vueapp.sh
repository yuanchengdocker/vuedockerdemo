docker run \
-p 3000:80 \
-d --name vuenginxnew \
--mount type=bind,source=C:/Users/yuanc/Desktop/demo/node_demo/vueclidemo/nginx,target=/etc/nginx/conf.d \
--mount type=bind,source=C:/Users/yuanc/Desktop/demo/node_demo/vueclidemo/dist,target=/usr/share/nginx/html \
nginx

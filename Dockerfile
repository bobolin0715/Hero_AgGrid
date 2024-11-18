# 使用官方 Nginx 基礎映像
FROM nginx:alpine

# 將 Angular 靜態檔案複製到 Nginx 預設服務目錄
COPY ./dist/hero-ag-grid /usr/share/nginx/html

# 複製自定義的 Nginx 配置檔案
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 開放 Nginx 的預設 HTTP Port
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]

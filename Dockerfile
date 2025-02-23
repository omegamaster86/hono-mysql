# Node.js の軽量イメージを使用
FROM node:18-alpine

# 作業ディレクトリを /app に設定
WORKDIR /app

# 依存関係ファイルのみコピーして先に npm install
COPY backend/package*.json ./
COPY backend/tsconfig.json ./
RUN npm install

# ソースコードをコピー
# (backend/src 配下のファイルを /app/backend/src にコピー)
COPY backend/src ./backend/src

# ポート3000を開放
EXPOSE 3000

# TypeScriptのコードを起動
CMD ["npx", "tsx", "backend/src/index.ts"]

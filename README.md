# IZONEStream_GraphQL
IZONEStream의 GraphQL 서버입니다.

## Requirements
- Node.js
- MongoDB

## Instructions
사용하기 전 devDependencies와 dependencies를 설치해주세요.
- npm의 경우
```
npm install
```
- Yarn의 경우
```
yarn
```

## Database Connection
MongoDB 서버 정보 파일은 포함되어 있지 않습니다. 프로젝트의 루트 디렉토리에 database.json을 아래와 같이 작성해주셔야 작동합니다.
```
{
  "username": "username",
  "password": "password",
  "url": "mongodb url",
  "name": "Database name"
}
```

## Execution
```
npm start or yarn start
```

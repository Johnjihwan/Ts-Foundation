# 기초부터 탄탄히 잡는 TypeScript
## 🤷🏻‍♀️ 왜 TypeScript?
1. C#, Java 같은 정제된 언어들에서 사용하는 강한 타입 시스템을 갖췄다.
2. 가동성과 코드 품질등을 제공할 수 있고 런타임이 아닌 컴파일 환경에서 에러가 발생해 치명적 오류를 쉽게 잡아낸다.
3. 동적 프로그래밍 언어로, 자바스크립트의 문법을 가질 수 있다.
4. 약한 타입의 언어라서 비교적 유연하게 개발할 수 있는 환경을 제공한다.

## 💁🏻‍♀️ TypeScript 사용법
```.js``` 확장자를 가진 파일로 작성되는 것과 같이 타입스크립트는 ```.ts``` 확장자를 가진 파일로 작성 가능.  
작성후 Ts 컴파일러를 통해 Js 파일로 컴파일하여 사용하게 된다.
```zsh
$ tsc sample.ts
# compile to 'sample.js'
```

## TypeScript 기능
* 크로스 플랫폼 지원: Js가 실행되는 모든 플랫폼에서 사용가능
* 객체 지향 언어: 클래스, 인터페이스, 모듈 등의 기능을 제공, 순순한 객체 지향 코드 작성 가능.
* 정적 타입: 정적 타입을 사용하기 때문에 입력하는 동안에 오류를 체크할 수 있다.
* DOM 제어: Js 와 같이 DOM을 제어해 요소를 삭제할 수 있다.
* 최신 ECMAScript 기능 지원: ES6 이상의 최신 Js 문법을 손쉽게 지원 가능.

## 컴파일러 설치
```tsc```명령을 사용하기 위해 다음과 같이 Ts를 전역 설치할 수 있다.
```bash
$ npm install -g typescript
$ tsc --version
$ tsc ./src/index.ts
```
혹은 단일 프로젝트에서만 사용하길 희망하는 경우 ```npx tsc``` 명령으로 실행할 수도 있다.
```
$ npm install -D typescript
$ npm tsc --version
$ npx tsc ./src/index.ts
```

## 컴파일러 옵션
```
$ tsc ./src/index.ts --watch --strict true --target ES6 --lib ES2015,DOM --module CommonJS
```
혹은 아래와 같이 tsconfig.json 파일로 옵션을 관리할 수 있습니다.
"include"와 "exclude" 옵션을 같이 추가해, 컴파일에 포함할 경로와 제외할 경로를 설정할 수 있습니다.
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES6",
    "lib": ["ES2015", "DOM"],
    "module": "CommonJS"
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

```
$ tsc --watch
```
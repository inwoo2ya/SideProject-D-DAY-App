## Nx repo 보일러 플레이트

패키지 생성

`npx nx g @nx/{framework-name}:{app, lib 둘 중에 하나} {패키지 이름} --importPath {app,lib 경로}`

> - {패키지 이름} 작성하면 {패키지 이름}이라는 새 라이브러리를 스캐폴딩합니다.
> - --publishable 플래그를 사용하면 package.json을 생성하고 NPM에 게시하기 위해 호출할 수 있는 publish target도 얻을 수 있습니다.
> - --importPath를 사용하면 NPM 패키지의 이름을 정의할 수 있습니다.

TechSpec

### Mobile

- Framework: React-native
- emulator: expo

### FE

- Framework : Next,React
- CSS : emotion, tailwindCSS, framer-motion,
- state: recoil, react-query
- platform: storybook

### BE

- Framework: Nest, express
- Object-Relation : typeOrm
- oauth2

### etc

- bundler : vite, webpack
- jest
- ts-pattern
- fxts

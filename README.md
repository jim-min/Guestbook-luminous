# 루미너스 3기 공연을 위한 디지털 팜플렛

Zero-waste를 달성하기 위해 Web 형식으로 제작되었으며, 방명록 기능도 수행하여 방문자의 발자취를 남길 수 있습니다!\
셋리스트 디자인대로 리퀴드 글라스를 적용하였습니다. (모바일 환경에서는 기술적 문제로 적용되지 않음)\
와주신 분들 모두 감사드려요!

<img width="1080" height="1350" alt="SNS_셋리스트1" src="https://github.com/user-attachments/assets/958306ff-6b41-4d8c-8985-1155c56b0130" />
<img width="1080" height="1350" alt="SNS_셋리스트2" src="https://github.com/user-attachments/assets/8d93b328-1bad-4123-ad1c-fc4871fd5945" />


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

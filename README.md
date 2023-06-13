Стек: html, css, TypeScript, React, Redux.
Для кешування у проекті було використано redux-persist.

Структура комітів видержена, можна подивитись проект на різних стадіях розробки.
Намагався зробити зрозумілу структуру проекту. Redux винес у src/store, редьюсери розділив та з'єднав у папці src/store/reducers, зробив кастомний хук useTypedSelector, що зберігається у папці hooks.
У src/store/index.ts налаштував персістор, який потім під'єднав у App.tsx PersistGate`ом. 
Усі наважливіші компоненти зберігаються у components, можна було б ще більше декомпозувати кожен з них, але часу ледве вистачило щоб зробити основний функціонал.
Усі інтерфейси зберігаються у srs/types.

Дякую за цікавий проект. Якщо є можливість, то прошу зробити маленьке код ревью із розбором основних помилок.

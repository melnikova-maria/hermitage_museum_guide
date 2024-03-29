<!-- # HERMITAGE MUSEUM ONLINE GUIDE

## How to run

1. Clone repository.
2. In project directory execute:
```
    >_ pip install whitenoise
    >_ python manage.py collectstatic
    >_ python manage.py runserver
```
3. Open http://127.0.0.1:8000/rooms in your browser.


## How to push

While on develop branch:
```
    >_ git add .
    >_ git commit -m 'commit_name'
    >_ git push
``` -->

# HERMITAGE MUSEUM GUIDE

Наш сайт предоставляет небольшие гиды по картинам и экспонатам зданий Государственного Эрмитажа, краткую информацию о самих зданиях музейного комплекса и о его контактных данных.


## Дополнения

Проект был реализован на основе разработки серверной логики и моделей данных с использованием фреймворка Django, а также на основе проектирование шаблонов отображения данных с помощью языков программирования HTML, CSS и JavaScript.


## Реализованные возможности

- поддерживается регистрация и авторизация пользователей;
- реализована выдача  уникального  контента для зарегистрированных пользователей пользователя;
- реализовано меню для навигации по сайту;
- осуществлен HTTP-метод POST для зарегистрированных пользователей, необходимый для отправки данных на сервер и их последующего хранения;
- если запрашиваемой страницы не существует, пользователь перенаправляется на страницу с ошибкой 404;

## Планируемые, но пока нерелизованные возможности

- реализация проверки входных параметров на корректность;
- валидация данных в формах;
- процесс авторизации/регистрации с использованием нескольких пользовательских групп;


## Авторы

- [ilyatrushkov](https://github.com/ilyatrushkov)
- [melnikova.m](https://github.com/melnikova-maria)

<div align = "center">
    <img width = "40%" height = "40%" src = "/rooms/static/rooms/media/logo.png">
</div>

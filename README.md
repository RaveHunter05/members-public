# Members technical test

## Libraries used in the process

### Formik and yup

For validating forms in a easier way, and create custom validations that could take too much time by my own hand

### React router

I used this library for make restrictions in the access in the route for creating new members, so that is mandatory for you to signin first (because there was a restriction in the api, it doesn't work without the token)

### Redux, redux toolkit

I got use of redux and redux toolkit, in order to make a connection between the table of members information and the form for creating new members.

### Axios

An alternative to fetch, easier to work with

## Instructions

1. Use node 16.13.0. It is specified in the package.json i did this in order to avoid problems with the installation of the libraries.
2. Install all the libraries in the root, run `yarn install`
3. Install all the libraries in the dir /frontend, here run `yarn install` as well
4. Start your api, `yarn serve`
5. Start the frontend app, go to the /frontend dir, and there run `yarn start`
6. Signin, first than all you need to use the signin webpage, otherwise we can't obtain a jwt token, and the endpoints for creating and getting members doesn't work. So you have to click on the button login. The correct values are there in the fields as initial values, so only click login and you'll see the members page.
7. Create a member:
   1. Fill the fields, they're going to be trimmed by default, they're completely validated (as the requirements told, if you don't fill the fields properly well it's gonna give you an error, and you will not be able to submit the form).
   2. Click on SAVE, then the member will be saved and will appear in the right side table.
   3. Click on reset, once you click on reset all the fields for the form will be empty again.

## About the requirements

- Los datos del formulario deben ser enviados a la API, la tabla de la derecha debe recibir los datos de la misma al cargarse el sitio - completed
- Luego de cada insercion exitosa, se debe ingresar los datos a la tabla, sin necesidad de utilizar el endpoint GET - completed
- El boton reset debe limpiar los campos del formulario - completed
- El boton save debe enviar los datos a la API - completed
- El número de seguro social (ssn), es único, y no puede repetirse en la lista. - completed
- En caso de un intento de inserción erroneo, se debe informar dicho error - completed
- Al pasar 2 minutos de inactividad, se debe refrescar la tabla automáticamente - couldn't

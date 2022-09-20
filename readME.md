# myWallet - Desafio Alkemy Full-Stack 🚀
# Objetivo.
Desarrollar una aplicación para administración de presupuesto personal. La misma debe permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las operaciones registradas.
## Requerimientos tecnicos.
* Backend
  * API desarrollada utilizando Node.js y Express.js en sus versiónes (completar versión en entrega).
  * Proceso de autenticación basado en tokens utilizando JWT.
  *Listar dependencias restantes
* Base de datos
  * MYSQL, se realiza entrega junto a script y ERD.
  * Listar dependencias restantes
* Frontend
  * React
    * React Router
    * Functional components
    * Material UI
    * Listar dependencias restantes

# Secciones:
## Home
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los ingresos y egresos de dinero cargados, y un listado de los últimos 10 (diez) movimientos

## CRUD de operaciones (ingresos y egresos)
La aplicación deberá contener:
* Formulario de registro de operación. El mismo deberá contener:
  * Concepto
  * Monto
  * Fecha
  * Tipo (ingreso o egreso)
* Listado de operaciones registradas según su tipo (ingreso o egreso).
* Desde el listado, se debe poder modificar o eliminar una operación registrada previamente. No debe ser posible modificar el tipo de operación (ingreso o egreso) una vez creada.
# Bonus
## Autenticación de usuarios
Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la aplicación, y vincular las operaciones regostradas al usuario autenticado en el sistema, tanto para el listado y creación de nuevos registros. Los datos indispensables para permitir el ingeso deben ser un email y contraseña. Pudiendo agregar los que deseen.
## Categoria por operaciones
Agregar la funcionalidad de categorizar las operaciones registradas en el gestor, como por ejemplo, una categoria "comida" para categorizar egresos. Adicionalmente, agregar la posibilidad de listar operaciones por categoria.
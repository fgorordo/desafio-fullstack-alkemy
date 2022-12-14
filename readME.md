# myWallet - Desafio Alkemy Full-Stack 馃殌
# Objetivo.
Desarrollar una aplicaci贸n para administraci贸n de presupuesto personal. La misma debe permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las operaciones registradas.
## Requerimientos tecnicos.
* Backend
  * API desarrollada utilizando Node.js y Express.js en sus versi贸nes (completar versi贸n en entrega).
  * Proceso de autenticaci贸n basado en tokens utilizando JWT.
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
La pantalla de inicio deber谩 mostrar el balance actual, es decir, el resultante de los ingresos y egresos de dinero cargados, y un listado de los 煤ltimos 10 (diez) movimientos

## CRUD de operaciones (ingresos y egresos)
La aplicaci贸n deber谩 contener:
* Formulario de registro de operaci贸n. El mismo deber谩 contener:
  * Concepto
  * Monto
  * Fecha
  * Tipo (ingreso o egreso)
* Listado de operaciones registradas seg煤n su tipo (ingreso o egreso).
* Desde el listado, se debe poder modificar o eliminar una operaci贸n registrada previamente. No debe ser posible modificar el tipo de operaci贸n (ingreso o egreso) una vez creada.
# Bonus
## Autenticaci贸n de usuarios
Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la aplicaci贸n, y vincular las operaciones regostradas al usuario autenticado en el sistema, tanto para el listado y creaci贸n de nuevos registros. Los datos indispensables para permitir el ingeso deben ser un email y contrase帽a. Pudiendo agregar los que deseen.
## Categoria por operaciones
Agregar la funcionalidad de categorizar las operaciones registradas en el gestor, como por ejemplo, una categoria "comida" para categorizar egresos. Adicionalmente, agregar la posibilidad de listar operaciones por categoria.
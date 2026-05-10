La aplicación es un sistema de Gestión de Membresías y Control de Pagos para un gimnasio. Su objetivo principal es automatizar el ciclo de vida de un socio, desde que se registra y elige un plan, hasta que el sistema detecta si su acceso debe ser revocado por falta de pago.

1. Un servidor web es un programa que recibe pedidos de los usuarios desde internet o una red y devuelve una respuesta. Por ejemplo, cuando una persona entra a una página, el navegador envía una petición al servidor y este responde enviando los archivos necesarios, como HTML, CSS o datos.
   El ciclo request-response funciona así:

* El cliente hace una request (pedido).
* El servidor la procesa.
* Luego devuelve una response (respuesta) con la información solicitada.

---

2. Express.js es un framework para Node.js que facilita crear servidores y APIs. Lo usamos porque simplifica mucho el trabajo. Con solo Node.js habría que escribir más código manualmente para manejar rutas, peticiones y respuestas. Express ya trae herramientas listas para usar, haciendo el desarrollo más rápido y ordenado.

---

3. Un JWT (JSON Web Token) es un token que guarda información del usuario de forma segura y firmada. Se usa para autenticación.
   La diferencia con guardar sesiones en el servidor es que:

* Con JWT, la información viaja en el token y el servidor no necesita guardar la sesión.
* Con sesiones tradicionales, el servidor guarda datos de cada usuario en memoria o base de datos.
  JWT suele ser más práctico para APIs y aplicaciones modernas.

---

4. Un procedimiento almacenado permite guardar instrucciones SQL directamente dentro de la base de datos. La ventaja es que mejora la seguridad, el rendimiento y la organización del código. Además, evita repetir consultas SQL en Node.js y permite ejecutar varias operaciones juntas de forma más eficiente.

---

5. Las transacciones son importantes porque aseguran que varias operaciones se completen correctamente todas juntas. Si algo falla, se puede hacer un ROLLBACK para deshacer los cambios y evitar datos incorrectos.
   Ejemplo: en una transferencia bancaria, primero se descuenta dinero de una cuenta y después se agrega a otra. Si falla la segunda operación, el ROLLBACK devuelve todo al estado anterior para que no se pierda dinero.

---

6. Un trigger es una acción automática que ejecuta la base de datos cuando ocurre un evento, como INSERT, UPDATE o DELETE.
   El trigger que implementé se dispara automáticamente después de realizar cierta operación en una tabla y sirve para mantener control o registrar cambios automáticamente sin necesidad de hacerlo desde Node.js.

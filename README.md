# Migración de Listas Enlazadas: Java a Node.js

Este proyecto consistió en la migración de una estructura de datos de Listas Enlazadas (Simples y Dobles) desde un entorno **Java** hacia un entorno de ejecución **Node.js** utilizando **JavaScript**.

### ¿Qué es Node.js?
Node.js es el entorno que permite ejecutar código JavaScript fuera del navegador (directamente en la computadora). En este proyecto, Node.js actúa como el motor que procesa nuestra lógica, permitiendo que las estructuras de datos funcionen en la consola de comandos de la misma manera que lo hace la Java Virtual Machine (JVM).

---

## Documentación de Diferencias de Sintaxis

A continuación, se detallan las principales diferencias encontradas durante el proceso de traducción de lógica entre ambos lenguajes:

### 1. Tipado Estricto vs. Dinámico
* **Java:** Requiere definir tipos de datos y clases en tiempo de compilación. Se utilizaron genéricos para la flexibilidad: `SinglyLinkedList<T>`.
* **Node.js (JS):** Es dinámico. No se definen tipos para las variables ni se usan genéricos explícitos. Se utiliza `let` o `const`: `let current = this.head;`.

### 2. Uso Obligatorio de this
* **Java:** El uso de `this` es opcional si no hay ambigüedad con variables locales.
* **Node.js (JS):** Para acceder a cualquier propiedad (`head`, `tail`, `_size`) o método de la clase, el prefijo `this.` es **estrictamente obligatorio**. De lo contrario, el programa genera un error de referencia.

### 3. Acceso a Propiedades de los Nodos
* **Java:** Se basa en el encapsulamiento mediante métodos *Getters* y *Setters*: `node.getNext()`.
* **Node.js (JS):** Se utiliza el acceso directo a las propiedades del objeto: `node.next`. 
* *Nota importante:* En este proyecto específico, los nodos dobles utilizan la propiedad completa `.previous` en lugar de la abreviatura `.prev`.

### 4. Manejo de Nulos: null vs. undefined
* **Java:** Una referencia vacía siempre es `null`.
* **Node.js (JS):** Existen ambos. Si una propiedad no ha sido inicializada, su valor es `undefined`. Para evitar errores al recorrer la lista (como el error `Cannot read properties of undefined`), se implementó programación defensiva asegurando el valor nulo: `let next = current.next || null;`.

### 5. Comparación de Igualdad
* **Java:** Requiere el método `.equals()` para comparar el contenido de objetos o strings.
* **Node.js (JS):** Se utiliza el operador de igualdad estricta `===` para comparar valor y tipo. En este proyecto se abstrajo en el método `this._isSameValue(left, right)`.

### 6. Convenciones de Privacidad
* **Java:** Utiliza palabras reservadas como `private` y `public`.
* **Node.js (JS):** Utiliza el prefijo de guion bajo (`_`) por convención (ej. `this._size`) para indicar que una propiedad o método es de uso interno y no debe ser manipulado directamente desde afuera de la clase.

---

### Cómo ejecutar este proyecto
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta las pruebas en consola:
   ```bash
   npm run demo
   ```

# Server

### Modelo de datos a utilizar para las validaciones

**User**

```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Order**

```json
{
  "id": "string",
  "userId": "string",
  "coffee": "string"
}
```

| En el capo de coffee solo se pueden aceptar los siguientes valores:
`(exactamente como se muestra)`

- Espresso
- Americano
- Cappuccino

---

### Acciones a Realizar

- [ ] (5 puntos) Implementar controlador de registro de usuarios.
- [ ] (5 puntos) Implementar controlador de cierre de sesión de usuarios.
- [ ] (5 puntos) Implementar ruta de cierre de sesión de usuarios.
- [ ] (5 puntos) Implementar validaciones de datos para las peticiones de las ordenes
- [ ] (5 puntos) Implementar validación de jwt en las rutas de las ordenes.
- [ ] (5 puntos) Implementar controladores y rutas para las funciones de los `models` que no hayan sido implementadas.

(30 puntos totales)

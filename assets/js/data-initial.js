/* ========================================================
   DATOS INICIALES DEL SISTEMA - PÁGINAS DEL TIEMPO
   105 Clientes, 85 Compras, Garantías (incl. post-100), Proveedores
   ======================================================== */

var USUARIOS_INICIALES = window.USUARIOS_INICIALES = [
  {
    "id": "USR-01",
    "usuario": "Admin. J. Salazar",
    "nombres": "Admin. J.",
    "apellidos": "Salazar",
    "email": "admin@paginasdeltiempo.com",
    "password": "admin",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-01-15"
  },
  {
    "id": "USR-02",
    "usuario": "Carlos Lector",
    "nombres": "Carlos",
    "apellidos": "Lector",
    "email": "carlos@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-10"
  },
  {
    "id": "USR-03",
    "usuario": "María González",
    "nombres": "María",
    "apellidos": "González",
    "email": "maria.g@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-14"
  },
  {
    "id": "USR-04",
    "usuario": "Natalia Castro",
    "nombres": "Natalia",
    "apellidos": "Castro",
    "email": "natalia.castro4@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-13"
  },
  {
    "id": "USR-05",
    "usuario": "Julián Cárdenas",
    "nombres": "Julián",
    "apellidos": "Cárdenas",
    "email": "julian.cardenas5@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-16"
  },
  {
    "id": "USR-06",
    "usuario": "Manuela Quintero",
    "nombres": "Manuela",
    "apellidos": "Quintero",
    "email": "manuela.quintero6@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-19"
  },
  {
    "id": "USR-07",
    "usuario": "Andrés Peláez",
    "nombres": "Andrés",
    "apellidos": "Peláez",
    "email": "andres.pelaez7@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-22"
  },
  {
    "id": "USR-08",
    "usuario": "Daniela Mejía",
    "nombres": "Daniela",
    "apellidos": "Mejía",
    "email": "daniela.mejia8@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-25"
  },
  {
    "id": "USR-09",
    "usuario": "David Gutiérrez",
    "nombres": "David",
    "apellidos": "Gutiérrez",
    "email": "david.gutierrez9@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-28"
  },
  {
    "id": "USR-10",
    "usuario": "Gabriela Torres",
    "nombres": "Gabriela",
    "apellidos": "Torres",
    "email": "gabriela.torres10@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-03"
  },
  {
    "id": "USR-11",
    "usuario": "Camilo Muñoz",
    "nombres": "Camilo",
    "apellidos": "Muñoz",
    "email": "camilo.munoz11@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-06"
  },
  {
    "id": "USR-12",
    "usuario": "Lucía Álvarez",
    "nombres": "Lucía",
    "apellidos": "Álvarez",
    "email": "lucia.alvarez12@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-09"
  },
  {
    "id": "USR-13",
    "usuario": "Rodrigo Pérez",
    "nombres": "Rodrigo",
    "apellidos": "Pérez",
    "email": "rodrigo.perez13@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-12"
  },
  {
    "id": "USR-14",
    "usuario": "Camila Ortiz",
    "nombres": "Camila",
    "apellidos": "Ortiz",
    "email": "camila.ortiz14@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-15"
  },
  {
    "id": "USR-15",
    "usuario": "Alejandro Restrepo",
    "nombres": "Alejandro",
    "apellidos": "Restrepo",
    "email": "alejandro.restrepo15@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-18"
  },
  {
    "id": "USR-16",
    "usuario": "Isabella Rodríguez",
    "nombres": "Isabella",
    "apellidos": "Rodríguez",
    "email": "isabella.rodriguez16@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-21"
  },
  {
    "id": "USR-17",
    "usuario": "Nicolás Vargas",
    "nombres": "Nicolás",
    "apellidos": "Vargas",
    "email": "nicolas.vargas17@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Inactivo",
    "fechaRegistro": "2026-05-24"
  },
  {
    "id": "USR-18",
    "usuario": "Carolina Silva",
    "nombres": "Carolina",
    "apellidos": "Silva",
    "email": "carolina.silva18@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-27"
  },
  {
    "id": "USR-19",
    "usuario": "Mauricio Castro",
    "nombres": "Mauricio",
    "apellidos": "Castro",
    "email": "mauricio.castro19@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-02"
  },
  {
    "id": "USR-20",
    "usuario": "María Cárdenas",
    "nombres": "María",
    "apellidos": "Cárdenas",
    "email": "maria.cardenas20@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-05"
  },
  {
    "id": "USR-21",
    "usuario": "Santiago Quintero",
    "nombres": "Santiago",
    "apellidos": "Quintero",
    "email": "santiago.quintero21@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-08"
  },
  {
    "id": "USR-22",
    "usuario": "Mariana Peláez",
    "nombres": "Mariana",
    "apellidos": "Peláez",
    "email": "mariana.pelaez22@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-11"
  },
  {
    "id": "USR-23",
    "usuario": "Diego Mejía",
    "nombres": "Diego",
    "apellidos": "Mejía",
    "email": "diego.mejia23@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-14"
  },
  {
    "id": "USR-24",
    "usuario": "Natalia Gutiérrez",
    "nombres": "Natalia",
    "apellidos": "Gutiérrez",
    "email": "natalia.gutierrez24@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-17"
  },
  {
    "id": "USR-25",
    "usuario": "Julián Torres",
    "nombres": "Julián",
    "apellidos": "Torres",
    "email": "julian.torres25@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-20"
  },
  {
    "id": "USR-26",
    "usuario": "Manuela Muñoz",
    "nombres": "Manuela",
    "apellidos": "Muñoz",
    "email": "manuela.munoz26@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-23"
  },
  {
    "id": "USR-27",
    "usuario": "Andrés Álvarez",
    "nombres": "Andrés",
    "apellidos": "Álvarez",
    "email": "andres.alvarez27@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-26"
  },
  {
    "id": "USR-28",
    "usuario": "Daniela Pérez",
    "nombres": "Daniela",
    "apellidos": "Pérez",
    "email": "daniela.perez28@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-01"
  },
  {
    "id": "USR-29",
    "usuario": "David Ortiz",
    "nombres": "David",
    "apellidos": "Ortiz",
    "email": "david.ortiz29@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-04"
  },
  {
    "id": "USR-30",
    "usuario": "Gabriela Restrepo",
    "nombres": "Gabriela",
    "apellidos": "Restrepo",
    "email": "gabriela.restrepo30@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-07"
  },
  {
    "id": "USR-31",
    "usuario": "Camilo Rodríguez",
    "nombres": "Camilo",
    "apellidos": "Rodríguez",
    "email": "camilo.rodriguez31@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-10"
  },
  {
    "id": "USR-32",
    "usuario": "Lucía Vargas",
    "nombres": "Lucía",
    "apellidos": "Vargas",
    "email": "lucia.vargas32@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-13"
  },
  {
    "id": "USR-33",
    "usuario": "Rodrigo Silva",
    "nombres": "Rodrigo",
    "apellidos": "Silva",
    "email": "rodrigo.silva33@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-16"
  },
  {
    "id": "USR-34",
    "usuario": "Camila Castro",
    "nombres": "Camila",
    "apellidos": "Castro",
    "email": "camila.castro34@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-19"
  },
  {
    "id": "USR-35",
    "usuario": "Alejandro Cárdenas",
    "nombres": "Alejandro",
    "apellidos": "Cárdenas",
    "email": "alejandro.cardenas35@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-22"
  },
  {
    "id": "USR-36",
    "usuario": "Isabella Quintero",
    "nombres": "Isabella",
    "apellidos": "Quintero",
    "email": "isabella.quintero36@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-25"
  },
  {
    "id": "USR-37",
    "usuario": "Nicolás Peláez",
    "nombres": "Nicolás",
    "apellidos": "Peláez",
    "email": "nicolas.pelaez37@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-28"
  },
  {
    "id": "USR-38",
    "usuario": "Carolina Mejía",
    "nombres": "Carolina",
    "apellidos": "Mejía",
    "email": "carolina.mejia38@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-03"
  },
  {
    "id": "USR-39",
    "usuario": "Mauricio Gutiérrez",
    "nombres": "Mauricio",
    "apellidos": "Gutiérrez",
    "email": "mauricio.gutierrez39@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-06"
  },
  {
    "id": "USR-40",
    "usuario": "María Torres",
    "nombres": "María",
    "apellidos": "Torres",
    "email": "maria.torres40@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-09"
  },
  {
    "id": "USR-41",
    "usuario": "Santiago Muñoz",
    "nombres": "Santiago",
    "apellidos": "Muñoz",
    "email": "santiago.munoz41@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-12"
  },
  {
    "id": "USR-42",
    "usuario": "Mariana Álvarez",
    "nombres": "Mariana",
    "apellidos": "Álvarez",
    "email": "mariana.alvarez42@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-15"
  },
  {
    "id": "USR-43",
    "usuario": "Diego Pérez",
    "nombres": "Diego",
    "apellidos": "Pérez",
    "email": "diego.perez43@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Inactivo",
    "fechaRegistro": "2026-03-18"
  },
  {
    "id": "USR-44",
    "usuario": "Natalia Ortiz",
    "nombres": "Natalia",
    "apellidos": "Ortiz",
    "email": "natalia.ortiz44@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-21"
  },
  {
    "id": "USR-45",
    "usuario": "Julián Restrepo",
    "nombres": "Julián",
    "apellidos": "Restrepo",
    "email": "julian.restrepo45@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-24"
  },
  {
    "id": "USR-46",
    "usuario": "Manuela Rodríguez",
    "nombres": "Manuela",
    "apellidos": "Rodríguez",
    "email": "manuela.rodriguez46@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-27"
  },
  {
    "id": "USR-47",
    "usuario": "Andrés Vargas",
    "nombres": "Andrés",
    "apellidos": "Vargas",
    "email": "andres.vargas47@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-02"
  },
  {
    "id": "USR-48",
    "usuario": "Daniela Silva",
    "nombres": "Daniela",
    "apellidos": "Silva",
    "email": "daniela.silva48@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-05"
  },
  {
    "id": "USR-49",
    "usuario": "David Castro",
    "nombres": "David",
    "apellidos": "Castro",
    "email": "david.castro49@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-08"
  },
  {
    "id": "USR-50",
    "usuario": "Gabriela Cárdenas",
    "nombres": "Gabriela",
    "apellidos": "Cárdenas",
    "email": "gabriela.cardenas50@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-11"
  },
  {
    "id": "USR-51",
    "usuario": "Camilo Quintero",
    "nombres": "Camilo",
    "apellidos": "Quintero",
    "email": "camilo.quintero51@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-14"
  },
  {
    "id": "USR-52",
    "usuario": "Lucía Peláez",
    "nombres": "Lucía",
    "apellidos": "Peláez",
    "email": "lucia.pelaez52@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-17"
  },
  {
    "id": "USR-53",
    "usuario": "Rodrigo Mejía",
    "nombres": "Rodrigo",
    "apellidos": "Mejía",
    "email": "rodrigo.mejia53@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-20"
  },
  {
    "id": "USR-54",
    "usuario": "Camila Gutiérrez",
    "nombres": "Camila",
    "apellidos": "Gutiérrez",
    "email": "camila.gutierrez54@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-23"
  },
  {
    "id": "USR-55",
    "usuario": "Alejandro Torres",
    "nombres": "Alejandro",
    "apellidos": "Torres",
    "email": "alejandro.torres55@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-26"
  },
  {
    "id": "USR-56",
    "usuario": "Isabella Muñoz",
    "nombres": "Isabella",
    "apellidos": "Muñoz",
    "email": "isabella.munoz56@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-01"
  },
  {
    "id": "USR-57",
    "usuario": "Nicolás Álvarez",
    "nombres": "Nicolás",
    "apellidos": "Álvarez",
    "email": "nicolas.alvarez57@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-04"
  },
  {
    "id": "USR-58",
    "usuario": "Carolina Pérez",
    "nombres": "Carolina",
    "apellidos": "Pérez",
    "email": "carolina.perez58@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-07"
  },
  {
    "id": "USR-59",
    "usuario": "Mauricio Ortiz",
    "nombres": "Mauricio",
    "apellidos": "Ortiz",
    "email": "mauricio.ortiz59@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-10"
  },
  {
    "id": "USR-60",
    "usuario": "María Restrepo",
    "nombres": "María",
    "apellidos": "Restrepo",
    "email": "maria.restrepo60@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-13"
  },
  {
    "id": "USR-61",
    "usuario": "Santiago Rodríguez",
    "nombres": "Santiago",
    "apellidos": "Rodríguez",
    "email": "santiago.rodriguez61@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-16"
  },
  {
    "id": "USR-62",
    "usuario": "Mariana Vargas",
    "nombres": "Mariana",
    "apellidos": "Vargas",
    "email": "mariana.vargas62@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-19"
  },
  {
    "id": "USR-63",
    "usuario": "Diego Silva",
    "nombres": "Diego",
    "apellidos": "Silva",
    "email": "diego.silva63@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-22"
  },
  {
    "id": "USR-64",
    "usuario": "Natalia Castro",
    "nombres": "Natalia",
    "apellidos": "Castro",
    "email": "natalia.castro64@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-25"
  },
  {
    "id": "USR-65",
    "usuario": "Julián Cárdenas",
    "nombres": "Julián",
    "apellidos": "Cárdenas",
    "email": "julian.cardenas65@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-28"
  },
  {
    "id": "USR-66",
    "usuario": "Manuela Quintero",
    "nombres": "Manuela",
    "apellidos": "Quintero",
    "email": "manuela.quintero66@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-03"
  },
  {
    "id": "USR-67",
    "usuario": "Andrés Peláez",
    "nombres": "Andrés",
    "apellidos": "Peláez",
    "email": "andres.pelaez67@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-06"
  },
  {
    "id": "USR-68",
    "usuario": "Daniela Mejía",
    "nombres": "Daniela",
    "apellidos": "Mejía",
    "email": "daniela.mejia68@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-09"
  },
  {
    "id": "USR-69",
    "usuario": "David Gutiérrez",
    "nombres": "David",
    "apellidos": "Gutiérrez",
    "email": "david.gutierrez69@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-12"
  },
  {
    "id": "USR-70",
    "usuario": "Gabriela Torres",
    "nombres": "Gabriela",
    "apellidos": "Torres",
    "email": "gabriela.torres70@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-15"
  },
  {
    "id": "USR-71",
    "usuario": "Camilo Muñoz",
    "nombres": "Camilo",
    "apellidos": "Muñoz",
    "email": "camilo.munoz71@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-18"
  },
  {
    "id": "USR-72",
    "usuario": "Lucía Álvarez",
    "nombres": "Lucía",
    "apellidos": "Álvarez",
    "email": "lucia.alvarez72@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-21"
  },
  {
    "id": "USR-73",
    "usuario": "Rodrigo Pérez",
    "nombres": "Rodrigo",
    "apellidos": "Pérez",
    "email": "rodrigo.perez73@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-24"
  },
  {
    "id": "USR-74",
    "usuario": "Camila Ortiz",
    "nombres": "Camila",
    "apellidos": "Ortiz",
    "email": "camila.ortiz74@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-27"
  },
  {
    "id": "USR-75",
    "usuario": "Alejandro Restrepo",
    "nombres": "Alejandro",
    "apellidos": "Restrepo",
    "email": "alejandro.restrepo75@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-02"
  },
  {
    "id": "USR-76",
    "usuario": "Isabella Rodríguez",
    "nombres": "Isabella",
    "apellidos": "Rodríguez",
    "email": "isabella.rodriguez76@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-05"
  },
  {
    "id": "USR-77",
    "usuario": "Nicolás Vargas",
    "nombres": "Nicolás",
    "apellidos": "Vargas",
    "email": "nicolas.vargas77@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-08"
  },
  {
    "id": "USR-78",
    "usuario": "Carolina Silva",
    "nombres": "Carolina",
    "apellidos": "Silva",
    "email": "carolina.silva78@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-11"
  },
  {
    "id": "USR-79",
    "usuario": "Mauricio Castro",
    "nombres": "Mauricio",
    "apellidos": "Castro",
    "email": "mauricio.castro79@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Inactivo",
    "fechaRegistro": "2026-04-14"
  },
  {
    "id": "USR-80",
    "usuario": "María Cárdenas",
    "nombres": "María",
    "apellidos": "Cárdenas",
    "email": "maria.cardenas80@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-17"
  },
  {
    "id": "USR-81",
    "usuario": "Santiago Quintero",
    "nombres": "Santiago",
    "apellidos": "Quintero",
    "email": "santiago.quintero81@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-20"
  },
  {
    "id": "USR-82",
    "usuario": "Mariana Peláez",
    "nombres": "Mariana",
    "apellidos": "Peláez",
    "email": "mariana.pelaez82@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-23"
  },
  {
    "id": "USR-83",
    "usuario": "Diego Mejía",
    "nombres": "Diego",
    "apellidos": "Mejía",
    "email": "diego.mejia83@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-26"
  },
  {
    "id": "USR-84",
    "usuario": "Natalia Gutiérrez",
    "nombres": "Natalia",
    "apellidos": "Gutiérrez",
    "email": "natalia.gutierrez84@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-01"
  },
  {
    "id": "USR-85",
    "usuario": "Julián Torres",
    "nombres": "Julián",
    "apellidos": "Torres",
    "email": "julian.torres85@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-04"
  },
  {
    "id": "USR-86",
    "usuario": "Manuela Muñoz",
    "nombres": "Manuela",
    "apellidos": "Muñoz",
    "email": "manuela.munoz86@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-07"
  },
  {
    "id": "USR-87",
    "usuario": "Andrés Álvarez",
    "nombres": "Andrés",
    "apellidos": "Álvarez",
    "email": "andres.alvarez87@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-10"
  },
  {
    "id": "USR-88",
    "usuario": "Daniela Pérez",
    "nombres": "Daniela",
    "apellidos": "Pérez",
    "email": "daniela.perez88@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-13"
  },
  {
    "id": "USR-89",
    "usuario": "David Ortiz",
    "nombres": "David",
    "apellidos": "Ortiz",
    "email": "david.ortiz89@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-16"
  },
  {
    "id": "USR-90",
    "usuario": "Gabriela Restrepo",
    "nombres": "Gabriela",
    "apellidos": "Restrepo",
    "email": "gabriela.restrepo90@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-19"
  },
  {
    "id": "USR-91",
    "usuario": "Camilo Rodríguez",
    "nombres": "Camilo",
    "apellidos": "Rodríguez",
    "email": "camilo.rodriguez91@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-22"
  },
  {
    "id": "USR-92",
    "usuario": "Lucía Vargas",
    "nombres": "Lucía",
    "apellidos": "Vargas",
    "email": "lucia.vargas92@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-25"
  },
  {
    "id": "USR-93",
    "usuario": "Rodrigo Silva",
    "nombres": "Rodrigo",
    "apellidos": "Silva",
    "email": "rodrigo.silva93@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-28"
  },
  {
    "id": "USR-94",
    "usuario": "Camila Castro",
    "nombres": "Camila",
    "apellidos": "Castro",
    "email": "camila.castro94@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-03"
  },
  {
    "id": "USR-95",
    "usuario": "Alejandro Cárdenas",
    "nombres": "Alejandro",
    "apellidos": "Cárdenas",
    "email": "alejandro.cardenas95@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-06"
  },
  {
    "id": "USR-96",
    "usuario": "Isabella Quintero",
    "nombres": "Isabella",
    "apellidos": "Quintero",
    "email": "isabella.quintero96@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-09"
  },
  {
    "id": "USR-97",
    "usuario": "Nicolás Peláez",
    "nombres": "Nicolás",
    "apellidos": "Peláez",
    "email": "nicolas.pelaez97@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-12"
  },
  {
    "id": "USR-98",
    "usuario": "Carolina Mejía",
    "nombres": "Carolina",
    "apellidos": "Mejía",
    "email": "carolina.mejia98@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-15"
  },
  {
    "id": "USR-99",
    "usuario": "Mauricio Gutiérrez",
    "nombres": "Mauricio",
    "apellidos": "Gutiérrez",
    "email": "mauricio.gutierrez99@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-03-18"
  },
  {
    "id": "USR-100",
    "usuario": "María Torres",
    "nombres": "María",
    "apellidos": "Torres",
    "email": "maria.torres100@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-04-21"
  },
  {
    "id": "USR-101",
    "usuario": "Valentina Ospina",
    "nombres": "Valentina",
    "apellidos": "Ospina",
    "email": "valentina.ospina101@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-05-24"
  },
  {
    "id": "USR-102",
    "usuario": "Mateo Cárdenas",
    "nombres": "Mateo",
    "apellidos": "Cárdenas",
    "email": "mateo.cardenas102@hotmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-06-27"
  },
  {
    "id": "USR-103",
    "usuario": "Sofía Quintero",
    "nombres": "Sofía",
    "apellidos": "Quintero",
    "email": "sofia.quintero103@yahoo.es",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-07-02"
  },
  {
    "id": "USR-104",
    "usuario": "Alejandro Morales",
    "nombres": "Alejandro",
    "apellidos": "Morales",
    "email": "alejandro.morales104@gmail.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-08-05"
  },
  {
    "id": "USR-105",
    "usuario": "Camila Bermúdez",
    "nombres": "Camila",
    "apellidos": "Bermúdez",
    "email": "camila.bermudez105@outlook.com",
    "password": "password123",
    "rol": "Lector",
    "estado": "Activo",
    "fechaRegistro": "2026-02-08"
  }
];

var PEDIDOS_INICIALES = window.PEDIDOS_INICIALES = [
  {
    "id": "ORD-1001",
    "usuarioId": "USR-09",
    "usuario": "David Gutiérrez",
    "email": "david.gutierrez9@outlook.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-03-06T11:03:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1002",
    "usuarioId": "USR-16",
    "usuario": "Isabella Rodríguez",
    "email": "isabella.rodriguez16@gmail.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-03-11T12:06:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1003",
    "usuarioId": "USR-23",
    "usuario": "Diego Mejía",
    "email": "diego.mejia23@yahoo.es",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      },
      {
        "id": 108,
        "titulo": "El principito",
        "precio": 30000
      }
    ],
    "total": 77000,
    "fecha": "2026-03-16T13:09:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1004",
    "usuarioId": "USR-30",
    "usuario": "Gabriela Restrepo",
    "email": "gabriela.restrepo30@hotmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-03-21T14:12:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1005",
    "usuarioId": "USR-37",
    "usuario": "Nicolás Peláez",
    "email": "nicolas.pelaez37@outlook.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-03-26T15:15:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1006",
    "usuarioId": "USR-44",
    "usuario": "Natalia Ortiz",
    "email": "natalia.ortiz44@gmail.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      },
      {
        "id": 4,
        "titulo": "El señor de los anillos",
        "precio": 85000
      }
    ],
    "total": 133000,
    "fecha": "2026-03-03T16:18:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1007",
    "usuarioId": "USR-51",
    "usuario": "Camilo Quintero",
    "email": "camilo.quintero51@yahoo.es",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-03-08T17:21:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1008",
    "usuarioId": "USR-58",
    "usuario": "Carolina Pérez",
    "email": "carolina.perez58@hotmail.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-03-13T18:24:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1009",
    "usuarioId": "USR-65",
    "usuario": "Julián Cárdenas",
    "email": "julian.cardenas65@outlook.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      },
      {
        "id": 106,
        "titulo": "Sapiens: De animales a dioses",
        "precio": 60000
      }
    ],
    "total": 98000,
    "fecha": "2026-03-18T19:27:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1010",
    "usuarioId": "USR-72",
    "usuario": "Lucía Álvarez",
    "email": "lucia.alvarez72@gmail.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-03-23T10:30:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1011",
    "usuarioId": "USR-79",
    "usuario": "Mauricio Castro",
    "email": "mauricio.castro79@yahoo.es",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-03-28T11:33:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1012",
    "usuarioId": "USR-86",
    "usuario": "Manuela Muñoz",
    "email": "manuela.munoz86@hotmail.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      },
      {
        "id": 2,
        "titulo": "Don Quijote de la Mancha",
        "precio": 65000
      }
    ],
    "total": 110000,
    "fecha": "2026-03-05T12:36:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1013",
    "usuarioId": "USR-93",
    "usuario": "Rodrigo Silva",
    "email": "rodrigo.silva93@outlook.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-03-10T13:39:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1014",
    "usuarioId": "USR-100",
    "usuario": "María Torres",
    "email": "maria.torres100@gmail.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-03-15T14:42:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1015",
    "usuarioId": "USR-03",
    "usuario": "María González",
    "email": "maria.g@hotmail.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      },
      {
        "id": 104,
        "titulo": "Veinte poemas de amor",
        "precio": 25000
      }
    ],
    "total": 67000,
    "fecha": "2026-03-20T15:45:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1016",
    "usuarioId": "USR-10",
    "usuario": "Gabriela Torres",
    "email": "gabriela.torres10@hotmail.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-04-25T16:48:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1017",
    "usuarioId": "USR-17",
    "usuario": "Nicolás Vargas",
    "email": "nicolas.vargas17@outlook.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-04-02T17:51:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1018",
    "usuarioId": "USR-24",
    "usuario": "Natalia Gutiérrez",
    "email": "natalia.gutierrez24@gmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      },
      {
        "id": 110,
        "titulo": "Padre rico, padre pobre",
        "precio": 40000
      }
    ],
    "total": 95000,
    "fecha": "2026-04-07T18:54:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1019",
    "usuarioId": "USR-31",
    "usuario": "Camilo Rodríguez",
    "email": "camilo.rodriguez31@yahoo.es",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-04-12T19:57:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1020",
    "usuarioId": "USR-38",
    "usuario": "Carolina Mejía",
    "email": "carolina.mejia38@hotmail.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-04-17T10:00:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1021",
    "usuarioId": "USR-45",
    "usuario": "Julián Restrepo",
    "email": "julian.restrepo45@outlook.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      },
      {
        "id": 102,
        "titulo": "Harry Potter y la Piedra Filosofal",
        "precio": 50000
      }
    ],
    "total": 85000,
    "fecha": "2026-04-22T11:03:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1022",
    "usuarioId": "USR-52",
    "usuario": "Lucía Peláez",
    "email": "lucia.pelaez52@gmail.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-04-27T12:06:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1023",
    "usuarioId": "USR-59",
    "usuario": "Mauricio Ortiz",
    "email": "mauricio.ortiz59@yahoo.es",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-04-04T13:09:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1024",
    "usuarioId": "USR-66",
    "usuario": "Manuela Quintero",
    "email": "manuela.quintero66@hotmail.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      },
      {
        "id": 108,
        "titulo": "El principito",
        "precio": 30000
      }
    ],
    "total": 77000,
    "fecha": "2026-04-09T14:12:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1025",
    "usuarioId": "USR-73",
    "usuario": "Rodrigo Pérez",
    "email": "rodrigo.perez73@outlook.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-04-14T15:15:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1026",
    "usuarioId": "USR-80",
    "usuario": "María Cárdenas",
    "email": "maria.cardenas80@gmail.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-04-19T16:18:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1027",
    "usuarioId": "USR-87",
    "usuario": "Andrés Álvarez",
    "email": "andres.alvarez87@yahoo.es",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      },
      {
        "id": 4,
        "titulo": "El señor de los anillos",
        "precio": 85000
      }
    ],
    "total": 133000,
    "fecha": "2026-04-24T17:21:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1028",
    "usuarioId": "USR-94",
    "usuario": "Camila Castro",
    "email": "camila.castro94@hotmail.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-04-01T18:24:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1029",
    "usuarioId": "USR-101",
    "usuario": "Valentina Ospina",
    "email": "valentina.ospina101@outlook.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-04-06T19:27:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1030",
    "usuarioId": "USR-04",
    "usuario": "Natalia Castro",
    "email": "natalia.castro4@gmail.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      },
      {
        "id": 106,
        "titulo": "Sapiens: De animales a dioses",
        "precio": 60000
      }
    ],
    "total": 98000,
    "fecha": "2026-04-11T10:30:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1031",
    "usuarioId": "USR-11",
    "usuario": "Camilo Muñoz",
    "email": "camilo.munoz11@yahoo.es",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-04-16T11:33:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1032",
    "usuarioId": "USR-18",
    "usuario": "Carolina Silva",
    "email": "carolina.silva18@hotmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-05-21T12:36:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1033",
    "usuarioId": "USR-25",
    "usuario": "Julián Torres",
    "email": "julian.torres25@outlook.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      },
      {
        "id": 2,
        "titulo": "Don Quijote de la Mancha",
        "precio": 65000
      }
    ],
    "total": 110000,
    "fecha": "2026-05-26T13:39:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1034",
    "usuarioId": "USR-32",
    "usuario": "Lucía Vargas",
    "email": "lucia.vargas32@gmail.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-05-03T14:42:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1035",
    "usuarioId": "USR-39",
    "usuario": "Mauricio Gutiérrez",
    "email": "mauricio.gutierrez39@yahoo.es",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-05-08T15:45:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1036",
    "usuarioId": "USR-46",
    "usuario": "Manuela Rodríguez",
    "email": "manuela.rodriguez46@hotmail.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      },
      {
        "id": 104,
        "titulo": "Veinte poemas de amor",
        "precio": 25000
      }
    ],
    "total": 67000,
    "fecha": "2026-05-13T16:48:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1037",
    "usuarioId": "USR-53",
    "usuario": "Rodrigo Mejía",
    "email": "rodrigo.mejia53@outlook.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-05-18T17:51:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1038",
    "usuarioId": "USR-60",
    "usuario": "María Restrepo",
    "email": "maria.restrepo60@gmail.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-05-23T18:54:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1039",
    "usuarioId": "USR-67",
    "usuario": "Andrés Peláez",
    "email": "andres.pelaez67@yahoo.es",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      },
      {
        "id": 110,
        "titulo": "Padre rico, padre pobre",
        "precio": 40000
      }
    ],
    "total": 95000,
    "fecha": "2026-05-28T19:57:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1040",
    "usuarioId": "USR-74",
    "usuario": "Camila Ortiz",
    "email": "camila.ortiz74@hotmail.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-05-05T10:00:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1041",
    "usuarioId": "USR-81",
    "usuario": "Santiago Quintero",
    "email": "santiago.quintero81@outlook.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-05-10T11:03:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1042",
    "usuarioId": "USR-88",
    "usuario": "Daniela Pérez",
    "email": "daniela.perez88@gmail.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      },
      {
        "id": 102,
        "titulo": "Harry Potter y la Piedra Filosofal",
        "precio": 50000
      }
    ],
    "total": 85000,
    "fecha": "2026-05-15T12:06:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1043",
    "usuarioId": "USR-95",
    "usuario": "Alejandro Cárdenas",
    "email": "alejandro.cardenas95@yahoo.es",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-05-20T13:09:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1044",
    "usuarioId": "USR-102",
    "usuario": "Mateo Cárdenas",
    "email": "mateo.cardenas102@hotmail.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-05-25T14:12:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1045",
    "usuarioId": "USR-05",
    "usuario": "Julián Cárdenas",
    "email": "julian.cardenas5@outlook.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      },
      {
        "id": 108,
        "titulo": "El principito",
        "precio": 30000
      }
    ],
    "total": 77000,
    "fecha": "2026-05-02T15:15:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1046",
    "usuarioId": "USR-12",
    "usuario": "Lucía Álvarez",
    "email": "lucia.alvarez12@gmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-05-07T16:18:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1047",
    "usuarioId": "USR-19",
    "usuario": "Mauricio Castro",
    "email": "mauricio.castro19@yahoo.es",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-05-12T17:21:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1048",
    "usuarioId": "USR-26",
    "usuario": "Manuela Muñoz",
    "email": "manuela.munoz26@hotmail.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      },
      {
        "id": 4,
        "titulo": "El señor de los anillos",
        "precio": 85000
      }
    ],
    "total": 133000,
    "fecha": "2026-06-17T18:24:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1049",
    "usuarioId": "USR-33",
    "usuario": "Rodrigo Silva",
    "email": "rodrigo.silva33@outlook.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-06-22T19:27:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1050",
    "usuarioId": "USR-40",
    "usuario": "María Torres",
    "email": "maria.torres40@gmail.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-06-27T10:30:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1051",
    "usuarioId": "USR-47",
    "usuario": "Andrés Vargas",
    "email": "andres.vargas47@yahoo.es",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      },
      {
        "id": 106,
        "titulo": "Sapiens: De animales a dioses",
        "precio": 60000
      }
    ],
    "total": 98000,
    "fecha": "2026-06-04T11:33:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1052",
    "usuarioId": "USR-54",
    "usuario": "Camila Gutiérrez",
    "email": "camila.gutierrez54@hotmail.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-06-09T12:36:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1053",
    "usuarioId": "USR-61",
    "usuario": "Santiago Rodríguez",
    "email": "santiago.rodriguez61@outlook.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-06-14T13:39:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1054",
    "usuarioId": "USR-68",
    "usuario": "Daniela Mejía",
    "email": "daniela.mejia68@gmail.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      },
      {
        "id": 2,
        "titulo": "Don Quijote de la Mancha",
        "precio": 65000
      }
    ],
    "total": 110000,
    "fecha": "2026-06-19T14:42:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1055",
    "usuarioId": "USR-75",
    "usuario": "Alejandro Restrepo",
    "email": "alejandro.restrepo75@yahoo.es",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-06-24T15:45:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1056",
    "usuarioId": "USR-82",
    "usuario": "Mariana Peláez",
    "email": "mariana.pelaez82@hotmail.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-06-01T16:48:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1057",
    "usuarioId": "USR-89",
    "usuario": "David Ortiz",
    "email": "david.ortiz89@outlook.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      },
      {
        "id": 104,
        "titulo": "Veinte poemas de amor",
        "precio": 25000
      }
    ],
    "total": 67000,
    "fecha": "2026-06-06T17:51:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1058",
    "usuarioId": "USR-96",
    "usuario": "Isabella Quintero",
    "email": "isabella.quintero96@gmail.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-06-11T18:54:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1059",
    "usuarioId": "USR-103",
    "usuario": "Sofía Quintero",
    "email": "sofia.quintero103@yahoo.es",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-06-16T19:57:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1060",
    "usuarioId": "USR-06",
    "usuario": "Manuela Quintero",
    "email": "manuela.quintero6@hotmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      },
      {
        "id": 110,
        "titulo": "Padre rico, padre pobre",
        "precio": 40000
      }
    ],
    "total": 95000,
    "fecha": "2026-06-21T10:00:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1061",
    "usuarioId": "USR-13",
    "usuario": "Rodrigo Pérez",
    "email": "rodrigo.perez13@outlook.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-06-26T11:03:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1062",
    "usuarioId": "USR-20",
    "usuario": "María Cárdenas",
    "email": "maria.cardenas20@gmail.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-06-03T12:06:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1063",
    "usuarioId": "USR-27",
    "usuario": "Andrés Álvarez",
    "email": "andres.alvarez27@yahoo.es",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      },
      {
        "id": 102,
        "titulo": "Harry Potter y la Piedra Filosofal",
        "precio": 50000
      }
    ],
    "total": 85000,
    "fecha": "2026-06-08T13:09:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1064",
    "usuarioId": "USR-34",
    "usuario": "Camila Castro",
    "email": "camila.castro34@hotmail.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-07-13T14:12:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1065",
    "usuarioId": "USR-41",
    "usuario": "Santiago Muñoz",
    "email": "santiago.munoz41@outlook.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 38000,
    "fecha": "2026-07-18T15:15:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1066",
    "usuarioId": "USR-48",
    "usuario": "Daniela Silva",
    "email": "daniela.silva48@gmail.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      },
      {
        "id": 108,
        "titulo": "El principito",
        "precio": 30000
      }
    ],
    "total": 77000,
    "fecha": "2026-07-23T16:18:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1067",
    "usuarioId": "USR-55",
    "usuario": "Alejandro Torres",
    "email": "alejandro.torres55@yahoo.es",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-07-28T17:21:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1068",
    "usuarioId": "USR-62",
    "usuario": "Mariana Vargas",
    "email": "mariana.vargas62@hotmail.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-07-05T18:24:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1069",
    "usuarioId": "USR-69",
    "usuario": "David Gutiérrez",
    "email": "david.gutierrez69@outlook.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      },
      {
        "id": 4,
        "titulo": "El señor de los anillos",
        "precio": 85000
      }
    ],
    "total": 133000,
    "fecha": "2026-07-10T19:27:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1070",
    "usuarioId": "USR-76",
    "usuario": "Isabella Rodríguez",
    "email": "isabella.rodriguez76@gmail.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-07-15T10:30:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1071",
    "usuarioId": "USR-83",
    "usuario": "Diego Mejía",
    "email": "diego.mejia83@yahoo.es",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-07-20T11:33:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1072",
    "usuarioId": "USR-90",
    "usuario": "Gabriela Restrepo",
    "email": "gabriela.restrepo90@hotmail.com",
    "items": [
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      },
      {
        "id": 106,
        "titulo": "Sapiens: De animales a dioses",
        "precio": 60000
      }
    ],
    "total": 98000,
    "fecha": "2026-07-25T12:36:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1073",
    "usuarioId": "USR-97",
    "usuario": "Nicolás Peláez",
    "email": "nicolas.pelaez97@outlook.com",
    "items": [
      {
        "id": 107,
        "titulo": "Mi historia",
        "precio": 47000
      }
    ],
    "total": 47000,
    "fecha": "2026-07-02T13:39:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1074",
    "usuarioId": "USR-104",
    "usuario": "Alejandro Morales",
    "email": "alejandro.morales104@gmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-07-07T14:42:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1075",
    "usuarioId": "USR-07",
    "usuario": "Andrés Peláez",
    "email": "andres.pelaez7@yahoo.es",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      },
      {
        "id": 2,
        "titulo": "Don Quijote de la Mancha",
        "precio": 65000
      }
    ],
    "total": 110000,
    "fecha": "2026-07-12T15:45:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1076",
    "usuarioId": "USR-14",
    "usuario": "Camila Ortiz",
    "email": "camila.ortiz14@hotmail.com",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-07-17T16:48:00.000Z",
    "estado": "Completado"
  },
  {
    "id": "ORD-1077",
    "usuarioId": "USR-21",
    "usuario": "Santiago Quintero",
    "email": "santiago.quintero21@outlook.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      }
    ],
    "total": 35000,
    "fecha": "2026-07-22T17:51:00.000Z",
    "estado": "Enviado"
  },
  {
    "id": "ORD-1078",
    "usuarioId": "USR-101",
    "usuario": "Valentina Ospina",
    "email": "valentina.ospina101@outlook.com",
    "items": [
      {
        "id": 1,
        "titulo": "Cien años de soledad",
        "precio": 45000
      }
    ],
    "total": 45000,
    "fecha": "2026-09-02T18:54:00.000Z",
    "estado": "Enviado"
  },
  {
    "id": "ORD-1079",
    "usuarioId": "USR-102",
    "usuario": "Mateo Cárdenas",
    "email": "mateo.cardenas102@hotmail.com",
    "items": [
      {
        "id": 2,
        "titulo": "Don Quijote de la Mancha",
        "precio": 65000
      }
    ],
    "total": 65000,
    "fecha": "2026-09-03T19:57:00.000Z",
    "estado": "Enviado"
  },
  {
    "id": "ORD-1080",
    "usuarioId": "USR-103",
    "usuario": "Sofía Quintero",
    "email": "sofia.quintero103@yahoo.es",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      },
      {
        "id": 108,
        "titulo": "El principito",
        "precio": 30000
      }
    ],
    "total": 65000,
    "fecha": "2026-09-04T10:00:00.000Z",
    "estado": "Enviado"
  },
  {
    "id": "ORD-1081",
    "usuarioId": "USR-104",
    "usuario": "Alejandro Morales",
    "email": "alejandro.morales104@gmail.com",
    "items": [
      {
        "id": 109,
        "titulo": "Hábitos atómicos",
        "precio": 55000
      }
    ],
    "total": 55000,
    "fecha": "2026-09-04T11:03:00.000Z",
    "estado": "Procesando"
  },
  {
    "id": "ORD-1082",
    "usuarioId": "USR-105",
    "usuario": "Camila Bermúdez",
    "email": "camila.bermudez105@outlook.com",
    "items": [
      {
        "id": 102,
        "titulo": "Harry Potter y la Piedra Filosofal",
        "precio": 50000
      },
      {
        "id": 105,
        "titulo": "Orgullo y prejuicio",
        "precio": 38000
      }
    ],
    "total": 88000,
    "fecha": "2026-09-05T12:06:00.000Z",
    "estado": "Procesando"
  },
  {
    "id": "ORD-1083",
    "usuarioId": "USR-63",
    "usuario": "Diego Silva",
    "email": "diego.silva63@yahoo.es",
    "items": [
      {
        "id": 3,
        "titulo": "Los tres mosqueteros",
        "precio": 48000
      }
    ],
    "total": 48000,
    "fecha": "2026-08-24T13:09:00.000Z",
    "estado": "Procesando"
  },
  {
    "id": "ORD-1084",
    "usuarioId": "USR-70",
    "usuario": "Gabriela Torres",
    "email": "gabriela.torres70@hotmail.com",
    "items": [
      {
        "id": 101,
        "titulo": "Drácula",
        "precio": 35000
      },
      {
        "id": 102,
        "titulo": "Harry Potter y la Piedra Filosofal",
        "precio": 50000
      }
    ],
    "total": 85000,
    "fecha": "2026-08-01T14:12:00.000Z",
    "estado": "Procesando"
  },
  {
    "id": "ORD-1085",
    "usuarioId": "USR-77",
    "usuario": "Nicolás Vargas",
    "email": "nicolas.vargas77@outlook.com",
    "items": [
      {
        "id": 103,
        "titulo": "Breves respuestas a las grandes preguntas",
        "precio": 42000
      }
    ],
    "total": 42000,
    "fecha": "2026-08-06T15:15:00.000Z",
    "estado": "Procesando"
  }
];

var GARANTIAS_INICIALES = window.GARANTIAS_INICIALES = [
  {
    "id": "GAR-201",
    "usuario": "Carlos Lector",
    "libro": "Breves respuestas",
    "motivo": "Páginas sueltas en capítulo 2",
    "estado": "Pendiente",
    "mensajes": [
      {
        "sender": "Carlos Lector",
        "rol": "cliente",
        "time": "Ayer 10:15",
        "text": "Hola, recibí mi copia de Breves Respuestas pero tiene las páginas del capítulo 2 totalmente sueltas. Adjunto foto de la prueba:",
        "foto": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Ayer 11:30",
        "text": "Hola Carlos, lamento el inconveniente con tu libro usado. ¿Nos podrías confirmar si deseas cambio por otro ejemplar o la devolución en saldo de tienda?"
      }
    ]
  },
  {
    "id": "GAR-202",
    "usuario": "María González",
    "libro": "Los tres mosqueteros",
    "motivo": "Daño en lomo por transporte",
    "estado": "En Revisión",
    "mensajes": [
      {
        "sender": "María González",
        "rol": "cliente",
        "time": "Hace 2 días",
        "text": "Buenas tardes, la caja del envío llegó aplastada y el lomo del libro sufrió un doblez severo como se ve en esta foto:",
        "foto": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    "id": "GAR-203",
    "usuario": "Ana Martínez",
    "libro": "Sapiens",
    "motivo": "Manchas de humedad no especificadas",
    "estado": "En Revisión",
    "mensajes": [
      {
        "sender": "Ana Martínez",
        "rol": "cliente",
        "time": "Hace 3 días",
        "text": "Hola, acabo de recibir el libro Sapiens pero noté que varias páginas traseras tienen manchas de humedad no descritas."
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Hace 2 días",
        "text": "Hola Ana, lamento lo sucedido. Para evaluar tu garantía, ¿podrías adjuntarnos una fotografía clara donde se aprecien las manchas de humedad?"
      },
      {
        "sender": "Ana Martínez",
        "rol": "cliente",
        "time": "Ayer 14:20",
        "text": "Claro que sí, aquí adjunto la fotografía del daño en las páginas traseras para que lo revisen:",
        "foto": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Ayer 16:05",
        "text": "Gracias por la fotografía Ana. Hemos verificado la evidencia. Podemos ofrecerte: 1) Reembolso del 50% conservando el libro, o 2) Devolución total del saldo al retornar el ejemplar. ¿Qué opción prefieres?"
      }
    ]
  },
  {
    "id": "GAR-204",
    "usuario": "Pedro Gómez",
    "libro": "El principito",
    "motivo": "Edición diferente a la publicada",
    "estado": "Resuelto",
    "mensajes": [
      {
        "sender": "Pedro Gómez",
        "rol": "cliente",
        "time": "Hace 10 días",
        "text": "Buenas tardes, el libro llegó pero era la edición de tapa blanda en lugar de dura."
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Hace 9 días",
        "text": "Hola Pedro, acordamos el cambio de ejemplar y enviamos el correcto."
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Hace 8 días",
        "text": "[SISTEMA] El caso de garantía ha sido marcado como RESUELTO por el administrador."
      }
    ]
  },
  {
    "id": "GAR-205",
    "usuario": "Valentina Ospina",
    "libro": "Cien años de soledad",
    "motivo": "Falta de pliegos entre páginas 120 y 135 (Cliente #101)",
    "estado": "Pendiente",
    "mensajes": [
      {
        "sender": "Valentina Ospina",
        "rol": "cliente",
        "time": "Hoy 09:15",
        "text": "Hola, soy Valentina Ospina (cliente registrada #101, pedido #ORD-1078). Al empezar a leer mi ejemplar de Cien Años de Soledad noté que le faltan los pliegos de las páginas 120 a la 135 por falla de imprenta. Adjunto foto:",
        "foto": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Hoy 10:00",
        "text": "Hola Valentina, lamentamos muchísimo este fallo editorial de fábrica. Ya aprobamos tu garantía como caso prioritario; te despacharemos un nuevo ejemplar perfecto sin ningún costo adicional."
      }
    ]
  },
  {
    "id": "GAR-206",
    "usuario": "Mateo Cárdenas",
    "libro": "Don Quijote de la Mancha",
    "motivo": "Encuadernación despegada en cubierta trasera (Cliente #102)",
    "estado": "En Revisión",
    "mensajes": [
      {
        "sender": "Mateo Cárdenas",
        "rol": "cliente",
        "time": "Ayer 16:30",
        "text": "Buenas tardes, soy Mateo Cárdenas (cliente registrado #102, pedido #ORD-1079). El tomo de Don Quijote llegó con la bisagra trasera despegada por el viaje. Adjunto la fotografía:",
        "foto": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
      },
      {
        "sender": "Admin. J. Salazar",
        "rol": "admin",
        "time": "Ayer 17:15",
        "text": "Hola Mateo, gracias por avisarnos. Nuestro taller de restauración puede reacondicionar este tomo con lomo reforzado o podemos enviarte otro ejemplar en stock. ¿Cuál alternativa prefieres?"
      }
    ]
  }
];

var SOLICITUDES_PROVEEDORES_INICIALES = window.SOLICITUDES_PROVEEDORES_INICIALES = [
  {
    "id": 1714500001,
    "fecha": "2026-03-01T14:30:00.000Z",
    "nombre": "Carlos Restrepo",
    "empresa": "Librería El Ateneo Medellín",
    "email": "carlos.restrepo@ateneolibros.co",
    "telefono": "+57 312 456 7890",
    "tipo": "vender-libros",
    "ciudad": "Medellín",
    "mensaje": "Buenas tardes, contamos con un lote de 85 libros de literatura clásica y latinoamericana en excelente estado (ediciones de los años 70 y 80). Nos gustaría evaluar una venta o consignación con ustedes.",
    "estado": "pendiente",
    "respuestaAdmin": ""
  },
  {
    "id": 1714500002,
    "fecha": "2026-02-24T10:15:00.000Z",
    "nombre": "Valentina Montoya",
    "empresa": "Papelería & Empaques Vintage S.A.S.",
    "email": "ventas@empaquesvintage.com",
    "telefono": "+57 301 987 6543",
    "tipo": "proveedor-materiales",
    "ciudad": "Bogotá",
    "mensaje": "Ofrecemos papel kraft reciclado, sellos de cera personalizados y bolsas de tela estampadas para librerías con estética clásica. Adjuntamos catálogo en caso de interés.",
    "estado": "respondido",
    "respuestaAdmin": "Nos contactamos vía telefónica. Se solicitó muestra de los sellos de cera y bolsas kraft."
  },
  {
    "id": 1714500003,
    "fecha": "2026-03-02T11:20:00.000Z",
    "nombre": "Fernando Echeverri",
    "empresa": "Editorial Clásicos Andinos",
    "email": "f.echeverri@clasicosandinos.com",
    "telefono": "+57 315 678 1234",
    "tipo": "vender-libros",
    "ciudad": "Bogotá",
    "mensaje": "Somos distribuidores de colecciones restauradas de novela hispanoamericana y filosofía clásica. Disponemos de un inventario de más de 200 títulos disponibles para surtir su catálogo.",
    "estado": "pendiente",
    "respuestaAdmin": ""
  },
  {
    "id": 1714500004,
    "fecha": "2026-02-28T16:45:00.000Z",
    "nombre": "Mariana Villegas",
    "empresa": "Taller Cuero & Encuadernación Artesanal",
    "email": "contacto@cuerovintagecali.co",
    "telefono": "+57 318 234 5678",
    "tipo": "proveedor-materiales",
    "ciudad": "Cali",
    "mensaje": "Producimos pastas de cuero curtido vegetal, hilos encerados y cabezadas hechas a mano para restauración de libros antiguos. Podemos suministrarles pedidos mensuales al por mayor.",
    "estado": "respondido",
    "respuestaAdmin": "Se coordinó el envío de un kit de prueba de cueros y adhesivos neutros."
  },
  {
    "id": 1714500005,
    "fecha": "2026-03-04T09:10:00.000Z",
    "nombre": "Roberto Beltrán",
    "empresa": "Colecciones Bibliófilo del Caribe",
    "email": "r.beltran@bibliofilocaribe.org",
    "telefono": "+57 300 876 5432",
    "tipo": "vender-libros",
    "ciudad": "Cartagena",
    "mensaje": "Poseo una colección particular de 140 primeras ediciones de Gabriel García Márquez y autores caribeños de los años 60 a 90. Busco comprador o alianza para exhibición comercial.",
    "estado": "pendiente",
    "respuestaAdmin": ""
  },
  {
    "id": 1714500006,
    "fecha": "2026-03-01T17:00:00.000Z",
    "nombre": "Laura Henao",
    "empresa": "Tipografía San Jerónimo",
    "email": "laura@tipografiasanjeronimo.com",
    "telefono": "+57 311 345 6789",
    "tipo": "colaboracion",
    "ciudad": "Medellín",
    "mensaje": "Imprimimos en prensas tipográficas tradicionales del siglo XIX. Nos gustaría colaborar diseñando separadores conmemorativos y tarjetas de agradecimiento personalizadas para cada compra de Páginas del Tiempo.",
    "estado": "respondido",
    "respuestaAdmin": "Reunión acordada para el 15 de marzo para definir diseño de los separadores."
  },
  {
    "id": 1714500007,
    "fecha": "2026-03-05T14:15:00.000Z",
    "nombre": "Gustavo Pineda",
    "empresa": "Empaques Ecológicos del Eje Cafetero",
    "email": "gustavo.pineda@empaquescafe.com",
    "telefono": "+57 314 567 8901",
    "tipo": "proveedor-materiales",
    "ciudad": "Pereira",
    "mensaje": "Fabricamos cajas de cartón corrugado reciclado con interior acolchado de fibra natural para envíos seguros de libros pesados y tomos encuadernados.",
    "estado": "pendiente",
    "respuestaAdmin": ""
  }
];

var FAVORITOS_INICIALES_MAP = window.FAVORITOS_INICIALES_MAP = {
  "USR-02": [
    101
  ],
  "USR-03": [
    102
  ],
  "USR-04": [
    101,
    2
  ],
  "USR-05": [
    1
  ],
  "USR-06": [
    101,
    102
  ],
  "USR-07": [
    108
  ],
  "USR-08": [
    101,
    2
  ],
  "USR-09": [
    102
  ],
  "USR-10": [
    101,
    1
  ],
  "USR-12": [
    101,
    102,
    2
  ],
  "USR-14": [
    101,
    108
  ],
  "USR-15": [
    102,
    1
  ],
  "USR-16": [
    101,
    2
  ],
  "USR-18": [
    101,
    102
  ],
  "USR-20": [
    101,
    1,
    2
  ],
  "USR-21": [
    102,
    108
  ],
  "USR-22": [
    101
  ],
  "USR-24": [
    101,
    102,
    2
  ],
  "USR-25": [
    1
  ],
  "USR-26": [
    101
  ],
  "USR-27": [
    102
  ],
  "USR-28": [
    101,
    108,
    2
  ],
  "USR-30": [
    101,
    102,
    1
  ],
  "USR-32": [
    101,
    2
  ],
  "USR-33": [
    102
  ],
  "USR-34": [
    101
  ],
  "USR-35": [
    1,
    108
  ],
  "USR-36": [
    101,
    102,
    2
  ],
  "USR-38": [
    101
  ],
  "USR-39": [
    102
  ],
  "USR-40": [
    101,
    1,
    2
  ],
  "USR-42": [
    101,
    102,
    108
  ],
  "USR-44": [
    101,
    2
  ],
  "USR-45": [
    102,
    1
  ],
  "USR-46": [
    101
  ],
  "USR-48": [
    101,
    102,
    2
  ],
  "USR-49": [
    108
  ],
  "USR-50": [
    101,
    1
  ],
  "USR-51": [
    102
  ],
  "USR-52": [
    101,
    2
  ],
  "USR-54": [
    101,
    102
  ],
  "USR-55": [
    1
  ],
  "USR-56": [
    101,
    108,
    2
  ],
  "USR-57": [
    102
  ],
  "USR-58": [
    101
  ],
  "USR-101": [
    1,
    105,
    108
  ],
  "USR-102": [
    2,
    101,
    106
  ]
};


function asegurarDatosInicialesCompletos() {
  // 1. Usuarios (105 clientes)
  try {
    const rawUsr = localStorage.getItem('paginas_usuarios_v2');
    const uList = rawUsr ? JSON.parse(rawUsr) : [];
    if (!uList || uList.length < 10) {
      localStorage.setItem('paginas_usuarios_v2', JSON.stringify(USUARIOS_INICIALES));
    }
  } catch (err) {
    localStorage.setItem('paginas_usuarios_v2', JSON.stringify(USUARIOS_INICIALES));
  }

  // 2. Pedidos y Compras (85 pedidos reales)
  try {
    const rawPed = localStorage.getItem('paginas_pedidos_v1');
    const pList = rawPed ? JSON.parse(rawPed) : [];
    if (!pList || pList.length < 10) {
      localStorage.setItem('paginas_pedidos_v1', JSON.stringify(PEDIDOS_INICIALES));
    }
  } catch (err) {
    localStorage.setItem('paginas_pedidos_v1', JSON.stringify(PEDIDOS_INICIALES));
  }

  // 3. Garantías (incluyendo garantías post-100: Cliente 101 y 102)
  try {
    const rawGar = localStorage.getItem('paginas_garantias_v5');
    const gList = rawGar ? JSON.parse(rawGar) : [];
    if (!gList || gList.length < 4) {
      localStorage.setItem('paginas_garantias_v5', JSON.stringify(GARANTIAS_INICIALES));
    }
  } catch (err) {
    localStorage.setItem('paginas_garantias_v5', JSON.stringify(GARANTIAS_INICIALES));
  }

  // 4. Proveedores (7 solicitudes variadas)
  try {
    const rawProv = localStorage.getItem('proveedorSolicitudes');
    const provList = rawProv ? JSON.parse(rawProv) : [];
    if (!provList || provList.length < 4) {
      localStorage.setItem('proveedorSolicitudes', JSON.stringify(SOLICITUDES_PROVEEDORES_INICIALES));
    }
  } catch (err) {
    localStorage.setItem('proveedorSolicitudes', JSON.stringify(SOLICITUDES_PROVEEDORES_INICIALES));
  }

  // 5. Favoritos iniciales por cliente
  try {
    Object.entries(FAVORITOS_INICIALES_MAP).forEach(([uid, favs]) => {
      const key = 'paginas_favoritos_' + uid;
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(favs));
      }
    });
  } catch (err) {}

  // 6. Actividades recientes (solo los 5 eventos clave)
  try {
    const actKey = 'paginas_actividades_v1';
    const rawActs = localStorage.getItem(actKey);
    const actList = rawActs ? JSON.parse(rawActs) : [];
    if (!actList || actList.length === 0) {
      const initActs = [
        { icono: "🛒", texto: "Pedido completado por <strong>Valentina Ospina</strong> — $45.000", tiempo: "Hace 10 minutos" },
        { icono: "👥", texto: "Nueva cuenta creada con éxito: <strong>Mateo Cárdenas</strong> (mateo.cardenas@outlook.com)", tiempo: "Hace 25 minutos" },
        { icono: "🛡️", texto: "Ticket de garantía abierto por <strong>Valentina Ospina</strong> — <em>Cien años de soledad</em>", tiempo: "Hace 40 minutos" },
        { icono: "🤝", texto: "Nueva propuesta de proveedor enviada por <strong>Editorial Clásicos Andinos</strong>", tiempo: "Hace 2 horas" },
        { icono: "⚠️", texto: "Stock crítico: Solo quedan <strong>2 ejemplares</strong> de <strong>\"El señor de los anillos\"</strong>", tiempo: "Hace 3 horas" },
        { icono: "🛒", texto: "Pedido completado por <strong>Carlos Lector</strong> — $50.000", tiempo: "Ayer, 18:30" },
        { icono: "📦", texto: "¡Agotado! El libro <strong>\"Los tres mosqueteros\"</strong> se ha quedado sin stock", tiempo: "Ayer, 15:10" },
        { icono: "👥", texto: "Nueva cuenta creada con éxito: <strong>Sofía Quintero</strong> (sofia.quintero@yahoo.es)", tiempo: "Ayer, 11:20" }
      ];
      localStorage.setItem(actKey, JSON.stringify(initActs));
    }
  } catch (err) {}
}

// Ejecutar inmediatamente al cargar el script
try {
  asegurarDatosInicialesCompletos();
} catch (e) {
  console.warn('Error al asegurar datos iniciales:', e);
}

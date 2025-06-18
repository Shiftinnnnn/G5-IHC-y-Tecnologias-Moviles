Feature: US01 - Registro de usuario

  Como usuario nuevo, quiero crear una cuenta
  para poder acceder a las funciones de la aplicación

  Scenario: Usuario crea una cuenta
    Given que el usuario está en la pantalla de Registro
    When el usuario ingresa un nombre de usuario, un correo electrónico y una contraseña válidos
    And presiona el botón “Registrarse”
    Then la cuenta debe crearse correctamente

  Examples: INPUT
    | Nombre de Usuario | Correo Electrónico       | Contraseña   |
    | Juan Jose         | ejemplo123@hotmail.com  | password123  |

  Examples: OUTPUT
    | Resultado                               |
    | La cuenta ha sido creada correctamente  |
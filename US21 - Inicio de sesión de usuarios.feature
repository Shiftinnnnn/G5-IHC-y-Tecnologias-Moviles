Feature: US21 - Inicio de sesión de usuarios

  Como usuario, quiero iniciar sesión de ser necesario
  para volver a acceder al producto desde otro dispositivo

  Scenario: Inicio de sesión con correo institucional
    Given que el usuario tiene que iniciar sesión desde otro dispositivo
    When el usuario esté en la sección de “Iniciar Sesión”
    And tenga una cuenta registrada
    Then el usuario deberá ingresar sus datos de perfil correctamente
    And podrá acceder nuevamente al sistema

  Examples: INPUT
    | Correo Electrónico        | Contraseña   |
    | usuario@upc.edu.pe        | clave123     |

  Examples: OUTPUT
    | Resultado                   |
    | Acceso concedido al sistema |
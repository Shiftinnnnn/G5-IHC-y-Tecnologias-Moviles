Feature: US44 - Cierre de sesión

  Como usuario, quiero cerrar sesión cuando termine de usar la aplicación
  para mantener la seguridad de mi cuenta

  Scenario: Cierre de sesión
    Given que el usuario ya ha iniciado sesión
    When presiona el botón “Cerrar sesión”
    Then será redirigido a la pantalla de inicio
    And ya no estará autenticado en el sistema

  Examples: INPUT
    | Acción         |
    | Cerrar sesión  |

  Examples: OUTPUT
    | Resultado                         |
    | Usuario redirigido al inicio      |
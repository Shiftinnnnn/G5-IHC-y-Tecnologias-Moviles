Feature: US22 - Estado del objeto encontrado

  Como usuario, quiero ver el estado de un objeto encontrado
  para tener mayores detalles de su ubicación

  Scenario: Estado del objeto
    Given que el usuario encontró un objeto perdido
    When lo publica detallando dónde se encuentra en ese momento
    Then el sistema debe mostrar el estado del objeto
    And Y debe indicar quién posee el objeto actualmente

  Examples: INPUT
    | Descripción del objeto | Ubicación actual    |
    | USB negra              | Biblioteca UPC      |

  Examples: OUTPUT
    | Estado mostrado                  |
    | Objeto en posesión - Biblioteca  |
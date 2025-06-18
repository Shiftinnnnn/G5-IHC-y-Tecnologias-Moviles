Feature: US25 - Filtros de búsqueda

  Como usuario, quiero acceder a una búsqueda más específica
  para obtener resultados mucho más precisos

  Scenario: Visualización de filtros
    Given que el usuario está en la barra de “Búsqueda”
    When el usuario presiona el botón de “Filtros”
    Then el usuario accede a los parámetros de búsqueda

  Scenario: Aplicación de filtros
    Given que el usuario está en la sección “Filtros”
    When el usuario selecciona los filtros que desea aplicar
    And presiona el botón “Buscar”
    Then el sistema muestra los resultados que coincidan con los filtros aplicados

  Examples: INPUT
    | Categoría | Fecha      |
    | Electrónica | 2025-06-01 |

  Examples: OUTPUT
    | Resultado                                  |
    | Objetos electrónicos perdidos el 01/06/25  |
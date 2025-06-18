Feature: US07 - Búsqueda por palabras de objetos

  Como usuario, quiero buscar objetos perdidos
  para encontrar mi objeto personal extraviado

  Scenario: Búsqueda manual
    Given que el usuario presiona el botón “Búsqueda”
    When el usuario escribe la palabra del objeto que busca
    Then se mostrarán los objetos más similares

  Examples: INPUT
    | palabra_clave |
    | mochila       |
    | celular       |

  Examples: OUTPUT
    | Resultado                              |
    | Lista de objetos similares a "mochila" |
    | Lista de objetos similares a "celular" |

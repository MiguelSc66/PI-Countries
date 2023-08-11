export function validateActivityForm(input) {
    let errors = {};
  
    // Validación del campo Nombre
    if (!input.Nombre) {
      errors.Nombre = "Debes ingresar un nombre";
    }
  
    // Validación del campo Dificultad
    if (!input.Dificultad || input.Dificultad < 1 || input.Dificultad > 5) {
      errors.Dificultad = "La dificultad debe ser un número entre 1 y 5";
    }
  
    // Validación del campo Duración
    if (!input.Duracion || input.Duracion < 1 || input.Duracion > 12) {
      errors.Duracion = "La duración debe ser un número entre 1 y 12";
    }
  
    // Validación del campo Temporada
    if (!input.Temporada || !["verano", "otoño", "invierno", "primavera"].includes(input.Temporada)) {
      errors.Temporada = "Debes seleccionar una temporada válida";
    }
  
    // Validación del campo País/Países
    if (!input.countries || input.countries.length === 0) {
      errors.countries = "Debes seleccionar al menos un país";
    }
  
    return errors;
  }
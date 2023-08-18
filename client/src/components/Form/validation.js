export function validateActivityForm(input) {
    let errors = {};
  
    // Validación del campo Nombre
    if (!input.Nombre) {
      errors.Nombre = "You must enter a name";
    } else if (input.Nombre.length >= 18) {
      errors.Nombre = "Name cannot exceed 18 characters"
    }
  
    // Validación del campo Dificultad
    if (!input.Dificultad || input.Dificultad < 1 || input.Dificultad > 5) {
      errors.Dificultad = "Difficulty must be a number between 1 and 5";
    }
  
    // Validación del campo Duración
    if (!input.Duracion || input.Duracion < 1 || input.Duracion > 12) {
      errors.Duracion = "Duration must be a number between 1 and 12";
    }
  
    // Validación del campo Temporada
    if (!input.Temporada || !["verano", "otoño", "invierno", "primavera"].includes(input.Temporada)) {
      errors.Temporada = "You must select a valid season";
    }
  
    // Validación del campo País/Países
    if (!input.countries || input.countries.length === 0) {
      errors.countries = "You must select at least one country";
    }
  
    return errors;
  }
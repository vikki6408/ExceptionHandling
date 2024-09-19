// Définition d'une exception personnalisée
class EmailValidationError extends Error {
    constructor(message) {
        super(message);  // Appelle le constructeur de la classe parent (Error)
        this.name = 'EmailValidationError';
    }
}

// Fonction de validation de l'email
function validateEmail(email) {
    // Simple regex pour vérifier si l'e-mail a un format de base
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new EmailValidationError("Invalid email");
    }
    return "Adresse e-mail valide.";
}

// Utilisation de la fonction avec gestion des exceptions
try {
    let result;

    result = validateEmail("valid@email.com");  // Change l'e-mail pour tester différents scénarios
    console.log(result);

    result = validateEmail("invalid-email");  // Change l'e-mail pour tester différents scénarios
    console.log(result);

} catch (error) {
    if (error instanceof EmailValidationError) {
        console.error("Erreur de validation de l'e-mail : " + error.message);
    } else {
        console.error("Erreur inattendue : " + error.message);
    }
}

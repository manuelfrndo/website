let auth0Client;  // Variable global para Auth0

// Inicializar Auth0 cuando la página carga
const initAuth0 = async () => {
    auth0Client = await createAuth0Client({
        domain: window.AUTH0_DOMAIN,
        client_id: window.AUTH0_CLIENT_ID,
        redirect_uri: window.location.origin
    });

    // Manejar la autenticación después de la redirección
    await handleAuthCallback();
};

// Función para iniciar sesión con Auth0
window.loginWithAuth0 = async () => {
    await auth0Client.loginWithRedirect();
};

// Función para manejar la redirección después de autenticarse
window.handleAuthCallback = async () => {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
        await auth0Client.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
    }

    // Verificar si el usuario está autenticado
    const isAuthenticated = await auth0Client.isAuthenticated();
    if (isAuthenticated) {
        const user = await auth0Client.getUser();
        console.log("Usuario autenticado:", user);
        document.getElementById("loginWithAuth0").innerText = `Hola, ${user.name}`;
    }
};

// Función para cerrar sesión
window.logoutWithAuth0 = () => {
    auth0Client.logout({
        returnTo: window.location.origin
    });
};

// Llamar la función cuando se carga la página
window.onload = initAuth0;

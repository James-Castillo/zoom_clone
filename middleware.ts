import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
  if (auth().signedIn) {
    // Si el usuario ya está autenticado, redirigirlo a una ruta diferente
    return {
      redirect: {
        destination: '/', // Puedes cambiar esto por la ruta que desees
        permanent: false,
      },
    };
  } else if (protectedRoute(req)) {
    // Proteger las rutas especificadas
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

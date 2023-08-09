/* eslint-disable @typescript-eslint/no-explicit-any */
export function handleServerError(error: any) {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        return {
          redirect: {
            destination: '/auth/sign-in',
            permanent: false,
          },
        };
      case 500:
        return {
          redirect: {
            destination: '/500',
            permanent: false,
          },
        };
    }
  }

  // If error does not have a response (network error)
  return {
    redirect: {
      destination: '/500',
      permanent: false,
    },
  };
}

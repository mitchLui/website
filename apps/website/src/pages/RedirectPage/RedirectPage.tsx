export const RedirectPage = ({ redirect } : { redirect: string }) =>
  <>
    <h1>Redirecting...</h1>
    <p><a href={redirect}>Continue to {redirect}</a></p>
  </>;

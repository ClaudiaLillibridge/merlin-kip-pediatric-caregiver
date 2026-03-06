import NextErrorComponent from "next/error";
import type { NextPageContext } from "next";

type ErrorProps = {
  statusCode?: number;
};

function Error({ statusCode }: ErrorProps) {
  // Use Next.js default error component (safe + recommended)
  return <NextErrorComponent statusCode={statusCode ?? 500} />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404;
  return { statusCode };
};

export default Error;
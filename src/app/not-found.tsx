import React from "react";

export const dynamic = "force-static";

export default async function NotFound() {
  const todayDate = Date.now().toString();

  return (
    <div>
      NotFound at top level! {todayDate}
      <a href="/">Go back home.</a>
    </div>
  );
}

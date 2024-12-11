import { NextResponse } from "next/server";
import { selfData } from './Utils/AxiosUtils/API';
import ConvertPermissionArr from './Utils/CustomFunctions/ConvertPermissionArr';
import { replacePath } from './Utils/CustomFunctions/ReplacePath';

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  if (path.split("/")[1] !== "auth" && !request.cookies.has("uat")) {
    return NextResponse.redirect(new URL(`/auth/login`, request.url));
  }

  if (path.split("/")[1] == "auth" && request.cookies.has("uat")) {
    return NextResponse.redirect(new URL(`/dashboard`, request.url));
  }

  if (path != `/auth/login`) {
    if (path == `/auth/otp-verification` && !request.cookies.has("ue")) {
      return NextResponse.redirect(new URL(`/auth/login`, request.url));
    }
    if (path == `/auth/update-password` && (!request.cookies.has("uo") || !request.cookies.has("ue"))) {
      return NextResponse.redirect(new URL(`/auth/login`, request.url));
    }
  }

  if (request.headers.get("x-redirected")) {
    return NextResponse.next();
  }

  if (request.cookies.has("uat") && !path.split("/dashboard")[1] && path !== "/403"   ) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${request.cookies.get("uat")?.value}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let data;
    if (!request.cookies.has('uat')) {
       data = await (await fetch(process.env.URL + selfData, requestOptions))?.json();
    } else {
      data = await (await fetch(process.env.URL + selfData, requestOptions))?.json();
      
    }
    
      const securePaths = data?.permission?.length && ConvertPermissionArr(data.permission);      

       //if (!securePaths?.find((item) => item?.name == replacePath(path?.split("/")[1]))) {
         // Au lieu de rediriger, on retourne simplement une réponse neutre qui n'implique pas de redirection
       //return NextResponse.next(); // On laisse continuer sans redirection
       //}
      
  }

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
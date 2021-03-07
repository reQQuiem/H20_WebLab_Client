import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {catchError, retry} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + accessToken)
            });
            return next.handle(cloned)
                .pipe(
                    retry(3),
                    catchError((error: HttpErrorResponse) => {
                        let errorMessage = '';
                        if (error.error instanceof ErrorEvent) {
                            // client-side error
                            errorMessage = `Error: ${error.error.message}`;
                        } else {
                            // server-side error
                            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                        }
                        window.alert(errorMessage);
                        return throwError(errorMessage);
                    })
                )
        } else {
            return next.handle(req)
                .pipe(
                    retry(3),
                    catchError((error: HttpErrorResponse) => {
                        let errorMessage = '';
                        if (error.error instanceof ErrorEvent) {
                            // client-side error
                            errorMessage = `Error: ${error.error.message}`;
                        } else {
                            // server-side error
                            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                        }
                        window.alert(errorMessage);
                        return throwError(errorMessage);
                    })
                )
        }
    }
}

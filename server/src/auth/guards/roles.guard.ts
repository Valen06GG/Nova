import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../roles.decorators";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) {}

    canActivate(
        context: ExecutionContext,
    ): boolean {
        const roles = this.reflector.getAllAndOverride<string[]>(
          ROLES_KEY,
          [
            context.getHandler(),
            context.getClass(),
          ],
        );
        
        if (!roles) {
            return true;
        }

        const request =
          context.switchToHttp().getRequest();

        const user = request.user;

        return roles.includes(user.role);
    }
}
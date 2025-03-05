import { ApiRoutes } from "../constant/apiRoutes";
import { BaseService } from "./baseService";

class UserService extends BaseService {
  getUserInfo() {
    this.getClient().get(ApiRoutes.USER.GET_PROFILE)
  }

  // Write user api call methods here
}

const userService = new UserService()

export default userService
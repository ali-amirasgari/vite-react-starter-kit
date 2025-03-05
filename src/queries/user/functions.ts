import userService from "../../services/userService";

export async function getUserProfile() {
  try {
    const response = await userService.getUserInfo();

    return response;
  } catch (error) {
    console.error("Can't get user info", error);
  }
}

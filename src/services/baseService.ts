import { toast } from "react-toastify";
import { Routes } from "../routes/routes";
import axios, { AxiosInstance } from "axios";

export class BaseService {
  private static api: AxiosInstance | null = null;

  protected tokenKey: string = "exampleToken";

  constructor() {
    if (BaseService.api) {
      return;
    }

    this.setClient(
      axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
          Accept: "application/json",
        },
      })
    );

    const token = this.getTokenSafely();

    if (token) {
      this.updateToken(token);
    }

    this.getClient().interceptors.request.use((config) => {
      const token = this.getTokenSafely();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    });

    this.getClient().interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error?.response?.status;
        const data = error?.response?.data;

        if (status === 401) {
          this.removeToken();
          toast.error("لطفا دوباره وارد شوید.");
          window.location.replace(Routes.PUBLIC.LOGIN.path);
        } else if (status === 500) {
          toast.error("سیستم قطع است لطفا چند دقیقه دیگر دوباره تلاش کنید.");
        } else {
          toast.error(
            data?.message || "مشکلی در سیستم رخ داده کمی بعد تلاش کنید."
          );
        }

        return Promise.reject(error);
      }
    );
  }

  private getTokenSafely(): string | null {
    if (typeof window === "undefined") {
      return null;
    }
    return window.localStorage.getItem(this.tokenKey);
  }

  private setClient(client: AxiosInstance): void {
    BaseService.api = client;
  }

  public getClient(): AxiosInstance {
    if (!BaseService.api) {
      throw new Error("The http client is not defined");
    }

    return BaseService.api;
  }

  protected updateToken(token: string): void {
    this.getClient().defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenKey);

    delete this.getClient().defaults.headers.common["Authorization"];
  }
}

const baseService = new BaseService();

export default baseService;

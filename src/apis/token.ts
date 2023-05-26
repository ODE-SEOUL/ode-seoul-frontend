import { patchAsync } from "./common";

export const patchToken = async (refreshToken: string) => {

    const response = await patchAsync<any, undefined>(
        `/api/token`,
        {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${refreshToken}`,
            },
        }
        );
    return response;
  };
  
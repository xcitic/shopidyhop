
export const handleFailedResponse = (response: Response) => {
  // This function should handle failed responses and potentially log them or implement retry logic
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export const handleErrors = (error: any) => {
  // This function should handle conditionally handle errors based on environment and log them 
  console.error(error);
}

export class ApiService {
  token: string | null = null;

  async get(url: string) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.token ? `Bearer ${this.token}` : ''
      }
      const resp = await fetch(url, {
        method: 'GET',
        headers,
      });

      if (!resp.ok) {
        return handleErrors(resp);
      }

      const json = await resp.json();
      return json;
    } catch (error) {
      handleErrors(error);
    }

  }
}


export const apiService = new ApiService();
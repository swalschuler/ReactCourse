import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID oDlBVzXgWbT67PGk1CX7iR97ZDDV5kHz5y0YczJFe_s"
  }
});

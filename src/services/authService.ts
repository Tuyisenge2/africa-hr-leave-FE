import { GoogleUser } from "@/validations/google";


export const authService = {
  async googleSignIn() {
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    } catch (error) {
      throw new Error("Failed to authenticate with Google");
    }
  },
};

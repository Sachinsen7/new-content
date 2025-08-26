// Simple authentication utilities
export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin";
}

// Mock admin user for demo purposes
const ADMIN_CREDENTIALS = {
  email: "admin@codecontentstudio.com",
  password: "admin123",
};

export const mockUser: User = {
  id: "1",
  email: "admin@codecontentstudio.com",
  name: "Admin User",
  role: "admin",
};

export async function signIn(
  email: string,
  password: string
): Promise<{ user: User | null; error: string | null }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (
    email === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  ) {
    // Store session
    if (typeof window !== "undefined") {
      sessionStorage.setItem("auth-user", JSON.stringify(mockUser));
    }
    return { user: mockUser, error: null };
  }

  return { user: null, error: "Invalid email or password" };
}

export function signOut(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("auth-user");
  }
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;

  try {
    const userStr = sessionStorage.getItem("auth-user");
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

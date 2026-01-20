import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private users = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'manager', password: 'manager123', role: 'Manager' }
  ];

  login(username: string, password: string): boolean {
    if (!this.isBrowser) return false;

    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('token', 'fake-jwt');
      localStorage.setItem('role', user.role);
      return true;
    }
    return false;
  }

  logout() {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }

  logggedin(): boolean {
    if (!this.isBrowser) return false;
    return !!localStorage.getItem('token');
  }

  getrole(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem('role');
  }
}

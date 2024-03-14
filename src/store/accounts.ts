import { defineStore } from 'pinia';

export const useAccountsStore = defineStore('accounts', {
 state: () => ({
    accounts: [] as { label: string; type: 'LDAP' | 'Local'; login: string; password: string | null }[],
 }),
 actions: {
    addAccount(account: { label: string; type: 'LDAP' | 'Local'; login: string; password: string | null }) {
      this.accounts.push(account);
    },
    removeAccount(index: number) {
      this.accounts.splice(index, 1);
    },
 },
});
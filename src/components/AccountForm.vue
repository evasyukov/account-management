<template>
  <div class="account-form">

    <div v-for="(account, index) in accounts" :key="index" class="account-item">
      <div class="input-group">
        <input
          v-model="account.label"
          placeholder="Метка"
          maxlength="50"
          class="input-field"
        />
        <select v-model="account.type" class="select-field">
          <option value="LDAP">LDAP</option>
          <option value="Local">Локальная</option>
        </select>
        <input
          v-if="account.type === 'Local'"
          v-model="account.password"
          placeholder="Пароль"
          maxlength="100"
          required
          class="input-field"
        />
      </div>
      <button class="remove-btn" @click="removeAccount(index)">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useAccountsStore } from "../store/accounts"

export default defineComponent({
  name: "AccountForm",
  setup() {
    const accountsStore = useAccountsStore()

    function removeAccount(index: number) {
      accountsStore.removeAccount(index)
    }

    return {
      accounts: accountsStore.accounts,
      removeAccount,
    }
  },
})
</script>

<style scoped>
.account-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.add-btn,
.remove-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}

.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.input-field,
.select-field {
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.account-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>

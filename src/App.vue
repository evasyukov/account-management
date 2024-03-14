<template>
  <h1>Учетные записи</h1>
  <button class="add-btn" @click="addAccount">+</button>
  <AccountForm />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AccountForm from "./components/AccountForm.vue"
import { useAccountsStore } from "./store/accounts"

export default defineComponent({
  name: "App",
  components: {
    AccountForm,
  },
  setup() {
    const accountsStore = useAccountsStore()

    function addAccount() {
      accountsStore.addAccount({
        label: "",
        type: "LDAP",
        login: "",
        password: null,
      })
    }

    return {
      addAccount,
    }
  },
})
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  
}

/* Стили для #app */
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

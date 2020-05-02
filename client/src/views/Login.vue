<template>
    <v-container>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-alert v-if="errorMessage" type="error">
                    {{ errorMessage }}
                </v-alert>
                <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="primary"
                ></v-progress-circular>
                <v-form @submit.prevent="login">
                    <v-text-field
                        v-model="user.username"
                        label="Username"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        type="password"
                        required
                    ></v-text-field>
                    <v-btn type="submit">Signup</v-btn>
                </v-form>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
const url = 'http://localhost:5000/users/login';
export default {
    name: 'login',
    data: () => ({
        loading: false,
        errorMessage: '',
        user: {
            username: '',
            password: ''
        }
    }),
    methods: {
        async login() {
            this.errorMessage = '';
            this.loading = true;
            const data = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.user)
            });
            const response = await data.json();

            if (response.message) {
                this.loading = false;
                this.errorMessage = response.message;
                return;
            }

            localStorage.token = response;
            this.loading = false;
        }
    }
}
</script>
<template>
    <v-container fluid>
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
                <v-form @submit.prevent="createUser">
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
   
                    <v-text-field
                        v-model="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.imageURL"
                        label="Image URL"
                        required
                    ></v-text-field>

                    <v-btn type="submit">Signup</v-btn>
                </v-form>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';
const url = "http://localhost:5000/users/signup";

export default {
    name: "signup",
    data: () => ({
        loading: false,
        errorMessage: '',
        user: {
            username: '',
            password: '',
            imageURL: ''
        },
        confirmPassword: ''
    }),
    methods: {
        ...mapActions(['loginAction']),
        async createUser() {
            this.errorMessage = '';
            this.loading = true;
            if (this.user.password !== this.confirmPassword) {
                this.loading = false;
                this.errorMessage = 'Password and Confirm Password do not match';
                return;
            }
            const data = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(this.user)
            });
            const response = await data.json();
            
            if (data.message) {
                this.loading = false;
                this.errorMessage = data.message;
                return;
            }

            localStorage.token = response;
            this.loginAction();
            this.loading = false;
            this.$router.push('/boards');
        }
    }
}
</script>
<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-alert v-if="errorMessage" type="error">
                    {{ errorMessage }}
                </v-alert>
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
const url = "http://localhost:5000/users"
export default {
    name: "signup",
    data: () => ({
        errorMessage: '',
        user: {
            username: '',
            password: '',
            imageURL: ''
        },
        confirmPassword: ''
    }),
    methods: {
        async createUser() {
            if (this.user.password !== this.confirmPassword) {
                this.errorMessage = 'Password and Confirm Password do not match';
            }
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(this.user)
            });
            const data = await response.json();
            console.log(data);
            if (data.message) {
                this.errorMessage = data.message;
                return;
            }
            localStorage.token = data;
            this.errorMessage = '';
        }
    }
}
</script>
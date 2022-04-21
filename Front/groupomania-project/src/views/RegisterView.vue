<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="css/bootstrap.css">

    <link rel="icon" href="Front/Asset/Logo/vueLogo.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <link href="Front/Asset/Css/style.css" rel="stylesheet" />
  </head>
  <div class ="container mt-4">
        <div class="card">
            <div class="card-header">
                Register form
            </div>
            <div class="card-body">
                <form action="/auth/register" method="POST"> 
                    <div class="form-row">
                        <label for="lastname">Nom</label>
                        <input type="text" class="form-control" id="lastname" name="lastname">
                        <label for="name">Prénom</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
                    <div class="form-row">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>
                     <div class="form-row">

                        <select v-model="sexe" class="form-row__input" placeholder="Sexe">
                            <option value="" disabled selected>Sexe</option>
                            <option value="Unspecified">Indéfini</option>
                            <option value="Male">Homme</option>
                            <option value="Female">Femme</option>
                        </select>
                    <input v-model="age" class="form-row__input" type="number" min=0 placeholder="Age"/>
                    </div>
                    <div class="form-row">
                        <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password">
                    </div>
                    <div class="form-row">
                        <label for="passwordConfirm">Mot de passe confirmé </label>
                        <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm">
                    </div>
                    
                     <div class="form-row">
                        <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" >
                            <span v-if="status == 'loading'">Création en cours...</span>
                            <span>Créer mon compte</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
       <!-- {{#if message}}
            <h4 class="alert alert-danger mt-4">{{message}}</h4>
        {{/if}} -->
    </div>



</template>

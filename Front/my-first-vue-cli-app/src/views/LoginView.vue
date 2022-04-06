<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">

    <link rel="icon" href="Front/Asset/Logo/vueLogo.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <link href="Front/Asset/Css/style.css" type="text/css" rel="stylesheet" />
  </head>
  <div class="Login">
    <h1>Login page</h1>
  </div>

    <div class ="container mt-4">
        <div class="card">
            <div class="card-header">
                Login form
            </div>
            <div class="card-body">
                <form action="/auth/login" method="POST"> 

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password">
                    </div>
                    <div class="form-group">
                        <label for="passwordConfirm">Confirm Password</label>
                        <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
         
        <!-- {{#if message}}
            <h4 class="alert alert-danger mt-4">{{message}}</h4>
        {{/if}} -->
    </div>

</template>
<style>
  @import Vue from '"https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"';
  @import '../../../../Front/Asset/Css/style.css';


</style>
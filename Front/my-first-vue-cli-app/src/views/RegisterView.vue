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
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
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
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
       <!-- {{#if message}}
            <h4 class="alert alert-danger mt-4">{{message}}</h4>
        {{/if}} -->
    </div>



</template>

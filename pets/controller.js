"use strict";

    angular.module("app")
        .controller("PetsController", function(PetService) {
            const $ctrl = this;

            PetService.fetchPets().then(response => {
                $ctrl.pets = response.data;
                console.log(response.data);
            });
        });
"use srict"

    angular.module("app")
        .service("PetService", function($http) {
            const service = this;

            service.fetchPets = (pets) => {
                return $http({
                    method: "GET",
                    url: "https://dwolverton.github.io/fe-demo/data/pets.json",
                    data: pets
                });
            };
        });
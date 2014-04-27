'use strict';

/* jasmine specs for services go here */

describe('ImageService', function() {
    var $httpBackend;

    beforeEach(function(){
        module('masonjinApp');

        inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
        });
    });


    describe('getByDate', function() {
        it('should return default number of images by date', inject(['imageService', function(imgService) {

            expect(imgService).toBeDefined();

            imgService.getByDate().then(function(result){
                expect(result.length).toBe(10);
            });
        }]));
    });
});

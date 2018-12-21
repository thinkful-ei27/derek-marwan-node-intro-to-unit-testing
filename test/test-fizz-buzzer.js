const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
            it('should take in a number', function () {
                const badInput = [];
                expect(function () {
                    fizzBuzzer(badInput)
                }).to.throw(Error);
            });
            
            it('should return fizz for number divisible by 3',function(){
                expect(fizzBuzzer(3)).to.equal('fizz');
            });
            it('should return buzz for number divisible by 5',function(){
                expect(fizzBuzzer(5)).to.equal('buzz');
            });
            it('should return fizzbuzz for number divisible by 3 and 5',function(){
                expect(fizzBuzzer(15)).to.equal('fizz-buzz');
            });
            it('should return the number if it is not fizz or buzz or fizz-buzz',function(){
                expect(fizzBuzzer(7)).to.equal(7);
            });
        });
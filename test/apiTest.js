// var request = require('supertest');
// var expect = require('chai').expect;
// var assert = require('chai').assert;
//
// var agent=request.agent("http://api.postcodes.io")
//
//
//
// //
// // let request=require('supertest')("httoss:sdsd");
// // let chai=require('chai').expect;
//
//
// // describe('Look up for a postcode', function(){
// //     it("Locate a correct postcode",function () {
// //        request
// //            .get('/postcode/'+"SW1A 1AA")
// //            .expect(200)
// //            .end(function (err, res) {
// //                if(err){
// //                    console.log("Error occured")
// //                }
// //                else
// //                {
// //                    expect(res.body.result.postcode).toequal("SW1A 1AA")
// //                    done();
// //                }
// //            })
// //     });
// //
// // });
//
// // describe("Look up a specific post code", function () {
// //
//     it("locates correct post code when given valid post code", function () {
//        return new Promise(function(resolve, reject){
//             agent
//                 .get('/postcodes/' + "E16 1YU")
//                 .expect(200)
//                 .end(function (err, res) {
//                     if (err) {
//                         return reject(err);
//                     } else {
//                         expect(res.body.result.postcode).to.equal("E16 1YU");
//                         // done();
//                        return resolve();
//                     }
//                 });
//         })
//
//     });
// //
// //     it("returns 400 when no post code is provided", function (done) {
// //         agent
// //             .get('/postcodes/')
// //             .expect(200)
// //             .end(function (err, res) {
// //                 expect(res.body.status).to.equal(400);
// //                 done();
// //             });
// //     });
// //
// //     it("returns 404 when no post code is provided", function (done) {
// //         agent
// //             .get('/postcodes/' + 'AB123')
// //             .expect(200)
// //             .end(function (err, res) {
// //                 expect(res.body.status).to.equal(404);
// //                 expect(res.body.error).to.equal("Invalid postcode");
// //                 done();
// //             });
// //     })
// // });
//
//
// describe("Bulk post Code lookup", function () {
//
//     // it("returns an array of post codes", function (done) {
//     //     agent
//     //         .post('/postcodes')
//     //         .send({
//     //             "postcodes": ["SW1A 0AA", "SW1A 0PW", "SW1A 1AA"]
//     //         })
//     //         .expect(200)
//     //         .end(function (err, res) {
//     //             for (i = 0; i < res.body.result.length; i++) {
//     //                 console.log(res.body.result[i].query)
//     //                 expect(res.body.result[i].query).to.equal(res.body.result[i].result.postcode)
//     //             }
//     //             done();
//     //         });
//     // });
//     //
//     // it("returns null when an invalid post code is submitted", function (done) {
//     //     agent
//     //         .post('/postcodes')
//     //         .send({
//     //             "postcodes": ["AB123"]
//     //         })
//     //         .expect(200)
//     //         .end(function (err, res) {
//     //             expect(res.body.result[0].result).to.equal(null)
//     //             done();
//     //         });
//     // });
//
//     it("returns 400 when invalid json is submitted", function () {
//
//        return agent
//             .post('/postcodes')
//             .send({})
//             .expect(400)
//             .then((res)=>console.log(JSON.stringify(res.body)))
//             // .end(function (err, res) {
//             //     expect(res.body.status).to.equal(400);
//             //     expect(res.body.error).to.equal("Invalid JSON query submitted. \nYou need to submit a JSON object with an array of postcodes or geolocation objects.\nAlso ensure that Content-Type is set to application/json\n");
//             //     console.log(JSON.stringify(res.body));
//             //     done();
//             // });
//     })
//
// });

// const request = require('supertest');
// const express = require('express');
//
// const app = express();
//
// app.get('/user', function(req, res) {
//     res.status(200).json({ name: 'john' });
// });
//
// request(app)
//     .get('/user')
//     .expect('Content-Type', /json/)
//     .expect('Content-Length', '15')
//     .expect(200)
//     .end(function(err, res) {
//         if (err) throw err;
//     });


// function add() {
//     return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
//         return prev + curr;
//     }, 0);
// }

// describe('add()', function() {
//     var tests = [
//         {args: [1, 2], expected: 3},
//         {args: [1, 2, 3], expected: 6},
//         {args: [1, 2, 3, 4], expected: 10}
//     ];
//
//     tests.forEach(function(test) {
//         it('correctly adds ' + test.args.length + ' args', function() {
//             var res = add.apply(null, test.args);
//             assert.equal(res, test.expected);
//         });
//     });
// });


// describe('sdsd',function () {
//     var tests=[
//         {args: [1, 2], expected: 3},
//         {args: [1, 2, 3], expected: 6},
//         {args: [1, 2, 3, 4], expected: 10}
//     ]
//
//     tests.forEach(function (test) {
//         it('sdsd'+test.args.length+ "sd",function () {
//             console.log(test.args);
//         })
//
//     })
//
//
// })

//-------------------------------------------------------------------------------------------------------------------


// Basic get request with request module
// const request = require('request');
//
// request("https://www.google.com", function (err, res, body) {
//     console.log(body);
// });


const request = require('request');
// let fs = require('fs');

// let options = {
//     url: "http://stackabuse.com",
//     headers: {
//         'Accept': 'applications/json',
//         'Accept-charset': 'utf-8'
//     },
//     form: {
//         email: "rohir",
//         password: "sdswd "
//     },
//     auth: {
//         username: '',
//         password: ''
//     },
//
//     cert: '',
//     key: '',
//     ca: '',
//     passphrase: ''
//
// };
// request.get(options, function(err, res, body) {
//     if(err){
//         console.log(err);
//     }
//     console.log(body);
// });

// let options = {
//     url: 'http://http://mockbin.com/request',
//     form: {
//         email: 'me@example.com',
//         password: 'myPassword'
//     }
// };
//
// request.post(options, function (err,res,body) {
//     console.log(body);
// });
//
// let fileStream = fs.createWriteStream('node.png');
// request('https://nodejs.org/static/images/logos/nodejs-new-white-pantone.png').pipe(fileStream);


// let req = request.defaults({
//     headers: {
//         'x-access-token': '123abc',
//         'User-Agent': 'my-reddit-client'
//     }
// });

// req('http://your-api.com', function (err, res, body) {
//     console.log(body);
// });

// let req=request.defaults(
//     {
//         headers:{
//
//         }
//     }
// )


// request
//     .get('http://google.com')
//     .on('response', function(response) {
//         console.log(response.statusCode) // 200
//         console.log(response.headers['content-type']) // 'image/png'
//     })
//     .pipe(request.put('http://mysite.com/img.png'))


let options = {

    url: 'http://api.postcodes.io/postcodes',
    json: true,
    body: {
        postcodes: ["SW1A 0AA", "SW1A 0PW", "SW1A 1AA"]
    }

};

request.post(options, function (err, res,body) {
    console.log(body);

});


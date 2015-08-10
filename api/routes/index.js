var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/1/classes/Speakers', function(req, res, next) {
  console.log("LOL")
  res.send({
    "results": [{
      "createdAt": "2015-01-07T21:46:33.052Z",
      "objectId": "hwrXOvQG5b",
      "speakerName": "Adam Mosseri",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-152287f2-ccb7-4656-a884-e4d026063338-Adam-Mosseri.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-152287f2-ccb7-4656-a884-e4d026063338-Adam-Mosseri.jpg"
      },
      "speakerTitle": "PM Director, News Feed",
      "updatedAt": "2015-02-12T16:46:02.528Z"
    }, {
      "createdAt": "2015-01-07T20:36:50.623Z",
      "objectId": "wyILTouWtU",
      "speakerName": "Ime Archibong",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-8a9ddbbc-6e1a-4021-980a-ed550a121eb7-Ime-Archibong.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-8a9ddbbc-6e1a-4021-980a-ed550a121eb7-Ime-Archibong.jpg"
      },
      "speakerTitle": "Partnerships Director, Platform and ﻿Internet.org﻿, Facebook",
      "updatedAt": "2015-01-27T17:14:35.005Z"
    }, {
      "createdAt": "2015-03-10T01:28:25.749Z",
      "objectId": "fvUJedcOpr",
      "speakerName": "Holly Ormseth",
      "updatedAt": "2015-03-10T01:28:25.749Z"
    }, {
      "createdAt": "2015-03-10T01:28:31.323Z",
      "objectId": "uxICmjjoKw",
      "speakerName": "Andrew Song",
      "updatedAt": "2015-03-10T01:28:31.323Z"
    }, {
      "createdAt": "2015-01-07T21:45:36.393Z",
      "objectId": "fLbJ12l6tc",
      "speakerName": "AJ Glasser",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-917cbfdd-bf2f-4841-afdd-e62d01fa4c62-AJ-Glasser.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-917cbfdd-bf2f-4841-afdd-e62d01fa4c62-AJ-Glasser.jpg"
      },
      "speakerTitle": "Partnerships, Games, Facebook",
      "updatedAt": "2015-01-26T22:31:21.807Z"
    }, {
      "createdAt": "2015-01-07T21:46:50.250Z",
      "objectId": "O4N5tvKjRk",
      "speakerName": "Alan Cannistraro",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-44065f99-c64a-4858-ae63-a01228a6babf-Alan-Cannistraro.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-44065f99-c64a-4858-ae63-a01228a6babf-Alan-Cannistraro.jpg"
      },
      "speakerTitle": "Product Engineering Manager, Creative Labs, Facebook",
      "updatedAt": "2015-01-26T22:33:34.918Z"
    }, {
      "createdAt": "2015-01-07T21:46:00.945Z",
      "objectId": "t3FfpYBTGb",
      "speakerName": "Chris Marra",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-f3e75c4a-26df-4472-a534-0d362204a160-Chris-Marra.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f3e75c4a-26df-4472-a534-0d362204a160-Chris-Marra.jpg"
      },
      "speakerTitle": "Product Manager, Android, Facebook",
      "updatedAt": "2015-01-26T22:35:49.067Z"
    }, {
      "createdAt": "2015-01-07T21:45:45.437Z",
      "objectId": "GA9SUT8Zcz",
      "speakerName": "Christine Yen",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-6a0ea01b-4051-4d09-9b82-96f0a7f23313-Christine-Yen.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-6a0ea01b-4051-4d09-9b82-96f0a7f23313-Christine-Yen.jpg"
      },
      "speakerTitle": "Software Engineer, Parse",
      "updatedAt": "2015-01-26T01:49:24.940Z"
    }, {
      "createdAt": "2015-01-07T21:44:04.989Z",
      "objectId": "gi1kVrRC9o",
      "speakerName": "Dan Schafer",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-c90228d0-3b8c-41c7-bb52-83b3c46f3ae6-Dan-Schafer.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-c90228d0-3b8c-41c7-bb52-83b3c46f3ae6-Dan-Schafer.jpg"
      },
      "speakerTitle": "Software Engineer, Infrastructure, Facebook",
      "updatedAt": "2015-01-26T22:36:17.507Z"
    }, {
      "createdAt": "2015-01-07T21:44:29.706Z",
      "objectId": "uxHCZjbDz4",
      "speakerName": "Daria Stroganova",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-151d2707-78dd-4714-9d19-74cc2e665a46-Daria-Stroganova.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-151d2707-78dd-4714-9d19-74cc2e665a46-Daria-Stroganova.jpg"
      },
      "speakerTitle": "Software Engineer, iOS, Facebook",
      "updatedAt": "2015-01-26T22:36:25.809Z"
    }, {
      "createdAt": "2015-01-07T21:46:11.952Z",
      "objectId": "Xxfs4bz3Uu",
      "speakerName": "David Isquick",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-6bacbbb1-9de7-44d8-bd8d-7271ec0171f8-David-Isquick.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-6bacbbb1-9de7-44d8-bd8d-7271ec0171f8-David-Isquick.jpg"
      },
      "speakerTitle": "Product Marketing Manager, App Insights, Facebook",
      "updatedAt": "2015-01-26T22:36:36.528Z"
    }, {
      "createdAt": "2015-01-07T21:45:26.684Z",
      "objectId": "6N5gKoQVg0",
      "speakerName": "Elle Destree",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-f45ca6ca-7267-4cdf-bf42-6e693e1270b6-Elle-Destree.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f45ca6ca-7267-4cdf-bf42-6e693e1270b6-Elle-Destree.jpg"
      },
      "speakerTitle": "Knowledge Manager, LiveRail",
      "updatedAt": "2015-01-26T01:50:03.705Z"
    }, {
      "createdAt": "2015-01-07T21:46:08.691Z",
      "objectId": "FGcHd4B8Ci",
      "speakerName": "Eddie O'Neil",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-20615f33-bf59-45e2-889e-033744b9c8a1-Eddie-ONeil.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-20615f33-bf59-45e2-889e-033744b9c8a1-Eddie-ONeil.jpg"
      },
      "speakerTitle": "Product Manager, Platform, Facebook",
      "updatedAt": "2015-01-26T22:36:51.673Z"
    }, {
      "createdAt": "2015-01-07T21:46:44.358Z",
      "objectId": "UUfvngLihI",
      "speakerName": "JessKate Ogungbadero",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-7a52207b-4a8a-4742-9c81-8e3f803ec099-JK-Ogungbadero.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7a52207b-4a8a-4742-9c81-8e3f803ec099-JK-Ogungbadero.jpg"
      },
      "speakerTitle": "Product Marketing Manager, Creative Labs, Facebook",
      "updatedAt": "2015-01-26T22:39:14.303Z"
    }, {
      "createdAt": "2015-01-07T21:46:06.409Z",
      "objectId": "jOtYMruIZ8",
      "speakerName": "Jason Clark",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-c8d6bef9-3d5d-43c9-a7f7-8c370f9cfd57-Jason-Clark.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-c8d6bef9-3d5d-43c9-a7f7-8c370f9cfd57-Jason-Clark.jpg"
      },
      "speakerTitle": "Engineering Manager, Platform, Facebook",
      "updatedAt": "2015-01-26T22:38:49.832Z"
    }, {
      "createdAt": "2015-01-07T21:44:01.323Z",
      "objectId": "kxAMHfBzNh",
      "speakerName": "Jing Chen",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-3ae1ea30-b2a2-4a13-bb32-bc1fd25a0c22-Jing-Chen.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-3ae1ea30-b2a2-4a13-bb32-bc1fd25a0c22-Jing-Chen.jpg"
      },
      "speakerTitle": "Software Engineer, Product Infrastructure, Facebook",
      "updatedAt": "2015-03-10T01:18:23.500Z"
    }, {
      "createdAt": "2015-01-07T21:46:35.612Z",
      "objectId": "HldwUZXrmB",
      "speakerName": "Lars Backstrom",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-9d051266-5ded-44df-92cf-d3d3bd683f24-Lars-Backstrom.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9d051266-5ded-44df-92cf-d3d3bd683f24-Lars-Backstrom.jpg"
      },
      "speakerTitle": "Engineering Director, News Feed, Facebook",
      "updatedAt": "2015-01-26T22:40:23.123Z"
    }, {
      "createdAt": "2015-01-07T21:43:16.808Z",
      "objectId": "UOM2zgHXTb",
      "speakerName": "Maher Saba",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-61879e6c-a471-4bfa-bd1d-468a354f9f47-Maher-Saba.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-61879e6c-a471-4bfa-bd1d-468a354f9f47-Maher-Saba.jpg"
      },
      "speakerTitle": "Engineering Director, Facebook",
      "updatedAt": "2015-01-26T01:51:39.380Z"
    }, {
      "createdAt": "2015-01-07T21:44:08.413Z",
      "objectId": "oSMgRDGCDq",
      "speakerName": "Mark Trefgarne",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-d3c5a4cf-4fb1-4d39-b7b0-cb45e2f5d1ef-Mark-Trefgarne.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-d3c5a4cf-4fb1-4d39-b7b0-cb45e2f5d1ef-Mark-Trefgarne.jpg"
      },
      "speakerTitle": "Product Management Director, LiveRail",
      "updatedAt": "2015-01-26T01:51:45.572Z"
    }, {
      "createdAt": "2015-01-23T07:49:59.584Z",
      "objectId": "BkmHFe7p5s",
      "speakerName": "Michael Abrash",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-e38a7673-56cd-4b5d-9779-caf9386747a1-Michael-Abrash.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e38a7673-56cd-4b5d-9779-caf9386747a1-Michael-Abrash.jpg"
      },
      "speakerTitle": "Chief Scientist, Oculus",
      "updatedAt": "2015-01-26T01:51:53.296Z"
    }, {
      "createdAt": "2015-01-07T21:44:11.223Z",
      "objectId": "jnmVRtjuA5",
      "speakerName": "Punit Sarin",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-658042c3-cd55-4036-aa60-773b52191c50-Punit-Sarin.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-658042c3-cd55-4036-aa60-773b52191c50-Punit-Sarin.jpg"
      },
      "speakerTitle": "Product Manager, LiveRail",
      "updatedAt": "2015-01-26T01:52:10.050Z"
    }, {
      "createdAt": "2015-01-07T21:44:49.442Z",
      "objectId": "SerNAFbwyU",
      "speakerName": "Rachel Pyrdol",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-99802821-7338-48aa-baf1-ca0837964296-Rachel-Pyrdol.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-99802821-7338-48aa-baf1-ca0837964296-Rachel-Pyrdol.jpg"
      },
      "speakerTitle": "Market Researcher, Platform Products, Facebook",
      "updatedAt": "2015-01-26T22:47:24.319Z"
    }, {
      "createdAt": "2015-01-07T21:43:48.370Z",
      "objectId": "j8kJAzQ2vk",
      "speakerName": "Simon Cross",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-d594503e-7260-4040-ba58-b19c5c00cce5-Simon-Cross.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-d594503e-7260-4040-ba58-b19c5c00cce5-Simon-Cross.jpg"
      },
      "speakerTitle": "Product Manager, Developer Experience, Facebook",
      "updatedAt": "2015-01-26T22:48:14.714Z"
    }, {
      "createdAt": "2015-01-07T21:45:24.683Z",
      "objectId": "eSycehMGV8",
      "speakerName": "Sriram Krishnan",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-817bc423-0c1d-4c9c-87c2-e1777fb29b3f-Sriram-Krishnan.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-817bc423-0c1d-4c9c-87c2-e1777fb29b3f-Sriram-Krishnan.jpg"
      },
      "speakerTitle": "Product Manager, Audience Network, Facebook",
      "updatedAt": "2015-01-26T22:48:43.376Z"
    }, {
      "createdAt": "2015-01-07T21:46:19.006Z",
      "objectId": "3tj6oknGDC",
      "speakerName": "Stoyan Stefanov",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-f9b6ead0-997f-402c-b587-7e422a5db5cb-Stoyan-Stefanov-headshot.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f9b6ead0-997f-402c-b587-7e422a5db5cb-Stoyan-Stefanov-headshot.jpg"
      },
      "speakerTitle": "Software Engineer, Developer Experience, Facebook",
      "updatedAt": "2015-01-26T22:48:51.906Z"
    }, {
      "createdAt": "2015-01-07T21:44:46.844Z",
      "objectId": "Mqgc6cymyL",
      "speakerName": "Tanya Herrgott",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-dff8c18f-dd53-4f70-97d2-0d97eca1f904-Tanya-Herrgott.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-dff8c18f-dd53-4f70-97d2-0d97eca1f904-Tanya-Herrgott.jpg"
      },
      "speakerTitle": "Product Design Manager, Platform Products, Facebook",
      "updatedAt": "2015-01-26T22:49:08.117Z"
    }, {
      "createdAt": "2015-01-07T21:46:26.571Z",
      "objectId": "DRqS38cYB9",
      "speakerName": "Ted Reed",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-8a3d68ae-6568-4ca6-ade2-15d27e4dd511-Ted-Reed.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-8a3d68ae-6568-4ca6-ade2-15d27e4dd511-Ted-Reed.jpg"
      },
      "speakerTitle": "Security Engineer, Facebook",
      "updatedAt": "2015-01-26T01:52:38.804Z"
    }, {
      "createdAt": "2015-01-07T21:43:59.948Z",
      "objectId": "RQHffWJCgA",
      "speakerName": "Tom Occhino",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-ed0e466a-1d74-4b2f-a13d-40be5fe3ffbe-Tom-Occhino.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-ed0e466a-1d74-4b2f-a13d-40be5fe3ffbe-Tom-Occhino.jpg"
      },
      "speakerTitle": "Engineering Manager, Product Infrastructure, Facebook",
      "updatedAt": "2015-03-10T01:18:33.100Z"
    }, {
      "createdAt": "2015-01-07T21:46:15.033Z",
      "objectId": "v76omDc7dE",
      "speakerName": "Varun Bhartia",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-ec3a118c-85fb-45be-83ee-d3b7bb8c4a7d-Varun-Bhartia.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-ec3a118c-85fb-45be-83ee-d3b7bb8c4a7d-Varun-Bhartia.jpg"
      },
      "speakerTitle": "Product Manager, Social Plugins, Facebook",
      "updatedAt": "2015-01-26T01:52:49.310Z"
    }, {
      "createdAt": "2015-01-07T21:45:52.547Z",
      "objectId": "nIIGpCEv5h",
      "speakerName": "Aditya Kulkarni",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-c66f0629-e9d3-4094-abd7-669397f2de80-Aditya-Kulkarni.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-c66f0629-e9d3-4094-abd7-669397f2de80-Aditya-Kulkarni.jpg"
      },
      "speakerTitle": "Product Manager, Ads, Facebook",
      "updatedAt": "2015-01-26T22:33:25.429Z"
    }, {
      "createdAt": "2015-01-07T21:45:59.441Z",
      "objectId": "PRsz2yX56u",
      "speakerName": "Alex Sourov",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-1a0b28fa-1453-4136-abdc-f7bdb16c4ad0-Alex-Sourov.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-1a0b28fa-1453-4136-abdc-f7bdb16c4ad0-Alex-Sourov.jpg"
      },
      "speakerTitle": "Engineering Manager, Facebook",
      "updatedAt": "2015-01-26T22:11:46.533Z"
    }, {
      "createdAt": "2015-01-07T21:44:35.287Z",
      "objectId": "XgfNY1BlJ7",
      "speakerName": "Alyssa Levitz",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-b317114d-f35b-40dc-be14-fa12c4b00cc6-Alyssa-Levitz.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-b317114d-f35b-40dc-be14-fa12c4b00cc6-Alyssa-Levitz.jpg"
      },
      "speakerTitle": "Product Manager, Platform, Facebook",
      "updatedAt": "2015-01-26T22:34:05.719Z"
    }, {
      "createdAt": "2015-01-07T21:47:08.319Z",
      "objectId": "NLgC8bkQJu",
      "speakerName": "Andrew Imm",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-9954262f-b71a-4aff-9b52-380c23bc334f-Andrew-Imm.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9954262f-b71a-4aff-9b52-380c23bc334f-Andrew-Imm.jpg"
      },
      "speakerTitle": "Software Engineer, Parse",
      "updatedAt": "2015-01-26T22:11:58.591Z"
    }, {
      "createdAt": "2015-01-07T21:44:15.620Z",
      "objectId": "llOCMLrBgQ",
      "speakerName": "Ari Grant",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-e4c8946c-656c-4f06-a2e1-e0ea4416e275-Ari-Grant.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e4c8946c-656c-4f06-a2e1-e0ea4416e275-Ari-Grant.jpg"
      },
      "speakerTitle": "Software Engineer, iOS, Facebook",
      "updatedAt": "2015-01-26T22:34:25.937Z"
    }, {
      "createdAt": "2015-01-07T21:44:31.983Z",
      "objectId": "7VeZJAy2Gy",
      "speakerName": "Ben Padget",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-65c5b634-8573-43d1-a4dc-66f0d2737004-Ben-Padget.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-65c5b634-8573-43d1-a4dc-66f0d2737004-Ben-Padget.jpg"
      },
      "speakerTitle": "Software Engineer, Platform, Facebook",
      "updatedAt": "2015-01-26T22:34:50.435Z"
    }, {
      "createdAt": "2015-01-07T21:46:55.969Z",
      "objectId": "Whvr9bAIm7",
      "speakerName": "Brent Dorman",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-e059fbf6-70d6-4fc6-b644-9ada4ed48a5d-Brent-Dorman.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e059fbf6-70d6-4fc6-b644-9ada4ed48a5d-Brent-Dorman.jpg"
      },
      "speakerTitle": "Software Engineer, Platform Integrity, Facebook",
      "updatedAt": "2015-01-26T22:34:59.234Z"
    }, {
      "createdAt": "2015-01-26T19:45:47.456Z",
      "objectId": "H365R5p5CH",
      "speakerName": "Brian Acton",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-782f5a44-8fa9-465d-922f-18ee8404b9d4-Brian-Acton.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-782f5a44-8fa9-465d-922f-18ee8404b9d4-Brian-Acton.jpg"
      },
      "speakerTitle": "Co-Founder, WhatsApp",
      "updatedAt": "2015-01-26T22:35:07.300Z"
    }, {
      "createdAt": "2015-01-23T07:50:42.845Z",
      "objectId": "07YeEGd0mf",
      "speakerName": "Brian Ni",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-26353b74-14d1-4f94-aa64-e616e185983c-Brian-Ni.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-26353b74-14d1-4f94-aa64-e616e185983c-Brian-Ni.jpg"
      },
      "speakerTitle": "Software Engineer, App Events, Facebook",
      "updatedAt": "2015-01-26T22:35:16.571Z"
    }, {
      "createdAt": "2015-01-23T07:53:56.977Z",
      "objectId": "60E6TOoAIo",
      "speakerName": "Bryan O'Sullivan",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-3ea6b6bb-ea78-4ca1-b279-ab12bfbe44e5-Bryan-OSullivan.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-3ea6b6bb-ea78-4ca1-b279-ab12bfbe44e5-Bryan-OSullivan.jpg"
      },
      "speakerTitle": "Engineering Manager, Facebook",
      "updatedAt": "2015-01-26T22:13:54.870Z"
    }, {
      "createdAt": "2015-01-07T21:45:09.528Z",
      "objectId": "ozcHI6IsOz",
      "speakerName": "Charity Majors",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-1f8a18d0-30a5-4756-80e3-bc5621937cc4-Charity-Majors.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-1f8a18d0-30a5-4756-80e3-bc5621937cc4-Charity-Majors.jpg"
      },
      "speakerTitle": "Production Engineering Manager, Parse",
      "updatedAt": "2015-01-26T22:13:59.785Z"
    }, {
      "createdAt": "2015-01-07T21:43:44.797Z",
      "objectId": "4UGxdEBdpw",
      "speakerName": "Chris Lang",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-db27aadb-f533-453b-876f-6c34d5419c68-Chris-Lang.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-db27aadb-f533-453b-876f-6c34d5419c68-Chris-Lang.jpg"
      },
      "speakerTitle": "Software Engineer, Platform, Facebook",
      "updatedAt": "2015-01-26T22:35:40.120Z"
    }, {
      "createdAt": "2015-01-07T21:45:19.541Z",
      "objectId": "n7jsuWZ4md",
      "speakerName": "Colin Creitz",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-f1ffa4e6-b1a0-4ac3-a80c-2fe322a69196-Colin-Creitz.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f1ffa4e6-b1a0-4ac3-a80c-2fe322a69196-Colin-Creitz.jpg"
      },
      "speakerTitle": "Partner Engineer, Games, Facebook",
      "updatedAt": "2015-01-26T22:36:08.021Z"
    }, {
      "createdAt": "2015-01-26T19:45:55.895Z",
      "objectId": "qOYYkreiou",
      "speakerName": "David Marcus",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-68340bce-8e37-4a01-98d0-65cc8f8e898c-David Marcus 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-68340bce-8e37-4a01-98d0-65cc8f8e898c-David%20Marcus%20180x180.jpg"
      },
      "speakerTitle": "VP of Messaging, Facebook",
      "updatedAt": "2015-01-28T21:33:46.989Z"
    }, {
      "createdAt": "2015-01-07T21:45:34.005Z",
      "objectId": "axsdinEprV",
      "speakerName": "Eric Nakagawa",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-dadd3acc-9cb2-4cb4-a7ac-da6c6701f008-Eric-Nakagawa.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-dadd3acc-9cb2-4cb4-a7ac-da6c6701f008-Eric-Nakagawa.jpg"
      },
      "speakerTitle": "Developer Advocate, Parse",
      "updatedAt": "2015-01-26T22:14:38.320Z"
    }, {
      "createdAt": "2015-01-07T21:43:12.672Z",
      "objectId": "cX2iRaX09x",
      "speakerName": "Fidji Simo",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-9d1f4b59-17d4-4a36-a07e-409b5b548cc7-Fidji-Simo.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9d1f4b59-17d4-4a36-a07e-409b5b548cc7-Fidji-Simo.jpg"
      },
      "speakerTitle": "Product Management Director, Video, Facebook",
      "updatedAt": "2015-01-27T17:14:50.899Z"
    }, {
      "createdAt": "2015-01-07T21:45:39.550Z",
      "objectId": "6QgbyOcOr4",
      "speakerName": "Florian Laplantif",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-8db4070f-79f0-44fa-83f8-d43384198ba4-Florian-Laplantif.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-8db4070f-79f0-44fa-83f8-d43384198ba4-Florian-Laplantif.jpg"
      },
      "speakerTitle": "Engineering Manager, Android Performance, Facebook",
      "updatedAt": "2015-01-26T22:37:25.897Z"
    }, {
      "createdAt": "2015-01-07T21:45:43.465Z",
      "objectId": "coDU3YRjFq",
      "speakerName": "Fosco Marotto",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-14bab7ff-a7f8-4598-b424-6fec404d0e80-Fosco-Marotto.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-14bab7ff-a7f8-4598-b424-6fec404d0e80-Fosco-Marotto.jpg"
      },
      "speakerTitle": "Developer Advocate, Parse",
      "updatedAt": "2015-01-26T22:14:56.218Z"
    }, {
      "createdAt": "2015-01-07T21:44:43.904Z",
      "objectId": "m3OCdOZelQ",
      "speakerName": "Greg Schechter",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-07a3d083-254a-4b3e-9a4f-394f1e508757-Greg-Schechter.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-07a3d083-254a-4b3e-9a4f-394f1e508757-Greg-Schechter.jpg"
      },
      "speakerTitle": "Engineering Manager, Platform, Facebook",
      "updatedAt": "2015-01-26T22:37:43.641Z"
    }, {
      "createdAt": "2015-01-07T21:45:31.638Z",
      "objectId": "EsdzMccQml",
      "speakerName": "Héctor Ramos",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-df3436bb-43a5-4e5b-b97e-a19e3e730621-Hector-Ramos.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-df3436bb-43a5-4e5b-b97e-a19e3e730621-Hector-Ramos.jpg"
      },
      "speakerTitle": "Developer Advocate, Parse",
      "updatedAt": "2015-01-26T22:15:08.222Z"
    }, {
      "createdAt": "2015-01-07T20:37:00.820Z",
      "objectId": "y3r5K7ClU6",
      "speakerName": "Jackie Chang",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-5d223811-327b-4300-a8db-664f29db2d5c-Jackie-Chang.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-5d223811-327b-4300-a8db-664f29db2d5c-Jackie-Chang.jpg"
      },
      "speakerTitle": "Product Partnership Manager, Internet.org, Facebook",
      "updatedAt": "2015-01-26T22:38:28.752Z"
    }, {
      "createdAt": "2015-01-07T21:47:06.927Z",
      "objectId": "SDNdrEZv0C",
      "speakerName": "James Yu",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-199c1168-95d4-455d-ad1c-50113d7176de-James-Yu.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-199c1168-95d4-455d-ad1c-50113d7176de-James-Yu.jpg"
      },
      "speakerTitle": "Co-Founder and Product Manager, Parse",
      "updatedAt": "2015-01-26T22:15:23.731Z"
    }, {
      "createdAt": "2015-01-07T21:47:01.289Z",
      "objectId": "7LqCiULGAp",
      "speakerName": "Jonathan Gross",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-428bbedc-4cb3-4a69-9ed4-0dffa8dd3baa-Jonathan-Gross.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-428bbedc-4cb3-4a69-9ed4-0dffa8dd3baa-Jonathan-Gross.jpg"
      },
      "speakerTitle": "Engineering Manager, Platform Integrity, Facebook",
      "updatedAt": "2015-01-26T22:39:35.384Z"
    }, {
      "createdAt": "2015-01-07T21:44:56.413Z",
      "objectId": "9BBS31aUPM",
      "speakerName": "Kate Hamill",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-121701ce-d34b-42cb-b8e7-8a421c9124b6-Kate-Hamill.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-121701ce-d34b-42cb-b8e7-8a421c9124b6-Kate-Hamill.jpg"
      },
      "speakerTitle": "Client Partner, Games, Facebook",
      "updatedAt": "2015-01-26T22:39:46.382Z"
    }, {
      "createdAt": "2015-01-23T07:54:16.518Z",
      "objectId": "q1VXkbItTu",
      "speakerName": "Katie Coons",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-a9e2acd4-83c8-4187-850f-343c781482e8-Katie-Coons.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-a9e2acd4-83c8-4187-850f-343c781482e8-Katie-Coons.jpg"
      },
      "speakerTitle": "Software Engineer, Product Stability, Facebook",
      "updatedAt": "2015-01-26T22:39:53.708Z"
    }, {
      "createdAt": "2015-01-23T07:54:46.879Z",
      "objectId": "7cvKgKvSAj",
      "speakerName": "Khalid Ashour",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-9f47d9bd-c4e0-4ce9-a357-d5e68e11ae9a-Khalid-Ashour.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9f47d9bd-c4e0-4ce9-a357-d5e68e11ae9a-Khalid-Ashour.jpg"
      },
      "speakerTitle": "Product Manager, Mobile App Ads, Facebook",
      "updatedAt": "2015-01-26T22:40:07.225Z"
    }, {
      "createdAt": "2015-01-07T21:47:05.431Z",
      "objectId": "EZeIGs7hb6",
      "speakerName": "Kimon Tsinteris",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-db7ac0c9-d485-48dc-95e6-b4ba183c865d-Kimon-Tsinteris.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-db7ac0c9-d485-48dc-95e6-b4ba183c865d-Kimon-Tsinteris.jpg"
      },
      "speakerTitle": "Engineering Manager, Media, Facebook",
      "updatedAt": "2015-01-28T21:30:30.467Z"
    }, {
      "createdAt": "2015-01-07T21:44:59.834Z",
      "objectId": "YhzIYGSmwy",
      "speakerName": "Maria Giudice",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-27390c46-649b-4d06-a9bc-8a46ca0a9dec-Maria-Giudice.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-27390c46-649b-4d06-a9bc-8a46ca0a9dec-Maria-Giudice.jpg"
      },
      "speakerTitle": "Product Design Director, Platform, Facebook",
      "updatedAt": "2015-01-26T22:40:39.139Z"
    }, {
      "createdAt": "2015-01-07T21:45:07.743Z",
      "objectId": "p41xz91cM2",
      "speakerName": "Mary Ku",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-39559a06-96e4-4462-a658-07216e9d4d1d-Mary-Ku.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-39559a06-96e4-4462-a658-07216e9d4d1d-Mary-Ku.jpg"
      },
      "speakerTitle": "Product Manager, Platform, Facebook",
      "updatedAt": "2015-01-26T22:41:08.068Z"
    }, {
      "createdAt": "2015-01-23T07:54:05.364Z",
      "objectId": "S8cHuxWslD",
      "speakerName": "Michael Bolin",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-a02d0d60-9940-4b79-bbaf-8457c9486c97-Michael-Bolin.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-a02d0d60-9940-4b79-bbaf-8457c9486c97-Michael-Bolin.jpg"
      },
      "speakerTitle": "Software Engineer, Facebook",
      "updatedAt": "2015-01-26T22:19:51.399Z"
    }, {
      "createdAt": "2015-01-07T21:47:03.052Z",
      "objectId": "eTBzkCeYi4",
      "speakerName": "Michael Cerda",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-b2e2a08c-6941-4232-b537-1adacdf9ce8c-Michael-Cerda.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-b2e2a08c-6941-4232-b537-1adacdf9ce8c-Michael-Cerda.jpg"
      },
      "speakerTitle": "Product Management Director, Media Products, Facebook",
      "updatedAt": "2015-01-26T22:20:01.041Z"
    }, {
      "createdAt": "2015-01-26T19:45:40.501Z",
      "objectId": "FuXrMyX4LC",
      "speakerName": "Mike Krieger",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-b354ced7-800a-4a52-89d3-2b92657843fe-Mike-Kreiger.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-b354ced7-800a-4a52-89d3-2b92657843fe-Mike-Kreiger.jpg"
      },
      "speakerTitle": "Technical Lead and Co-Founder, Instagram",
      "updatedAt": "2015-01-26T22:45:54.803Z"
    }, {
      "createdAt": "2015-01-07T21:45:57.195Z",
      "objectId": "o8YGtQveCo",
      "speakerName": "Nick Hammer",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-bdddba22-d441-4898-a351-0925d5e5bb04-Nick-Hammer.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-bdddba22-d441-4898-a351-0925d5e5bb04-Nick-Hammer.jpg"
      },
      "speakerTitle": "Engineering Manager, Android News Feed, Facebook",
      "updatedAt": "2015-01-26T22:46:02.699Z"
    }, {
      "createdAt": "2015-01-07T21:46:03.811Z",
      "objectId": "IZQzh0eM1K",
      "speakerName": "Piyush Mangalick",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-0b6f7acb-0dba-4504-88e9-04a301768867-Piyush-Mangalick.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-0b6f7acb-0dba-4504-88e9-04a301768867-Piyush-Mangalick.jpg"
      },
      "speakerTitle": "Partner Engineering Director, Instagram",
      "updatedAt": "2015-01-26T22:29:57.638Z"
    }, {
      "createdAt": "2015-01-07T21:45:21.253Z",
      "objectId": "2S6GiLajMf",
      "speakerName": "Robby Banks",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-61a0a066-6889-46a4-ad11-f01914f0d21f-Robby-Banks.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-61a0a066-6889-46a4-ad11-f01914f0d21f-Robby-Banks.jpg"
      },
      "speakerTitle": "Product Manager, Games, Facebook",
      "updatedAt": "2015-01-26T22:47:35.019Z"
    }, {
      "createdAt": "2015-01-23T07:53:08.327Z",
      "objectId": "oupZuC68Yn",
      "speakerName": "Sambavi Muthukrishnan",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-ebe3ed75-c7ec-4edf-8eb8-39f493b3f0e0-Sambavi Muthukrishnan 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-ebe3ed75-c7ec-4edf-8eb8-39f493b3f0e0-Sambavi%20Muthukrishnan%20180x180.jpg"
      },
      "speakerTitle": "Engineering Manager, Data Infrastructure, Facebook",
      "updatedAt": "2015-01-28T21:34:06.309Z"
    }, {
      "createdAt": "2015-01-07T21:44:18.086Z",
      "objectId": "QWok3RmIB3",
      "speakerName": "Slobodan Predolac",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-01fa076f-579d-4235-9acd-d9a5696ec341-Slobodan-Predolac.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-01fa076f-579d-4235-9acd-d9a5696ec341-Slobodan-Predolac.jpg"
      },
      "speakerTitle": "Software Engineer, iOS, Facebook",
      "updatedAt": "2015-01-26T22:48:35.684Z"
    }, {
      "createdAt": "2015-01-07T21:45:11.021Z",
      "objectId": "PdHpq2oGfc",
      "speakerName": "Thomas Bouldin",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-7cc6d64e-fe5b-4dfc-9f13-5a12544d16eb-Thomas-Bouldin.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7cc6d64e-fe5b-4dfc-9f13-5a12544d16eb-Thomas-Bouldin.jpg"
      },
      "speakerTitle": "Software Engineer, Parse",
      "updatedAt": "2015-01-26T22:30:21.123Z"
    }, {
      "createdAt": "2015-01-23T07:55:51.095Z",
      "objectId": "otQcBdpbwS",
      "speakerName": "Jennifer Henley",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-4fa069d8-b4b6-47d6-8b2b-128d8127e983-Jenn Henley 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-4fa069d8-b4b6-47d6-8b2b-128d8127e983-Jenn%20Henley%20180x180.jpg"
      },
      "speakerTitle": "Security Operations Director, Facebook",
      "updatedAt": "2015-01-27T05:13:46.761Z"
    }, {
      "createdAt": "2015-01-23T07:54:58.442Z",
      "objectId": "RSG7pPKArj",
      "speakerName": "Matt Idema",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-bdc079b7-ba6c-4ddf-b5ed-0553e4dbf230-Matt-Idema-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-bdc079b7-ba6c-4ddf-b5ed-0553e4dbf230-Matt-Idema-180x180.jpg"
      },
      "speakerTitle": "Product Marketing Director, Ads, Facebook",
      "updatedAt": "2015-01-27T05:13:59.722Z"
    }, {
      "createdAt": "2015-01-23T07:53:25.886Z",
      "objectId": "OPY1PSRpj7",
      "speakerName": "Avery Ching",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-d11f85f2-b9ee-4246-b531-e2c600a16796-Avery Chin 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-d11f85f2-b9ee-4246-b531-e2c600a16796-Avery%20Chin%20180x180.jpg"
      },
      "speakerTitle": "Software Engineer, Data Infrastructure, Facebook",
      "updatedAt": "2015-01-27T05:14:08.426Z"
    }, {
      "createdAt": "2015-01-23T07:53:18.476Z",
      "objectId": "fjD5omFl1j",
      "speakerName": "Jay Tang",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-7f90cf5c-ddc6-488f-9c5c-236f6da4fa99-Jay Tang 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7f90cf5c-ddc6-488f-9c5c-236f6da4fa99-Jay%20Tang%20180x180.jpg"
      },
      "speakerTitle": "Software Engineering Manager, Facebook",
      "updatedAt": "2015-01-27T05:14:14.396Z"
    }, {
      "createdAt": "2015-01-23T07:52:37.400Z",
      "objectId": "yIlpZd2idF",
      "speakerName": "Marty Greenia",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-253f5a5d-4b45-4300-8064-5c6e4570baed-Marty Greenia 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-253f5a5d-4b45-4300-8064-5c6e4570baed-Marty%20Greenia%20180x180.jpg"
      },
      "speakerTitle": "Software Engineer, iOS Performance, Facebook",
      "updatedAt": "2015-01-28T21:31:14.773Z"
    }, {
      "createdAt": "2015-01-07T21:44:38.397Z",
      "objectId": "hSfoBltK7e",
      "speakerName": "Aydin Ghajar",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-fec4d69a-da72-4b3e-8cd1-f3dc771eca1e-Aydin Ghajar 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-fec4d69a-da72-4b3e-8cd1-f3dc771eca1e-Aydin%20Ghajar%20180x180.jpg"
      },
      "speakerTitle": "Product Manager, App Insights, Facebook",
      "updatedAt": "2015-01-27T05:14:39.251Z"
    }, {
      "createdAt": "2015-01-26T01:55:15.732Z",
      "objectId": "hK8fKsiz4g",
      "speakerName": "Peter Martinazzi",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-424993d8-b489-4ce7-b3e0-81a45f72a792-Peter Martinazzi badge 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-424993d8-b489-4ce7-b3e0-81a45f72a792-Peter%20Martinazzi%20badge%20180x180.jpg"
      },
      "speakerTitle": "Product Management Director, Messenger",
      "updatedAt": "2015-01-27T05:16:12.455Z"
    }, {
      "createdAt": "2015-01-23T07:53:39.915Z",
      "objectId": "2ArUpI57FG",
      "speakerName": "Adam Wolff",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-55e82079-e731-4ae9-894c-26cb948db932-Adam Wolff badge 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-55e82079-e731-4ae9-894c-26cb948db932-Adam%20Wolff%20badge%20180x180.jpg"
      },
      "speakerTitle": "Engineering Director, Product Infrastructure, Facebook",
      "updatedAt": "2015-01-27T05:17:18.140Z"
    }, {
      "createdAt": "2015-01-23T07:52:19.897Z",
      "objectId": "rcPdqmK1JH",
      "speakerName": "Subbu Subramanian",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-9ebc1e23-b561-4354-ad8b-678e9bbdd24f-Subbu Subramanian.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9ebc1e23-b561-4354-ad8b-678e9bbdd24f-Subbu%20Subramanian.jpg"
      },
      "speakerTitle": "Engineering Director, Performance, Facebook",
      "updatedAt": "2015-01-27T05:18:23.444Z"
    }, {
      "createdAt": "2015-01-07T21:46:40.529Z",
      "objectId": "U1CIOPCPAU",
      "speakerName": "Paddy Underwood",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-479ac7e4-147b-4589-abbe-d2075cc2642e-Paddy Underwood updated.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-479ac7e4-147b-4589-abbe-d2075cc2642e-Paddy%20Underwood%20updated.jpg"
      },
      "speakerTitle": "Product Manager, Privacy Products, Facebook",
      "updatedAt": "2015-03-10T01:40:01.642Z"
    }, {
      "createdAt": "2015-01-07T21:46:37.821Z",
      "objectId": "qrtgqZNRNo",
      "speakerName": "Alex Schultz",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-1f2094ac-25d7-460a-978a-4c73ef4a8811-Alex-Schultz-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-1f2094ac-25d7-460a-978a-4c73ef4a8811-Alex-Schultz-180x180.jpg"
      },
      "speakerTitle": "VP of Growth Marketing, Facebook",
      "updatedAt": "2015-01-27T06:04:22.156Z"
    }, {
      "createdAt": "2015-03-10T01:20:33.007Z",
      "objectId": "ct9JGLNlt7",
      "speakerName": "Vatsal Mehta",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-0e4e397f-5e7c-4c42-a395-da381ea37625-Vatsal Mehta 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-0e4e397f-5e7c-4c42-a395-da381ea37625-Vatsal%20Mehta%20180x180.jpg"
      },
      "speakerTitle": "Director, Solutions Engineering",
      "updatedAt": "2015-03-10T01:23:47.383Z"
    }, {
      "createdAt": "2015-03-10T01:20:16.532Z",
      "objectId": "lhncX4qxGC",
      "speakerName": "Zach Greenberger",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-7b2ce6a7-e801-4370-a5b2-2ae3f6dd02ad-Zach Greenberger 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7b2ce6a7-e801-4370-a5b2-2ae3f6dd02ad-Zach%20Greenberger%20180x180.jpg"
      },
      "speakerTitle": "Co-founder and CEO, AdMixt",
      "updatedAt": "2015-03-10T01:25:11.994Z"
    }, {
      "createdAt": "2015-03-10T01:30:56.922Z",
      "objectId": "jRrHML1qeu",
      "speakerName": "Alex Jaffe",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-06a13507-8ec7-4d57-a336-ef4d67144dca-Alex Jaffe 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-06a13507-8ec7-4d57-a336-ef4d67144dca-Alex%20Jaffe%20180x180.jpg"
      },
      "speakerTitle": "Data Scientist and Technical Game Designer, Spry Fox",
      "updatedAt": "2015-03-10T01:35:27.730Z"
    }, {
      "createdAt": "2015-03-10T01:31:40.908Z",
      "objectId": "tjQC1WAFU8",
      "speakerName": "Xie Xianlin",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-f9e34d66-a006-4bb2-9fc4-df1c52d5821f-Xiexianlin80x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f9e34d66-a006-4bb2-9fc4-df1c52d5821f-Xiexianlin80x180.jpg"
      },
      "speakerTitle": "President, Elex",
      "updatedAt": "2015-03-10T01:35:15.712Z"
    }, {
      "createdAt": "2015-03-10T01:31:34.042Z",
      "objectId": "qSFDVRB44P",
      "speakerName": "Michael Sjöberg",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-82be0829-3b89-45f9-a738-fd87347de40a-Michael Sjoberg 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-82be0829-3b89-45f9-a738-fd87347de40a-Michael%20Sjoberg%20180x180.jpg"
      },
      "speakerTitle": "Producer, King",
      "updatedAt": "2015-03-10T01:35:58.223Z"
    }, {
      "createdAt": "2015-03-10T01:31:52.190Z",
      "objectId": "wg9Zmd6P6z",
      "speakerName": "Jimmy Lee",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-bee6fbaa-31b8-421d-a038-e117d01186de-Jimmy Lee 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-bee6fbaa-31b8-421d-a038-e117d01186de-Jimmy%20Lee%20180x180.jpg"
      },
      "speakerTitle": "Media Lead, Supercell",
      "updatedAt": "2015-03-10T01:38:24.218Z"
    }, {
      "createdAt": "2015-03-10T01:17:22.701Z",
      "objectId": "BArYDeGmZC",
      "speakerName": "Mike Schroepfer",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-d9d08d30-fff3-4150-af94-651542466bb1-Mike Schroepfer.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-d9d08d30-fff3-4150-af94-651542466bb1-Mike%20Schroepfer.jpg"
      },
      "speakerTitle": "CTO, Facebook",
      "updatedAt": "2015-03-10T01:46:23.139Z"
    }, {
      "createdAt": "2015-02-27T22:17:01.326Z",
      "objectId": "kDE1tVfn0M",
      "speakerName": "Ming Li",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-267aba35-a1de-4776-9d3c-188f22981326-Ming Li 180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-267aba35-a1de-4776-9d3c-188f22981326-Ming%20Li%20180x180.jpg"
      },
      "speakerTitle": "Software Engineer, Platform, Facebook",
      "updatedAt": "2015-03-12T23:23:35.635Z"
    }, {
      "createdAt": "2015-03-12T23:34:41.503Z",
      "objectId": "Q9SS6YD8GK",
      "speakerName": "Sheila Rathnam",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-2d21c570-477e-4f64-b584-700a558a2702-Sheila-Rathnam-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-2d21c570-477e-4f64-b584-700a558a2702-Sheila-Rathnam-180x180.jpg"
      },
      "speakerTitle": "Head of Mobile Platform Partnerships, Facebook",
      "updatedAt": "2015-03-21T19:01:51.581Z"
    }, {
      "createdAt": "2015-03-18T20:58:55.848Z",
      "objectId": "m8cvHyYRy6",
      "speakerName": "Christian Legnitto",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-646be599-bb23-4907-884c-cd8dcd86ad3d-Christian-Legnitto-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-646be599-bb23-4907-884c-cd8dcd86ad3d-Christian-Legnitto-180x180.jpg"
      },
      "speakerTitle": "Engineering Manager, Facebook",
      "updatedAt": "2015-03-18T21:04:23.955Z"
    }, {
      "createdAt": "2015-03-19T18:46:18.999Z",
      "objectId": "BPZfj7S9hj",
      "speakerName": "Seth Rosenberg",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-e5169a15-ecb3-4514-b747-64fb40aa2f6e-Seth-Rosenberg-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e5169a15-ecb3-4514-b747-64fb40aa2f6e-Seth-Rosenberg-180x180.jpg"
      },
      "speakerTitle": "Product Manager, Facebook",
      "updatedAt": "2015-03-24T04:04:07.842Z"
    }, {
      "createdAt": "2015-03-19T18:46:12.066Z",
      "objectId": "OnuH0UNGvM",
      "speakerName": "Lexy Franklin",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-58f3e58a-022d-4530-b7cb-70417a65c7e0-Lexy-Franklin-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-58f3e58a-022d-4530-b7cb-70417a65c7e0-Lexy-Franklin-180x180.jpg"
      },
      "speakerTitle": "Product Manager, Facebook",
      "updatedAt": "2015-03-24T04:00:07.926Z"
    }, {
      "createdAt": "2015-03-19T18:46:07.136Z",
      "objectId": "4Ksw9tDAUA",
      "speakerName": "Matt Steiner",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-f40ffb75-b0c5-4e75-853c-9dd77ae4f364-Matt-Steiner-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f40ffb75-b0c5-4e75-853c-9dd77ae4f364-Matt-Steiner-180x180.jpg"
      },
      "speakerTitle": "Engineering Director, Facebook",
      "updatedAt": "2015-03-24T04:00:15.089Z"
    }, {
      "createdAt": "2015-03-19T18:52:19.288Z",
      "objectId": "zEO2Jq5z1W",
      "speakerName": "Egor Kunovsky",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-41a0eb41-59de-4ab9-95a3-02682a30c4a7-Egor-Apalon-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-41a0eb41-59de-4ab9-95a3-02682a30c4a7-Egor-Apalon-180x180.jpg"
      },
      "speakerTitle": "CPO, Apalon",
      "updatedAt": "2015-03-19T18:55:20.939Z"
    }, {
      "createdAt": "2015-03-12T23:35:06.382Z",
      "objectId": "sIQQjJPdtV",
      "speakerName": "Serena Wu",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-b458be76-8191-4636-ba84-dfdd37e8b5fc-Serena-Wu-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-b458be76-8191-4636-ba84-dfdd37e8b5fc-Serena-Wu-180x180.jpg"
      },
      "speakerTitle": "CCO, Kitchenbowl",
      "updatedAt": "2015-03-19T18:55:54.564Z"
    }, {
      "createdAt": "2015-03-12T23:35:20.848Z",
      "objectId": "UYzQjfy30q",
      "speakerName": "Chuck Dietrich",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-58cc643e-85e7-4a36-89aa-f413b450f676-Chuck-Dietrich-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-58cc643e-85e7-4a36-89aa-f413b450f676-Chuck-Dietrich-180x180.jpg"
      },
      "speakerTitle": "CEO, MileIQ",
      "updatedAt": "2015-03-19T18:55:59.654Z"
    }, {
      "createdAt": "2015-03-12T23:35:31.719Z",
      "objectId": "fPT0DUs607",
      "speakerName": "Parag Vaish",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-05edeb47-3f32-4c7e-b565-e9c72b7ee9a3-Parag-Vaish-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-05edeb47-3f32-4c7e-b565-e9c72b7ee9a3-Parag-Vaish-180x180.jpg"
      },
      "speakerTitle": "Director, Stubhub",
      "updatedAt": "2015-03-19T18:56:04.488Z"
    }, {
      "createdAt": "2015-03-24T04:09:44.235Z",
      "objectId": "hIfEmIwHye",
      "speakerName": "Joyce Li",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-1ae8ad96-721c-4c79-9aa0-b136bd79e172-Joyce-Li-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-1ae8ad96-721c-4c79-9aa0-b136bd79e172-Joyce-Li-180x180.jpg"
      },
      "speakerTitle": "Product Marketing Manager, Facebook",
      "updatedAt": "2015-03-24T04:12:31.644Z"
    }, {
      "createdAt": "2015-03-24T04:15:03.650Z",
      "objectId": "8EK1YoCBNk",
      "speakerName": "Kate Gorman",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-befabae5-7d70-4e05-a313-79a41eba59aa-Kate-Gorman-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-befabae5-7d70-4e05-a313-79a41eba59aa-Kate-Gorman-180x180.jpg"
      },
      "speakerTitle": "Director of Product, Zynga",
      "updatedAt": "2015-03-24T04:15:47.630Z"
    }, {
      "createdAt": "2015-03-25T18:10:00.215Z",
      "objectId": "AWxkmBu6yx",
      "speakerName": "Rob Daniel",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-cd6767a8-0b8f-4602-aa62-6c44b388ce9a-Rob-Daniel-180x180.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-cd6767a8-0b8f-4602-aa62-6c44b388ce9a-Rob-Daniel-180x180.jpg"
      },
      "speakerTitle": "Product Manager, Facebook",
      "updatedAt": "2015-03-25T18:11:04.442Z"
    }, {
      "createdAt": "2015-03-26T15:24:21.583Z",
      "objectId": "PYhWrfwYT7",
      "speakerName": "Franci Penov",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-93cfa9bf-8c33-4360-89b8-1f49de79cbee-Franci-Penov.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-93cfa9bf-8c33-4360-89b8-1f49de79cbee-Franci-Penov.jpg"
      },
      "speakerTitle": "Software Engineer, Facebook",
      "updatedAt": "2015-03-26T15:26:53.571Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "createdAt": "2015-01-07T23:54:27.656Z",
      "objectId": "nbvCtvNvJn",
      "speakerName": "Inga Halpin",
      "speakerPic": {
        "__type": "File",
        "name": "tfss-000ef9a4-76fa-4fcd-9eae-3c56d589de0c-Inga_Halpin.jpg",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-000ef9a4-76fa-4fcd-9eae-3c56d589de0c-Inga_Halpin.jpg"
      },
      "speakerTitle": "Partner Engineer, Platform, Facebook",
      "updatedAt": "2015-01-26T22:38:12.115Z"
    }]
  })
});

router.all('/1/classes/Agenda', function(req, res, next) {
  console.log("LOL")
  res.send({
    "results": [{
      "allDay": false,
      "createdAt": "2015-01-07T19:24:27.019Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:30:00.000Z"
      },
      "hasDetails": false,
      "objectId": "JQZiI4KrCf",
      "onMySchedule": true,
      "sessionSlug": "break-day-1",
      "sessionTitle": "Break",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-02-17T19:55:32.388Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:27:48.548Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:00:00.000Z"
      },
      "hasDetails": false,
      "objectId": "3fcHt9Unc7",
      "onMySchedule": true,
      "sessionSlug": "lunch-day-2",
      "sessionTitle": "Lunch",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T11:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-02-17T19:55:50.686Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:49:44.054Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:30:00.000Z"
      },
      "hasDetails": false,
      "objectId": "oThBejlhrj",
      "onMySchedule": true,
      "sessionSlug": "break-day-2",
      "sessionTitle": "Break",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-02-17T19:56:02.299Z"
    }, {
      "allDay": true,
      "createdAt": "2015-01-07T19:57:07.320Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T18:00:00.000Z"
      },
      "hasDetails": true,
      "objectId": "MeZ8SQ7LQi",
      "sessionSlug": "lab-simulations-day-2",
      "sessionTitle": "Demos",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T11:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-17T00:55:44.626Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:25:27.444Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T20:00:00.000Z"
      },
      "hasDetails": false,
      "objectId": "IB8fjSAnyT",
      "onMySchedule": true,
      "sessionLocation": "",
      "sessionSlug": "end-of-day-celebration",
      "sessionTitle": "End of Day Celebration with deadmau5",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T17:30:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-25T21:22:07.823Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:51:07.749Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/building-for-commerce",
      "hasDetails": true,
      "objectId": "fX3uC5IwZb",
      "sessionDescription": "Learn how to use all of Facebook's tools to help build and grow your commerce business.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-a695ea4d-d92e-4d21-a303-01992c4f8d54-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-a695ea4d-d92e-4d21-a303-01992c4f8d54-map-hacker-x.png"
      },
      "sessionSlug": "building-for-commerce",
      "sessionTitle": "Building for Commerce",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "p41xz91cM2"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:00:00.000Z"
      },
      "tags": [
        "Commerce"
      ],
      "updatedAt": "2015-03-17T01:18:37.627Z"
    }, {
      "allDay": false,
      "createdAt": "2015-03-25T18:07:34.332Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/businesses-on-messenger",
      "hasDetails": true,
      "objectId": "A7NYy1XO9r",
      "sessionDescription": "Learn about our first steps to bringing businesses on Messenger with the goal of introducing a new way for people and businesses to communicate.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-ec44648a-fc46-4de6-87b7-9623db113328-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-ec44648a-fc46-4de6-87b7-9623db113328-map-hacker-x.png"
      },
      "sessionSlug": "businesses-on-messenger",
      "sessionTitle": "Businesses on Messenger: Enhancing Communications Between People and Businesses",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "AWxkmBu6yx"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:00:00.000Z"
      },
      "tags": [
        "Building Tools",
        "Commerce",
        "Design"
      ],
      "updatedAt": "2015-03-25T19:10:40.141Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:15:40.244Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/how-facebook-grows",
      "hasDetails": true,
      "objectId": "HJko9mkIFt",
      "sessionDescription": "We'll share tips and strategies you can apply from Facebook’s growth team to your business.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-87701704-d97e-4685-96f9-be947c7bce09-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-87701704-d97e-4685-96f9-be947c7bce09-map-herbst-a.png"
      },
      "sessionSlug": "how-facebook-grows",
      "sessionTitle": "How Facebook Grows",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "qrtgqZNRNo"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:00:00.000Z"
      },
      "tags": [
        "Games",
        "Media & Publishing",
        "Commerce",
        "Growth & Ads",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:17:57.512Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:18:05.973Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/social-plugins-driving-growth-through-rich-social-experiences",
      "hasDetails": true,
      "objectId": "QxJPtPLR5s",
      "sessionDescription": "Get tips on using Social Plugins, including the improved Comments Plugin and the New Embedded Video Player, to create rich social experiences on your app or site — helping you grow and engage your audience.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-d5fd6404-a97f-4a8e-82b2-ee0941fcb05c-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-d5fd6404-a97f-4a8e-82b2-ee0941fcb05c-map-hacker-x.png"
      },
      "sessionSlug": "social-plugins-driving-growth-through-rich-social-experiences",
      "sessionTitle": "Learn How Social Plugins Can Help Grow and Engage Your Audience",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "v76omDc7dE"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "3tj6oknGDC"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:00:00.000Z"
      },
      "tags": [
        "Growth & Ads",
        "Media & Publishing",
        "Commerce",
        "Games"
      ],
      "updatedAt": "2015-03-25T19:14:38.851Z"
    }, {
      "allDay": false,
      "createdAt": "2015-03-19T19:21:37.522Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T10:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/keynote-innovation-at-facebook",
      "hasDetails": true,
      "objectId": "wo6klcZ3Ys",
      "onMySchedule": true,
      "sessionDescription": "Hear from Facebook's Chief Technology Officer on the latest work from the Connectivity Lab, Facebook AI Research, and Oculus and how these efforts are changing the future of communications and technology.  ",
      "sessionSlug": "keynote-innovation-at-facebook",
      "sessionTitle": "Keynote: Innovation at Facebook",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "BArYDeGmZC"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T10:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-24T20:03:31.891Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:38:37.576Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/getting-started-with-parse",
      "hasDetails": true,
      "objectId": "hwa7o4oAj2",
      "sessionDescription": "Join us for an interactive introduction to Parse, where you’ll get everything you need to build an awesome app in just minutes. We'll walk through building a simple app on Parse using the breadth of the platform.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-8b7197f0-3c9e-4960-8a42-4b4db25b04e0-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-8b7197f0-3c9e-4960-8a42-4b4db25b04e0-map-cowell.png"
      },
      "sessionSlug": "getting-started-with-parse",
      "sessionTitle": "Getting Started With Parse",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "coDU3YRjFq"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "GA9SUT8Zcz"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:00:00.000Z"
      },
      "tags": [
        "Parse"
      ],
      "updatedAt": "2015-03-17T01:18:57.424Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:28:15.020Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:00:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/facebook-on-ios-inside-the-big-blue-app",
      "hasDetails": true,
      "objectId": "6jFYRzFDU8",
      "sessionDescription": "Learn about the architecture and libraries inside Facebook's iOS apps, and the specific challenges they are designed to solve.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-5d642a63-f56c-4128-a396-4425b0754425-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-5d642a63-f56c-4128-a396-4425b0754425-map-cowell.png"
      },
      "sessionSlug": "facebook-on-ios-inside-the-big-blue-app",
      "sessionTitle": "Facebook on iOS: Inside the \"Big Blue App\"",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "llOCMLrBgQ"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "QWok3RmIB3"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "uxHCZjbDz4"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T15:00:00.000Z"
      },
      "tags": [
        "Open Source",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:17:12.328Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:42:31.906Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/designing-a-great-onboarding-experience",
      "hasDetails": true,
      "objectId": "j0KpsIdmC1",
      "sessionDescription": "Great onboarding experiences result in high conversion rates, and set users up to have the best experience possible in that app. Learn the ingredients of successful onboarding experiences and how to approach designing your own.",
      "sessionLocation": "Herbst B",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-cd3b9738-7d5f-4c35-852c-21155bd4d984-map-herbst-b.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-cd3b9738-7d5f-4c35-852c-21155bd4d984-map-herbst-b.png"
      },
      "sessionSlug": "designing-a-great-onboarding-experience",
      "sessionTitle": "Designing a Great Onboarding Experience",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "hIfEmIwHye"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "Mqgc6cymyL"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:30:00.000Z"
      },
      "tags": [
        "Design",
        "Building Tools",
        "Commerce",
        "Games",
        "Media & Publishing",
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-24T04:13:55.380Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:49:02.539Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/running-at-scale-on-parse",
      "hasDetails": true,
      "objectId": "LDHksjEwVf",
      "sessionDescription": "Once you’ve built an app, you know the next step: Grow! We’ll share tips from high-traffic apps powered by Parse today, plus tips for designing and building your app with scalability in mind from the start.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-3caaf98e-0420-4e69-a82c-a82cb15c3b9d-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-3caaf98e-0420-4e69-a82c-a82cb15c3b9d-map-cowell.png"
      },
      "sessionSlug": "running-at-scale-on-parse",
      "sessionTitle": "Running at Scale on Parse",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "ozcHI6IsOz"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "PdHpq2oGfc"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:30:00.000Z"
      },
      "tags": [
        "Parse"
      ],
      "updatedAt": "2015-03-17T01:27:42.860Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:51:42.261Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T17:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/designing-for-keeps-how-to-build-a-loyal-customer-base",
      "hasDetails": true,
      "objectId": "7qNps8yZ6G",
      "sessionDescription": "Hear from a panel of experts from innovative companies as they discuss how to attract and retain their audiences.",
      "sessionLocation": "Herbst B",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-7a828018-e435-4337-b537-f52007c3c5fc-map-herbst-b.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7a828018-e435-4337-b537-f52007c3c5fc-map-herbst-b.png"
      },
      "sessionSlug": "designing-for-keeps-how-to-build-a-loyal-customer-base",
      "sessionTitle": "Designing for Keeps: How to Build a Loyal Customer Base",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "YhzIYGSmwy"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:30:00.000Z"
      },
      "tags": [
        "Design",
        "Building Tools",
        "Commerce",
        "Games",
        "Media & Publishing"
      ],
      "updatedAt": "2015-03-17T01:20:25.743Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:53:04.447Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T17:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/advertising-101-for-games",
      "hasDetails": true,
      "objectId": "rkdztNfD8p",
      "sessionDescription": "Get an overview of how to use Facebook advertising to market games. This session highlights best practices for player acquisition, remarketing, targeting and measurement.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-dad7eb22-1ae2-481e-bc5e-2c8e426687f9-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-dad7eb22-1ae2-481e-bc5e-2c8e426687f9-map-hacker-y.png"
      },
      "sessionSlug": "advertising-101-for-games",
      "sessionTitle": "Advertising 101 for Games",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "9BBS31aUPM"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:30:00.000Z"
      },
      "tags": [
        "Games",
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-17T01:19:19.503Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:24:57.079Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T17:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/conversation-with-whatsapp-instagram-and-messenger",
      "hasDetails": true,
      "objectId": "8MePniGtya",
      "onMySchedule": false,
      "sessionDescription": "Join leaders from WhatsApp, Instagram and Messenger as they discuss the future of communications and messaging. Moderated by Mary Meeker, partner at Kleiner Perkins Caufield & Byers.",
      "sessionLocation": "Herbst",
      "sessionSlug": "conversation-with-whatsapp-instagram-and-messenger",
      "sessionTitle": "Conversation With WhatsApp, Instagram and Messenger",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "qOYYkreiou"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "H365R5p5CH"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "FuXrMyX4LC"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:30:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-25T23:24:53.128Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:50:11.455Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T17:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/big-code-developer-infrastructure-at-facebooks-scale",
      "hasDetails": true,
      "objectId": "n0gsUDqfwa",
      "sessionDescription": "What is it like to build mobile apps at Facebook? Join us as we tour the toolchain that allows thousands of engineers to build apps faster, and for more platforms, than ever before.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-93b2f535-c0fe-4e8b-b1bf-73a5d6564647-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-93b2f535-c0fe-4e8b-b1bf-73a5d6564647-map-herbst-a.png"
      },
      "sessionSlug": "big-code-developer-infrastructure-at-facebooks-scale",
      "sessionTitle": "Big Code: Developer Infrastructure at Facebook's Scale",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "m8cvHyYRy6"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "60E6TOoAIo"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "q1VXkbItTu"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:30:00.000Z"
      },
      "tags": [
        "Open Source",
        "Building Tools"
      ],
      "updatedAt": "2015-03-18T21:01:09.479Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:39:37.459Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/move-fast-ensuring-mobile-performance-without-breaking-things",
      "hasDetails": true,
      "objectId": "qtxtJzpSoM",
      "sessionDescription": "On mobile, every second and every byte counts. Hear about the tools and techniques that we use to deliver the fastest & most efficient apps we can, whatever the platform.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-7234813e-7d12-428c-9c72-3d47dc4bd374-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7234813e-7d12-428c-9c72-3d47dc4bd374-map-herbst-a.png"
      },
      "sessionSlug": "move-fast-ensuring-mobile-performance-without-breaking-things",
      "sessionTitle": "Move Fast: Ensuring Mobile Performance Without Breaking Things",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "rcPdqmK1JH"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "6QgbyOcOr4"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "yIlpZd2idF"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:30:00.000Z"
      },
      "tags": [
        "Open Source",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:27:51.665Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:45:21.697Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/lifting-the-curtain-the-data-infrastructure-behind-facebook-apps",
      "hasDetails": true,
      "objectId": "vDPDMy2lue",
      "sessionDescription": "Join us as we tour the extensive data infrastructure and pipelines that we build and run in order to serve hundreds of millions of mobile users.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-390df268-4c01-4a7b-b4a8-232bcbf59c15-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-390df268-4c01-4a7b-b4a8-232bcbf59c15-map-herbst-a.png"
      },
      "sessionSlug": "lifting-the-curtain-the-data-infrastructure-behind-facebook-apps",
      "sessionTitle": "Lifting the Curtain: the Data Infrastructure Behind Facebook Apps",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "oupZuC68Yn"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "fjD5omFl1j"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "OPY1PSRpj7"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:30:00.000Z"
      },
      "tags": [
        "Open Source"
      ],
      "updatedAt": "2015-03-17T01:20:08.633Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:20:28.820Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/bringing-modern-web-techniques-to-mobile",
      "hasDetails": true,
      "objectId": "0qcKGi7lhK",
      "sessionDescription": "Learn how we use JavaScript libraries like React, Flux and Flow to help our engineers develop great mobile experiences ever more efficiently.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-63538235-8141-45ac-92b8-d7dccef9308d-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-63538235-8141-45ac-92b8-d7dccef9308d-map-herbst-a.png"
      },
      "sessionSlug": "bringing-modern-web-techniques-to-mobile",
      "sessionTitle": "React Native and Relay: Bringing Modern Web Techniques to Mobile",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "RQHffWJCgA"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "kxAMHfBzNh"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "2ArUpI57FG"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:00:00.000Z"
      },
      "tags": [
        "Open Source",
        "Building Tools"
      ],
      "updatedAt": "2015-03-26T17:08:24.654Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:29:57.702Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/growing-your-business-with-facebook-ads",
      "hasDetails": true,
      "objectId": "BOIdYgr9BJ",
      "sessionDescription": "Get an introduction to all our ads products and a good understanding of when to use what, and what is most relevant for apps.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-9974f865-a596-4231-a070-75893fde88b0-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9974f865-a596-4231-a070-75893fde88b0-map-hacker-x.png"
      },
      "sessionSlug": "growing-your-business-with-facebook-ads",
      "sessionTitle": "Growing Your Business With Facebook Ads",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "RSG7pPKArj"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:30:00.000Z"
      },
      "tags": [
        "Growth & Ads",
        "Games",
        "Commerce",
        "Media & Publishing"
      ],
      "updatedAt": "2015-03-17T01:19:08.188Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:30:43.189Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/great-experiences-with-app-links-and-mobile-app-architecture",
      "hasDetails": true,
      "objectId": "cJw7h7EOhR",
      "sessionDescription": "Learn how to design great experiences using app links with examples you can apply.",
      "sessionLocation": "Herbst B",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-73cb48e6-8e1e-429f-a83a-a49d93748368-map-herbst-b.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-73cb48e6-8e1e-429f-a83a-a49d93748368-map-herbst-b.png"
      },
      "sessionSlug": "great-experiences-with-app-links-and-mobile-app-architecture",
      "sessionTitle": "Great Experiences with App Links and Mobile App Architecture",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "kDE1tVfn0M"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "FGcHd4B8Ci"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:00:00.000Z"
      },
      "tags": [
        "Building Tools",
        "Parse",
        "Open Source",
        "Media & Publishing",
        "Commerce",
        "Design",
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-17T01:28:27.824Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:32:32.670Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/bringing-instagrams-community-and-creativity-to-your-site",
      "hasDetails": true,
      "objectId": "aWDKEy48Hh",
      "sessionDescription": "Learn how to use Instagram's API platform and embeds to inspire your own community.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-55de001c-e3fa-424a-9d2c-a8ca5545394f-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-55de001c-e3fa-424a-9d2c-a8ca5545394f-map-cowell.png"
      },
      "sessionSlug": "bringing-instagrams-community-and-creativity-to-your-site",
      "sessionTitle": "Bringing Instagram's Community and Creativity to Your Site",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "IZQzh0eM1K"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:00:00.000Z"
      },
      "tags": [
        "Growth & Ads",
        "Commerce",
        "Media & Publishing"
      ],
      "updatedAt": "2015-03-17T01:18:42.570Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:36:25.864Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/grow-your-app-organically",
      "hasDetails": true,
      "objectId": "yEWjRUSOAV",
      "sessionDescription": "Dive into how to use Facebook’s sharing products, including App Invites, to help your app grow.",
      "sessionLocation": "Herbst B",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-0d69e886-d6c3-4537-ab87-6db6a944b1fc-map-herbst-b.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-0d69e886-d6c3-4537-ab87-6db6a944b1fc-map-herbst-b.png"
      },
      "sessionSlug": "grow-your-app-organically",
      "sessionTitle": "Grow Your App Organically with Sharing and App Invites",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "7VeZJAy2Gy"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "XgfNY1BlJ7"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:00:00.000Z"
      },
      "tags": [
        "Growth & Ads",
        "Media & Publishing",
        "Commerce",
        "Games"
      ],
      "updatedAt": "2015-03-25T18:02:37.587Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:34:08.139Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/evolving-facebook-for-android",
      "hasDetails": true,
      "objectId": "gRdD7yp4CI",
      "sessionDescription": "Hear about recent improvements to our Android product infrastructure and how we're focused on bringing great experiences to people in diverse markets all around the world.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-e9481327-8db0-4f14-8df1-5134d73dece8-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e9481327-8db0-4f14-8df1-5134d73dece8-map-herbst-a.png"
      },
      "sessionSlug": "evolving-facebook-for-android",
      "sessionTitle": "Evolving Facebook for Android: Engineering for an Ever-Changing Mobile World",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "o8YGtQveCo"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "PRsz2yX56u"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "t3FfpYBTGb"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:00:00.000Z"
      },
      "tags": [
        "Open Source",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:19:15.104Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:40:56.702Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/implementing-and-understanding-app-events",
      "hasDetails": true,
      "objectId": "2Pwo6pAyIv",
      "sessionDescription": "Learn how to implement and use Facebook Analytics for Apps. We will cover specific examples to help you get started.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-0a1d1f6d-28a0-4be9-9ed9-396aafbe3fba-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-0a1d1f6d-28a0-4be9-9ed9-396aafbe3fba-map-hacker-y.png"
      },
      "sessionSlug": "implementing-and-understanding-app-events",
      "sessionTitle": "Implementing and Understanding Facebook Analytics for Apps",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "m3OCdOZelQ"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "07YeEGd0mf"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T12:00:00.000Z"
      },
      "tags": [
        "Games",
        "Media & Publishing",
        "Commerce",
        "Growth & Ads",
        "Building Tools"
      ],
      "updatedAt": "2015-03-26T17:02:03.461Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:46:14.246Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/best-practices-for-monetizing-with-ads",
      "hasDetails": true,
      "objectId": "qmXGSJD0Sg",
      "sessionDescription": "Explore effective strategies for growing revenue with ads in your app.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-f139a34a-5f9b-40b8-b408-e3e9f3764354-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f139a34a-5f9b-40b8-b408-e3e9f3764354-map-hacker-y.png"
      },
      "sessionSlug": "best-practices-for-monetizing-with-ads",
      "sessionTitle": "Best Practices for Monetizing with Ads",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "eSycehMGV8"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "6N5gKoQVg0"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T13:00:00.000Z"
      },
      "tags": [
        "Monetization",
        "Games",
        "Media & Publishing",
        "Commerce",
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-17T01:19:02.013Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:25:58.489Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T11:00:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/keynote-why-virtual-reality-will-matter-to-you",
      "hasDetails": true,
      "objectId": "P94dPfsCkj",
      "onMySchedule": true,
      "sessionDescription": "Maybe not today, maybe not tomorrow, but someday and for the rest of your life – this talk will explain why you’re going to care about virtual reality and what it means for developers.  ",
      "sessionSlug": "keynote-why-virtual-reality-will-matter-to-you",
      "sessionTitle": "Keynote: Why Virtual Reality Will Matter to You",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "BkmHFe7p5s"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T10:30:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-24T20:00:02.322Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T18:29:30.255Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/the-latest-and-greatest-from-parse",
      "hasDetails": true,
      "objectId": "XqbG67XUWN",
      "sessionDescription": "Introducing five new Parse products including Parse for Internet of Things, Parse + React support, and much more.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-8a901b77-e18f-4d88-872c-755086e6328d-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-8a901b77-e18f-4d88-872c-755086e6328d-map-hacker-y.png"
      },
      "sessionSlug": "the-latest-and-greatest-from-parse",
      "sessionTitle": "The Latest and Greatest from Parse",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "PYhWrfwYT7"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "NLgC8bkQJu"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "SDNdrEZv0C"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:00:00.000Z"
      },
      "tags": [
        "Parse"
      ],
      "updatedAt": "2015-03-26T15:26:22.124Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:14:46.589Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/build-products-with-privacy-in-mind",
      "hasDetails": true,
      "objectId": "5iR5GPPZ7H",
      "sessionDescription": "Hear insights on building privacy into products and helping people feel in control of their experiences.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-20476504-881f-4578-a977-fec8837d273e-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-20476504-881f-4578-a977-fec8837d273e-map-cowell.png"
      },
      "sessionSlug": "build-products-with-privacy-in-mind",
      "sessionTitle": "Build Products With Privacy in Mind",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "U1CIOPCPAU"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:00:00.000Z"
      },
      "tags": [
        "Security"
      ],
      "updatedAt": "2015-03-17T01:28:12.055Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:13:04.367Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/get-the-most-out-of-login-and-graph-api-2x-for-your-app",
      "hasDetails": true,
      "objectId": "fUwVha7Ylu",
      "sessionDescription": "Learn how the newest features of Login, Graph API v2.3, and SDK v4.0 can help you optimize your app to run smoothly on mobile devices. Plus, get tips for upgrading your app to the new Login and Graph API v2.x.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-cf2b06cd-6fc5-4277-9d2c-b847b8fb5e86-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-cf2b06cd-6fc5-4277-9d2c-b847b8fb5e86-map-hacker-y.png"
      },
      "sessionSlug": "get-the-most-out-of-login-and-graph-api-2x-for-your-app",
      "sessionTitle": "Get the Most Out of Login, Graph API 2.3, and SDK v4.0",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "4UGxdEBdpw"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "j8kJAzQ2vk"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:00:00.000Z"
      },
      "tags": [
        "Building Tools",
        "Media & Publishing",
        "Commerce",
        "Games"
      ],
      "updatedAt": "2015-03-25T18:03:45.822Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T18:33:38.826Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/implement-facebook-login-securely",
      "hasDetails": true,
      "objectId": "lSaSpipGNJ",
      "sessionDescription": "Learn how to securely build a custom Facebook Login flow for both client and server apps. We’ll tell you how to avoid common vulnerabilities while dealing with OAuth access tokens and app secrets.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-e09be493-46e7-4b41-8407-83718a2e4adc-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e09be493-46e7-4b41-8407-83718a2e4adc-map-cowell.png"
      },
      "sessionSlug": "implement-facebook-login-securely",
      "sessionTitle": "Implement Facebook Login Securely",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "Whvr9bAIm7"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "7LqCiULGAp"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:00:00.000Z"
      },
      "tags": [
        "Security",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:17:50.572Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:22:06.158Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:00:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/generating-revenue-with-ads-powered-by-facebook",
      "hasDetails": true,
      "objectId": "eHrJQ9Vd6O",
      "sessionDescription": "Learn more about LiveRail's new people-based monetization solution for mobile app and video publishers and developers.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-42ee4ac5-7a64-4b66-9f29-0a35a9751968-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-42ee4ac5-7a64-4b66-9f29-0a35a9751968-map-hacker-y.png"
      },
      "sessionSlug": "generating-revenue-with-ads-powered-by-facebook",
      "sessionTitle": "Generating Revenue with Ads Powered by LiveRail",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "oSMgRDGCDq"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "jnmVRtjuA5"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T15:00:00.000Z"
      },
      "tags": [
        "Monetization",
        "Games",
        "Media & Publishing",
        "Commerce",
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-25T18:04:59.805Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:35:35.733Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T17:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/creating-apps-and-businesses-on-facebook-ads-api",
      "hasDetails": true,
      "objectId": "WAMkQuXM5z",
      "sessionDescription": "Get the latest updates on Ads APIs, hear from partners using these APIs, and learn how to get started.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-cbc8c226-77e6-42e6-a888-91d5fde03cad-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-cbc8c226-77e6-42e6-a888-91d5fde03cad-map-hacker-x.png"
      },
      "sessionSlug": "creating-apps-and-businesses-on-facebook-ads-api",
      "sessionTitle": "Creating Apps and Businesses on Facebook Ads API",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "nIIGpCEv5h"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "lhncX4qxGC"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "ct9JGLNlt7"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:30:00.000Z"
      },
      "tags": [
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-17T01:20:13.696Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:43:36.819Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/mobile-games-panel-cracking-the-cross-on-discovery-and-retention",
      "hasDetails": true,
      "objectId": "bSOsa3rm17",
      "sessionDescription": "Leading mobile game studios discuss the challenges of an ever evolving ecosystem, including marketing strategies, monetization models, useful tools for growing a player base, and what’s next for mobile games.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-951a53d2-5773-4114-8477-94ad03b08d9c-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-951a53d2-5773-4114-8477-94ad03b08d9c-map-hacker-y.png"
      },
      "sessionSlug": "mobile-games-panel-cracking-the-cross-on-discovery-and-retention",
      "sessionTitle": "Mobile Games Panel: Cracking the Code on Discovery & Retention",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "fLbJ12l6tc"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "wg9Zmd6P6z"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "tjQC1WAFU8"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "qSFDVRB44P"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "jRrHML1qeu"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "8EK1YoCBNk"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:30:00.000Z"
      },
      "tags": [
        "Games"
      ],
      "updatedAt": "2015-03-24T04:19:43.777Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:16:51.948Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/how-news-feed-works",
      "hasDetails": true,
      "objectId": "oWCiiTpBWF",
      "sessionDescription": "Hear about News Feed from the experts and learn the best ways to make sure your posts are seen by the people who will care about them most. Chris Cox, Facebook's Chief Product Officer, will introduce this session.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-7c4ce2de-6915-4d71-824e-c81382a01d6e-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-7c4ce2de-6915-4d71-824e-c81382a01d6e-map-hacker-x.png"
      },
      "sessionSlug": "how-news-feed-works",
      "sessionTitle": "How News Feed Works",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "hwrXOvQG5b"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "HldwUZXrmB"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:00:00.000Z"
      },
      "tags": [
        "Media & Publishing",
        "Building Tools"
      ],
      "updatedAt": "2015-03-25T16:05:37.959Z"
    }, {
      "allDay": false,
      "createdAt": "2015-03-12T23:24:36.103Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T17:30:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/how-mobile-focused-startups-are-building-their-businesses-on-parse",
      "hasDetails": true,
      "objectId": "tXgiNMr4ce",
      "sessionDescription": "What does it take to build a successful, mobile-focused business? During this panel, hear from startup CEOs and leadership who have done it by leveraging Parse and Facebook tools -- and learn how to apply their best practices to your app.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-9ecf1f0a-dac1-48fb-b5f6-0e131481118a-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-9ecf1f0a-dac1-48fb-b5f6-0e131481118a-map-cowell.png"
      },
      "sessionSlug": "how-mobile-focused-startups-are-building-their-businesses-on-parse",
      "sessionTitle": "How Mobile-Focused Startups Are Building Their Businesses on Parse",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "Q9SS6YD8GK"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "sIQQjJPdtV"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "UYzQjfy30q"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "fPT0DUs607"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "zEO2Jq5z1W"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:30:00.000Z"
      },
      "tags": [
        "Parse"
      ],
      "updatedAt": "2015-03-19T18:58:14.187Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:48:20.464Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/tip-tricks-and-tools-for-game-discovery-and-engagement",
      "hasDetails": true,
      "objectId": "BrnkYLihCj",
      "sessionDescription": "Whether your game is mobile, web or console, learn how to unlock new organic distribution, virality, and re-engagement via Facebook’s features and services.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-2a24b360-6632-4fdb-ac28-e2731668f920-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-2a24b360-6632-4fdb-ac28-e2731668f920-map-hacker-y.png"
      },
      "sessionSlug": "tip-tricks-and-tools-for-game-discovery-and-engagement",
      "sessionTitle": "Tips, Tricks, and Tools for Game Discovery and Engagement",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "n7jsuWZ4md"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "2S6GiLajMf"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "nbvCtvNvJn"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:30:00.000Z"
      },
      "tags": [
        "Games",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:18:48.144Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T18:35:27.630Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/lessons-from-creative-labs",
      "hasDetails": true,
      "objectId": "MWAx4bq1jE",
      "sessionDescription": "The Creative Labs group works with teams throughout Facebook to help them build innovative mobile apps. Hear what we've learned about building and growing our standalone apps.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-992129e3-ff65-40d5-90a9-9ef83ad6a8e1-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-992129e3-ff65-40d5-90a9-9ef83ad6a8e1-map-herbst-a.png"
      },
      "sessionSlug": "lessons-from-creative-labs",
      "sessionTitle": "Lessons From Creative Labs",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "UUfvngLihI"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "O4N5tvKjRk"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:00:00.000Z"
      },
      "tags": [
        "Design",
        "Parse",
        "Growth & Ads",
        "Media & Publishing",
        "Building Tools"
      ],
      "updatedAt": "2015-03-17T01:17:18.047Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:23:06.794Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/smarter-decisions-with-app-insights",
      "hasDetails": true,
      "objectId": "xiYsr7OEGf",
      "sessionDescription": "Introducing Facebook Analytics for Apps - understand your audience, measure how people use your app across devices and grow your business.",
      "sessionLocation": "Hacker Y",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-4b41bd66-ba9a-42d1-9aa6-8c6b8e7d4646-map-hacker-y.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-4b41bd66-ba9a-42d1-9aa6-8c6b8e7d4646-map-hacker-y.png"
      },
      "sessionSlug": "smarter-decisions-with-app-insights",
      "sessionTitle": "Build Better Experiences with Facebook Analytics for Apps",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "hSfoBltK7e"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "Xxfs4bz3Uu"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:00:00.000Z"
      },
      "tags": [
        "Games",
        "Media & Publishing",
        "Commerce",
        "Parse",
        "Growth & Ads",
        "Building Tools"
      ],
      "updatedAt": "2015-03-25T19:14:59.043Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:19:37.615Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/conquer-hard-security-decisions-early",
      "hasDetails": true,
      "objectId": "K7eT39hVgg",
      "sessionDescription": "Learn how to build secure products by making the right design decisions early on.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-c032864d-b8a2-48ab-afbe-bd99ab7a8785-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-c032864d-b8a2-48ab-afbe-bd99ab7a8785-map-cowell.png"
      },
      "sessionSlug": "conquer-hard-security-decisions-early",
      "sessionTitle": "Conquer Hard Security Decisions Early",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "DRqS38cYB9"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "otQcBdpbwS"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T14:00:00.000Z"
      },
      "tags": [
        "Security",
        "Design"
      ],
      "updatedAt": "2015-03-17T01:18:08.348Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:44:30.964Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/the-next-level-building-complex-apps-on-parse",
      "hasDetails": true,
      "objectId": "gVXrA2Kpms",
      "sessionDescription": "For those who have already built an app on Parse — time to take it to the next level. We'll dive into advanced functionality, under-the-hood product insights, and how to build complex apps on Parse.",
      "sessionLocation": "Cowell C",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-e8869848-aef5-4fb4-84d5-74072592c955-map-cowell.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-e8869848-aef5-4fb4-84d5-74072592c955-map-cowell.png"
      },
      "sessionSlug": "the-next-level-building-complex-apps-on-parse",
      "sessionTitle": "The Next Level: Building Complex Apps on Parse",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "EsdzMccQml"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "axsdinEprV"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T14:30:00.000Z"
      },
      "tags": [
        "Parse"
      ],
      "updatedAt": "2015-03-17T01:27:38.014Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-23T07:11:53.802Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:00:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/messenger-reinventing-everyday-communication",
      "hasDetails": true,
      "objectId": "8T1tdGiAdA",
      "sessionDescription": "Learn more about building apps that integrate with Messenger, so that people can communicate in fun and creative ways with GIFs, photos, videos, audio clips and more.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-3c5bac9f-8074-43a6-94a5-c34445faa1e2-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-3c5bac9f-8074-43a6-94a5-c34445faa1e2-map-herbst-a.png"
      },
      "sessionSlug": "messenger-reinventing-everyday-communication",
      "sessionTitle": "Messenger Platform: Drive Installs and Engagement through Conversation",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "BPZfj7S9hj"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "OnuH0UNGvM"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "4Ksw9tDAUA"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T15:00:00.000Z"
      },
      "tags": [
        "Design",
        "Building Tools"
      ],
      "updatedAt": "2015-03-25T18:07:07.323Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T18:36:59.384Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T16:00:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/news-publishing-on-facebook",
      "hasDetails": true,
      "objectId": "simKJLifS8",
      "sessionDescription": "Discover who consumes news on Facebook, what they're reading and watching, and what new products will help you grow, engage, and connect with audiences. ",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-f5d6aa1e-0348-4d07-8fbf-701ee0d60fc9-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f5d6aa1e-0348-4d07-8fbf-701ee0d60fc9-map-hacker-x.png"
      },
      "sessionSlug": "news-publishing-on-facebook",
      "sessionTitle": "News and Media Publishing on Facebook",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "eTBzkCeYi4"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "EZeIGs7hb6"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T15:00:00.000Z"
      },
      "tags": [
        "Media & Publishing"
      ],
      "updatedAt": "2015-03-25T18:05:40.082Z"
    }, {
      "allDay": false,
      "createdAt": "2015-01-07T19:47:17.308Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/designing-social-experiences-that-work",
      "hasDetails": true,
      "objectId": "gVTbGLRgma",
      "sessionDescription": "Get quick insights and bright ideas on how to build better content and create amazing social experiences that keep people in mind.",
      "sessionLocation": "Herbst B",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-56b78256-a31a-45de-a838-08b4d034d3a1-map-herbst-b.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-56b78256-a31a-45de-a838-08b4d034d3a1-map-herbst-b.png"
      },
      "sessionSlug": "designing-social-experiences-that-work",
      "sessionTitle": "UX Lightning Talks: Content Strategy and Social Experiences",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "SerNAFbwyU"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:30:00.000Z"
      },
      "tags": [
        "Building Tools",
        "Design",
        "Media & Publishing",
        "Commerce"
      ],
      "updatedAt": "2015-04-01T18:51:49.517Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": true,
      "createdAt": "2015-01-07T19:56:32.780Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T18:00:00.000Z"
      },
      "hasDetails": true,
      "objectId": "nrc3jVudCz",
      "sessionSlug": "the-garage-day-1",
      "sessionTitle": "The Garage",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T11:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-17T00:44:44.295Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": false,
      "createdAt": "2015-01-07T18:21:13.275Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:00:00.000Z"
      },
      "hasDetails": false,
      "objectId": "Uf6JV556K7",
      "onMySchedule": true,
      "sessionSlug": "lunch-day-1",
      "sessionTitle": "Lunch",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T11:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-02-17T19:55:21.475Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": false,
      "createdAt": "2015-01-07T00:28:47.291Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T11:00:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/opening-keynote",
      "hasDetails": false,
      "objectId": "mmJsYnfWUI",
      "onMySchedule": true,
      "sessionDescription": "",
      "sessionSlug": "opening-keynote",
      "sessionTitle": "Opening Keynote",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T10:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-02-19T18:08:34.159Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": true,
      "createdAt": "2015-01-07T19:55:07.163Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T18:00:00.000Z"
      },
      "hasDetails": true,
      "objectId": "0c64eMc99x",
      "sessionSlug": "lab-simulations-day-1",
      "sessionTitle": "Demos",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T11:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-17T00:44:50.715Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": true,
      "createdAt": "2015-01-07T19:57:31.062Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T18:00:00.000Z"
      },
      "hasDetails": true,
      "objectId": "yWalDhSE60",
      "sessionSlug": "the-garage-day-2",
      "sessionTitle": "The Garage",
      "speakers": [],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T11:00:00.000Z"
      },
      "tags": [],
      "updatedAt": "2015-03-17T00:56:03.138Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": false,
      "createdAt": "2015-01-07T18:22:45.006Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/building-for-the-next-billion",
      "hasDetails": true,
      "objectId": "se0IGozJbY",
      "sessionDescription": "Hear about how Facebook is working with developers to bring their services to billions of people coming online for the first time.",
      "sessionLocation": "Herbst A",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-265ab534-513d-445d-8f4e-823b00ebce27-map-herbst-a.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-265ab534-513d-445d-8f4e-823b00ebce27-map-herbst-a.png"
      },
      "sessionSlug": "building-for-the-next-billion",
      "sessionTitle": "Building for the Next Billion",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "wyILTouWtU"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "y3r5K7ClU6"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T12:00:00.000Z"
      },
      "tags": [
        "Building Tools",
        "Games",
        "Media & Publishing",
        "Commerce",
        "Parse",
        "Growth & Ads"
      ],
      "updatedAt": "2015-03-17T01:18:22.353Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": false,
      "createdAt": "2015-01-07T18:27:30.568Z",
      "day": 1,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:45:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/whats-new-with-facebook-video",
      "hasDetails": true,
      "objectId": "YErZIOmzv0",
      "sessionDescription": "Learn about the video ecosystem on Facebook and improvements to our product, including updates to the Video API and our Embedded Video Player.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-f7286b0f-459b-4786-8afd-f5b7b8c5021a-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-f7286b0f-459b-4786-8afd-f5b7b8c5021a-map-hacker-x.png"
      },
      "sessionSlug": "whats-new-with-facebook-video",
      "sessionTitle": "What's New with Facebook Video",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "cX2iRaX09x"
      }, {
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "UOM2zgHXTb"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-25T13:00:00.000Z"
      },
      "tags": [
        "Media & Publishing"
      ],
      "updatedAt": "2015-03-25T18:06:04.824Z"
    }, {
      "ACL": {
        "*": {
          "read": true
        }
      },
      "allDay": false,
      "createdAt": "2015-01-23T07:21:21.739Z",
      "day": 2,
      "endTime": {
        "__type": "Date",
        "iso": "2015-03-26T16:15:00.000Z"
      },
      "fullURL": "https://fbf8.com/schedule.html#session/grow-your-app-with-mobile-app-ads",
      "hasDetails": true,
      "objectId": "r0297mX2HU",
      "sessionDescription": "Get the latest updates and tips for growing your business with mobile app ads.",
      "sessionLocation": "Hacker X",
      "sessionMap": {
        "__type": "File",
        "name": "tfss-8bbfb452-4308-46a8-99fb-9b0a0340bf60-map-hacker-x.png",
        "url": "http://files.parsetfss.com/f7603d1c-2488-44ad-a1ff-1767f3a61473/tfss-8bbfb452-4308-46a8-99fb-9b0a0340bf60-map-hacker-x.png"
      },
      "sessionSlug": "grow-your-app-with-mobile-app-ads",
      "sessionTitle": "Grow Your App With Mobile App Ads",
      "speakers": [{
        "__type": "Pointer",
        "className": "Speakers",
        "objectId": "7cvKgKvSAj"
      }],
      "startTime": {
        "__type": "Date",
        "iso": "2015-03-26T15:30:00.000Z"
      },
      "tags": [
        "Growth & Ads",
        "Games",
        "Commerce"
      ],
      "updatedAt": "2015-03-25T18:02:18.558Z"
    }]
  })
})


module.exports = router;

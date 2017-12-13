'use strict';

const fetch = require("node-fetch");
const xml2js = require("xml2js");
const parser = new xml2js.Parser({explicitArray : false});

exports.handler = (event, context, callback) => {

    let serviceKey = process.env.SERVICEKEY;
    let active = process.env.ACTIVE_FLAG;

    if (!active) {
        callback(null, address);
    } else {
        let address = event;
        let body = `<AddressValidateRequest USERID="${serviceKey}"><Address ID="0"><Address1>${address.Street1}</Address1> <Address2>${address.Street2}</Address2><City>${address.City}</City><State>${address.Region}</State> <Zip5>${address.PostalCode}</Zip5><Zip4></Zip4></Address></AddressValidateRequest>`;
        fetch('http://production.shippingapis.com/ShippingAPITest.dll?API=Verify&XML=' + body, {
            method: 'GET',
        })
            .then((response) => {
                if (response.ok) {
                    return response;
                }
                return Promise.reject(new Error(
                    `Failed to fetch ${response.url}: ${response.status} ${response.statusText}`));
            })
            .then(response => response.text())
            .then((text) => {
                    parser.parseString(text, function (err, result) {
                        let resultAddress = JSON.stringify(result);
                        let rAddress = JSON.parse(resultAddress).AddressValidateResponse.Address;
                        address.Street1 = rAddress.Address2;
                        address.Street2 = rAddress.Address1;
                        address.City = rAddress.City;
                        address.Region = rAddress.State;
                        address.PostalCode = rAddress.Zip5 + "-" + rAddress.Zip4;

                        callback(err, address);
                    });
                }
            );
    }
};
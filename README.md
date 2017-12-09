Welcome to the US Address Validation lambda Function
==============================================

This is a lambda function that wraps a call to the US postal Services address validation

You will need a User ID from the US POSTAL Service populated in the env.json file before you can run this.

If you have sam-local installed you run test locally with

sam local invoke USAddressValidation --env-vars test/env.json -e test/event.json 


Example input:
```json

{
  "Address": {
    "Street1": "75 W CENTER ST",
    "Street2": null,
    "City": "PROVO",
    "District": null,
    "Region": "UTAH",
    "PostalCode": "84601",
    "CountryCode": "US"
  }
}

```

Example Output:

```json
   {
    "Address":{
      "Street1":"200 W CENTER ST",
      "Street2":"NULL",
      "City":"PROVO",
      "District":null,
      "Region":"UT",
      "PostalCode":"84601-4432",
      "CountryCode":"US" 
    }
   }
```


Welcome to the AWS CodeStar sample web service
==============================================

Run test locally with

sam local invoke USAddressValidation --env-vars env.json -e event.json 



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
      "Street1":"75 W CENTER ST",
      "Street2":"NULL",
      "City":"PROVO",
      "District":null,
      "Region":"UT",
      "PostalCode":"84601-4432",
      "CountryCode":"US" 
    }
   }
```


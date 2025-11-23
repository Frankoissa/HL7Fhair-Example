/* Hausarztresorce 
* create Arzt 
* Main Endoint =  https://hapi.fhir.org/baseR4/Patient/{id} GET
* Main Endoint =  https://hapi.fhir.org/baseR4/Patient POST + Body in JSON 
*
*
*/
let patient =
{
    "id": "46161799",
    "resourceType": "Patient",
    "address": [{
        "city": "Hamburg",
        "postalCode": "20095",
        "country": "DE"

    }],
    "gender": "male",
    "birthDate": [2000, 3, 15],
    "active": true,
    "name": [{
        "family": "Beispiel",
        "given": ["Alex"]
    }],
    "identifier": [{
        "value": "A12345"
    }]
}
